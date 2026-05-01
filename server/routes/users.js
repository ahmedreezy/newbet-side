const express  = require('express')
const bcrypt   = require('bcryptjs')
const jwt      = require('jsonwebtoken')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

function rowToUser(row) {
  return {
    id:        row.id,
    username:  row.username,
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
  const { username, phone, password } = req.body
  if (!username || !phone || !password) {
    return res.status(400).json({ error: 'username, phone, and password are required' })
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' })
  }
  try {
    const passwordHash = await bcrypt.hash(password, 12)
    const { rows } = await pool.query(`
      INSERT INTO users (username, phone, password_hash)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [username, phone, passwordHash])
    const user = rowToUser(rows[0])
    const token = jwt.sign(
      { id: user.id, username: user.username, role: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    )
    res.status(201).json({ ...user, token })
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Phone number already registered' })
    }
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST login (public)
router.post('/login', async (req, res) => {
  const { phone, password } = req.body
  if (!phone || !password) {
    return res.status(400).json({ error: 'phone and password are required' })
  }
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE phone = $1', [phone])
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Phone number not found' })
    }
    const user = rows[0]
    if (!user.password_hash) {
      return res.status(401).json({ error: 'Account has no password set. Please register again.' })
    }
    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      return res.status(401).json({ error: 'Incorrect password' })
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, role: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    )
    res.json({ ...rowToUser(user), token })
  } catch (err) {
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
