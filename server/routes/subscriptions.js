const express  = require('express')
const router   = express.Router()
const https    = require('https')
const http     = require('http')
const { pool } = require('../db')
const auth     = require('../middleware/authMiddleware')

// ─── Jpesa STK Push helper ────────────────────────────────────────────────────
// Jpesa's PHP sample disables SSL verification (CURLOPT_SSL_VERIFYPEER=>0).
// We replicate that using the native https module with rejectUnauthorized:false.

function httpPost (urlStr, body, headers) {
  return new Promise((resolve, reject) => {
    const url     = new URL(urlStr)
    const isHttps = url.protocol === 'https:'
    const lib     = isHttps ? https : http
    const options = {
      hostname: url.hostname,
      port:     url.port || (isHttps ? 443 : 80),
      path:     url.pathname + url.search,
      method:   'POST',
      headers:  { ...headers, 'Content-Length': Buffer.byteLength(body) },
      rejectUnauthorized: false   // mirror CURLOPT_SSL_VERIFYPEER=>0
    }
    const req = lib.request(options, (res) => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => resolve({ status: res.statusCode, text: data }))
    })
    req.on('error', reject)
    req.setTimeout(30000, () => { req.destroy(new Error('Jpesa request timed out')) })
    req.write(body)
    req.end()
  })
}

async function initiateSTKPush ({ phone, amount, reference }) {
  const apiKey      = process.env.JPESA_API_KEY || '79F36A45DE71FF4196A5C0920C5ECD7B'
  const apiUrl      = process.env.JPESA_API_URL || 'https://my.jpesa.com/api/'
  const callbackUrl = process.env.JPESA_CALLBACK_URL || 'https://www.almaxpredictions.com/api/payments/webhook'

  // Normalize phone: 07XXXXXXXX → 2567XXXXXXXX
  let mobile = phone.replace(/\D/g, '')
  if (mobile.startsWith('0'))    mobile = '256' + mobile.slice(1)
  else if (!mobile.startsWith('256')) mobile = '256' + mobile

  // Build XML exactly as Jpesa's PHP sample (single line, no extra whitespace)
  const xmlBody = `<?xml version="1.0" encoding="ISO-8859-1"?><g7bill><_key_>${apiKey}</_key_><cmd>account</cmd><action>credit</action><pt>mm</pt><mobile>${mobile}</mobile><amount>${Math.round(amount)}</amount><callback>${callbackUrl}</callback><tx>${reference}</tx><description>Almax VIP ${reference}</description></g7bill>`

  console.info(`[Jpesa] → mobile=${mobile} amount=${Math.round(amount)} ref=${reference}`)

  try {
    const { status, text } = await httpPost(apiUrl, xmlBody, { 'Content-Type': 'text/xml' })
    console.info(`[Jpesa] HTTP ${status} — ${text}`)

    let data = {}
    try { data = JSON.parse(text) } catch { data = { raw: text } }

    const isSuccess = data.code === '200' || data.code === 200 ||
                      data.status === 'success' || data.status === '200' ||
                      data.success === true
    if (isSuccess) {
      return { success: true, reference, message: 'Payment request sent to your phone.', raw: data }
    }
    console.warn('[Jpesa] Rejected:', data)
    return { success: false, reference, message: data.message || data.error || data.description || `Provider error: ${text}` }
  } catch (err) {
    console.error('[Jpesa] Error:', err.message)
    return { success: false, reference, pending: true, message: 'Could not reach payment provider. Your request has been recorded.' }
  }
}

function rowToSub (row, isAdmin = false) {
  const sub = {
    id:               row.id,
    userId:           row.user_id,
    groupId:          row.group_id    || null,
    planType:         row.plan_type,
    oddsType:         row.odds_type   || '2',
    paymentMethod:    row.payment_method,
    phone:            row.phone,
    amount:           parseFloat(row.amount),
    status:           row.status,
    paymentReference: row.payment_reference || null,
    rejectionReason:  row.rejection_reason  || '',
    startedAt:        row.started_at ? new Date(row.started_at).getTime() : null,
    expiresAt:        row.expires_at ? new Date(row.expires_at).getTime() : null,
    createdAt:        row.created_at ? new Date(row.created_at).getTime() : null,
    userName:         row.user_name  || null,
    userPhone:        row.user_phone || null,
    user:             row.user_name  ? { username: row.user_name, phone: row.user_phone } : null,
    group:            row.group_name ? { id: row.group_id, name: row.group_name, oddsType: row.group_odds_type, planType: row.group_plan_type, price: parseFloat(row.group_price || 0) } : null
  }
  if (isAdmin || row.status === 'active') {
    sub.betslipLink = row.betslip_link || ''
    sub.betslipCode = row.betslip_code || ''
  } else {
    sub.betslipLink = ''
    sub.betslipCode = ''
  }
  return sub
}

