<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="close-btn" @click="$emit('close')" aria-label="Close">✕</button>
      <div class="modal-badge">⚡ TODAY'S SPECIAL</div>
      <h2 class="modal-title">FREE ODD 2 OF THE DAY</h2>

      <div class="odd-card">
        <div class="match">
          <span class="team">Team A</span>
          <span class="vs">VS</span>
          <span class="team">Team B</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">PICK</span>
          <span class="detail-value">Over 2.5 Goals</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">ODD</span>
          <span class="odd-number">2.00</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">TIME</span>
          <span class="detail-value">20:45</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">COMPETITION</span>
          <span class="detail-value">Premier League</span>
        </div>
      </div>

      <p class="modal-sub">Join our VIP group for full daily predictions</p>
      <button class="cta-btn" @click="$emit('close')">View Full Tips →</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroModal',
  emits: ['close']
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
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
</style>
