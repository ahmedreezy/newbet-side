const express  = require('express')
const router   = express.Router()
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

function rowToPayment(row) {
  return {
    id:             row.id,
    subscriptionId: row.subscription_id,
    userId:         row.user_id,
    amount:         parseFloat(row.amount),
    planType:       row.plan_type,
    paymentMethod:  row.payment_method,
    phone:          row.phone,
    status:         row.status,
    createdAt:      row.created_at ? new Date(row.created_at).getTime() : null,
    // Payer info (joined from users)
    userName:       row.user_name  || null,
    userPhone:      row.user_phone || null,
    userEmail:      row.user_email || null,
    // Subscription proof (joined from subscriptions)
    proofUrl:         row.proof_url        || '',
    subStatus:        row.sub_status       || null,
    rejectionReason:  row.rejection_reason || '',
    betslipLink:      row.betslip_link     || '',
    betslipCode:      row.betslip_code     || '',
    expiresAt:        row.expires_at ? new Date(row.expires_at).getTime() : null
  }
}

// GET all payments with payer info and proof (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        p.*,
        u.username   AS user_name,
        u.phone      AS user_phone,
        u.email      AS user_email,
        s.proof_url,
        s.status     AS sub_status,
        s.rejection_reason,
        s.betslip_link,
        s.betslip_code,
        s.expires_at
      FROM payments p
      LEFT JOIN users u        ON u.id = p.user_id
      LEFT JOIN subscriptions s ON s.id = p.subscription_id
      ORDER BY p.created_at DESC
    `)
    res.json(rows.map(rowToPayment))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET single payment (admin only)
router.get('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    const { rows } = await pool.query(`
      SELECT
        p.*,
        u.username   AS user_name,
        u.phone      AS user_phone,
        u.email      AS user_email,
        s.proof_url,
        s.status     AS sub_status,
        s.rejection_reason,
        s.betslip_link,
        s.betslip_code,
        s.expires_at
      FROM payments p
      LEFT JOIN users u        ON u.id = p.user_id
      LEFT JOIN subscriptions s ON s.id = p.subscription_id
      WHERE p.id = $1
    `, [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Payment not found' })
    res.json(rowToPayment(rows[0]))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
