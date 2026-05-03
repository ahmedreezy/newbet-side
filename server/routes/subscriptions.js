const express  = require('express')
const path     = require('path')
const fs       = require('fs')
const multer   = require('multer')
const bcrypt   = require('bcryptjs')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

const UPLOADS_DIR = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename:    (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, `proof_${Date.now()}_${safe}`)
  }
})
const fileFilter = (_req, file, cb) => {
  cb(null, ['image/jpeg', 'image/png'].includes(file.mimetype))
}
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

function rowToSub(row, isAdmin = false) {
  const sub = {
    id:              row.id,
    userId:          row.user_id,
    planType:        row.plan_type,
    oddsType:        row.odds_type || '2',
    paymentMethod:   row.payment_method,
    phone:           row.phone,
    amount:          parseFloat(row.amount),
    status:          row.status,
    proofUrl:        row.proof_url   || '',
    rejectionReason: row.rejection_reason || '',
    startedAt:       row.started_at  ? new Date(row.started_at).getTime()  : null,
    expiresAt:       row.expires_at  ? new Date(row.expires_at).getTime()  : null,
    createdAt:       row.created_at  ? new Date(row.created_at).getTime()  : null,
    userName:        row.user_name   || null,
    userPhone:       row.user_phone  || null,
    user:            row.user_name   ? { username: row.user_name, phone: row.user_phone } : null
  }
  // Betslip link/code only exposed when subscription is active (or to admin)
  if (isAdmin || row.status === 'active') {
    sub.betslipLink = row.betslip_link || ''
    sub.betslipCode = row.betslip_code || ''
  } else {
    sub.betslipLink = ''
    sub.betslipCode = ''
  }
  return sub
}

