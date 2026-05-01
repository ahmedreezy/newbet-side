/**
 * persistence.js
 *
 * Saves all pg-mem table data to a local JSON file on shutdown,
 * and restores it on startup. This gives data durability without
 * needing a real PostgreSQL install.
 *
 * Only active when DATABASE_URL is NOT set (in-memory mode).
 */

const fs   = require('fs')
const path = require('path')

const SNAPSHOT_FILE = path.join(__dirname, 'data', 'db-snapshot.json')

// Tables to persist, in insertion order (respects FK dependencies)
const TABLES = [
  'admin_users',
  'users',
  'subscriptions',
  'payments',
  'football_tips',
  'almax_predictions',
  'recent_wins',
  'testimonials',
  'vip_config',
  'status_checks',
  'free_odd2',
]

async function saveSnapshot(pool) {
  const snapshot = {}
  try {
    for (const table of TABLES) {
      try {
        const { rows } = await pool.query(`SELECT * FROM ${table}`)
        snapshot[table] = rows
      } catch {
        // table may not exist yet (fresh run) — skip
      }
    }
    fs.mkdirSync(path.dirname(SNAPSHOT_FILE), { recursive: true })
    fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(snapshot, null, 2), 'utf8')
    console.log(`✓  Data snapshot saved (${Object.values(snapshot).reduce((a,r)=>a+r.length,0)} rows)`)
  } catch (err) {
    console.error('⚠  Failed to save snapshot:', err.message)
  }
}

async function restoreSnapshot(pool) {
  if (!fs.existsSync(SNAPSHOT_FILE)) return
  let snapshot
  try {
    snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'))
  } catch (err) {
    console.error('⚠  Snapshot file corrupted — starting fresh:', err.message)
    return
  }

  let totalRows = 0
  for (const table of TABLES) {
    const rows = snapshot[table]
    if (!rows || rows.length === 0) continue
    try {
      for (const row of rows) {
        const cols = Object.keys(row)
        const vals = Object.values(row)
        const placeholders = vals.map((_, i) => `$${i + 1}`)
        await pool.query(
          `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${placeholders.join(', ')}) ON CONFLICT DO NOTHING`,
          vals
        )
        totalRows++
      }
    } catch (err) {
      console.error(`⚠  Could not restore table "${table}":`, err.message)
    }
  }

  // Re-sync sequences so new inserts don't conflict with restored ids
  const seqTables = ['admin_users','users','subscriptions','payments','football_tips',
                     'almax_predictions','recent_wins','testimonials','status_checks']
  for (const table of seqTables) {
    try {
      await pool.query(`SELECT setval(pg_get_serial_sequence('${table}','id'), COALESCE(MAX(id),0)+1, false) FROM ${table}`)
    } catch { /* pg-mem may not support setval — safe to ignore */ }
  }

  console.log(`✓  Snapshot restored (${totalRows} rows across ${TABLES.length} tables)`)
}

function registerShutdownHook(pool, intervalMs = 2 * 60 * 1000) {
  // Periodic auto-save every 2 minutes
  const timer = setInterval(() => saveSnapshot(pool), intervalMs)
  timer.unref() // don't keep process alive just for this

  const shutdown = async (signal) => {
    console.log(`\n[${signal}] Saving data snapshot before exit…`)
    await saveSnapshot(pool)
    process.exit(0)
  }

  process.on('SIGINT',  () => shutdown('SIGINT'))
  process.on('SIGTERM', () => shutdown('SIGTERM'))
  process.on('SIGUSR2', () => shutdown('SIGUSR2')) // nodemon restart
}

module.exports = { saveSnapshot, restoreSnapshot, registerShutdownHook }
