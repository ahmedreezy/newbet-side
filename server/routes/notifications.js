const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

// POST /api/notifications/status-check (public)
// Called by frontend silently when a user checks their subscription status
router.post('/status-check', async (req, res) => {
  const { userId, phone, username, planType, subStatus } = req.body
  if (!phone) return res.status(400).json({ error: 'phone is required' })
  try {
    await pool.query(`
      INSERT INTO status_checks (user_id, phone, username, plan_type, sub_status)
      VALUES ($1, $2, $3, $4, $5)
    `, [userId || null, phone || '', username || '', planType || null, subStatus || 'unknown'])
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET /api/notifications (admin) — unread status checks with linked subscription info
router.get('/', auth, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        sc.*,
        s.id          AS subscription_id,
        s.status      AS subscription_status,
        s.plan_type   AS subscription_plan
      FROM status_checks sc
      LEFT JOIN subscriptions s
        ON s.user_id = sc.user_id
        AND s.status IN ('pending','active')
        AND s.created_at = (
          SELECT MAX(s2.created_at) FROM subscriptions s2
          WHERE s2.user_id = sc.user_id
        )
      ORDER BY sc.created_at DESC
      LIMIT 50
    `)
    res.json(rows.map(r => ({
      id:                 r.id,
      userId:             r.user_id,
      phone:              r.phone,
      username:           r.username,
      planType:           r.plan_type,
      subStatus:          r.sub_status,
      isRead:             r.is_read,
      createdAt:          r.created_at ? new Date(r.created_at).getTime() : null,
      subscriptionId:     r.subscription_id || null,
      subscriptionStatus: r.subscription_status || null,
      subscriptionPlan:   r.subscription_plan || null
    })))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET /api/notifications/unread-count (admin) — fast count for bell badge
router.get('/unread-count', auth, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT COUNT(*) AS count FROM status_checks WHERE is_read = false')
    res.json({ count: parseInt(rows[0].count, 10) })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH /api/notifications/:id/read (admin) — mark one as read
router.patch('/:id/read', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    await pool.query('UPDATE status_checks SET is_read = true WHERE id = $1', [id])
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH /api/notifications/read-all (admin) — mark all as read
router.patch('/read-all', auth, async (req, res) => {
  try {
    await pool.query('UPDATE status_checks SET is_read = true')
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
