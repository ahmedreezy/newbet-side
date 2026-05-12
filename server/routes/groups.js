const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

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
    res.json(visible.map(g => ({
      id:           g.id,
      name:         g.name,
      oddsType:     g.odds_type,
      planType:     g.plan_type,
      price:        parseFloat(g.price),
      betslipLink:  g.betslip_link  || '',
      betslipCode:  g.betslip_code  || '',
      isSpecial:    g.is_special    || false,
      isActive:     g.is_active     !== false,
      specialPrice: g.special_price != null ? parseFloat(g.special_price) : null
    })))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET all groups including hidden special ones (admin only)
router.get('/admin', auth, async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM groups ORDER BY price ASC')
    res.json(rows.map(g => ({
      id:           g.id,
      name:         g.name,
      oddsType:     g.odds_type,
      planType:     g.plan_type,
      price:        parseFloat(g.price),
      betslipLink:  g.betslip_link  || '',
      betslipCode:  g.betslip_code  || '',
      isSpecial:    g.is_special    || false,
      isActive:     g.is_active     !== false,
      specialPrice: g.special_price != null ? parseFloat(g.special_price) : null
    })))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH update a group (admin)
router.patch('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })

  const { name, price, betslipLink, betslipCode, isActive, specialPrice } = req.body
  const sets = []; const vals = []; let i = 1
  if (name         !== undefined) { sets.push(`name = $${i++}`);          vals.push(name) }
  if (price        !== undefined) { sets.push(`price = $${i++}`);         vals.push(parseFloat(price)) }
  if (betslipLink  !== undefined) { sets.push(`betslip_link = $${i++}`);  vals.push(betslipLink) }
  if (betslipCode  !== undefined) { sets.push(`betslip_code = $${i++}`);  vals.push(betslipCode) }
  if (isActive     !== undefined) { sets.push(`is_active = $${i++}`);     vals.push(Boolean(isActive)) }
  if (specialPrice !== undefined) { sets.push(`special_price = $${i++}`); vals.push(specialPrice !== null && specialPrice !== '' ? parseFloat(specialPrice) : null) }
  sets.push(`updated_at = NOW()`)

  if (sets.length === 1) return res.status(400).json({ error: 'No fields to update' })

  try {
    vals.push(id)
    const { rows } = await pool.query(
      `UPDATE groups SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`, vals
    )
    if (rows.length === 0) return res.status(404).json({ error: 'Group not found' })
    const g = rows[0]
    res.json({
      id:           g.id,
      name:         g.name,
      oddsType:     g.odds_type,
      planType:     g.plan_type,
      price:        parseFloat(g.price),
      betslipLink:  g.betslip_link  || '',
      betslipCode:  g.betslip_code  || '',
      isSpecial:    g.is_special    || false,
      isActive:     g.is_active     !== false,
      specialPrice: g.special_price != null ? parseFloat(g.special_price) : null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
