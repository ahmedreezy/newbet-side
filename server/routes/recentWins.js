const express = require('express')
const path    = require('path')
const fs      = require('fs')
const multer  = require('multer')
const router  = express.Router()
const db      = require('../db')

const UPLOADS_DIR = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, `${Date.now()}_${safeName}`)
  }
})

const fileFilter = (_req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  cb(null, allowed.includes(file.mimetype))
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

// GET all wins ordered by createdAt DESC
router.get('/', (req, res) => {
  const data = db.read()
  const wins = [...data.recent_wins].sort((a, b) => b.createdAt - a.createdAt)
  res.json(wins)
})

// POST a new win (with optional image)
router.post('/', upload.single('image'), (req, res) => {
  const { betType, date, staked, returned, odds, memberName } = req.body
  if (!betType || !date || !staked || !returned || !odds) {
    return res.status(400).json({ error: 'betType, date, staked, returned, odds are required' })
  }
  const data     = db.read()
  const id       = Date.now()
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''
  const win = {
    id,
    betType, date, staked, returned, odds,
    memberName: memberName ?? '',
    imageUrl,
    createdAt: id
  }
  data.recent_wins.push(win)
  db.write(data)
  res.status(201).json(win)
})

// DELETE a win by id (also deletes the associated image file)
router.delete('/:id', (req, res) => {
  const id   = Number(req.params.id)
  const data = db.read()
  const idx  = data.recent_wins.findIndex(w => w.id === id)
  if (idx === -1) return res.status(404).json({ error: 'Win not found' })

  const win = data.recent_wins[idx]
  if (win.imageUrl) {
    const filePath = path.join(UPLOADS_DIR, path.basename(win.imageUrl))
    try { fs.unlinkSync(filePath) } catch { /* file already gone */ }
  }

  data.recent_wins.splice(idx, 1)
  db.write(data)
  res.json({ success: true })
})

module.exports = router
