require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const authRouter             = require('./routes/auth')
const footballTipsRouter     = require('./routes/footballTips')
const recentWinsRouter       = require('./routes/recentWins')
const configRouter           = require('./routes/config')
const livescoresRouter       = require('./routes/livescores')
const almaxPredictionsRouter = require('./routes/almaxPredictions')
const usersRouter            = require('./routes/users')
const subscriptionsRouter    = require('./routes/subscriptions')
const testimonialsRouter     = require('./routes/testimonials')
const paymentsRouter         = require('./routes/payments')
const notificationsRouter    = require('./routes/notifications')

const app = express()
const PORT = 3001

const ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:3000',
  // Add your production domain here, e.g. 'https://almax.football'
  process.env.ALLOWED_ORIGIN
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (same-origin, mobile apps, curl)
    if (!origin) return callback(null, true)
    // Allow any localhost origin (any port) for development
    if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return callback(null, true)
    if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve uploaded images as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// API routes
app.use('/api/auth',              authRouter)
app.use('/api/football-tips',      footballTipsRouter)
app.use('/api/recent-wins',        recentWinsRouter)
app.use('/api/config',             configRouter)
app.use('/api/livescores',         livescoresRouter)
app.use('/api/almax-predictions',  almaxPredictionsRouter)
app.use('/api/users',              usersRouter)
app.use('/api/subscriptions',      subscriptionsRouter)
app.use('/api/testimonials',       testimonialsRouter)
app.use('/api/payments',           paymentsRouter)
app.use('/api/notifications',      notificationsRouter)

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
