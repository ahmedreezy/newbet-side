const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

function rowToUser(row) {
  return {
    id:        row.id,
    username:  row.username,
    dob:       row.dob,
    email:     row.email,
    phone:     row.phone,
    createdAt: row.created_at ? new Date(row.created_at).getTime() : null
  }
}

function rowToSub(row) {
  return {
    id:        row.id,
    planType:  row.plan_type,
    status:    row.status,
    expiresAt: row.expires_at ? new Date(row.expires_at).getTime() : null,
    startedAt: row.started_at ? new Date(row.started_at).getTime() : null,
    createdAt: row.created_at ? new Date(row.created_at).getTime() : null
  }
}

// GET all users with subscription info (admin)
router.get('/', auth, async (req, res) => {
  try {
    const { rows: users } = await pool.query('SELECT * FROM users ORDER BY created_at DESC')
    if (users.length === 0) return res.json([])

    const ids = users.map(u => u.id)
    const { rows: subs } = await pool.query(
      'SELECT * FROM subscriptions WHERE user_id = ANY($1) ORDER BY created_at DESC',
      [ids]
    )

    const enriched = users.map(u => {
      const userSubs = subs.filter(s => s.user_id === u.id)
      const activeSub  = userSubs.find(s => s.status === 'active')  || null
      const pendingSub = userSubs.find(s => s.status === 'pending') || null
      return {
        ...rowToUser(u),
        activeSub:  activeSub  ? rowToSub(activeSub)  : null,
        pendingSub: pendingSub ? rowToSub(pendingSub) : null
      }
    })
    res.json(enriched)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST register a new user (public)
router.post('/', async (req, res) => {
  const { username, dob, email, phone } = req.body
  if (!username || !dob || !email || !phone) {
    return res.status(400).json({ error: 'username, dob, email, and phone are required' })
  }
  try {
    const { rows } = await pool.query(`
      INSERT INTO users (username, dob, email, phone)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [username, dob, email, phone])
    res.status(201).json(rowToUser(rows[0]))
  } catch (err) {
    if (err.code === '23505') {
      // Unique violation — phone already registered
      const existing = await pool.query('SELECT * FROM users WHERE phone = $1', [phone])
      return res.status(409).json({ error: 'Phone number already registered', user: rowToUser(existing.rows[0]) })
    }
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET user by phone (public — returning users)
router.get('/by-phone/:phone', async (req, res) => {
  try {
    const { rows: users } = await pool.query(
      'SELECT * FROM users WHERE phone = $1',
      [req.params.phone]
    )
    if (users.length === 0) return res.status(404).json({ error: 'User not found' })
    const user = users[0]
    const { rows: subs } = await pool.query(
      'SELECT * FROM subscriptions WHERE user_id = $1 ORDER BY created_at DESC',
      [user.id]
    )
    res.json({ ...rowToUser(user), subscriptions: subs.map(rowToSub) })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE a user (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id])
    if (rowCount === 0) return res.status(404).json({ error: 'User not found' })
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
