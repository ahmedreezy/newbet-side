const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

function formatGroup(g) {
  return {
    id:                   g.id,
    name:                 g.name,
    oddsType:             g.odds_type,
    planType:             g.plan_type,
    price:                parseFloat(g.price),
    betslipLink:          g.betslip_link  || '',
    betslipCode:          g.betslip_code  || '',
    isSpecial:            g.is_special    || false,
    isActive:             g.is_active     !== false,
    specialPrice:         g.special_price != null ? parseFloat(g.special_price) : null,
    specialOdds:          g.special_odds  || null,
    subscriptionDeadline: g.subscription_deadline || null
  }
}

// GET all groups (public) — hides special groups that aren't active/priced today
router.get('/', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM groups ORDER BY price ASC')
    // Hide: inactive regular groups, and special groups that aren't priced today
    const visible = rows.filter(g => {
      if (!g.is_active) return false
      if (g.is_special) return g.special_price != null
      return true
    })
    res.json(visible.map(formatGroup))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET all groups including hidden special ones (admin only)
router.get('/admin', auth, async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM groups ORDER BY price ASC')
    res.json(rows.map(formatGroup))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH update a group (admin)
router.patch('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })

  const body = req.body || {}
  const name = body.name
  const price = body.price
  const betslipLink = body.betslipLink ?? body.betslip_link
  const betslipCode = body.betslipCode ?? body.betslip_code
  const isActive = body.isActive ?? body.is_active
  const isSpecial = body.isSpecial ?? body.is_special
  const specialPrice = body.specialPrice ?? body.special_price
  const specialOdds = body.specialOdds ?? body.special_odds
  const subscriptionDeadline = body.subscriptionDeadline ?? body.subscription_deadline
  const sets = []; const vals = []; let i = 1
  if (name         !== undefined) { sets.push(`name = $${i++}`);          vals.push(name) }
  if (price        !== undefined) { sets.push(`price = $${i++}`);         vals.push(parseFloat(price)) }
  if (betslipLink  !== undefined) { sets.push(`betslip_link = $${i++}`);  vals.push(betslipLink) }
  if (betslipCode  !== undefined) { sets.push(`betslip_code = $${i++}`);  vals.push(betslipCode) }
  if (isActive     !== undefined) { sets.push(`is_active = $${i++}`);     vals.push(Boolean(isActive)) }
  if (isSpecial    !== undefined) { sets.push(`is_special = $${i++}`);    vals.push(Boolean(isSpecial)) }
  if (specialPrice !== undefined) { sets.push(`special_price = $${i++}`); vals.push(specialPrice !== null && specialPrice !== '' ? parseFloat(specialPrice) : null) }
  if (specialOdds  !== undefined) { sets.push(`special_odds = $${i++}`);  vals.push(specialOdds !== null && specialOdds !== '' ? String(specialOdds) : null) }
  if (subscriptionDeadline !== undefined) { sets.push(`subscription_deadline = $${i++}`); vals.push(subscriptionDeadline || null) }
  sets.push(`updated_at = NOW()`)

  if (sets.length === 1) return res.status(400).json({ error: 'No fields to update' })

  try {
    vals.push(id)
    const { rows } = await pool.query(
      `UPDATE groups SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`, vals
    )
    if (rows.length === 0) return res.status(404).json({ error: 'Group not found' })
    res.json(formatGroup(rows[0]))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST create a new group (admin)
router.post('/', auth, async (req, res) => {
  const body = req.body || {}
  const name = body.name
  const oddsType = body.oddsType ?? body.odds_type
  const planType = body.planType ?? body.plan_type
  const price = body.price
  const betslipLink = body.betslipLink ?? body.betslip_link
  const betslipCode = body.betslipCode ?? body.betslip_code
  const isSpecial = body.isSpecial ?? body.is_special
  const isActive = body.isActive ?? body.is_active
  const specialPrice = body.specialPrice ?? body.special_price
  if (!name || !oddsType || !planType || price == null) {
    return res.status(400).json({ error: 'name, oddsType, planType, and price are required' })
  }
  try {
    const { rows } = await pool.query(`
      INSERT INTO groups (name, odds_type, plan_type, price, betslip_link, betslip_code, is_special, is_active, special_price)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *
    `, [
      name,
      oddsType,
      planType,
      parseFloat(price),
      betslipLink  || '',
      betslipCode  || '',
      Boolean(isSpecial),
      isActive !== false,
      (isSpecial && specialPrice != null && specialPrice !== '') ? parseFloat(specialPrice) : null
    ])
    res.status(201).json(formatGroup(rows[0]))
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'A package with that name already exists' })
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE a group (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    const { rows } = await pool.query('SELECT id FROM groups WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Group not found' })

    await pool.query('UPDATE subscriptions SET group_id = NULL WHERE group_id = $1', [id])
    await pool.query('DELETE FROM groups WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
