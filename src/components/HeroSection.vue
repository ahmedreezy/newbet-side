<template>
  <section class="hero">
    <!-- Animated floating background icons -->
    <div class="bg-icons" aria-hidden="true">
      <span
        v-for="icon in bgIcons"
        :key="icon.id"
        class="bg-icon"
        :style="icon.style"
      >{{ icon.char }}</span>
    </div>

    <!-- Main content -->
    <div class="hero-content">
      <div class="hero-badge">🏆 #1 FREE BETTING TIPS</div>
      <h1 class="hero-title">
        WIN <span class="gold-text">BIG</span><br />
        WITH EXPERT <span class="gold-text">PREDICTIONS</span>
      </h1>
      <p class="hero-sub">
        Daily free tips, live scores &amp; VIP winnings — all in one place.
      </p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">94%</span>
          <span class="stat-label">Win Rate</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">12K+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">Daily</span>
          <span class="stat-label">Free Tips</span>
        </div>
      </div>
    </div>

    <!-- Floating tip preview cards -->
    <div class="float-cards">
      <div class="float-card fc1">⚽ Over 2.5 <span>@1.85</span></div>
      <div class="float-card fc2">🎰 Both Teams Score <span>@1.70</span></div>
      <div class="float-card fc3">💰 Home Win <span>@2.10</span></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      bgIcons: [
        { id: 1,  char: '⚽', style: { top: '10%',  left: '5%',   animationDelay: '0s',    fontSize: '40px' } },
        { id: 2,  char: '🏆', style: { top: '20%',  left: '80%',  animationDelay: '1s',    fontSize: '35px' } },
        { id: 3,  char: '💰', style: { top: '60%',  left: '10%',  animationDelay: '2s',    fontSize: '30px' } },
        { id: 4,  char: '🎰', style: { top: '75%',  left: '85%',  animationDelay: '0.5s',  fontSize: '38px' } },
        { id: 5,  char: '₿',  style: { top: '40%',  left: '90%',  animationDelay: '1.5s',  fontSize: '32px', color: '#F7931A' } },
        { id: 6,  char: '🃏', style: { top: '85%',  left: '30%',  animationDelay: '2.5s',  fontSize: '36px' } },
        { id: 7,  char: '🏅', style: { top: '15%',  left: '50%',  animationDelay: '3s',    fontSize: '28px' } },
        { id: 8,  char: '💎', style: { top: '50%',  left: '3%',   animationDelay: '1.2s',  fontSize: '34px' } },
        { id: 9,  char: '🎯', style: { top: '30%',  left: '70%',  animationDelay: '0.8s',  fontSize: '30px' } },
        { id: 10, char: '🤑', style: { top: '70%',  left: '60%',  animationDelay: '2.2s',  fontSize: '38px' } },
        { id: 11, char: '🏟', style: { top: '5%',   left: '35%',  animationDelay: '1.7s',  fontSize: '32px' } },
        { id: 12, char: '💵', style: { top: '90%',  left: '70%',  animationDelay: '0.3s',  fontSize: '28px' } },
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: radial-gradient(ellipse at center, #1a1200 0%, #0a0a0a 70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 100px 20px 180px;
  text-align: center;
}

/* Background floating icons */
.bg-icons { position: absolute; inset: 0; pointer-events: none; }
.bg-icon {
  position: absolute;
  opacity: 0.22;
  animation: floatIcon 6s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.3));
}
@keyframes floatIcon {
  0%, 100% { transform: translateY(0)    rotate(0deg); }
  50%       { transform: translateY(-22px) rotate(8deg); }
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}
.hero-badge {
  display: inline-block;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 20px;
  letter-spacing: 2px;
  margin-bottom: 28px;
}
.hero-title {
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 900;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 22px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}
.gold-text {
  color: var(--gold);
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
}
.hero-sub {
  font-size: 17px;
  color: var(--text-muted);
  margin-bottom: 44px;
  line-height: 1.7;
}

/* Stats row */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-num {
  font-size: 30px;
  font-weight: 900;
  color: var(--gold);
}
.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}
.stat-divider {
  width: 1px;
  height: 44px;
  background: rgba(255, 215, 0, 0.25);
}

/* Floating cards */
.float-cards {
  position: absolute;
  bottom: 48px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  z-index: 2;
  padding: 0 20px;
}
.float-card {
  background: rgba(30, 30, 30, 0.92);
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 10px;
  padding: 10px 22px;
  font-size: 13px;
  font-weight: 600;
  color: var(--cream);
  backdrop-filter: blur(6px);
  animation: floatCard 4s ease-in-out infinite;
}
.float-card span {
  color: var(--gold);
  margin-left: 6px;
  font-weight: 900;
}
.fc2 { animation-delay: 0.8s; }
.fc3 { animation-delay: 1.6s; }
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

@media (max-width: 600px) {
  .float-cards { bottom: 24px; }
  .hero-stats   { gap: 14px; }
}
</style>
