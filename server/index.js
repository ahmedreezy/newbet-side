require('dotenv').config()
const app  = require('./app')
const PORT = 3001

// Start server (auto-init DB when using in-memory mode)
async function start() {
  if (!process.env.DATABASE_URL) {
    try {
      const { migrate } = require('./migrate')
      const { seed }    = require('./seed')
      await migrate()
      await seed()
    } catch (err) {
      console.error('⚠ DB init warning:', err.message)
    }
  }

  app.listen(PORT, () => {
    console.log(`Local API server running at http://localhost:${PORT}`)
    if (!process.env.SCORES_API_KEY) {
      console.warn('⚠  SCORES_API_KEY is not set — live scores will be disabled. Add it to your .env file.')
    } else {
      console.log('✓  SCORES_API_KEY loaded — live scores proxy active.')
    }
    // Hourly auto-cleanup: delete users whose subscriptions have all expired/rejected
    // and whose last subscription expired more than 0 minutes ago
    const { pool: dbPool } = require('./db')
    setInterval(async () => {
      try {
        const result = await dbPool.query(`
          DELETE FROM users
          WHERE id IN (
            SELECT u.id FROM users u
            WHERE NOT EXISTS (
              SELECT 1 FROM subscriptions s
              WHERE s.user_id = u.id
              AND s.status IN ('pending','active')
            )
            AND EXISTS (
              SELECT 1 FROM subscriptions s
              WHERE s.user_id = u.id
            )
            AND (
              SELECT MAX(s.expires_at) FROM subscriptions s WHERE s.user_id = u.id
            ) < NOW()
          )
        `)
        if (result.rowCount > 0) {
          console.log(`[cleanup] Removed ${result.rowCount} expired user(s) from the system.`)
        }
      } catch (err) {
        console.error('[cleanup] Error during auto-cleanup:', err.message)
      }
    }, 60 * 60 * 1000) // run every 60 minutes
  })
}

start().catch(err => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
