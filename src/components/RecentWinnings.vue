<template>
  <section class="winnings" id="winnings">
    <div class="container">
      <div class="section-header">
        <div class="header-left">
          <h2>RECENT <span class="gold-text">WINNINGS</span></h2>
          <span class="verified-badge">✓ Admin Verified</span>
        </div>
        <p class="section-sub">Latest winning slips from our VIP members</p>
      </div>

      <div class="winnings-grid">
        <div v-for="win in winnings" :key="win.id" class="win-card">
          <!-- Card top -->
          <div class="win-header">
            <span class="win-type">{{ win.betType }}</span>
            <span class="win-date">{{ win.date }}</span>
          </div>

          <!-- Slip image placeholder (will be replaced by uploaded images) -->
          <div class="slip-placeholder">
            <div class="slip-inner">
              <span class="slip-emoji">🎫</span>
              <span class="slip-label">Winning Slip</span>
              <span class="slip-note">Image coming soon</span>
            </div>
          </div>

          <!-- Win amounts -->
          <div class="win-amounts">
            <div class="amount-block stake">
              <span class="amount-label">Staked</span>
              <span class="amount-value">{{ win.staked }}</span>
            </div>
            <div class="win-arrow">
              <span class="arrow-icon">▶</span>
            </div>
            <div class="amount-block returns">
              <span class="amount-label">Won</span>
              <span class="amount-value gold">{{ win.returned }}</span>
            </div>
          </div>

          <!-- Odds row -->
          <div class="win-footer">
            <span class="footer-label">Total Odds</span>
            <span class="footer-odds">{{ win.odds }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentWinnings',
  data() {
    return {
      winnings: [
        { id: 1, betType: 'Accumulator', date: 'Apr 14, 2026', staked: '$10', returned: '$210', odds: '21.00' },
        { id: 2, betType: 'Over 2.5',    date: 'Apr 13, 2026', staked: '$20', returned: '$38',  odds: '1.90'  },
        { id: 3, betType: 'Double',      date: 'Apr 12, 2026', staked: '$15', returned: '$72',  odds: '4.80'  },
        { id: 4, betType: 'Both Score',  date: 'Apr 11, 2026', staked: '$25', returned: '$47',  odds: '1.88'  },
        { id: 5, betType: 'Treble',      date: 'Apr 10, 2026', staked: '$10', returned: '$155', odds: '15.50' },
        { id: 6, betType: 'Accumulator', date: 'Apr 9, 2026',  staked: '$5',  returned: '$85',  odds: '17.00' }
      ]
    }
  }
}
</script>

<style scoped>
.winnings {
  padding: 80px 20px;
  background: var(--dark);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header { margin-bottom: 36px; }
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
.section-header h2 {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 1px;
}
.gold-text { color: var(--gold); }
.verified-badge {
  background: rgba(0, 200, 83, 0.12);
  color: var(--green);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(0, 200, 83, 0.25);
}
.section-sub {
  color: var(--text-muted);
  font-size: 14px;
}

/* Grid */
.winnings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* Card */
.win-card {
  background: var(--dark-card);
  border-radius: 14px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.2s, border-color 0.2s;
}
.win-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 215, 0, 0.35);
}

.win-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.win-type {
  background: rgba(255, 215, 0, 0.1);
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}
.win-date {
  font-size: 12px;
  color: var(--text-muted);
}

/* Slip placeholder */
.slip-placeholder {
  background: var(--dark-3);
  border: 2px dashed rgba(255, 215, 0, 0.18);
  border-radius: 10px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slip-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.slip-emoji { font-size: 30px; opacity: 0.45; }
.slip-label {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 600;
}
.slip-note {
  font-size: 11px;
  color: rgba(170, 170, 170, 0.5);
}

/* Amounts */
.win-amounts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.amount-block {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.amount-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
.amount-value {
  font-size: 17px;
  font-weight: 800;
  color: var(--white);
}
.amount-value.gold {
  color: var(--gold);
  font-size: 22px;
}
.win-arrow { color: var(--green); }
.arrow-icon { font-size: 16px; }

/* Footer */
.win-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.footer-label { font-size: 12px; color: var(--text-muted); }
.footer-odds {
  font-size: 15px;
  font-weight: 800;
  color: var(--gold);
}
</style>
