const express = require('express')
const router  = express.Router()
const db      = require('../db')

// GET all tips ordered by createdAt ASC
router.get('/', (req, res) => {
  const data = db.read()
  const tips = [...data.football_tips].sort((a, b) => a.createdAt - b.createdAt)
  res.json(tips)
})

// POST a new tip
router.post('/', (req, res) => {
  const { home, away, competition, kickoff, winProb, kitColor, kitNumber, prediction, accent } = req.body
  if (!home || !away || !competition || !kickoff) {
    return res.status(400).json({ error: 'home, away, competition, kickoff are required' })
  }
  const data = db.read()
  const id   = Date.now()
  const tip  = {
    id,
    home, away, competition, kickoff,
    winProb:    winProb    ?? 75,
    kitColor:   kitColor   ?? '#FFD700',
    kitNumber:  kitNumber  ?? '10',
    prediction: prediction ?? '',
    accent:     accent     ?? kitColor ?? '#FFD700',
    createdAt: id
  }
  data.football_tips.push(tip)
  db.write(data)
  res.status(201).json(tip)
})

// DELETE a tip by id
router.delete('/:id', (req, res) => {
  const id   = Number(req.params.id)
  const data = db.read()
  const idx  = data.football_tips.findIndex(t => t.id === id)
  if (idx === -1) return res.status(404).json({ error: 'Tip not found' })
  data.football_tips.splice(idx, 1)
  db.write(data)
  res.json({ success: true })
})

module.exports = router
