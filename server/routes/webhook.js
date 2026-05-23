const express  = require('express')
const crypto   = require('crypto')
const { exec } = require('child_process')
const path     = require('path')
const router   = express.Router()

const APP_ROOT = path.join(__dirname, '..', '..')

// POST /webhook/github
router.post('/', express.raw({ type: 'application/json' }), (req, res) => {
  const secret = process.env.WEBHOOK_SECRET
  if (!secret) {
    console.error('[webhook] WEBHOOK_SECRET not set — refusing request')
    return res.status(500).send('Webhook secret not configured')
  }

  // Verify GitHub signature
  const sig = req.headers['x-hub-signature-256']
  if (!sig) return res.status(401).send('Missing signature')

  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(req.body)
    .digest('hex')

  const trusted = Buffer.from(expected)
  const received = Buffer.from(sig)
  if (trusted.length !== received.length || !crypto.timingSafeEqual(trusted, received)) {
    return res.status(401).send('Invalid signature')
  }

  // Parse payload
  let payload
  try { payload = JSON.parse(req.body.toString()) } catch {
    return res.status(400).send('Invalid JSON')
  }

  // Only act on pushes to main
  if (payload.ref !== 'refs/heads/main') {
    return res.status(200).send(`Ignored ref: ${payload.ref}`)
  }

  console.log(`[webhook] Push to main by ${payload.pusher?.name} — deploying…`)
  res.status(200).send('Deploying…')

  // Run deploy script (non-blocking — response already sent)
  const cmd = `cd "${APP_ROOT}" && bash deploy.sh >> deploy.log 2>&1`
  exec(cmd, { timeout: 300_000 }, (err, stdout, stderr) => {
    if (err) {
      console.error('[webhook] Deploy failed:', err.message)
    } else {
      console.log('[webhook] Deploy complete')
    }
  })
})

module.exports = router
