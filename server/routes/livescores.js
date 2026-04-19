const express = require('express')
const router  = express.Router()
const https   = require('https')

// API key is kept server-side so it is never exposed to the browser.
// Set SCORES_API_KEY in your .env file before starting the server.
const API_KEY = process.env.SCORES_API_KEY || ''
const API_HOST = 'v3.football.api-sports.io'

// GET /api/livescores  — proxy to api-sports.io /fixtures
// Accepts any query params and forwards them straight to the upstream API.
router.get('/', (req, res) => {
  if (!API_KEY) {
    return res.status(503).json({ errors: ['SCORES_API_KEY is not set. Add it to your .env file.'] })
  }
  const qs = new URLSearchParams(req.query).toString()
  const path = `/fixtures${qs ? '?' + qs : ''}`

  const options = {
    hostname: API_HOST,
    path,
    method: 'GET',
    timeout: 10000,
    headers: {
      'x-apisports-key': API_KEY
    }
  }

  const request = https.request(options, (upstream) => {
    let raw = ''
    upstream.setEncoding('utf8')
    upstream.on('data', chunk => { raw += chunk })
    upstream.on('end', () => {
      res.status(upstream.statusCode)
         .set('Content-Type', 'application/json')
         .send(raw)
    })
  })

  request.on('timeout', () => {
    request.destroy()
    if (!res.headersSent) {
      res.status(504).json({ errors: ['Upstream API timed out'] })
    }
  })

  request.on('error', (err) => {
    if (err.code === 'ECONNRESET' || err.message === 'socket hang up') return // destroyed by timeout handler
    console.error(`LiveScores proxy error [${err.code || 'ERR'}]: ${err.message}`)
    if (!res.headersSent) {
      res.status(502).json({ errors: ['Upstream API unavailable'] })
    }
  })

  request.end()
})

module.exports = router
