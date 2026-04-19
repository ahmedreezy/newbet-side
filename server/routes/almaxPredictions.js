const express = require('express')
const router  = express.Router()
const db      = require('../db')

// GET all predictions ordered by createdAt ASC
router.get('/', (req, res) => {
  const data = db.read()
  const preds = [...(data.almax_predictions || [])].sort((a, b) => a.createdAt - b.createdAt)
  res.json(preds)
})

// POST a new prediction
router.post('/', (req, res) => {
  const { home, away, competition, kickoff, tip, odds, result } = req.body
  if (!home || !away || !competition || !kickoff || !tip) {
    return res.status(400).json({ error: 'home, away, competition, kickoff, tip are required' })
  }
  const data = db.read()
  if (!Array.isArray(data.almax_predictions)) data.almax_predictions = []
  const id = Date.now()
  const prediction = {
    id,
    home, away, competition, kickoff,
    tip,
    odds: odds ?? '',
    result: result ?? 'pending',
    createdAt: id
  }
  data.almax_predictions.push(prediction)
  db.write(data)
  res.status(201).json(prediction)
})

// PATCH a prediction result
router.patch('/:id', (req, res) => {
  const id   = Number(req.params.id)
  const data = db.read()
  if (!Array.isArray(data.almax_predictions)) return res.status(404).json({ error: 'Not found' })
  const pred = data.almax_predictions.find(p => p.id === id)
  if (!pred) return res.status(404).json({ error: 'Prediction not found' })
  const allowed = ['home', 'away', 'competition', 'kickoff', 'tip', 'odds', 'result']
  allowed.forEach(k => { if (req.body[k] !== undefined) pred[k] = req.body[k] })
  db.write(data)
  res.json(pred)
})

// DELETE a prediction by id
router.delete('/:id', (req, res) => {
  const id   = Number(req.params.id)
  const data = db.read()
  if (!Array.isArray(data.almax_predictions)) return res.status(404).json({ error: 'Not found' })
  const idx  = data.almax_predictions.findIndex(p => p.id === id)
  if (idx === -1) return res.status(404).json({ error: 'Prediction not found' })
  data.almax_predictions.splice(idx, 1)
  db.write(data)
  res.json({ success: true })
})

module.exports = router
