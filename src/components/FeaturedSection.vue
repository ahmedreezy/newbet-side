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
          <h2>TODAY'S <span class="gold-text">ALMAX PICKS</span></h2>
          <p class="section-sub">Hand-picked by our analysts — free daily tips</p>
        </div>
        <div class="today-date-badge">{{ todayFormatted }}</div>
      </div>

      <div class="picks-grid">
        <div v-for="pick in todayPicks" :key="pick.id" class="pick-card" :style="{ '--accent': pick.accent }">
          <!-- Full-width image -->
          <div class="pick-img-bar">
            <img v-if="pick.imageUrl" :src="pick.imageUrl" :alt="pick.caption || 'prediction'" class="pick-card-img" />
            <div v-else class="pick-img-placeholder">
              <svg viewBox="0 0 80 54" width="56" height="38" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
                <path d="M14,4 L2,18 L14,18 L14,50 L66,50 L66,18 L78,18 L66,4 L54,10 L48,7 L40,9 L32,7 L26,10 Z"
                      fill="#FFD700" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
              </svg>
            </div>
          </div>
          <!-- content -->
          <div class="pick-body">
            <!-- Caption -->
            <p v-if="pick.caption" class="pick-caption">{{ pick.caption }}</p>
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

    <!-- ── VIP PAYMENT MODAL (multi-step) ── -->
    <transition name="modal-fade">
      <div
        v-if="showVipMenu"
        class="mm-overlay"
        @click.self="closeVip"
        role="dialog"
        aria-modal="true"
        aria-label="Join VIP"
      >
        <div class="mm-sheet">
          <button class="mm-close" @click="closeVip" aria-label="Close">✕</button>

          <!-- ── STEP 1: Plan Selection ── -->
          <template v-if="vipStep === 1">
            <div class="mm-icon">👑</div>
            <h3 class="mm-title">JOIN <span class="gold-text">VIP TIPS</span></h3>
            <p class="mm-sub">Unlock all expert tips, odds &amp; daily predictions</p>
            <div class="mm-plans">
              <div
                class="mm-plan selectable"
                :class="{ selected: selectedPlan === 'daily' }"
                @click="selectedPlan = 'daily'"
              >
                <div class="plan-name">Daily</div>
                <div class="plan-price">{{ (vipCfg.daily_price || 5000).toLocaleString() }} {{ vipCfg.currency || 'UGX' }}</div>
                <div class="plan-period">1 day access</div>
              </div>
              <div
                class="mm-plan selectable"
                :class="{ selected: selectedPlan === 'weekly', 'plan-popular': true }"
                @click="selectedPlan = 'weekly'"
              >
                <span class="plan-badge">BEST VALUE</span>
                <div class="plan-name">Weekly</div>
                <div class="plan-price">{{ (vipCfg.weekly_price || 20000).toLocaleString() }} {{ vipCfg.currency || 'UGX' }}</div>
                <div class="plan-period">6 days access</div>
              </div>
            </div>
            <button class="mm-next-btn" @click="vipStep = 2">Continue →</button>
            <p class="mm-check-link" @click="vipStep = 'status'">Already paid? Check your status</p>
          </template>

          <!-- ── STEP 2: Registration / Lookup ── -->
          <template v-else-if="vipStep === 2">
            <div class="mm-icon">👤</div>
            <h3 class="mm-title">YOUR <span class="gold-text">ACCOUNT</span></h3>
            <div class="reg-tabs">
              <button :class="['reg-tab', { active: !isReturning }]" @click="isReturning = false">New User</button>
              <button :class="['reg-tab', { active: isReturning }]" @click="isReturning = true">Returning</button>
            </div>

            <form v-if="!isReturning" @submit.prevent="registerUser" class="reg-form">
              <div class="field">
                <label>Full Name</label>
                <input v-model="regForm.username" type="text" placeholder="Your full name" required />
              </div>
              <div class="field">
                <label>Date of Birth</label>
                <input v-model="regForm.dob" type="date" required />
              </div>
              <div class="field">
                <label>Email</label>
                <input v-model="regForm.email" type="email" placeholder="your@email.com" required />
              </div>
              <div class="field">
                <label>Phone Number</label>
                <input v-model="regForm.phone" type="tel" placeholder="07XXXXXXXX" required />
              </div>
              <p v-if="regError" class="reg-error">{{ regError }}</p>
              <button type="submit" class="mm-next-btn" :disabled="regLoading">
                {{ regLoading ? 'Please wait…' : 'Continue →' }}
              </button>
            </form>

            <form v-else @submit.prevent="lookupUser" class="reg-form">
              <div class="field">
                <label>Your Phone Number</label>
                <input v-model="lookupPhone" type="tel" placeholder="07XXXXXXXX" required />
              </div>
              <p v-if="regError" class="reg-error">{{ regError }}</p>
              <button type="submit" class="mm-next-btn" :disabled="regLoading">
                {{ regLoading ? 'Looking up…' : 'Find Account →' }}
              </button>
            </form>

            <p class="mm-back" @click="vipStep = 1">← Back</p>
          </template>

          <!-- ── STEP 2.5: Secret Code Display ── -->
          <template v-else-if="vipStep === 'secret'">
            <div class="mm-icon">🔐</div>
            <h3 class="mm-title">YOUR <span class="gold-text">SECRET CODE</span></h3>
            <p class="mm-sub">Save this code somewhere safe — you'll need it to access your VIP tips.<br/>It cannot be recovered if lost.</p>
            <div class="secret-code-box">
              <div class="secret-code-label">🔑 Your Unique Access Code</div>
              <div class="secret-code-display">{{ generatedCode }}</div>
              <button class="copy-btn secret-copy-btn" @click="copySecretCode">
                {{ secretCopied ? '✓ Copied!' : 'Copy Code' }}
              </button>
            </div>
            <div class="secret-warning">
              ⚠️ This code is shown <strong>only once</strong>. Store it in your notes or screenshot it now. You will need it every time you check your VIP status.
            </div>
            <button class="mm-next-btn" @click="vipStep = 3">I've saved it — Continue to Payment →</button>
            <p class="mm-back" @click="vipStep = 2">← Back</p>
          </template>

          <!-- ── STEP 3: Payment Method ── -->
          <template v-else-if="vipStep === 3">
            <div class="mm-icon">📱</div>
            <h3 class="mm-title">PAY VIA <span class="gold-text">MOBILE MONEY</span></h3>
            <p class="mm-sub">Choose your provider and follow the instructions</p>

            <div class="provider-cards">
              <div
                class="provider-card"
                :class="{ selected: selectedProvider === 'mtn' }"
                @click="selectedProvider = 'mtn'"
              >
                <div class="provider-logo mtn-logo">MTN</div>
                <div class="provider-name">MTN MoMo</div>
                <div class="provider-num">{{ vipCfg.mtn_number }}</div>
              </div>
              <div
                class="provider-card"
                :class="{ selected: selectedProvider === 'airtel' }"
                @click="selectedProvider = 'airtel'"
              >
                <div class="provider-logo airtel-logo">Airtel</div>
                <div class="provider-name">Airtel Money</div>
                <div class="provider-num">{{ vipCfg.airtel_number }}</div>
              </div>
            </div>

            <div v-if="selectedProvider" class="payment-instructions">
              <div class="instr-title">📋 Payment Instructions</div>
              <ol class="instr-list">
                <li>Dial <strong>*165#</strong> (MTN) or <strong>*185#</strong> (Airtel) on your phone</li>
                <li>Select "Send Money" then "To Phone Number"</li>
                <li>Enter number: <strong>{{ selectedProvider === 'mtn' ? vipCfg.mtn_number : vipCfg.airtel_number }}</strong></li>
                <li>Enter amount: <strong>{{ selectedPlanAmount.toLocaleString() }} {{ vipCfg.currency || 'UGX' }}</strong></li>
                <li>Enter your PIN to confirm</li>
              </ol>
              <div class="pay-amount-badge">
                Amount: {{ selectedPlanAmount.toLocaleString() }} {{ vipCfg.currency || 'UGX' }}
                <span class="pay-plan-tag">{{ selectedPlan }} plan</span>
              </div>
            </div>

            <!-- Proof of payment upload -->
            <div class="proof-upload-block">
              <div class="proof-upload-label">📸 Upload Proof of Payment <span class="proof-optional">(optional but speeds up verification)</span></div>
              <label class="proof-file-btn">
                {{ proofFile ? proofFile.name : 'Choose screenshot (JPG or PNG)' }}
                <input type="file" accept="image/jpeg,image/png" @change="handleProofFile" class="proof-file-input" />
              </label>
              <img v-if="proofPreview" :src="proofPreview" class="proof-preview-thumb" alt="Proof preview" />
            </div>

            <p v-if="payError" class="reg-error">{{ payError }}</p>
            <button class="mm-next-btn" :disabled="!selectedProvider || payLoading" @click="submitPayment">
              {{ payLoading ? 'Submitting…' : '✅ I\'ve Paid — Confirm' }}
            </button>
            <p class="mm-back" @click="vipStep = 2">← Back</p>
          </template>

          <!-- ── STEP 4: Submitted ── -->
          <template v-else-if="vipStep === 4">
            <div class="mm-icon">⏳</div>
            <h3 class="mm-title">PAYMENT <span class="gold-text">SUBMITTED</span></h3>
            <p class="mm-sub">Your payment is being verified by our team.<br/>You'll get your betslip once confirmed.</p>
            <div class="pending-box">
              <div class="pending-row"><span>Plan</span><strong>{{ selectedPlan === 'daily' ? 'Daily' : 'Weekly' }}</strong></div>
              <div class="pending-row"><span>Amount</span><strong>{{ selectedPlanAmount.toLocaleString() }} {{ vipCfg.currency || 'UGX' }}</strong></div>
              <div class="pending-row"><span>Provider</span><strong>{{ selectedProvider ? selectedProvider.toUpperCase() : '' }}</strong></div>
              <div class="pending-row"><span>Status</span><span class="status-pending">Pending</span></div>
            </div>

            <!-- Late proof upload (shown only if no proof was uploaded in step 3) -->
            <div v-if="!proofFile && submittedSubId" class="proof-upload-block late-proof">
              <div class="proof-upload-label">📎 Still want to speed up verification? Upload your payment screenshot:</div>
              <label class="proof-file-btn">
                {{ lateProofFile ? lateProofFile.name : 'Choose screenshot (JPG or PNG)' }}
                <input type="file" accept="image/jpeg,image/png" @change="handleLateProofFile" class="proof-file-input" />
              </label>
              <img v-if="lateProofPreview" :src="lateProofPreview" class="proof-preview-thumb" alt="Proof preview" />
              <button v-if="lateProofFile" class="proof-upload-send-btn" @click="uploadLateProof" :disabled="lateProofLoading">
                {{ lateProofLoading ? 'Uploading…' : '📤 Send Proof' }}
              </button>
              <p v-if="lateProofError" class="reg-error">{{ lateProofError }}</p>
              <p v-if="lateProofSent" class="proof-sent-msg">✓ Proof sent!</p>
            </div>

            <button class="mm-next-btn" @click="vipStep = 'status'">Check My Status</button>
            <p class="mm-note">Our admin will manually confirm your payment. Usually within 30 minutes.</p>
          </template>

          <!-- ── STATUS CHECK ── -->
          <template v-else-if="vipStep === 'status'">
            <div class="mm-icon">🔍</div>
            <h3 class="mm-title">CHECK <span class="gold-text">STATUS</span></h3>
            <form @submit.prevent="checkStatus" class="reg-form">
              <div class="field">
                <label>Your Phone Number</label>
                <input v-model="statusPhone" type="tel" placeholder="07XXXXXXXX" required />
              </div>
              <div class="field">
                <label>Secret Code <span style="color:#666;font-weight:400;text-transform:none">(generated at registration)</span></label>
                <input v-model="statusSecretCode" type="text" placeholder="XXXX-XXXX-XXXX" style="letter-spacing:2px;font-family:monospace" />
              </div>
              <p v-if="statusError" class="reg-error">{{ statusError }}</p>
              <button type="submit" class="mm-next-btn" :disabled="statusLoading">
                {{ statusLoading ? 'Checking…' : '🔍 Check Status' }}
              </button>
            </form>

            <div v-if="activeSub" class="betslip-box">
              <div class="betslip-badge">✅ ACTIVE VIP</div>
              <p class="betslip-exp">Expires: {{ formatExpiry(activeSub.expiresAt) }}</p>

              <div v-if="activeSub.betslipLink" class="betslip-section">
                <div class="betslip-label">🔗 Betslip Link</div>
                <a :href="activeSub.betslipLink" target="_blank" rel="noopener" class="betslip-link">
                  {{ activeSub.betslipLink }}
                </a>
              </div>
              <div v-if="activeSub.betslipCode" class="betslip-section">
                <div class="betslip-label">🎫 Betslip Code</div>
                <div class="betslip-code-row">
                  <code class="betslip-code">{{ activeSub.betslipCode }}</code>
                  <button class="copy-btn" @click="copyCode(activeSub.betslipCode)">{{ copied ? '✓' : 'Copy' }}</button>
                </div>
              </div>

              <a
                v-if="vipCfg.whatsapp_link"
                :href="vipCfg.whatsapp_link"
                target="_blank"
                rel="noopener"
                class="whatsapp-btn"
              >
                💬 Join WhatsApp Community
              </a>
            </div>
            <div v-else-if="statusChecked && !activeSub" class="pending-box">
              <p style="text-align:center; color: var(--text-muted); font-size:14px;">
                {{ pendingStatusMsg || 'No active subscription found.' }}
              </p>
            </div>

            <p class="mm-back" @click="vipStep = 1">← Back to Plans</p>
          </template>

        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import axios from 'axios'

