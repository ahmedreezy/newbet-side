<template>
  <section class="live-scores" id="scores">
    <div class="section-header">
      <span class="live-dot" :class="{ 'dot-dim': !hasLive }" aria-hidden="true"></span>
      <h2>TODAY'S <span class="gold-text">MATCHES</span></h2>
      <span v-if="hasLive" class="live-badge">● LIVE</span>
      <button class="refresh-badge" @click="fetchScores" :disabled="loading">
        {{ loading ? '…' : '↻ Refresh' }}
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="state-box">
      <div class="spinner"></div>
      <span>Fetching live scores…</span>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="state-box error-box">
      <span>⚠ {{ errorMsg || 'Unable to load fixtures.' }}</span>
      <button class="retry-btn" @click="fetchScores">Try again</button>
    </div>

    <!-- Scores -->
    <div v-else class="scores-grid">
      <div
        v-for="match in displayedMatches"
        :key="match.fixture.id"
        class="match-card"
      >
        <div class="match-league">
          {{ match.league.name }} · {{ match.league.country }}
        </div>
        <div class="match-body">
          <div class="team home">
            <img
              :src="match.teams.home.logo"
              :alt="match.teams.home.name"
              class="team-logo"
              loading="lazy"
            />
            <span class="team-name">{{ match.teams.home.name }}</span>
          </div>
          <div class="score-block">
            <template v-if="match.fixture.status.short === 'NS'">
              <span class="kickoff-time">{{ formatKickoff(match.fixture.date) }}</span>
              <span class="match-status status-ns">UPCOMING</span>
            </template>
            <template v-else>
              <span class="score">
                {{ match.goals.home ?? '-' }} : {{ match.goals.away ?? '-' }}
              </span>
              <span :class="['match-status', statusClass(match.fixture.status.short)]">
                {{
                  match.fixture.status.elapsed
                    ? match.fixture.status.elapsed + "'"
                    : match.fixture.status.short
                }}
              </span>
            </template>
          </div>
          <div class="team away">
            <span class="team-name">{{ match.teams.away.name }}</span>
            <img
              :src="match.teams.away.logo"
              :alt="match.teams.away.name"
              class="team-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div v-if="!loading && displayedMatches.length === 0" class="state-box">
        <span class="empty-icon">📅</span>
        <span>No matches found for today in this competition.</span>
        <span class="empty-sub">Try the <strong>All</strong> tab or refresh later.</span>
      </div>
    </div>

    <!-- Expand / collapse -->
    <div v-if="!loading && !error && matches.length > 4" class="show-more-wrap">
      <button class="show-more-btn" @click="showAll = !showAll">
        {{ showAll ? '\u25b2 Show Less' : '\u25bc Show All ' + matches.length + ' Matches' }}
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const CACHE_TTL = 60000 // 60 seconds
let _cache = null
let _cacheTime = 0

export default {
  name: 'LiveScores',
  data() {
    return {
      matches: [],
      loading: false,
      error: false,
      errorMsg: '',
      showAll: false,
      refreshInterval: null
    }
  },
  computed: {
    displayedMatches() {
      if (this.showAll) return this.matches
      return this.matches.slice(0, 6)
    },
    hasLive() {
      return this.matches.some(m =>
        ['1H', '2H', 'ET', 'P', 'HT'].includes(m.fixture.status.short)
      )
    }
  },
  methods: {
    async fetchScores() {
      this.showAll = false
      const now = Date.now()
      if (_cache && now - _cacheTime < CACHE_TTL) {
        this.matches = _cache
        return
      }

      this.loading = true
      this.error = false
      this.errorMsg = ''

      try {
        const d = new Date()
        const today = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
        const params = {
          date: today,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }

        const { data } = await axios.get('/api/livescores', { params })

        // Sort: LIVE → upcoming by time → finished
        const liveSet = new Set(['1H', '2H', 'ET', 'P', 'HT'])
        const doneSet = new Set(['FT', 'AET', 'PEN', 'AWD', 'WO'])
        const rank = m => liveSet.has(m.fixture.status.short) ? 0
                        : doneSet.has(m.fixture.status.short) ? 2 : 1
        const sorted = (data.response || []).slice().sort((a, b) => {
          if (rank(a) !== rank(b)) return rank(a) - rank(b)
          return new Date(a.fixture.date) - new Date(b.fixture.date)
        })

        this.matches = sorted
        _cache = sorted
        _cacheTime = Date.now()

      } catch (err) {
        console.error('Fixtures API error:', err?.response?.status, err?.response?.data)
        this.errorMsg = err?.response?.data?.message || 'Unable to load fixtures.'
        this.error = true
      } finally {
        this.loading = false
      }
    },
    formatKickoff(isoDate) {
      if (!isoDate) return '--:--'
      const d = new Date(isoDate)
      const today = new Date()
      const isToday = d.toDateString() === today.toDateString()
      const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      if (isToday) return time
      return d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' · ' + time
    },
    statusClass(short) {
      if (['1H', '2H', 'ET', 'P'].includes(short)) return 'status-live'
      if (short === 'HT')                           return 'status-ht'
      if (['FT', 'AET', 'PEN'].includes(short))     return 'status-ft'
      return 'status-other'
    }
  },
  mounted() {
    this.fetchScores()
    this.refreshInterval = setInterval(() => this.fetchScores(), CACHE_TTL)
  },
  beforeUnmount() {
    clearInterval(this.refreshInterval)
  }
}
</script>

