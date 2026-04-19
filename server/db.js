const fs   = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'data.json')

const DEFAULT_DB = {
  football_tips: [],
  almax_predictions: [],
  recent_wins: [],
  free_odd2: {
    id: 1,
    teamA: 'Team A',
    teamB: 'Team B',
    pick: 'Over 2.5 Goals',
    odd: '2.00',
    time: '20:45',
    competition: 'Premier League'
  }
}

function read() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2))
    return JSON.parse(JSON.stringify(DEFAULT_DB))
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_DB))
  }
}

function write(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2))
}

// Migrate: if old SQLite data.db exists, we simply start fresh with JSON.
// (SQLite file has no value on native-build-broken environments.)

module.exports = { read, write }


