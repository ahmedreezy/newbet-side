require('dotenv').config()

let pool
let isInMemory = false

if (process.env.DATABASE_URL) {
  // Real PostgreSQL
  const { Pool } = require('pg')
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('sslmode=disable') ? false : undefined
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