const SUB_SELECT = `
  SELECT s.*,
    u.username   AS user_name,   u.phone     AS user_phone,
    g.name       AS group_name,  g.odds_type AS group_odds_type,
    g.plan_type  AS group_plan_type, g.price AS group_price
  FROM subscriptions s
  LEFT JOIN users  u ON u.id = s.user_id
  LEFT JOIN groups g ON g.id = s.group_id
`

// GET all subscriptions (admin)
router.get('/', auth, async (req, res) => {
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    const { rows } = await pool.query(SUB_SELECT + ' ORDER BY s.created_at DESC')
    res.json(rows.map(r => rowToSub(r, true)))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET subscriptions for the signed-in user. Admin tokens may inspect any user.
router.get('/user/:userId', auth, async (req, res) => {
  const userId = parseInt(req.params.userId, 10)
  if (isNaN(userId)) return res.status(400).json({ error: 'Invalid userId' })
  if (req.admin?.role === 'user' && Number(req.admin.id) !== userId) {
    return res.status(403).json({ error: 'Forbidden' })
  }
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    const { rows } = await pool.query(SUB_SELECT + ' WHERE s.user_id = $1 ORDER BY s.created_at DESC', [userId])
    res.json(rows.map(r => rowToSub(r, false)))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// GET payment status for a single subscription (public polling)
router.get('/:id/payment-status', async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    await pool.query(`UPDATE subscriptions SET status = 'expired' WHERE status = 'active' AND expires_at < NOW()`)
    const { rows } = await pool.query(SUB_SELECT + ' WHERE s.id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    if (rows[0].status === 'pending') {
      const { rows: activeRows } = await pool.query(
        SUB_SELECT + `
          WHERE s.user_id = $1
            AND s.group_id = $2
            AND s.phone = $3
            AND s.status = 'active'
            AND (s.expires_at IS NULL OR s.expires_at > NOW())
          ORDER BY s.started_at DESC
          LIMIT 1
        `,
        [rows[0].user_id, rows[0].group_id, rows[0].phone]
      )
      if (activeRows.length > 0) {
        const activeSub = rowToSub(activeRows[0], false)
        return res.json({ status: 'active', subscription: activeSub })
      }
    }
    const sub = rowToSub(rows[0], false)
    res.json({ status: sub.status, subscription: sub })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST create a subscription and initiate STK push
// Body: { userId, groupId, paymentMethod, phone }
router.post('/', async (req, res) => {
  const { userId, groupId, paymentMethod, phone } = req.body

  if (!userId || !groupId)
    return res.status(400).json({ error: 'userId and groupId are required' })
  if (!['mtn', 'airtel'].includes(paymentMethod))
    return res.status(400).json({ error: 'paymentMethod must be mtn or airtel' })
  if (!phone)
    return res.status(400).json({ error: 'phone is required' })

  const parsedUserId  = parseInt(userId, 10)
  const parsedGroupId = parseInt(groupId, 10)

  try {
    // Validate group
    const { rows: groupRows } = await pool.query('SELECT * FROM groups WHERE id = $1', [parsedGroupId])
    if (groupRows.length === 0)
      return res.status(400).json({ error: 'Invalid groupId — group not found' })
    const group = groupRows[0]

    // Special odds: must be active with a price set for today
    if (group.is_special) {
      if (!group.is_active || !group.special_price)
        return res.status(400).json({ error: 'Special odds are not available today. Check back later.' })
    }

    // Validate user
    const { rows: userRows } = await pool.query('SELECT id FROM users WHERE id = $1', [parsedUserId])
    if (userRows.length === 0)
      return res.status(400).json({ error: 'User not found' })

    // Use special_price when applicable
    const effectiveAmount = (group.is_special && group.special_price)
      ? parseFloat(group.special_price)
      : parseFloat(group.price)

    const reference = `ALX-${parsedGroupId}-${parsedUserId}-${Date.now()}`

    // Insert pending records before the STK push. Jpesa can call back immediately,
    // and the callback needs a saved reference/transaction id to match.
    const { rows: [sub] } = await pool.query(`
      INSERT INTO subscriptions
        (user_id, group_id, plan_type, odds_type, payment_method, phone, amount, status, payment_reference)
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending', $8)
      RETURNING *
    `, [parsedUserId, parsedGroupId, group.plan_type, group.odds_type, paymentMethod, phone, effectiveAmount, reference])

    // Insert payment record
    const { rows: [payment] } = await pool.query(`
      INSERT INTO payments
        (subscription_id, user_id, amount, plan_type, payment_method, phone, status, payment_reference, transaction_id)
      VALUES ($1, $2, $3, $4, $5, $6, 'pending', $7, $8)
      RETURNING *
    `, [sub.id, parsedUserId, effectiveAmount, group.plan_type, paymentMethod, phone, reference, reference])

    const pushResult = await initiateSTKPush({ phone, amount: effectiveAmount, reference, paymentMethod })

    const providerTxnId = pushResult?.raw?.tid || pushResult?.raw?.transaction_id || pushResult?.raw?.txn_id || ''
    if (providerTxnId) {
      payment.transaction_id = providerTxnId
      await pool.query(
        `UPDATE payments SET transaction_id = $1 WHERE id = $2`,
        [providerTxnId, payment.id]
      )
    }

    res.status(201).json({ subscription: rowToSub(sub, false), payment, paymentReference: reference, pushResult })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// PATCH update a subscription (admin)
router.patch('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const { status, betslipLink, betslipCode, rejectionReason } = req.body
  try {
    const { rows } = await pool.query(SUB_SELECT + ' WHERE s.id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    const sub = rows[0]

    if (status === 'active') {
      const finalLink = (betslipLink !== undefined && betslipLink !== '') ? betslipLink : (sub.betslip_link || '')
      const finalCode = (betslipCode !== undefined && betslipCode !== '') ? betslipCode : (sub.betslip_code || '')
      const intervalMap = { daily: '24 hours', weekly: '7 days', monthly: '30 days', special: '24 hours' }
      const interval  = intervalMap[sub.plan_type] || '24 hours'

      const { rows: [updated] } = await pool.query(`
        UPDATE subscriptions SET
          status       = 'active',
          betslip_link = $1,
          betslip_code = $2,
          started_at   = COALESCE(started_at, NOW()),
          expires_at   = CASE WHEN started_at IS NULL THEN NOW() + $3::interval ELSE expires_at END
        WHERE id = $4
        RETURNING *
      `, [finalLink, finalCode, interval, id])

      await pool.query(`UPDATE payments SET status = 'confirmed' WHERE subscription_id = $1`, [id])
      return res.json(rowToSub(updated, true))
    }

    const sets = []; const vals = []; let i = 1
    if (status          !== undefined) { sets.push(`status = $${i++}`);           vals.push(status) }
    if (betslipLink     !== undefined) { sets.push(`betslip_link = $${i++}`);      vals.push(betslipLink) }
    if (betslipCode     !== undefined) { sets.push(`betslip_code = $${i++}`);      vals.push(betslipCode) }
    if (rejectionReason !== undefined) { sets.push(`rejection_reason = $${i++}`);  vals.push(rejectionReason) }
    if (sets.length === 0) return res.status(400).json({ error: 'No fields to update' })
    vals.push(id)
    const { rows: [updated] } = await pool.query(
      `UPDATE subscriptions SET ${sets.join(', ')} WHERE id = $${i} RETURNING *`, vals
    )
    res.json(rowToSub(updated, true))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// POST renew (admin)
router.post('/:id/renew', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
  try {
    const { rows } = await pool.query('SELECT * FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    const sub = rows[0]
    const intervalMap = { daily: '24 hours', weekly: '7 days', monthly: '30 days', special: '24 hours' }
    const interval = intervalMap[sub.plan_type] || '24 hours'
    const baseTime = sub.status === 'expired' ? 'NOW()' : 'GREATEST(expires_at, NOW())'
    const { rows: [updated] } = await pool.query(`
      UPDATE subscriptions SET status = 'active', expires_at = ${baseTime} + $1::interval
      WHERE id = $2 RETURNING *
    `, [interval, id])
    res.json(rowToSub(updated, true))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// DELETE (admin)
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const { rows } = await pool.query('SELECT id FROM subscriptions WHERE id = $1', [id])
    if (rows.length === 0) return res.status(404).json({ error: 'Subscription not found' })
    await pool.query('DELETE FROM subscriptions WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
