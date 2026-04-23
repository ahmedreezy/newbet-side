const express  = require('express')
const path     = require('path')
const fs       = require('fs')
const multer   = require('multer')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

const UPLOADS_DIR = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true })

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename:    (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, `testimonial_${Date.now()}_${safe}`)
  }
})
const fileFilter = (_req, file, cb) => {
  cb(null, ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.mimetype))
}
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

function rowToT(row) {
  return {
    id:         row.id,
    caption:    row.caption,
    memberName: row.member_name,
    imageUrl:   row.image_url,
    createdAt:  row.created_at ? new Date(row.created_at).getTime() : null
  }
}

// GET all testimonials (public)
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC')
    res.json(rows.map(rowToT))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST add a testimonial (admin)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''
    const { rows: [t] } = await pool.query(`
      INSERT INTO testimonials (caption, member_name, image_url)
      VALUES ($1,$2,$3)
      RETURNING *
    `, [req.body.caption || '', req.body.memberName || '', imageUrl])
    res.status(201).json(rowToT(t))
  } catch (err) {
    if (req.file) try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {}
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PUT update a testimonial (admin)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rows } = await pool.query('SELECT * FROM testimonials WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Testimonial not found' })

    const sets = []; const vals = []; let i = 1
    if (req.body.caption    !== undefined) { sets.push(`caption = $${i++}`);     vals.push(req.body.caption) }
    if (req.body.memberName !== undefined) { sets.push(`member_name = $${i++}`); vals.push(req.body.memberName) }
    if (req.file) {
      if (rows[0].image_url) try { fs.unlinkSync(path.join(UPLOADS_DIR, path.basename(rows[0].image_url))) } catch {}
      sets.push(`image_url = $${i++}`)
      vals.push(`/uploads/${req.file.filename}`)
    }
    if (sets.length === 0) return res.status(400).json({ error: 'No fields to update' })
    vals.push(id)
    const { rows: [updated] } = await pool.query(
      `UPDATE testimonials SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`,
      vals
    )
    res.json(rowToT(updated))
  } catch (err) {
    if (req.file) try { fs.unlinkSync(path.join(UPLOADS_DIR, req.file.filename)) } catch {}
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE a testimonial (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rows } = await pool.query('SELECT image_url FROM testimonials WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Testimonial not found' })
    if (rows[0].image_url) try { fs.unlinkSync(path.join(UPLOADS_DIR, path.basename(rows[0].image_url))) } catch {}
    await pool.query('DELETE FROM testimonials WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
