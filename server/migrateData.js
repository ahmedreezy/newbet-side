/**
 * One-time script: imports all data from data.json into PostgreSQL.
 * Run AFTER migrate.js and seed.js.
 * Safe to run multiple times — uses ON CONFLICT to skip duplicates.
 */
require('dotenv').config()
const fs   = require('fs')
const path = require('path')
const { pool } = require('./db')

const DATA_FILE = path.join(__dirname, 'data.json')

async function importData() {
  if (!fs.existsSync(DATA_FILE)) {
    console.log('No data.json found — nothing to import.')
    return
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    // ── Users ─────────────────────────────────────────────
    const userIdMap = {}
    for (const u of (data.users || [])) {
      const { rows } = await client.query(`
        INSERT INTO users (username, dob, email, phone, created_at)
        VALUES ($1, $2, $3, $4, to_timestamp($5 / 1000.0))
        ON CONFLICT (phone) DO UPDATE SET username = EXCLUDED.username
        RETURNING id
      `, [u.username, u.dob || '', u.email || '', u.phone, u.createdAt || Date.now()])
      userIdMap[u.id] = rows[0].id
    }
    console.log(`Users imported: ${Object.keys(userIdMap).length}`)

    // ── Subscriptions ──────────────────────────────────────
    const subIdMap = {}
    for (const s of (data.subscriptions || [])) {
      const mappedUserId = userIdMap[s.userId]
      if (!mappedUserId) continue
      const startedAt = s.startedAt ? new Date(s.startedAt).toISOString() : null
      const expiresAt = s.expiresAt ? new Date(s.expiresAt).toISOString() : null
      const { rows } = await client.query(`
        INSERT INTO subscriptions
          (user_id, plan_type, payment_method, phone, amount, status,
           betslip_link, betslip_code, started_at, expires_at, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, to_timestamp($11 / 1000.0))
        RETURNING id
      `, [
        mappedUserId, s.planType, s.paymentMethod, s.phone || '',
        s.amount || 0, s.status || 'pending',
        s.betslipLink || '', s.betslipCode || '',
        startedAt, expiresAt, s.createdAt || Date.now()
      ])
      subIdMap[s.id] = rows[0].id
    }
    console.log(`Subscriptions imported: ${Object.keys(subIdMap).length}`)

    // ── Payments ───────────────────────────────────────────
    for (const p of (data.payments || [])) {
      const mappedUserId = userIdMap[p.userId]
      if (!mappedUserId) continue
      const mappedSubId = subIdMap[p.subscriptionId] || null
      await client.query(`
        INSERT INTO payments
          (subscription_id, user_id, amount, plan_type, payment_method, phone, status, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7, to_timestamp($8 / 1000.0))
      `, [
        mappedSubId, mappedUserId, p.amount || 0,
        p.planType, p.paymentMethod, p.phone || '',
        p.status || 'pending', p.createdAt || Date.now()
      ])
    }
    console.log(`Payments imported: ${(data.payments || []).length}`)

    // ── Football tips ──────────────────────────────────────
    for (const t of (data.football_tips || [])) {
      await client.query(`
        INSERT INTO football_tips
          (home, away, competition, kickoff, win_prob, kit_color, kit_number, prediction, accent, image_url, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, to_timestamp($11 / 1000.0))
      `, [
        t.home, t.away, t.competition, t.kickoff,
        t.winProb || 75, t.kitColor || '#FFD700', t.kitNumber || '10',
        t.prediction || '', t.accent || '#FFD700', t.imageUrl || '',
        t.createdAt || Date.now()
      ])
    }
    console.log(`Football tips imported: ${(data.football_tips || []).length}`)

    // ── Almax predictions ──────────────────────────────────
    for (const p of (data.almax_predictions || [])) {
      await client.query(`
        INSERT INTO almax_predictions (home, away, competition, kickoff, tip, odds, result, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7, to_timestamp($8 / 1000.0))
      `, [p.home, p.away, p.competition, p.kickoff, p.tip, p.odds || '', p.result || 'pending', p.createdAt || Date.now()])
    }
    console.log(`Almax predictions imported: ${(data.almax_predictions || []).length}`)

    // ── Recent wins ────────────────────────────────────────
    for (const w of (data.recent_wins || [])) {
      await client.query(`
        INSERT INTO recent_wins (bet_type, date, staked, returned, odds, member_name, image_url, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7, to_timestamp($8 / 1000.0))
      `, [w.betType, w.date, w.staked, w.returned, w.odds, w.memberName || '', w.imageUrl || '', w.createdAt || Date.now()])
    }
    console.log(`Recent wins imported: ${(data.recent_wins || []).length}`)

    // ── Testimonials ───────────────────────────────────────
    for (const t of (data.testimonials || [])) {
      await client.query(`
        INSERT INTO testimonials (caption, member_name, image_url, created_at)
        VALUES ($1,$2,$3, to_timestamp($4 / 1000.0))
      `, [t.caption || '', t.memberName || '', t.imageUrl || '', t.createdAt || Date.now()])
    }
    console.log(`Testimonials imported: ${(data.testimonials || []).length}`)

    // ── VIP config ─────────────────────────────────────────
    for (const [key, value] of Object.entries(data.vip_config || {})) {
      await client.query(`
        INSERT INTO vip_config (key, value) VALUES ($1, $2)
        ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value
      `, [key, String(value)])
    }
    console.log('VIP config imported.')

    // ── Free odd2 ──────────────────────────────────────────
    if (data.free_odd2) {
      const o = data.free_odd2
      await client.query(`
        INSERT INTO free_odd2 (id, team_a, team_b, pick, odd, time, competition, image_url)
        VALUES (1, $1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE SET
          team_a = EXCLUDED.team_a, team_b = EXCLUDED.team_b,
          pick = EXCLUDED.pick, odd = EXCLUDED.odd,
          time = EXCLUDED.time, competition = EXCLUDED.competition,
          image_url = EXCLUDED.image_url
      `, [o.teamA, o.teamB, o.pick, o.odd, o.time, o.competition, o.imageUrl || ''])
    }
    console.log('Free odd2 imported.')

    await client.query('COMMIT')
    console.log('\n✅ Data import complete!')
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    client.release()
    await pool.end()
  }
}

importData().catch(err => {
  console.error('Import failed:', err.message)
  process.exit(1)
})
