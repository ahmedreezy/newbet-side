const express  = require('express')
const path     = require('path')
const fs       = require('fs')
const multer   = require('multer')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

const UPLOADS_DIR = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename:    (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, `freetip_${Date.now()}_${safe}`)
  }
})
const fileFilter = (_req, file, cb) => {
  cb(null, ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.mimetype))
}
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

async function getVipConfig(client) {
  const { rows } = await (client || pool).query('SELECT key, value FROM vip_config')
  const cfg = Object.fromEntries(rows.map(r => [r.key, r.value]))
  // Parse numeric price fields
  const priceKeys = [
    'daily_price', 'weekly_price',
    'odds_1_5_weekly_price',
    'odds_2_daily_price', 'odds_2_weekly_price',
    'odds_5_daily_price', 'odds_5_weekly_price'
  ]
  for (const k of priceKeys) { if (cfg[k]) cfg[k] = parseFloat(cfg[k]) }
  return cfg
}

// GET the free_odd2 config (public)
router.get('/free-odd2', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM free_odd2 WHERE id = 1')
    if (rows.length === 0) return res.json({})
    const r = rows[0]
    res.json({ teamA: r.team_a, teamB: r.team_b, pick: r.pick, odd: r.odd, time: r.time, competition: r.competition, imageUrl: r.image_url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PUT free_odd2 config (admin)
router.put('/free-odd2', auth, upload.single('image'), async (req, res) => {
  const { teamA, teamB, pick, odd, time, competition } = req.body
  if (!teamA || !teamB || !pick || !odd || !time || !competition) {
    if (req.file) try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {}
    return res.status(400).json({ error: 'All fields (teamA, teamB, pick, odd, time, competition) are required' })
  }
  try {
    const { rows: existing } = await pool.query('SELECT image_url FROM free_odd2 WHERE id = 1')
    let imageUrl = existing.length > 0 ? (existing[0].image_url || '') : ''
    if (req.file) {
      if (imageUrl) try { fs.unlinkSync(path.join(UPLOADS_DIR, path.basename(imageUrl))) } catch {}
      imageUrl = `/uploads/${req.file.filename}`
    }
    await pool.query(`
      INSERT INTO free_odd2 (id, team_a, team_b, pick, odd, time, competition, image_url, updated_at)
      VALUES (1, $1,$2,$3,$4,$5,$6,$7, NOW())
      ON CONFLICT (id) DO UPDATE SET
        team_a = EXCLUDED.team_a, team_b = EXCLUDED.team_b,
        pick = EXCLUDED.pick, odd = EXCLUDED.odd,
        time = EXCLUDED.time, competition = EXCLUDED.competition,
        image_url = EXCLUDED.image_url, updated_at = NOW()
    `, [teamA, teamB, pick, String(odd), time, competition, imageUrl])
    res.json({ teamA, teamB, pick, odd: String(odd), time, competition, imageUrl })
  } catch (err) {
    if (req.file) try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {}
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET VIP config (public)
router.get('/vip-config', async (req, res) => {
  try {
    res.json(await getVipConfig())
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PUT VIP config (admin)
router.put('/vip-config', auth, async (req, res) => {
  const allowed = [
    'daily_price', 'weekly_price', 'currency',
    'mtn_number', 'airtel_number', 'whatsapp_link',
    'current_betslip_link', 'current_betslip_code',
    'daily_betslip_link', 'daily_betslip_code',
    'weekly_betslip_link', 'weekly_betslip_code',
    'ad_video_url',
    // Per-package prices
    'odds_1_5_weekly_price',
    'odds_2_daily_price', 'odds_2_weekly_price',
    'odds_5_daily_price', 'odds_5_weekly_price',
    // Per-package betslip links/codes
    'odds_1_5_weekly_betslip_link', 'odds_1_5_weekly_betslip_code',
    'odds_2_daily_betslip_link',    'odds_2_daily_betslip_code',
    'odds_2_weekly_betslip_link',   'odds_2_weekly_betslip_code',
    'odds_5_daily_betslip_link',    'odds_5_daily_betslip_code',
    'odds_5_weekly_betslip_link',   'odds_5_weekly_betslip_code'
  ]
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        await client.query(`
          INSERT INTO vip_config (key, value) VALUES ($1, $2)
          ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value
        `, [key, String(req.body[key])])
      }
    }
    await client.query('COMMIT')
    res.json(await getVipConfig())
  } catch (err) {
    await client.query('ROLLBACK')
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  } finally {
    client.release()
  }
})

module.exports = router