const STATIC_PICKS = [
  {
    id: 1, home: 'Man City', away: 'Arsenal',
    competition: 'Premier League', kickoff: '20:00',
    kitColor: '#6CABDD', kitNumber: '10', accent: '#6CABDD',
    winProb: 78, imageUrl: ''
  },
  {
    id: 2, home: 'Real Madrid', away: 'Barcelona',
    competition: 'La Liga', kickoff: '21:00',
    kitColor: '#FEBE10', kitNumber: '9', accent: '#FEBE10',
    winProb: 82, imageUrl: ''
  },
  {
    id: 3, home: 'Bayern Munich', away: 'Dortmund',
    competition: 'Bundesliga', kickoff: '18:30',
    kitColor: '#DC052D', kitNumber: '8', accent: '#DC052D',
    winProb: 71, imageUrl: ''
  },
  {
    id: 4, home: 'PSG', away: 'Lyon',
    competition: 'Ligue 1', kickoff: '21:05',
    kitColor: '#004170', kitNumber: '7', accent: '#004170',
    winProb: 85, imageUrl: ''
  }
]

export default {
  name: 'FeaturedSection',
  emits: ['vipOpened'],
  props: {
    openVip: { type: Boolean, default: false }
  },
  watch: {
    openVip(val) {
      if (val) {
        this.openVipMenu()
        this.$emit('vipOpened')
      }
    }
  },
  data() {
    const d = new Date()
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return {
      todayFormatted: `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
      todayPicks: [...STATIC_PICKS],
      // VIP modal
      showVipMenu: false,
      vipStep: 1,
      vipCfg: { daily_price: 5000, weekly_price: 20000, currency: 'UGX', mtn_number: '', airtel_number: '', whatsapp_link: '' },
      selectedPlan: 'weekly',
      selectedProvider: '',
      // Registration
      isReturning: false,
      regForm: { username: '', dob: '', email: '', phone: '' },
      regUser: null,
      regError: '',
      regLoading: false,
      lookupPhone: '',
      // Secret code
      generatedCode: '',
      secretCopied: false,
      // Payment
      payError: '',
      payLoading: false,
      proofFile: null,
      proofPreview: '',
      submittedSubId: null,
      lateProofFile: null,
      lateProofPreview: '',
      lateProofLoading: false,
      lateProofError: '',
      lateProofSent: false,
      // Status check
      statusPhone: '',
      statusSecretCode: '',
      statusError: '',
      statusLoading: false,
      statusChecked: false,
      activeSub: null,
      pendingStatusMsg: '',
      copied: false,
      // Decorations
      decos: [
        { id:1,  char:'⚽', style:{ top:'8%',  left:'3%',  fontSize:'78px', animationDelay:'0s',   opacity:0.44 } },
        { id:2,  char:'🥅', style:{ top:'15%', right:'4%', fontSize:'88px', animationDelay:'1.2s', opacity:0.40 } },
        { id:3,  char:'👟', style:{ top:'55%', left:'2%',  fontSize:'68px', animationDelay:'2.1s', opacity:0.38 } },
        { id:4,  char:'🏆', style:{ top:'70%', right:'3%', fontSize:'74px', animationDelay:'0.7s', opacity:0.42 } },
        { id:5,  char:'📋', style:{ top:'35%', left:'94%', fontSize:'64px', animationDelay:'1.8s', opacity:0.36 } },
        { id:6,  char:'🎽', style:{ top:'82%', left:'8%',  fontSize:'72px', animationDelay:'3s',   opacity:0.38 } },
        { id:7,  char:'🎯', style:{ top:'42%', right:'2%', fontSize:'62px', animationDelay:'2.5s', opacity:0.36 } },
        { id:8,  char:'⚽', style:{ top:'90%', left:'50%', fontSize:'82px', animationDelay:'1s',   opacity:0.40 } },
      ]
    }
  },
  computed: {
    selectedPlanAmount() {
      return this.selectedPlan === 'daily'
        ? (this.vipCfg.daily_price || 5000)
        : (this.vipCfg.weekly_price || 20000)
    }
  },
  async mounted() {
    await Promise.all([this.fetchTips(), this.fetchVipConfig()])
    this._pollInterval = setInterval(this.fetchTips, 30000)
    this._onVisible = () => { if (!document.hidden) this.fetchTips() }
    document.addEventListener('visibilitychange', this._onVisible)
  },
  beforeUnmount() {
    clearInterval(this._pollInterval)
    document.removeEventListener('visibilitychange', this._onVisible)
  },
  methods: {
    async fetchTips() {
      try {
        const { data } = await axios.get('/api/football-tips')
        this.todayPicks = (data && data.length > 0) ? data : [...STATIC_PICKS]
      } catch { /* Server unavailable — static picks remain */ }
    },
    async fetchVipConfig() {
      try {
        const { data } = await axios.get('/api/config/vip-config')
        if (data) this.vipCfg = { ...this.vipCfg, ...data }
      } catch { /* use defaults */ }
    },
    openVipMenu() {
      this.vipStep = 1
      this.showVipMenu = true
    },
    closeVip() {
      this.showVipMenu = false
    },
    async registerUser() {
      this.regLoading = true
      this.regError = ''
      try {
        const { data } = await axios.post('/api/users', this.regForm)
        this.regUser = data
        this.toSecretStep()
      } catch (err) {
        if (err.response && err.response.status === 409) {
          this.regUser = err.response.data.user
          this.toSecretStep()
        } else {
          this.regError = err.response?.data?.error || 'Registration failed. Please try again.'
        }
      } finally {
        this.regLoading = false
      }
    },
    async lookupUser() {
      this.regLoading = true
      this.regError = ''
      try {
        const { data } = await axios.get('/api/users/by-phone/' + encodeURIComponent(this.lookupPhone))
        this.regUser = data
        this.toSecretStep()
      } catch {
        this.regError = 'Phone number not found. Please register as a new user.'
      } finally {
        this.regLoading = false
      }
    },
    generateSecretCode() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      const arr = new Uint8Array(12)
      crypto.getRandomValues(arr)
      const raw = Array.from(arr, b => chars[b % chars.length]).join('')
      return raw.slice(0, 4) + '-' + raw.slice(4, 8) + '-' + raw.slice(8, 12)
    },
    toSecretStep() {
      this.generatedCode = this.generateSecretCode()
      this.secretCopied = false
      this.vipStep = 'secret'
    },
    async copySecretCode() {
      try {
        await navigator.clipboard.writeText(this.generatedCode)
        this.secretCopied = true
        setTimeout(() => { this.secretCopied = false }, 3000)
      } catch { /* clipboard denied */ }
    },
    handleProofFile(e) {
      const file = e.target.files[0]
      if (!file) return
      this.proofFile = file
      this.proofPreview = URL.createObjectURL(file)
    },
    handleLateProofFile(e) {
      const file = e.target.files[0]
      if (!file) return
      this.lateProofFile = file
      this.lateProofPreview = URL.createObjectURL(file)
    },
    async submitPayment() {
      if (!this.selectedProvider) return
      this.payLoading = true
      this.payError = ''
      try {
        const phone = this.regUser?.phone || ''
        const formData = new FormData()
        formData.append('userId', this.regUser.id)
        formData.append('planType', this.selectedPlan)
        formData.append('paymentMethod', this.selectedProvider)
        formData.append('phone', phone)
        if (this.generatedCode) formData.append('secretCode', this.generatedCode)
        if (this.proofFile) formData.append('proof', this.proofFile)
        const { data } = await axios.post('/api/subscriptions', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.submittedSubId = data.subscription?.id || data.id || null
        this.vipStep = 4
      } catch (err) {
        this.payError = err.response?.data?.error || 'Submission failed. Please try again.'
      } finally {
        this.payLoading = false
      }
    },
    async uploadLateProof() {
      if (!this.lateProofFile || !this.submittedSubId) return
      this.lateProofLoading = true
      this.lateProofError = ''
      try {
        const fd = new FormData()
        fd.append('proof', this.lateProofFile)
        await axios.post('/api/subscriptions/' + this.submittedSubId + '/proof', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.lateProofSent = true
        this.lateProofFile = null
      } catch (err) {
        this.lateProofError = err.response?.data?.error || 'Upload failed. Please try again.'
      } finally {
        this.lateProofLoading = false
      }
    },
    async checkStatus() {
      this.statusLoading = true
      this.statusError = ''
      this.statusChecked = false
      this.activeSub = null
      this.pendingStatusMsg = ''
      try {
        const { data: sub } = await axios.post('/api/subscriptions/verify-access', {
          phone: this.statusPhone,
          secretCode: this.statusSecretCode || undefined
        })
        this.activeSub = sub
        this.statusChecked = true
      } catch (verifyErr) {
        const status = verifyErr.response?.status
        const msg = verifyErr.response?.data?.error || ''
        if (status === 403) {
          this.statusError = msg === 'Secret code required'
            ? 'Please enter your secret code to access your VIP details.'
            : '❌ Phone number or secret code is incorrect. Both must match.'
        } else if (status === 404) {
          // Active sub not found — check for pending without exposing betslip
          try {
            const { data: user } = await axios.get('/api/users/by-phone/' + encodeURIComponent(this.statusPhone))
            const { data: subs } = await axios.get('/api/subscriptions/user/' + user.id)
            const pending = subs.find(s => s.status === 'pending')
            this.pendingStatusMsg = pending
              ? '⏳ Payment pending — our team is verifying. Check back soon.'
              : 'No active subscription found for this number.'
          } catch {
            this.pendingStatusMsg = 'No active subscription found for this number.'
          }
          this.statusChecked = true
        } else {
          this.statusError = 'Could not verify status. Please try again.'
          this.statusChecked = true
        }
      } finally {
        this.statusLoading = false
      }
    },
    formatExpiry(ts) {
      if (!ts) return 'N/A'
      return new Date(ts).toLocaleString()
    },
    async copyCode(code) {
      try {
        await navigator.clipboard.writeText(code)
        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      } catch { /* clipboard denied */ }
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
/* Image bar */
.pick-img-bar {
  width: 100%;
  position: relative;
  background: rgba(255,255,255,0.03);
  overflow: hidden;
}
.pick-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.pick-img-placeholder {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,215,0,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* Body */
.pick-body {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
/* Caption */
.pick-caption {
  font-size: 13px;
  font-weight: 600;
  color: var(--white);
  line-height: 1.5;
  margin: 0;
  opacity: 0.92;
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

/* ── VIP Modal new styles ── */
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
  padding: 32px 24px 48px;
  width: 100%;
  max-width: 500px;
  position: relative;
  text-align: center;
  animation: sheetUp 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  max-height: 92vh;
  overflow-y: auto;
}
@keyframes sheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
.mm-close {
  position: absolute; top: 16px; right: 20px;
  background: none; border: none; color: var(--text-muted);
  font-size: 20px; cursor: pointer; line-height: 1; transition: color 0.2s;
}
.mm-close:hover { color: var(--gold); }
.mm-icon  { font-size: 46px; margin-bottom: 10px; }
.mm-title { font-size: 22px; font-weight: 900; color: var(--white); margin-bottom: 6px; }
.mm-sub   { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; }
.mm-plans { display: flex; gap: 12px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap; }
.mm-plan {
  background: var(--dark-3);
  border: 2px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex; flex-direction: column; gap: 4px;
  position: relative; min-width: 120px;
  cursor: pointer; transition: border-color 0.2s, background 0.2s;
}
.mm-plan.selectable:hover { border-color: rgba(255,215,0,0.4); }
.mm-plan.selected { border-color: var(--gold); background: rgba(255,215,0,0.06); }
.mm-plan.plan-popular { border-color: var(--gold-dark); }
.plan-badge {
  position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
  background: var(--gold); color: var(--dark);
  font-size: 8px; font-weight: 800; padding: 3px 10px; border-radius: 10px;
  white-space: nowrap; letter-spacing: 0.5px;
}
.plan-name  { font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.plan-price { font-size: 18px; font-weight: 900; color: var(--gold); margin-top: 4px; }
.plan-period{ font-size: 11px; color: var(--text-muted); }

.mm-next-btn {
  display: flex; align-items: center; justify-content: center;
  width: 100%; padding: 14px;
  background: linear-gradient(135deg, var(--gold-dark), var(--gold));
  color: var(--dark); border: none; border-radius: 14px;
  font-size: 15px; font-weight: 800; cursor: pointer;
  margin-bottom: 12px; transition: opacity 0.2s;
}
.mm-next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.mm-next-btn:not(:disabled):hover { opacity: 0.88; }
.mm-check-link { font-size: 12px; color: var(--gold); cursor: pointer; text-decoration: underline; margin-top: 4px; }
.mm-back { font-size: 12px; color: var(--text-muted); cursor: pointer; margin-top: 8px; }
.mm-back:hover { color: var(--gold); }
.mm-note { font-size: 11px; color: rgba(170,170,170,0.5); line-height: 1.6; margin-top: 10px; }

/* Registration form */
.reg-tabs { display: flex; gap: 0; margin-bottom: 18px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,215,0,0.2); }
.reg-tab { flex: 1; padding: 10px; background: transparent; border: none; color: var(--text-muted); font-size: 13px; font-weight: 700; cursor: pointer; transition: background 0.2s, color 0.2s; }
.reg-tab.active { background: rgba(255,215,0,0.12); color: var(--gold); }
.reg-form { text-align: left; margin-bottom: 8px; }
.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.field label { font-size: 11px; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; text-transform: uppercase; }
.field input {
  background: var(--input-bg, #1a1a1a); border: 1px solid rgba(255,215,0,0.2);
  border-radius: 9px; padding: 11px 14px; color: var(--white);
  font-size: 14px; outline: none; transition: border-color 0.2s; width: 100%;
}
.field input:focus { border-color: rgba(255,215,0,0.5); }
.field input::placeholder { color: var(--text-muted); opacity: 0.6; }
.reg-error { color: #ff5252; font-size: 12px; margin-bottom: 10px; text-align: center; }

/* Provider cards */
.provider-cards { display: flex; gap: 12px; justify-content: center; margin-bottom: 16px; }
.provider-card {
  flex: 1; max-width: 150px; padding: 16px 12px;
  background: var(--dark-3); border: 2px solid rgba(255,255,255,0.07);
  border-radius: 14px; cursor: pointer; text-align: center;
  transition: border-color 0.2s; min-width: 100px;
}
.provider-card.selected { border-color: var(--gold); background: rgba(255,215,0,0.05); }
.provider-logo { font-size: 15px; font-weight: 900; padding: 8px 14px; border-radius: 8px; display: inline-block; margin-bottom: 8px; }
.mtn-logo   { background: #FFCC00; color: #000; }
.airtel-logo{ background: #ED1C24; color: #fff; }
.provider-name { font-size: 12px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.provider-num  { font-size: 11px; color: var(--gold); font-weight: 600; }

/* Payment instructions */
.payment-instructions {
  background: rgba(255,215,0,0.04); border: 1px solid rgba(255,215,0,0.15);
  border-radius: 12px; padding: 16px; text-align: left; margin-bottom: 16px;
}
.instr-title { font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; }
.instr-list { padding-left: 18px; color: var(--text-muted); font-size: 13px; line-height: 1.8; }
.instr-list strong { color: var(--white); }
.pay-amount-badge {
  margin-top: 12px; background: rgba(255,215,0,0.1);
  border-radius: 8px; padding: 8px 12px; font-size: 14px;
  font-weight: 800; color: var(--gold); display: flex;
  align-items: center; justify-content: space-between;
}
.pay-plan-tag { font-size: 10px; font-weight: 700; text-transform: uppercase; background: var(--gold); color: var(--dark); padding: 2px 8px; border-radius: 8px; }

/* Pending box */
/* Proof upload */
.proof-upload-block { margin: 14px 0; text-align: left; }
.proof-upload-label { font-size: 12px; color: #aaa; margin-bottom: 8px; }
.proof-optional { color: #666; }
.proof-file-btn {
  display: block; cursor: pointer; background: rgba(255,255,255,0.04);
  border: 1px dashed rgba(255,215,0,0.3); border-radius: 8px; padding: 10px 14px;
  font-size: 12px; color: #888; text-align: center; transition: border-color 0.2s;
}
.proof-file-btn:hover { border-color: rgba(255,215,0,0.6); color: #FFD700; }
.proof-file-input { display: none; }
.proof-preview-thumb { display: block; width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-top: 10px; border: 1px solid rgba(255,215,0,0.25); }
.late-proof { background: rgba(255,215,0,0.03); border: 1px solid rgba(255,215,0,0.1); border-radius: 10px; padding: 14px; }
.proof-upload-send-btn { margin-top: 10px; width: 100%; padding: 10px; background: rgba(255,215,0,0.15); border: 1px solid rgba(255,215,0,0.3); color: #FFD700; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; }
.proof-upload-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.proof-sent-msg { color: #4caf50; font-size: 13px; margin-top: 8px; }

.pending-box {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; padding: 16px; margin-bottom: 16px; text-align: left;
}
.pending-row { display: flex; justify-content: space-between; font-size: 13px; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.pending-row:last-child { border-bottom: none; }
.pending-row span { color: var(--text-muted); }
.pending-row strong { color: var(--white); }
.status-pending { background: rgba(255,165,0,0.15); color: #FFA500; font-size: 11px; font-weight: 700; padding: 2px 10px; border-radius: 10px; }

/* Betslip access */
.betslip-box { background: rgba(0,200,83,0.05); border: 1px solid rgba(0,200,83,0.2); border-radius: 14px; padding: 18px; margin-bottom: 16px; text-align: left; }
.betslip-badge { background: rgba(0,200,83,0.15); color: #00c853; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
.betslip-exp { font-size: 11px; color: var(--text-muted); margin-bottom: 14px; }
.betslip-section { margin-bottom: 14px; }
.betslip-label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; }
.betslip-link { color: var(--gold); font-size: 12px; word-break: break-all; display: block; }
.betslip-code-row { display: flex; align-items: center; gap: 10px; }
.betslip-code { background: var(--dark-3); padding: 8px 14px; border-radius: 8px; font-size: 16px; color: var(--gold); font-family: monospace; letter-spacing: 2px; flex: 1; }
.copy-btn { background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.3); color: var(--gold); font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 8px; cursor: pointer; white-space: nowrap; }
.copy-btn:hover { background: rgba(255,215,0,0.2); }
.whatsapp-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 13px; background: #25D366; color: #fff;
  border: none; border-radius: 12px; font-size: 14px; font-weight: 800;
  cursor: pointer; text-decoration: none; margin-top: 12px;
  transition: opacity 0.2s;
}
.whatsapp-btn:hover { opacity: 0.88; color: #fff; }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s; }
.modal-fade-enter-from, .modal-fade-leave-to       { opacity: 0; }

/* Goalpost accent */
.goalpost-accent { display: flex; justify-content: center; opacity: 0.5; margin-top: 8px; }

/* Responsive */
@media (max-width: 640px) {
  .picks-grid { grid-template-columns: 1fr; }
  .sh-row     { flex-direction: column; align-items: flex-start; }
}

/* ── Secret Code Step ── */
.secret-code-box {
  background: rgba(255, 215, 0, 0.06);
  border: 2px solid rgba(255, 215, 0, 0.4);
  border-radius: 16px;
  padding: 24px 20px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.secret-code-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}
.secret-code-display {
  font-size: 28px;
  font-weight: 900;
  font-family: monospace;
  color: var(--gold);
  letter-spacing: 4px;
  background: var(--dark-3);
  padding: 14px 24px;
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  word-break: break-all;
  text-align: center;
}
.secret-copy-btn {
  background: rgba(255, 215, 0, 0.15);
  border: 1px solid rgba(255, 215, 0, 0.4);
  color: var(--gold);
  font-size: 13px;
  font-weight: 700;
  padding: 8px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.secret-copy-btn:hover { background: rgba(255, 215, 0, 0.25); }
.secret-warning {
  background: rgba(255, 100, 0, 0.08);
  border: 1px solid rgba(255, 100, 0, 0.25);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 12px;
  color: #ffb347;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 8px;
}
</style>
