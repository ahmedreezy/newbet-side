require('dotenv').config()

let pool
let isInMemory = false

if (process.env.DATABASE_URL) {
  // Real PostgreSQL
  const { Pool } = require('pg')
  const rawConnectionString = process.env.DATABASE_URL

  // Avoid IPv6 localhost (::1) auth mismatches by forcing localhost URLs to IPv4.
  let connectionString = rawConnectionString
  let sslModeFromUrl = ''
  try {
    const parsedUrl = new URL(rawConnectionString)
    sslModeFromUrl = (parsedUrl.searchParams.get('sslmode') || '').toLowerCase()
    if (parsedUrl.hostname === 'localhost') {
      parsedUrl.hostname = '127.0.0.1'
      connectionString = parsedUrl.toString()
    }
  } catch (_) {
    // Keep original value if DATABASE_URL is not URL-parseable.
  }

  const sslModeEnv = (process.env.PGSSLMODE || '').toLowerCase()
  const sslMode = sslModeEnv || sslModeFromUrl
  const sslFlag = (process.env.DB_SSL || process.env.SSL || '').toLowerCase()
  const sslForcedOn = ['1', 'true', 'yes', 'on'].includes(sslFlag)
  const sslEnabled = ['require', 'verify-ca', 'verify-full'].includes(sslMode)

  pool = new Pool({
    connectionString,
    ssl: (sslEnabled || sslForcedOn) ? { rejectUnauthorized: false } : false
  })
  pool.on('error', (err) => { console.error('PostgreSQL pool error:', err) })
} else {
  // No DATABASE_URL — use pg-mem with file-based snapshot persistence
  const { newDb } = require('pg-mem')
  const db = newDb()
  const { Pool } = db.adapters.createPg(require('pg'))
  pool = new Pool()
  isInMemory = true
  console.log('ℹ  DATABASE_URL not set — using in-memory database with snapshot persistence')
}

module.exports = { pool, isInMemory }
