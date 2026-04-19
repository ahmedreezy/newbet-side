require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const footballTipsRouter = require('./routes/footballTips')
const recentWinsRouter   = require('./routes/recentWins')
const configRouter       = require('./routes/config')
const livescoresRouter   = require('./routes/livescores')
const almaxPredictionsRouter = require('./routes/almaxPredictions')

const app = express()
const PORT = 3001

const ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:3000',
  // Add your production domain here, e.g. 'https://almax.football'
  process.env.ALLOWED_ORIGIN
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (same-origin, mobile apps, curl)
    if (!origin || ALLOWED_ORIGINS.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve uploaded images as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// API routes
app.use('/api/football-tips', footballTipsRouter)
app.use('/api/recent-wins',   recentWinsRouter)
app.use('/api/config',        configRouter)
app.use('/api/livescores',    livescoresRouter)
app.use('/api/almax-predictions', almaxPredictionsRouter)

app.listen(PORT, () => {
  console.log(`Local API server running at http://localhost:${PORT}`)
  if (!process.env.SCORES_API_KEY) {
    console.warn('⚠  SCORES_API_KEY is not set — live scores will be disabled. Add it to your .env file.')
  } else {
    console.log('✓  SCORES_API_KEY loaded — live scores proxy active.')
  }
})
