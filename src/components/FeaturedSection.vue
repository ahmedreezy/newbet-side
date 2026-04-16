<template>
  <section class="featured" id="featured">

    <!-- ── FOOTBALL CARTOON DECORATIONS ── -->
    <div class="fb-decos" aria-hidden="true">
      <span v-for="d in decos" :key="d.id" class="fb-deco" :style="d.style">{{ d.char }}</span>
    </div>

    <!-- ── PITCH RIBBON ── -->
    <div class="pitch-ribbon" aria-hidden="true">
      <svg class="pitch-svg" viewBox="0 0 1200 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <!-- pitch fill -->
        <rect width="1200" height="90" fill="#1a4a1a"/>
        <!-- center line -->
        <line x1="600" y1="0" x2="600" y2="90" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
        <!-- center circle -->
        <circle cx="600" cy="45" r="30" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
        <circle cx="600" cy="45" r="3" fill="rgba(255,255,255,0.5)"/>
        <!-- left penalty arc -->
        <rect x="0" y="15" width="80" height="60" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        <rect x="0" y="28" width="30" height="34" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <!-- right penalty arc -->
        <rect x="1120" y="15" width="80" height="60" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        <rect x="1170" y="28" width="30" height="34" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <!-- corner arcs -->
        <path d="M0,0 Q12,0 12,12" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <path d="M1200,0 Q1188,0 1188,12" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <path d="M0,90 Q12,90 12,78" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <path d="M1200,90 Q1188,90 1188,78" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
        <!-- stripe overlay for grass effect -->
        <rect x="0"   y="0" width="200" height="90" fill="rgba(0,0,0,0.08)"/>
        <rect x="400" y="0" width="200" height="90" fill="rgba(0,0,0,0.08)"/>
        <rect x="800" y="0" width="200" height="90" fill="rgba(0,0,0,0.08)"/>
      </svg>
      <div class="pitch-ribbon-label">
        <svg class="ball-cartoon" viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" fill="#fff" stroke="#ccc" stroke-width="1"/>
          <polygon points="20,3 24,11 16,11" fill="#222"/>
          <polygon points="33,13 29,21 37,21" fill="#222"/>
          <polygon points="28,30 20,26 24,34" fill="#222"/>
          <polygon points="12,30 16,34 8,26" fill="#222"/>
          <polygon points="7,13 3,21 11,21" fill="#222"/>
          <polygon points="20,3 33,13 28,30 12,30 7,13" fill="none" stroke="#555" stroke-width="0.7"/>
        </svg>
        <span>TODAY'S MATCHDAY</span>
      </div>
    </div>

    <!-- ── TODAY'S FOOTBALL PICKS ── -->
    <div class="container picks-container">
      <div class="section-header sh-row">
        <div class="sh-left">
          <h2>TODAY'S <span class="gold-text">FOOTBALL PICKS</span></h2>
          <p class="section-sub">Hand-picked by our analysts — free daily tips</p>
        </div>
        <div class="today-date-badge">{{ todayFormatted }}</div>
      </div>

      <div class="picks-grid">
        <div v-for="pick in todayPicks" :key="pick.id" class="pick-card" :style="{ '--accent': pick.accent }">
          <!-- jersey cartoon top strip -->
          <div class="pick-kit-bar">
            <svg class="kit-svg" viewBox="0 0 80 54" xmlns="http://www.w3.org/2000/svg">
              <path d="M14,4 L2,18 L14,18 L14,50 L66,50 L66,18 L78,18 L66,4 L54,10 L48,7 L40,9 L32,7 L26,10 Z"
                    :fill="pick.kitColor" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
              <text x="40" y="36" text-anchor="middle" font-size="16" font-weight="900" fill="rgba(255,255,255,0.85)">
                {{ pick.kitNumber }}
              </text>
            </svg>
            <div class="pick-comp-badge">{{ pick.competition }}</div>
          </div>
          <!-- content -->
          <div class="pick-body">
            <div class="pick-match">
              <span class="pick-home">{{ pick.home }}</span>
              <span class="pick-vs">VS</span>
              <span class="pick-away">{{ pick.away }}</span>
            </div>
            <!-- Win probability -->
            <div class="pick-prob-bar">
              <div class="pick-prob-header">
                <span class="pick-prob-label">⚡ WIN PROB</span>
                <span class="pick-prob-val">{{ pick.winProb }}%</span>
              </div>
              <div class="pick-prob-track">
                <div class="pick-prob-fill" :style="{ width: pick.winProb + '%' }"></div>
              </div>
            </div>
            <!-- Locked tip -->
            <div class="pick-locked-row">
              <span class="lock-icon" aria-hidden="true">🔒</span>
              <div class="lock-text-wrap">
                <span class="lock-text">Expert tip hidden</span>
                <span class="lock-sub">VIP members only</span>
              </div>
            </div>
            <div class="pick-footer">
              <div class="pick-time">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {{ pick.kickoff }}
              </div>
              <button class="pick-vip-btn" @click="openVipMenu">
                👑 Join VIP
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Goalpost cartoon accent -->
      <div class="goalpost-accent" aria-hidden="true">
        <svg viewBox="0 0 120 60" width="120" height="60" xmlns="http://www.w3.org/2000/svg">
          <rect x="5"  y="2"  width="5" height="55" fill="rgba(255,255,255,0.12)" rx="2"/>
          <rect x="110" y="2" width="5" height="55" fill="rgba(255,255,255,0.12)" rx="2"/>
          <rect x="2"  y="2"  width="116" height="5" fill="rgba(255,255,255,0.12)" rx="2"/>
          <!-- net lines horizontal -->
          <line x1="10" y1="15" x2="110" y2="15" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <line x1="10" y1="28" x2="110" y2="28" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <line x1="10" y1="41" x2="110" y2="41" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <!-- net lines vertical -->
          <line x1="30"  y1="7" x2="30"  y2="57" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <line x1="50"  y1="7" x2="50"  y2="57" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <line x1="70"  y1="7" x2="70"  y2="57" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <line x1="90"  y1="7" x2="90"  y2="57" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
        </svg>
      </div>
    </div>

    <!-- ── MOBILE MONEY MODAL ── -->
    <transition name="modal-fade">
      <div
        v-if="showVipMenu"
        class="mm-overlay"
        @click.self="showVipMenu = false"
        role="dialog"
        aria-modal="true"
        aria-label="Join VIP"
      >
        <div class="mm-sheet">
          <button class="mm-close" @click="showVipMenu = false" aria-label="Close">✕</button>
          <div class="mm-icon">👑</div>
          <h3 class="mm-title">JOIN VIP <span class="gold-text">TIPS</span></h3>
          <p class="mm-sub">Unlock all expert tips, odds &amp; daily predictions</p>

          <div class="mm-plans">
            <div
              v-for="plan in vipPlans"
              :key="plan.id"
              class="mm-plan"
              :class="{ 'plan-popular': plan.popular }"
            >
              <span v-if="plan.popular" class="plan-badge">BEST VALUE</span>
              <div class="plan-name">{{ plan.name }}</div>
              <div class="plan-price">{{ plan.price }}</div>
              <div class="plan-period">{{ plan.period }}</div>
            </div>
          </div>

          <button class="mm-pay-btn" disabled>
            📱 Pay via Mobile Money
            <span class="mm-coming">Coming Soon</span>
          </button>
          <p class="mm-note">
            Mobile money integration launching soon.<br/>
            Join our WhatsApp group in the meantime.
          </p>
        </div>
      </div>
    </transition>

    <!-- ── FORMULA 1 ── -->
    <div class="f1-wrap container">
      <div class="section-header">
        <div class="f1-title-row">
          <span class="f1-flag-icon">🏁</span>
          <h2>FORMULA <span class="gold-text">1</span> <span class="f1-tips-tag">TIPS</span></h2>
        </div>
        <p class="section-sub">Race-weekend predictions from our analysts</p>
      </div>

      <!-- Featured race banner -->
      <div class="f1-race-banner">
        <div class="race-banner-left">
          <span class="race-round">ROUND {{ nextRace.round }}</span>
          <div class="race-name">{{ nextRace.name }}</div>
          <div class="race-circuit">{{ nextRace.circuit }}</div>
        </div>
        <div class="race-banner-right">
          <div class="race-flag">{{ nextRace.flag }}</div>
        </div>
      </div>

      <!-- Driver tips -->
      <div class="f1-grid">
        <div v-for="tip in f1Tips" :key="tip.id" class="f1-card">
          <div class="f1-team-stripe" :style="{ background: tip.teamColor }"></div>
          <div class="f1-driver-avatar" :style="{ background: tip.teamColor }">
            <span>{{ tip.initials }}</span>
          </div>
          <div class="f1-content">
            <div class="f1-driver-name">{{ tip.driver }}</div>
            <div class="f1-team">{{ tip.team }}</div>
            <div class="f1-pick-row">
              <span class="f1-pick-label">PICK</span>
              <span class="f1-pick-val">{{ tip.pick }}</span>
            </div>
          </div>
          <div class="f1-odd-block">
            <span class="f1-odd">{{ tip.odd }}</span>
            <span class="f1-odd-label">ODD</span>
          </div>
        </div>
      </div>

      <!-- F1 parlay suggestion -->
      <div class="f1-parlay">
        <span class="parlay-badge">⚡ ANALYST PARLAY</span>
        <span class="parlay-text">Verstappen Win + Norris Podium + Fastest Lap</span>
        <span class="parlay-odd">@{{ f1ParlayOdd }}</span>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'FeaturedSection',
  data() {
    const d = new Date()
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return {
      todayFormatted: `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
      showVipMenu: false,
      vipPlans: [
        { id: 1, name: 'Weekly',  price: '5,000 UGX',  period: '7 days',  popular: false },
        { id: 2, name: 'Monthly', price: '15,000 UGX', period: '30 days', popular: true  },
        { id: 3, name: 'Season',  price: '40,000 UGX', period: '90 days', popular: false },
      ],
      decos: [
        { id:1,  char:'⚽', style:{ top:'8%',  left:'3%',  fontSize:'78px', animationDelay:'0s',   opacity:0.44 } },
        { id:2,  char:'🥅', style:{ top:'15%', right:'4%', fontSize:'88px', animationDelay:'1.2s', opacity:0.40 } },
        { id:3,  char:'👟', style:{ top:'55%', left:'2%',  fontSize:'68px', animationDelay:'2.1s', opacity:0.38 } },
        { id:4,  char:'🏆', style:{ top:'70%', right:'3%', fontSize:'74px', animationDelay:'0.7s', opacity:0.42 } },
        { id:5,  char:'📋', style:{ top:'35%', left:'94%', fontSize:'64px', animationDelay:'1.8s', opacity:0.36 } },
        { id:6,  char:'🎽', style:{ top:'82%', left:'8%',  fontSize:'72px', animationDelay:'3s',   opacity:0.38 } },
        { id:7,  char:'🎯', style:{ top:'42%', right:'2%', fontSize:'62px', animationDelay:'2.5s', opacity:0.36 } },
        { id:8,  char:'⚽', style:{ top:'90%', left:'50%', fontSize:'82px', animationDelay:'1s',   opacity:0.40 } },
      ],
      todayPicks: [
        {
          id: 1, home: 'Man City', away: 'Arsenal',
          competition: 'Premier League', kickoff: '20:00',
          kitColor: '#6CABDD', kitNumber: '10', accent: '#6CABDD',
          winProb: 78
        },
        {
          id: 2, home: 'Real Madrid', away: 'Barcelona',
          competition: 'La Liga', kickoff: '21:00',
          kitColor: '#FEBE10', kitNumber: '9', accent: '#FEBE10',
          winProb: 82
        },
        {
          id: 3, home: 'Bayern Munich', away: 'Dortmund',
          competition: 'Bundesliga', kickoff: '18:30',
          kitColor: '#DC052D', kitNumber: '8', accent: '#DC052D',
          winProb: 71
        },
        {
          id: 4, home: 'PSG', away: 'Lyon',
          competition: 'Ligue 1', kickoff: '21:05',
          kitColor: '#004170', kitNumber: '7', accent: '#004170',
          winProb: 85
        }
      ],
      nextRace: {
        round: 5,
        name: 'Miami Grand Prix',
        circuit: 'Miami International Autodrome',
        flag: '🇺🇸'
      },
      f1Tips: [
        { id:1, driver:'Max Verstappen', team:'Red Bull Racing', initials:'MV', pick:'Race Winner',   odd:'2.20', teamColor:'linear-gradient(135deg,#1E3A5F,#3B82C4)' },
        { id:2, driver:'Lando Norris',   team:'McLaren',         initials:'LN', pick:'Podium Finish', odd:'1.65', teamColor:'linear-gradient(135deg,#CC4A00,#FF8000)' },
        { id:3, driver:'Charles Leclerc',team:'Ferrari',         initials:'CL', pick:'Top 5 Finish',  odd:'1.45', teamColor:'linear-gradient(135deg,#990000,#DC0000)' },
        { id:4, driver:'George Russell', team:'Mercedes',        initials:'GR', pick:'Fastest Lap',   odd:'3.80', teamColor:'linear-gradient(135deg,#006B5F,#00D2BE)' }
      ],
      f1ParlayOdd: '7.40'
    }
  },
  methods: {
    openVipMenu() {
      this.showVipMenu = true
    }
  }
}
</script>

<style scoped>
.featured {
  background: var(--dark);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

/* ── Floating football decorations ── */
.fb-decos {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.fb-deco {
  position: absolute;
  animation: fbFloat 7s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
}
@keyframes fbFloat {
  0%, 100% { transform: translateY(0) rotate(-4deg) scale(1); }
  50%       { transform: translateY(-18px) rotate(6deg) scale(1.04); }
}

/* ── Pitch ribbon ── */
.pitch-ribbon {
  position: relative;
  height: 90px;
  overflow: hidden;
  margin-bottom: 60px;
}
.pitch-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.pitch-ribbon-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
}
.ball-cartoon { flex-shrink: 0; }

/* ── Container ── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}
.picks-container { padding-bottom: 60px; }

.section-header { margin-bottom: 36px; }
.sh-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.sh-left h2 {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--white);
}
.gold-text { color: var(--gold); }
.section-sub {
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 6px;
}
.today-date-badge {
  background: rgba(255, 215, 0, 0.08);
  border: 1px solid rgba(255, 215, 0, 0.25);
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* ── Picks grid ── */
.picks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

@keyframes hotDeal {
  0%, 100% { border-color: rgba(255,255,255,0.07); box-shadow: none; }
  50%       { border-color: rgba(255,215,0,0.7);   box-shadow: 0 0 22px rgba(255,215,0,0.22); }
}

.pick-card {
  background: var(--dark-card);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  animation: hotDeal 2.8s ease-in-out infinite;
}
.pick-card:nth-child(2) { animation-delay: 0.7s; }
.pick-card:nth-child(3) { animation-delay: 1.4s; }
.pick-card:nth-child(4) { animation-delay: 2.1s; }
.pick-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 36px rgba(0,0,0,0.35);
}

/* Kit top strip */
.pick-kit-bar {
  background: linear-gradient(135deg, #111 40%, #1e1e1e 100%);
  padding: 16px 16px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: relative;
}
.kit-svg {
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6));
}
.pick-comp-badge {
  font-size: 10px;
  font-weight: 700;
  color: var(--gold);
  background: rgba(255,215,0,0.1);
  border: 1px solid rgba(255,215,0,0.2);
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* Body */
.pick-body {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.pick-match {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}
.pick-home, .pick-away {
  font-size: 13px;
  font-weight: 800;
  color: var(--white);
  flex: 1;
}
.pick-away { text-align: right; }
.pick-vs {
  font-size: 10px;
  font-weight: 900;
  color: var(--gold);
  background: rgba(255,215,0,0.1);
  padding: 2px 7px;
  border-radius: 4px;
}

/* ── Win probability bar ── */
.pick-prob-bar { display: flex; flex-direction: column; gap: 5px; }
.pick-prob-header { display: flex; align-items: center; justify-content: space-between; }
.pick-prob-label { font-size: 9px; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; }
.pick-prob-val { font-size: 13px; font-weight: 900; color: var(--gold); }
.pick-prob-track { height: 4px; background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden; }
.pick-prob-fill { height: 100%; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); border-radius: 4px; transition: width 0.8s ease; }

/* ── Locked tip row ── */
.pick-locked-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px dashed rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 10px 12px;
}
.lock-icon { font-size: 18px; flex-shrink: 0; }
.lock-text-wrap { display: flex; flex-direction: column; gap: 2px; }
.lock-text { font-size: 13px; color: var(--text-muted); font-weight: 600; }
.lock-sub  { font-size: 10px; color: rgba(170,170,170,0.45); }

@keyframes vipBeep {
  0%   { box-shadow: 0 0 0 0    rgba(255,215,0,0.7); }
  60%  { box-shadow: 0 0 0 10px rgba(255,215,0,0); }
  100% { box-shadow: 0 0 0 0    rgba(255,215,0,0); }
}

/* VIP button inside pick card */
.pick-vip-btn {
  background: linear-gradient(135deg, var(--gold-dark), var(--gold));
  color: var(--dark);
  border: none;
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s, transform 0.1s;
  animation: vipBeep 1.6s ease-out infinite;
}
.pick-vip-btn:hover { opacity: 0.88; transform: scale(1.04); }

.pick-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pick-time {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--text-muted);
}

/* ── Mobile Money modal ── */
.mm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.78);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.mm-sheet {
  background: var(--dark-card);
  border: 1px solid var(--gold-dark);
  border-bottom: none;
  border-radius: 24px 24px 0 0;
  padding: 32px 28px 48px;
  width: 100%;
  max-width: 500px;
  position: relative;
  text-align: center;
  animation: sheetUp 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes sheetUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
.mm-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}
.mm-close:hover { color: var(--gold); }
.mm-icon  { font-size: 46px; margin-bottom: 10px; }
.mm-title { font-size: 22px; font-weight: 900; color: var(--white); margin-bottom: 6px; }
.mm-sub   { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }
.mm-plans {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.mm-plan {
  background: var(--dark-3);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  min-width: 110px;
  transition: border-color 0.2s;
}
.mm-plan.plan-popular {
  border-color: var(--gold-dark);
  background: rgba(255,215,0,0.04);
}
.plan-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: var(--dark);
  font-size: 8px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 10px;
  white-space: nowrap;
  letter-spacing: 0.5px;
}
.plan-name   { font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.plan-price  { font-size: 18px; font-weight: 900; color: var(--gold); margin-top: 4px; }
.plan-period { font-size: 11px; color: var(--text-muted); }
.mm-pay-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, var(--gold-dark), var(--gold));
  color: var(--dark);
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  cursor: not-allowed;
  opacity: 0.55;
  margin-bottom: 14px;
}
.mm-coming {
  font-size: 10px;
  background: rgba(0,0,0,0.25);
  color: var(--dark);
  padding: 2px 9px;
  border-radius: 10px;
  font-weight: 700;
}
.mm-note { font-size: 11px; color: rgba(170,170,170,0.5); line-height: 1.6; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s; }
.modal-fade-enter-from, .modal-fade-leave-to       { opacity: 0; }

/* Goalpost accent */
.goalpost-accent {
  display: flex;
  justify-content: center;
  opacity: 0.5;
  margin-top: 8px;
}

/* ── F1 ── */
.f1-title-row { display: flex; align-items: center; gap: 12px; }
.f1-flag-icon { font-size: 28px; }
.f1-tips-tag {
  font-size: 14px;
  background: rgba(255,215,0,0.12);
  color: var(--gold);
  padding: 2px 10px;
  border-radius: 6px;
  vertical-align: middle;
  margin-left: 6px;
}

.f1-race-banner {
  background: linear-gradient(135deg, #0d0d0d, #1a1200);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}
.f1-race-banner::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--gold);
}
.race-banner-left { display: flex; flex-direction: column; gap: 6px; }
.race-round { font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 2px; }
.race-name  { font-size: 22px; font-weight: 900; color: var(--white); }
.race-circuit { font-size: 13px; color: var(--text-muted); }
.race-banner-right .race-flag { font-size: 52px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5)); }

.f1-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}
.f1-card {
  background: var(--dark-card);
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}
.f1-card:hover { transform: translateY(-3px); border-color: rgba(255,215,0,0.25); }
.f1-team-stripe { position: absolute; top: 0; left: 0; width: 3px; height: 100%; border-radius: 3px 0 0 3px; }
.f1-driver-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 900; color: #fff; flex-shrink: 0;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.f1-content { flex: 1; display: flex; flex-direction: column; gap: 3px; }
.f1-driver-name { font-size: 14px; font-weight: 800; color: var(--white); }
.f1-team { font-size: 11px; color: var(--text-muted); }
.f1-pick-row { display: flex; align-items: center; gap: 6px; margin-top: 4px; }
.f1-pick-label {
  font-size: 9px; font-weight: 700; color: var(--text-muted);
  letter-spacing: 1px; background: rgba(255,255,255,0.07);
  padding: 2px 6px; border-radius: 4px;
}
.f1-pick-val { font-size: 12px; color: var(--cream); font-weight: 600; }
.f1-odd-block { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
.f1-odd { font-size: 22px; font-weight: 900; color: var(--gold); text-shadow: 0 0 12px rgba(255,215,0,0.35); }
.f1-odd-label { font-size: 9px; color: var(--text-muted); letter-spacing: 1px; font-weight: 700; }

.f1-parlay {
  background: linear-gradient(135deg, rgba(255,215,0,0.07), rgba(255,215,0,0.03));
  border: 1px solid rgba(255,215,0,0.25);
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.parlay-badge {
  background: var(--gold); color: var(--dark);
  font-size: 10px; font-weight: 800;
  padding: 3px 10px; border-radius: 20px; white-space: nowrap;
}
.parlay-text { flex: 1; font-size: 13px; color: var(--cream); min-width: 200px; }
.parlay-odd  { font-size: 22px; font-weight: 900; color: var(--gold); }

/* Responsive */
@media (max-width: 640px) {
  .picks-grid { grid-template-columns: 1fr; }
  .f1-grid    { grid-template-columns: 1fr; }
  .race-name  { font-size: 17px; }
  .sh-row     { flex-direction: column; align-items: flex-start; }
}
</style>