// GET all subscriptions (admin)
router.get('/', auth, async (req, res) => {
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    const { rows } = await pool.query(`
      SELECT s.*, u.username AS user_name, u.phone AS user_phone
      FROM subscriptions s
      LEFT JOIN users u ON u.id = s.user_id
      ORDER BY s.created_at DESC
    `)
    res.json(rows.map(r => rowToSub(r, true)))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET subscriptions for a specific user (public — user checks own status)
router.get('/user/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10)
  if (isNaN(userId)) return res.status(400).json({ error: 'Invalid userId' })
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    const { rows } = await pool.query(`
      SELECT s.*, u.username AS user_name, u.phone AS user_phone
      FROM subscriptions s
      LEFT JOIN users u ON u.id = s.user_id
      WHERE s.user_id = $1
      ORDER BY s.created_at DESC
    `, [userId])
    // User-facing: betslip only returned for active subs
    res.json(rows.map(r => rowToSub(r, false)))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST create a subscription request with optional proof image
router.post('/', upload.single('proof'), async (req, res) => {
  const { userId, planType, paymentMethod, phone, secretCode, oddsType } = req.body
  const cleanup = () => { if (req.file) try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {} }

  if (!userId || !planType || !paymentMethod) {
    cleanup(); return res.status(400).json({ error: 'userId, planType, and paymentMethod are required' })
  }
  if (!['daily', 'weekly'].includes(planType)) {
    cleanup(); return res.status(400).json({ error: 'planType must be daily or weekly' })
  }
  if (!['mtn', 'airtel'].includes(paymentMethod)) {
    cleanup(); return res.status(400).json({ error: 'paymentMethod must be mtn or airtel' })
  }

  // Validate oddsType + planType combination
  const VALID_COMBOS = { '1.5': ['weekly'], '2': ['daily', 'weekly'], '5': ['daily', 'weekly'] }
  const resolvedOdds = oddsType || '2'
  if (!VALID_COMBOS[resolvedOdds] || !VALID_COMBOS[resolvedOdds].includes(planType)) {
    cleanup(); return res.status(400).json({ error: `Invalid combination: ${resolvedOdds} odds is not available for ${planType} plan` })
  }

  const PRICE_DEFAULTS = {
    'odds_1_5_weekly_price': 45000,
    'odds_2_daily_price':    10000,
    'odds_2_weekly_price':   45000,
    'odds_5_daily_price':    15000,
    'odds_5_weekly_price':   55000
  }
  const oddsKey = `odds_${resolvedOdds.replace('.', '_')}_${planType}_price`

  try {
    const { rows: cfgRows } = await pool.query(
      `SELECT key, value FROM vip_config WHERE key = $1`, [oddsKey]
    )
    const cfg    = Object.fromEntries(cfgRows.map(r => [r.key, r.value]))
    const amount = parseFloat(cfg[oddsKey] || PRICE_DEFAULTS[oddsKey] || 10000)
    const proofUrl = req.file ? `/uploads/${req.file.filename}` : null

    // Hash the secret code if provided
    const secretCodeHash = secretCode ? await bcrypt.hash(secretCode, 10) : ''

    const { rows: [sub] } = await pool.query(`
      INSERT INTO subscriptions (user_id, plan_type, odds_type, payment_method, phone, amount, status, proof_url, secret_code_hash)
      VALUES ($1, $2, $3, $4, $5, $6, 'pending', $7, $8)
      RETURNING *
    `, [parseInt(userId), planType, resolvedOdds, paymentMethod, phone || '', amount, proofUrl, secretCodeHash])

    const { rows: [payment] } = await pool.query(`
      INSERT INTO payments (subscription_id, user_id, amount, plan_type, payment_method, phone, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'pending')
      RETURNING *
    `, [sub.id, parseInt(userId), amount, planType, paymentMethod, phone || ''])

    res.status(201).json({ subscription: rowToSub(sub, false), payment })
  } catch (err) {
    cleanup()
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST /verify-access — verify phone + secret code pair; both must match the same subscription
// Body: { phone, secretCode }
router.post('/verify-access', async (req, res) => {
  const { phone, secretCode } = req.body
  if (!phone) return res.status(400).json({ error: 'phone is required' })
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    // Look up the user by phone, then their active subscription — all server-side
    const { rows: userRows } = await pool.query(`SELECT id FROM users WHERE phone = $1`, [phone])
    if (userRows.length === 0) return res.status(403).json({ error: 'Phone number or secret code is incorrect' })
    const userId = userRows[0].id

    const { rows } = await pool.query(`
      SELECT s.*, u.username AS user_name, u.phone AS user_phone
      FROM subscriptions s
      LEFT JOIN users u ON u.id = s.user_id
      WHERE s.user_id = $1 AND s.status = 'active'
      ORDER BY s.created_at DESC
      LIMIT 1
    `, [userId])

    if (rows.length === 0) return res.status(404).json({ error: 'No active subscription found' })
    const sub = rows[0]

    // Both phone and secret code must match — reject if either is wrong
    if (sub.secret_code_hash) {
      if (!secretCode) return res.status(403).json({ error: 'Secret code required' })
      const valid = await bcrypt.compare(secretCode, sub.secret_code_hash)
      if (!valid) return res.status(403).json({ error: 'Phone number or secret code is incorrect' })
    }

    res.json(rowToSub(sub, false))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST upload / replace proof image while subscription is pending
router.post('/:id/proof',upload.single('proof'), async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (!req.file) return res.status(400).json({ error: 'No proof image uploaded' })
  try {
    const { rows } = await pool.query('SELECT * FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) {
      fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename))
      return res.status(404).json({ error: 'Subscription not found' })
    }
    if (rows[0].status !== 'pending') {
      fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename))
      return res.status(400).json({ error: 'Proof can only be uploaded for pending subscriptions' })
    }
    if (rows[0].proof_url) {
      try { fs.unlinkSync(path.join(UPLOADS_DIR, path.basename(rows[0].proof_url))) } catch {}
    }
    const proofUrl = `/uploads/${req.file.filename}`
    const { rows: [updated] } = await pool.query(
      'UPDATE subscriptions SET proof_url = $1 WHERE id = $2 RETURNING *',
      [proofUrl, id]
    )
    res.json(rowToSub(updated, false))
  } catch (err) {
    try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {}
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH update a subscription (admin: confirm / reject / cancel)
router.patch('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const { status, betslipLink, betslipCode, rejectionReason } = req.body
  try {
    const { rows } = await pool.query('SELECT * FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    const sub = rows[0]

    if (status === 'active' && !sub.started_at) {
      // Activating: set started_at, expires_at, copy per-package betslip if not provided
      const oddsKey    = (sub.odds_type || '2').replace('.', '_')
      const tierLinkKey = `odds_${oddsKey}_${sub.plan_type}_betslip_link`
      const tierCodeKey = `odds_${oddsKey}_${sub.plan_type}_betslip_code`
      const { rows: cfgRows } = await pool.query(
        `SELECT key, value FROM vip_config WHERE key IN ('current_betslip_link','current_betslip_code',$1,$2)`,
        [tierLinkKey, tierCodeKey]
      )
      const cfg = Object.fromEntries(cfgRows.map(r => [r.key, r.value]))
      // Prefer tier-specific, fall back to generic default
      const defaultLink = cfg[tierLinkKey] || cfg.current_betslip_link || ''
      const defaultCode = cfg[tierCodeKey] || cfg.current_betslip_code || ''
      const finalLink = (betslipLink !== undefined && betslipLink !== '') ? betslipLink : defaultLink
      const finalCode = (betslipCode !== undefined && betslipCode !== '') ? betslipCode : defaultCode
      const interval  = sub.plan_type === 'daily' ? '24 hours' : '7 days'

      const { rows: [updated] } = await pool.query(`
        UPDATE subscriptions SET
          status       = 'active',
          betslip_link = $1,
          betslip_code = $2,
          started_at   = NOW(),
          expires_at   = NOW() + $3::interval
        WHERE id = $4
        RETURNING *
      `, [finalLink, finalCode, interval, id])

      await pool.query(
        `UPDATE payments SET status = 'confirmed' WHERE subscription_id = $1`,
        [id]
      )
      return res.json(rowToSub(updated, true))
    }

    // Generic field update
    const sets = []; const vals = []; let i = 1
    if (status            !== undefined) { sets.push(`status = $${i++}`);           vals.push(status) }
    if (betslipLink       !== undefined) { sets.push(`betslip_link = $${i++}`);      vals.push(betslipLink) }
    if (betslipCode       !== undefined) { sets.push(`betslip_code = $${i++}`);      vals.push(betslipCode) }
    if (rejectionReason   !== undefined) { sets.push(`rejection_reason = $${i++}`);  vals.push(rejectionReason) }
    if (sets.length === 0) return res.status(400).json({ error: 'No fields to update' })

    vals.push(id)
    const { rows: [updated] } = await pool.query(
      `UPDATE subscriptions SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`,
      vals
    )
    res.json(rowToSub(updated, true))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST renew a subscription (admin) — extend expiry +24h (daily) or +7d (weekly)
router.post('/:id/renew', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    const { rows } = await pool.query('SELECT * FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    const sub = rows[0]
    const interval = sub.plan_type === 'daily' ? '24 hours' : '7 days'
    // If expired, extend from now; if active, extend from current expires_at
    const baseTime = sub.status === 'expired' ? 'NOW()' : 'GREATEST(expires_at, NOW())'
    const { rows: [updated] } = await pool.query(`
      UPDATE subscriptions SET
        status     = 'active',
        expires_at = ${baseTime} + $1::interval
      WHERE id = $2
      RETURNING *
    `, [interval, id])
    res.json(rowToSub(updated, true))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE a subscription (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rows } = await pool.query('SELECT proof_url FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    if (rows[0].proof_url) {
      try { fs.unlinkSync(path.join(UPLOADS_DIR, path.basename(rows[0].proof_url))) } catch {}
    }
    await pool.query('DELETE FROM subscriptions WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
