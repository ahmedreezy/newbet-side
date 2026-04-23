require('dotenv').config()

let pool

if (process.env.DATABASE_URL) {
  // Real PostgreSQL
  const { Pool } = require('pg')
  pool = new Pool({ connectionString: process.env.DATABASE_URL })
  pool.on('error', (err) => { console.error('PostgreSQL pool error:', err) })
} else {
  // No DATABASE_URL — use pg-mem (in-memory database for development)
  const { newDb } = require('pg-mem')
  const db = newDb()
  const { Pool } = db.adapters.createPg(require('pg'))
  pool = new Pool()
  console.log('⚠  DATABASE_URL not set — using in-memory database (data resets on restart)')
}

module.exports = { pool }


