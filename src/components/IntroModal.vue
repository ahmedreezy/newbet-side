<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="close-btn" @click="$emit('close')" aria-label="Close">✕</button>
      <div class="modal-badge">⚡ TODAY'S SPECIAL</div>
      <h2 class="modal-title">FREE DAILY TIP</h2>

      <div v-if="fetchLoading" class="odd-card loading-card">
        <div class="loading-dots"><span></span><span></span><span></span></div>
      </div>
      <div v-else class="odd-card">
        <!-- Image if available -->
        <div v-if="odd.imageUrl" class="tip-image-wrap">
          <img :src="odd.imageUrl" alt="Free daily tip" class="tip-image" />
        </div>
        <div class="match">
          <span class="team">{{ odd.teamA }}</span>
          <span class="vs">VS</span>
          <span class="team">{{ odd.teamB }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">PICK</span>
          <span class="detail-value">{{ odd.pick }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">ODD</span>
          <span class="odd-number">{{ odd.odd }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">TIME</span>
          <span class="detail-value">{{ odd.time }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">COMPETITION</span>
          <span class="detail-value">{{ odd.competition }}</span>
        </div>
      </div>

      <p class="modal-sub">Join our VIP group for full daily predictions</p>
      <button class="cta-btn" @click="$emit('close')">View Full Tips →</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const DEFAULT = {
  teamA: 'Team A', teamB: 'Team B',
  pick: 'Over 2.5 Goals', odd: '2.00',
  time: '20:45', competition: 'Premier League',
  imageUrl: ''
}

export default {
  name: 'IntroModal',
  emits: ['close'],
  data() {
    return {
      odd: { ...DEFAULT },
      fetchLoading: true
    }
  },
  async mounted() {
    await this.fetchOdd()
    this._pollInterval = setInterval(this.fetchOdd, 30000)
  },
  beforeUnmount() {
    clearInterval(this._pollInterval)
  },
  methods: {
    async fetchOdd() {
      try {
        const { data } = await axios.get('/api/config/free-odd2')
        if (data) this.odd = { ...DEFAULT, ...data }
      } catch {
        // Server not reachable — keep defaults
      } finally {
        this.fetchLoading = false
      }
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.modal {
  background: var(--dark-card);
  border: 1px solid var(--gold-dark);
  border-radius: 18px;
  padding: 44px 38px;
  max-width: 460px;
  width: 92%;
  text-align: center;
  position: relative;
  box-shadow: 0 0 60px rgba(255, 215, 0, 0.15);
  animation: slideUp 0.3s ease;
  max-height: 90vh;
  overflow-y: auto;
}
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.close-btn {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1;
}
.close-btn:hover { color: var(--gold); }

.modal-badge {
  display: inline-block;
  background: var(--gold);
  color: var(--dark);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 16px;
  border-radius: 20px;
  letter-spacing: 1.5px;
  margin-bottom: 14px;
}
.modal-title {
  font-size: 26px;
  font-weight: 900;
  color: var(--gold);
  letter-spacing: 1px;
  margin-bottom: 24px;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}
.tip-image-wrap {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
}
.tip-image {
  width: 100%;
  display: block;
  max-height: 220px;
  object-fit: cover;
}
.odd-card {
  background: var(--dark-3);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  text-align: left;
}
.match {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.team {
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
}
.vs {
  color: var(--gold);
  font-weight: 900;
  font-size: 12px;
  background: rgba(255, 215, 0, 0.1);
  padding: 3px 8px;
  border-radius: 4px;
}
.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.detail-row:last-child { border-bottom: none; }
.detail-label {
  color: var(--text-muted);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.detail-value {
  color: var(--cream);
  font-weight: 600;
  font-size: 14px;
}
.odd-number {
  color: var(--gold);
  font-size: 24px;
  font-weight: 900;
  text-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
}
.modal-sub {
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 20px;
}
.cta-btn {
  background: linear-gradient(135deg, var(--gold-dark), var(--gold));
  color: var(--dark);
  border: none;
  border-radius: 8px;
  padding: 13px 36px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 0.5px;
  width: 100%;
  transition: opacity 0.2s, transform 0.1s;
}
.cta-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.loading-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}
.loading-dots { display: flex; gap: 8px; }
.loading-dots span {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--gold);
  opacity: 0.5;
  animation: dotPulse 1.2s ease-in-out infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
  40%            { transform: scale(1.2); opacity: 1;   }
}
</style>
