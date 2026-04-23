const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

function rowToPred(row) {
  return {
    id:          row.id,
    home:        row.home,
    away:        row.away,
    competition: row.competition,
    kickoff:     row.kickoff,
    tip:         row.tip,
    odds:        row.odds,
    result:      row.result,
    createdAt:   row.created_at ? new Date(row.created_at).getTime() : null
  }
}

// GET all predictions (public)
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM almax_predictions ORDER BY created_at ASC')
    res.json(rows.map(rowToPred))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST new prediction (admin)
router.post('/', auth, async (req, res) => {
  const { home, away, competition, kickoff, tip, odds, result } = req.body
  if (!home || !away || !competition || !kickoff || !tip) {
    return res.status(400).json({ error: 'home, away, competition, kickoff, tip are required' })
  }
  try {
    const { rows: [pred] } = await pool.query(`
      INSERT INTO almax_predictions (home, away, competition, kickoff, tip, odds, result)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *
    `, [home, away, competition, kickoff, tip, odds || '', result || 'pending'])
    res.status(201).json(rowToPred(pred))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH update a prediction (admin)
router.patch('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const allowed = ['home', 'away', 'competition', 'kickoff', 'tip', 'odds', 'result']
  const sets = []; const vals = []; let i = 1
  for (const k of allowed) {
    if (req.body[k] !== undefined) { sets.push(`${k} = $${i++}`); vals.push(req.body[k]) }
  }
  if (sets.length === 0) return res.status(400).json({ error: 'No fields to update' })
  vals.push(id)
  try {
    const { rows } = await pool.query(
      `UPDATE almax_predictions SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`,
      vals
    )
    if (rows.length === 0) return res.status(404).json({ error: 'Prediction not found' })
    res.json(rowToPred(rows[0]))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE a prediction (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rowCount } = await pool.query('DELETE FROM almax_predictions WHERE id = $1', [id])
    if (rowCount === 0) return res.status(404).json({ error: 'Prediction not found' })
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