<style scoped>
.live-scores {
  padding: 80px 20px;
  background: var(--dark-2);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.section-header h2 {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 1px;
}
.gold-text { color: var(--gold); }

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  flex-shrink: 0;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.refresh-badge {
  margin-left: auto;
  font-size: 12px;
  color: var(--gold);
  border: 1px solid var(--gold-dark);
  background: none;
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s;
}
.refresh-badge:hover:not(:disabled) { background: rgba(255, 215, 0, 0.1); }
.refresh-badge:disabled { opacity: 0.5; cursor: default; }

/* Scores grid */
.scores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}
.match-card {
  background: var(--dark-card);
  border-radius: 12px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 18px;
  transition: border-color 0.2s;
}
.match-card:hover { border-color: rgba(255, 215, 0, 0.35); }

.match-league {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 14px;
}
.match-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.team {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}
.team.away { flex-direction: row-reverse; }
.team-logo { width: 28px; height: 28px; object-fit: contain; }
.team-name  { font-size: 13px; font-weight: 600; }

.score-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 80px;
}
.score {
  font-size: 22px;
  font-weight: 900;
  color: var(--gold);
}
.match-status {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 10px;
}
.status-live  { background: rgba(0,200,83,0.15);    color: var(--green); }
.status-ht    { background: rgba(255,215,0,0.15);   color: var(--gold); }
.status-ft    { background: rgba(255,255,255,0.07); color: var(--text-muted); }
.status-ns    { background: rgba(100,160,255,0.12); color: #7eb3ff; }
.status-other { background: rgba(255,255,255,0.05); color: var(--text-muted); }

/* Kick-off time display for upcoming matches */
.kickoff-time {
  font-size: 20px;
  font-weight: 900;
  color: #7eb3ff;
}

/* Live indicator dot */
.live-dot.dot-dim { background: rgba(0,200,83,0.3); box-shadow: none; animation: none; }
.live-badge {
  font-size: 11px;
  font-weight: 800;
  color: var(--green);
  background: rgba(0,200,83,0.12);
  border: 1px solid rgba(0,200,83,0.25);
  padding: 2px 9px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

/* Empty state extras */
.empty-icon { font-size: 36px; }
.empty-sub  { font-size: 12px; color: rgba(170,170,170,0.6); }

/* States */
.state-box {
  text-align: center;
  color: var(--text-muted);
  padding: 60px 20px;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.error-box { color: #ff8a80; }
.retry-btn {
  color: var(--gold);
  background: none;
  border: 1px solid var(--gold-dark);
  padding: 6px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}
.retry-btn:hover { background: rgba(255,215,0,0.08); }

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 215, 0, 0.15);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Show more / less ── */
.show-more-wrap {
  display: flex;
  justify-content: center;
  margin: 24px auto 0;
  max-width: 1200px;
}
.show-more-btn {
  background: var(--dark-card);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: var(--gold);
  padding: 10px 32px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.show-more-btn:hover { background: rgba(255, 215, 0, 0.08); border-color: var(--gold); }
</style>
