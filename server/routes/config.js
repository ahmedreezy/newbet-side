const express = require('express')
const router  = express.Router()
const db      = require('../db')

// GET the free_odd2 config
router.get('/free-odd2', (req, res) => {
  const data = db.read()
  res.json(data.free_odd2)
})

// PUT (upsert) the free_odd2 config
router.put('/free-odd2', (req, res) => {
  const { teamA, teamB, pick, odd, time, competition } = req.body
  if (!teamA || !teamB || !pick || !odd || !time || !competition) {
    return res.status(400).json({ error: 'All fields (teamA, teamB, pick, odd, time, competition) are required' })
  }
  const data = db.read()
  data.free_odd2 = { id: 1, teamA, teamB, pick, odd: String(odd), time, competition }
  db.write(data)
  res.json(data.free_odd2)
})

module.exports = router
