<template>
  <div class="editor">
    <p class="editor-desc">
      Review payment submissions and confirm access. Subscriptions are separated by Daily and Weekly tiers, and further by odds package (1.5, 2, or 5 Odds) with individual betslip codes per package.
    </p>

    <!-- Tier tabs -->
    <div class="tier-tabs">
      <button
        :class="['tier-tab', 'daily-tab', { active: activeTier === 'daily' }]"
        @click="activeTier = 'daily'; filterOdds = 'all'"
      >
        <span class="tier-dot daily-dot"></span>
        Daily
        <span class="tier-count">{{ countByTier('daily') }}</span>
      </button>
      <button
        :class="['tier-tab', 'weekly-tab', { active: activeTier === 'weekly' }]"
        @click="activeTier = 'weekly'; filterOdds = 'all'"
      >
        <span class="tier-dot weekly-dot"></span>
        Weekly
        <span class="tier-count">{{ countByTier('weekly') }}</span>
      </button>
    </div>

    <!-- Odds sub-filter chips -->
    <div class="odds-filter-row">
      <button
        v-for="chip in oddsChips"
        :key="chip.val"
        :class="['odds-chip', { active: filterOdds === chip.val }]"
        @click="filterOdds = chip.val"
      >{{ chip.label }} <span class="count">{{ countByOdds(chip.val) }}</span></button>
    </div>

    <!-- Status filter toolbar -->
    <div class="toolbar">
      <button
        v-for="f in filters"
        :key="f.val"
        :class="['filter-btn', { active: filterStatus === f.val }]"
        @click="filterStatus = f.val"
      >{{ f.label }} <span class="count">{{ countByStatus(f.val) }}</span></button>
    </div>

    <div v-if="loading" class="state-msg">Loading&hellip;</div>
    <div v-else-if="displayed.length === 0" class="empty-state">No {{ filterStatus !== 'all' ? filterStatus : '' }} records for {{ activeTier }}{{ filterOdds !== 'all' ? ' · ' + filterOdds + ' odds' : '' }}.</div>

    <div v-else class="sub-list">
      <div
        v-for="s in displayed"
        :key="s.id"
        :class="['sub-card', s.planType + '-card', { 'highlight-card': highlightId === s.id }]"
        :ref="'card-' + s.id"
      >
        <!-- Tier ribbon -->
        <div class="tier-ribbon-row">
          <div :class="['tier-ribbon', s.planType + '-ribbon']">
            {{ s.planType === 'daily' ? 'DAILY' : 'WEEKLY' }}
          </div>
          <div class="odds-ribbon">{{ s.oddsType || '2' }} ODDS</div>
        </div>

        <div class="sub-top">
          <div class="sub-user">
            <span class="sub-name">{{ s.userName || 'Unknown' }}</span>
            <span class="sub-phone">&#128222; {{ s.userPhone || s.phone || '&mdash;' }}</span>
          </div>
          <div class="sub-meta">
            <span :class="['plan-tag', s.planType]">{{ s.planType }}</span>
            <span class="sub-amount">{{ s.amount ? s.amount.toLocaleString() + ' UGX' : '&mdash;' }}</span>
            <span :class="['status-badge', 'st-' + s.status]">{{ s.status }}</span>
          </div>
        </div>

        <div class="sub-details">
          <span class="detail-row"><strong>Provider:</strong> {{ s.paymentMethod || '&mdash;' }}</span>
          <span class="detail-row"><strong>Submitted:</strong> {{ formatDate(s.createdAt) }}</span>
          <span v-if="s.expiresAt" class="detail-row"><strong>Expires:</strong> {{ formatDate(s.expiresAt) }}</span>
        </div>

        <!-- Proof of payment -->
        <div v-if="s.proofUrl" class="proof-row">
          <span class="proof-label">&#128206; Proof of payment:</span>
          <img
            :src="s.proofUrl"
            class="proof-thumb"
            alt="Proof of payment"
            @click="lightboxUrl = s.proofUrl"
            title="Click to view full size"
          />
        </div>
        <div v-else-if="s.status === 'pending'" class="proof-missing">
          &#9888; No proof uploaded yet
        </div>

        <!-- Rejection reason -->
        <div v-if="s.status === 'rejected' && s.rejectionReason" class="rejection-info">
          <strong>Rejection reason:</strong> {{ s.rejectionReason }}
        </div>

        <!-- Betslip info (active) -->
        <div v-if="s.status === 'active' && (s.betslipLink || s.betslipCode)" class="betslip-info">
          <span v-if="s.betslipLink">&#128279; <a :href="s.betslipLink" target="_blank" rel="noopener">{{ s.betslipLink }}</a></span>
          <span v-if="s.betslipCode">Code: <strong class="code">{{ s.betslipCode }}</strong></span>
        </div>

        <!-- Renew / Revoke (active or expired) -->
        <div v-if="s.status === 'active' || s.status === 'expired'" class="action-row">
          <button :class="['renew-btn', s.planType + '-renew']" @click="renewSub(s)" :disabled="renewing[s.id]">
            {{ renewing[s.id] ? 'Renewing&hellip;' : '&#128260; Renew' }}
          </button>
          <button v-if="s.status === 'active'" class="revoke-btn" @click="revokeSub(s)" :disabled="revoking[s.id]">
            {{ revoking[s.id] ? 'Revoking&hellip;' : '&#128683; Revoke' }}
          </button>
        </div>

        <!-- Confirm panel (pending only) -->
        <div v-if="s.status === 'pending'" :class="['confirm-panel', s.planType + '-panel']">
          <h4 class="cp-title">Confirm Payment &amp; Assign Betslip</h4>
          <div class="cp-fields">
            <div class="cp-field">
              <label>Betslip Link (optional)</label>
              <input v-model="confirm[s.id].betslipLink" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
            </div>
            <div class="cp-field">
              <label>Betslip Code (optional)</label>
              <input v-model="confirm[s.id].betslipCode" type="text" placeholder="e.g. ABC123" />
            </div>
          </div>
          <p class="cp-hint">Leave blank to auto-fill from tier default below</p>
          <div class="cp-actions">
            <button :class="['confirm-btn', s.planType + '-confirm']" @click="confirmSub(s)" :disabled="confirming[s.id]">
              {{ confirming[s.id] ? 'Confirming&hellip;' : '&#10003; Confirm &amp; Activate' }}
            </button>
            <button class="reject-open-btn" @click="openReject(s.id)">&#10005; Reject</button>
          </div>

          <!-- Inline reject form -->
          <div v-if="rejectOpen[s.id]" class="reject-form">
            <label class="reject-label">Rejection reason (optional)</label>
            <input v-model="rejectReason[s.id]" type="text" class="reject-input" placeholder="e.g. Wrong amount sent" />
            <div class="reject-actions">
              <button class="reject-confirm-btn" @click="rejectSub(s)" :disabled="rejecting[s.id]">
                {{ rejecting[s.id] ? 'Rejecting&hellip;' : 'Confirm Rejection' }}
              </button>
              <button class="reject-cancel-btn" @click="rejectOpen[s.id] = false">Cancel</button>
            </div>
          </div>
        </div>

        <button v-if="s.status !== 'pending'" class="icon-del" @click="deleteSub(s.id)" title="Remove">&#128465;</button>
      </div>
    </div>

    <!-- Proof lightbox -->
    <div v-if="lightboxUrl" class="lightbox-overlay" @click="lightboxUrl = null">
      <div class="lightbox-box" @click.stop>
        <button class="lightbox-close" @click="lightboxUrl = null">&#10005;</button>
        <img :src="lightboxUrl" class="lightbox-img" alt="Proof of payment" />
      </div>
    </div>

    <!-- VIP Config section -->
    <div class="vip-config-section">
      <h3 class="vc-title">VIP Payment Settings</h3>
      <div v-if="cfgLoading" class="state-msg">Loading config&hellip;</div>
      <form v-else @submit.prevent="saveConfig" class="cfg-form">
        <div class="cfg-section-label">&#128176; Payment Numbers</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>MTN Number</label>
            <input v-model="cfg.mtn_number" type="text" placeholder="e.g. 0772000000" />
          </div>
          <div class="cfg-field">
            <label>Airtel Number</label>
            <input v-model="cfg.airtel_number" type="text" placeholder="e.g. 0752000000" />
          </div>
        </div>

        <!-- ── 1.5 Odds Weekly ── -->
        <div class="cfg-section-label pkg-label pkg-1-5">&#9670; 1.5 Odds &mdash; Weekly</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>Price (UGX)</label>
            <input v-model.number="cfg.odds_1_5_weekly_price" type="number" min="0" placeholder="45000" />
          </div>
          <div class="cfg-field">
            <label>Betslip Code</label>
            <input v-model="cfg.odds_1_5_weekly_betslip_code" type="text" placeholder="e.g. W15CODE" />
          </div>
        </div>
        <div class="cfg-row">
          <div class="cfg-field cfg-field-full">
            <label>Betslip Link</label>
            <input v-model="cfg.odds_1_5_weekly_betslip_link" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
          </div>
        </div>

        <!-- ── 2 Odds Daily ── -->
        <div class="cfg-section-label pkg-label pkg-2 daily-label">&#9670; 2 Odds &mdash; Daily</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>Price (UGX)</label>
            <input v-model.number="cfg.odds_2_daily_price" type="number" min="0" placeholder="10000" />
          </div>
          <div class="cfg-field">
            <label>Betslip Code</label>
            <input v-model="cfg.odds_2_daily_betslip_code" type="text" placeholder="e.g. D2CODE" />
          </div>
        </div>
        <div class="cfg-row">
          <div class="cfg-field cfg-field-full">
            <label>Betslip Link</label>
            <input v-model="cfg.odds_2_daily_betslip_link" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
          </div>
        </div>

        <!-- ── 2 Odds Weekly ── -->
        <div class="cfg-section-label pkg-label pkg-2 weekly-label">&#9670; 2 Odds &mdash; Weekly</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>Price (UGX)</label>
            <input v-model.number="cfg.odds_2_weekly_price" type="number" min="0" placeholder="45000" />
          </div>
          <div class="cfg-field">
            <label>Betslip Code</label>
            <input v-model="cfg.odds_2_weekly_betslip_code" type="text" placeholder="e.g. W2CODE" />
          </div>
        </div>
        <div class="cfg-row">
          <div class="cfg-field cfg-field-full">
            <label>Betslip Link</label>
            <input v-model="cfg.odds_2_weekly_betslip_link" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
          </div>
        </div>

        <!-- ── 5 Odds Daily ── -->
        <div class="cfg-section-label pkg-label pkg-5 daily-label">&#9670; 5 Odds &mdash; Daily</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>Price (UGX)</label>
            <input v-model.number="cfg.odds_5_daily_price" type="number" min="0" placeholder="15000" />
          </div>
          <div class="cfg-field">
            <label>Betslip Code</label>
            <input v-model="cfg.odds_5_daily_betslip_code" type="text" placeholder="e.g. D5CODE" />
          </div>
        </div>
        <div class="cfg-row">
          <div class="cfg-field cfg-field-full">
            <label>Betslip Link</label>
            <input v-model="cfg.odds_5_daily_betslip_link" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
          </div>
        </div>

        <!-- ── 5 Odds Weekly ── -->
        <div class="cfg-section-label pkg-label pkg-5 weekly-label">&#9670; 5 Odds &mdash; Weekly</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>Price (UGX)</label>
            <input v-model.number="cfg.odds_5_weekly_price" type="number" min="0" placeholder="55000" />
          </div>
          <div class="cfg-field">
            <label>Betslip Code</label>
            <input v-model="cfg.odds_5_weekly_betslip_code" type="text" placeholder="e.g. W5CODE" />
          </div>
        </div>
        <div class="cfg-row">
          <div class="cfg-field cfg-field-full">
            <label>Betslip Link</label>
            <input v-model="cfg.odds_5_weekly_betslip_link" type="url" placeholder="https://betpawa.ug/share/&hellip;" />
          </div>
        </div>

        <div class="cfg-section-label">&#9881; Other Settings</div>
        <div class="cfg-row">
          <div class="cfg-field">
            <label>WhatsApp Community Link</label>
            <input v-model="cfg.whatsapp_link" type="url" placeholder="https://chat.whatsapp.com/&hellip;" />
          </div>
          <div class="cfg-field">
            <label>Video Ad URL</label>
            <input v-model="cfg.ad_video_url" type="url" placeholder="https://youtu.be/&hellip;" />
          </div>
        </div>

        <div class="cfg-actions">
          <button type="submit" class="save-btn" :disabled="cfgSaving">{{ cfgSaving ? 'Saving&hellip;' : '&#10003; Save Settings' }}</button>
          <span v-if="cfgSaved" class="saved-msg">&#10003; Saved!</span>
          <span v-if="cfgError" class="error-msg">&#9888; {{ cfgError }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import adminApi from '../../utils/adminApi'

export default {
  name: 'PaymentsOverview',
  props: {
    focusSubscriptionId: { type: Number, default: null }
  },
  data() {
    return {
      subscriptions: [],
      loading: true,
      activeTier: 'daily',
      filterStatus: 'all',
      filterOdds: 'all',
      filters: [
        { val: 'all',      label: 'All' },
        { val: 'pending',  label: 'Pending' },
        { val: 'active',   label: 'Active' },
        { val: 'rejected', label: 'Rejected' },
        { val: 'expired',  label: 'Expired' }
      ],
      confirm:     {},
      confirming:  {},
      renewing:    {},
      revoking:    {},
      rejectOpen:  {},
      rejectReason:{},
      rejecting:   {},
      highlightId: null,
      lightboxUrl: null,
      cfg: {},
      cfgLoading: true,
      cfgSaving:  false,
      cfgSaved:   false,
      cfgError:   ''
    }
  },
  computed: {
    tierSubs() {
      return this.subscriptions.filter(s => s.planType === this.activeTier)
    },
    oddsChips() {
      const daily   = [{ val: 'all', label: 'All' }, { val: '2', label: '2 Odds' }, { val: '5', label: '5 Odds' }]
      const weekly  = [{ val: 'all', label: 'All' }, { val: '1.5', label: '1.5 Odds' }, { val: '2', label: '2 Odds' }, { val: '5', label: '5 Odds' }]
      return this.activeTier === 'daily' ? daily : weekly
    },
    displayed() {
      let subs = this.tierSubs
      if (this.filterOdds !== 'all') subs = subs.filter(s => (s.oddsType || '2') === this.filterOdds)
      if (this.filterStatus !== 'all') subs = subs.filter(s => s.status === this.filterStatus)
      return subs
    }
  },
  watch: {
    focusSubscriptionId(id) { if (id) this.focusOnSub(id) }
  },
  async mounted() {
    await Promise.all([this.loadSubs(), this.loadConfig()])
    if (this.focusSubscriptionId) {
      this.$nextTick(() => this.focusOnSub(this.focusSubscriptionId))
    }
  },
  methods: {
    async loadSubs() {
      this.loading = true
      try {
        const { data } = await adminApi.get('/api/subscriptions')
        this.subscriptions = data
        data.forEach(s => {
          if (!this.confirm[s.id])      this.confirm[s.id]      = { betslipLink: '', betslipCode: '' }
          if (!this.rejectReason[s.id]) this.rejectReason[s.id] = ''
          if (this.rejectOpen[s.id] === undefined) this.rejectOpen[s.id] = false
        })
      } catch {
        this.subscriptions = []
      } finally {
        this.loading = false
      }
    },
    async loadConfig() {
      this.cfgLoading = true
      try {
        const { data } = await axios.get('/api/config/vip-config')
        this.cfg = { ...data }
      } catch {
        this.cfg = {}
      } finally {
        this.cfgLoading = false
      }
    },
    countByTier(tier) {
      return this.subscriptions.filter(s => s.planType === tier).length
    },
    countByStatus(val) {
      if (val === 'all') return this.tierSubs.length
      return this.tierSubs.filter(s => s.status === val).length
    },
    countByOdds(val) {
      if (val === 'all') return this.tierSubs.length
      return this.tierSubs.filter(s => (s.oddsType || '2') === val).length
    },
    formatDate(ts) {
      if (!ts) return '\u2014'
      return new Date(ts).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    },
    focusOnSub(id) {
      const sub = this.subscriptions.find(s => s.id === id)
      if (!sub) return
      this.activeTier   = sub.planType || 'daily'
      this.filterOdds   = 'all'
      this.filterStatus = 'all'
      this.highlightId = id
      this.$nextTick(() => {
        const el = this.$refs['card-' + id]
        const node = Array.isArray(el) ? el[0] : el
        if (node) node.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => { this.highlightId = null }, 3000)
      })
    },
    async confirmSub(sub) {
      this.confirming = { ...this.confirming, [sub.id]: true }
      try {
        const { betslipLink, betslipCode } = this.confirm[sub.id]
        const { data } = await adminApi.patch('/api/subscriptions/' + sub.id, {
          status: 'active', betslipLink, betslipCode
        })
        this.updateSub(sub.id, data)
      } catch {
        alert('Confirm failed.')
      } finally {
        this.confirming = { ...this.confirming, [sub.id]: false }
      }
    },
    async renewSub(sub) {
      this.renewing = { ...this.renewing, [sub.id]: true }
      try {
        const { data } = await adminApi.post('/api/subscriptions/' + sub.id + '/renew')
        this.updateSub(sub.id, data)
      } catch {
        alert('Renew failed.')
      } finally {
        this.renewing = { ...this.renewing, [sub.id]: false }
      }
    },
    async revokeSub(sub) {
      if (!confirm('Revoke access for ' + (sub.userName || 'this user') + '?')) return
      this.revoking = { ...this.revoking, [sub.id]: true }
      try {
        const { data } = await adminApi.patch('/api/subscriptions/' + sub.id, {
          status: 'rejected',
          rejectionReason: 'Access revoked by admin'
        })
        this.updateSub(sub.id, data)
      } catch {
        alert('Revoke failed.')
      } finally {
        this.revoking = { ...this.revoking, [sub.id]: false }
      }
    },
    openReject(id) {
      this.rejectOpen   = { ...this.rejectOpen,   [id]: true }
      this.rejectReason = { ...this.rejectReason, [id]: '' }
    },
    async rejectSub(sub) {
      this.rejecting = { ...this.rejecting, [sub.id]: true }
      try {
        const { data } = await adminApi.patch('/api/subscriptions/' + sub.id, {
          status: 'rejected',
          rejectionReason: this.rejectReason[sub.id] || ''
        })
        this.updateSub(sub.id, data)
        this.rejectOpen[sub.id] = false
      } catch {
        alert('Rejection failed.')
      } finally {
        this.rejecting = { ...this.rejecting, [sub.id]: false }
      }
    },
    updateSub(id, newData) {
      const idx = this.subscriptions.findIndex(s => s.id === id)
      if (idx !== -1) this.subscriptions.splice(idx, 1, { ...this.subscriptions[idx], ...newData })
    },
    async deleteSub(id) {
      if (!confirm('Delete this subscription record?')) return
      try {
        await adminApi.delete('/api/subscriptions/' + id)
        this.subscriptions = this.subscriptions.filter(s => s.id !== id)
      } catch {
        alert('Delete failed.')
      }
    },
    async saveConfig() {
      this.cfgSaving = true
      this.cfgSaved  = false
      this.cfgError  = ''
      try {
        await adminApi.put('/api/config/vip-config', this.cfg)
        this.cfgSaved = true
        setTimeout(() => { this.cfgSaved = false }, 3000)
      } catch {
        this.cfgError = 'Save failed.'
      } finally {
        this.cfgSaving = false
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 960px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 20px; line-height: 1.6; }
.state-msg { font-size: 14px; color: #888; padding: 12px; }
.empty-state { padding: 32px; text-align: center; color: #555; font-size: 14px; background: #111; border-radius: 10px; margin-bottom: 24px; }

/* Tier tabs */
.tier-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
.tier-tab { display: flex; align-items: center; gap: 8px; padding: 10px 22px; border-radius: 24px; border: 2px solid transparent; background: #111; color: #888; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
.daily-tab.active  { border-color: #4fc3f7; color: #4fc3f7; background: rgba(79,195,247,0.08); }
.weekly-tab.active { border-color: #FFD700; color: #FFD700; background: rgba(255,215,0,0.08); }
.tier-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.daily-dot  { background: #4fc3f7; }
.weekly-dot { background: #FFD700; }
.tier-count { background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 10px; font-size: 11px; }

/* Filter toolbar */
.toolbar { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.filter-btn { background: #111; border: 1px solid rgba(255,255,255,0.08); color: #888; font-size: 13px; font-weight: 700; padding: 7px 14px; border-radius: 20px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
.filter-btn.active { border-color: var(--gold, #FFD700); color: #FFD700; background: rgba(255,215,0,0.07); }
.count { background: rgba(255,255,255,0.08); padding: 1px 7px; border-radius: 10px; font-size: 11px; }

/* Sub cards */
.sub-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
.sub-card { background: #111; border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px 20px; position: relative; border-left: 4px solid transparent; transition: box-shadow 0.3s; }
.daily-card  { border-left-color: #4fc3f7; }
.weekly-card { border-left-color: #FFD700; }
.highlight-card { box-shadow: 0 0 0 3px rgba(255,215,0,0.45), 0 8px 24px rgba(0,0,0,0.5); }

/* Tier ribbon */
.tier-ribbon { display: inline-block; font-size: 9px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 10px; border-radius: 8px; margin-bottom: 10px; }
.daily-ribbon  { background: rgba(79,195,247,0.12); color: #4fc3f7; }
.weekly-ribbon { background: rgba(255,215,0,0.12);  color: #FFD700; }

.sub-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 10px; }
.sub-user { display: flex; flex-direction: column; gap: 4px; }
.sub-name  { font-size: 15px; font-weight: 700; color: #fff; }
.sub-phone { font-size: 12px; color: #888; }
.sub-meta  { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.plan-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 10px; text-transform: uppercase; }
.plan-tag.daily  { background: rgba(79,195,247,0.1);  color: #4fc3f7; }
.plan-tag.weekly { background: rgba(255,215,0,0.1);   color: #FFD700; }
.sub-amount { font-size: 13px; font-weight: 700; color: #fff; }
.status-badge { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 10px; text-transform: uppercase; }
.st-pending  { background: rgba(255,165,0,0.1);   color: #FFA500; }
.st-active   { background: rgba(0,200,83,0.1);    color: #00c853; }
.st-rejected { background: rgba(255,82,82,0.1);   color: #ff5252; }
.st-expired  { background: rgba(255,255,255,0.05); color: #555; }
.sub-details { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 14px; }
.detail-row { font-size: 12px; color: #888; }
.detail-row strong { color: #aaa; }

/* Proof */
.proof-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.proof-label { font-size: 12px; color: #888; }
.proof-thumb { width: 72px; height: 72px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,215,0,0.25); cursor: pointer; transition: transform 0.15s; }
.proof-thumb:hover { transform: scale(1.05); }
.proof-missing { font-size: 12px; color: #666; margin-bottom: 12px; }
.rejection-info { font-size: 12px; color: #ff7272; background: rgba(255,82,82,0.07); border-radius: 8px; padding: 8px 12px; margin-bottom: 12px; }

/* Betslip info */
.betslip-info { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #888; margin-bottom: 12px; }
.betslip-info a { color: #FFD700; word-break: break-all; }
.code { color: #FFD700; font-size: 15px; font-family: monospace; letter-spacing: 2px; }

/* Renew / Revoke */
.action-row { display: flex; gap: 8px; margin-bottom: 8px; }
.renew-btn { padding: 8px 18px; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.renew-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.daily-renew  { background: rgba(79,195,247,0.15); color: #4fc3f7; border: 1px solid rgba(79,195,247,0.3); }
.weekly-renew { background: rgba(255,215,0,0.12);  color: #FFD700; border: 1px solid rgba(255,215,0,0.3); }
.revoke-btn { padding: 8px 18px; background: rgba(255,82,82,0.1); border: 1px solid rgba(255,82,82,0.25); color: #ff5252; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.revoke-btn:hover { background: rgba(255,82,82,0.2); }
.revoke-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Confirm panel */
.confirm-panel { border-radius: 10px; padding: 16px; margin-top: 8px; }
.daily-panel   { background: rgba(79,195,247,0.04); border: 1px solid rgba(79,195,247,0.2); }
.weekly-panel  { background: rgba(255,215,0,0.04);  border: 1px solid rgba(255,215,0,0.2); }
.cp-title { font-size: 13px; font-weight: 700; color: #FFD700; margin-bottom: 12px; }
.cp-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 10px; }
.cp-hint { font-size: 11px; color: #555; margin-bottom: 12px; }
.cp-field { display: flex; flex-direction: column; gap: 6px; }
.cp-field label { font-size: 10px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.cp-field input { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.2); border-radius: 8px; padding: 9px 12px; color: #fff; font-size: 13px; outline: none; }
.cp-field input:focus { border-color: rgba(255,215,0,0.45); }
.cp-actions { display: flex; gap: 10px; }
.confirm-btn { flex: 1; padding: 10px; border: none; border-radius: 8px; font-size: 13px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.confirm-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.daily-confirm  { background: linear-gradient(135deg,#0288d1,#4fc3f7); color: #000; }
.weekly-confirm { background: linear-gradient(135deg,#B8860B,#FFD700); color: #000; }
.reject-open-btn { padding: 10px 16px; background: rgba(255,82,82,0.1); border: 1px solid rgba(255,82,82,0.2); color: #ff5252; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; }
.reject-open-btn:hover { background: rgba(255,82,82,0.2); }

/* Inline reject form */
.reject-form { margin-top: 12px; background: rgba(255,82,82,0.05); border: 1px solid rgba(255,82,82,0.15); border-radius: 8px; padding: 12px; }
.reject-label { display: block; font-size: 10px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
.reject-input { width: 100%; background: #1a1a1a; border: 1px solid rgba(255,82,82,0.25); border-radius: 7px; padding: 9px 12px; color: #fff; font-size: 13px; outline: none; box-sizing: border-box; }
.reject-input:focus { border-color: rgba(255,82,82,0.5); }
.reject-actions { display: flex; gap: 8px; margin-top: 10px; }
.reject-confirm-btn { flex: 1; padding: 9px; background: #c0392b; color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; }
.reject-confirm-btn:disabled { opacity: 0.5; }
.reject-cancel-btn { padding: 9px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #aaa; border-radius: 8px; font-size: 13px; cursor: pointer; }

.icon-del { position: absolute; top: 14px; right: 16px; background: none; border: none; font-size: 16px; cursor: pointer; opacity: 0.5; transition: opacity 0.2s; }
.icon-del:hover { opacity: 1; }

/* Lightbox */
.lightbox-overlay { position: fixed; inset: 0; z-index: 2000; background: rgba(0,0,0,0.88); display: flex; align-items: center; justify-content: center; }
.lightbox-box { position: relative; max-width: 90vw; max-height: 90vh; }
.lightbox-close { position: absolute; top: -14px; right: -14px; background: #333; border: none; color: #fff; font-size: 18px; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; z-index: 1; }
.lightbox-img { display: block; max-width: 90vw; max-height: 88vh; border-radius: 10px; object-fit: contain; }

/* VIP Config */
.vip-config-section { border-top: 1px solid rgba(255,215,0,0.12); padding-top: 32px; margin-top: 12px; }
.vc-title { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 20px; }
.cfg-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 24px; }
.cfg-section-label { font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #666; margin-bottom: 12px; margin-top: 8px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.daily-label  { color: #4fc3f7; }
.weekly-label { color: #FFD700; }
.cfg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.cfg-field { display: flex; flex-direction: column; gap: 7px; }
.cfg-field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.cfg-field input { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.cfg-field input:focus { border-color: rgba(255,215,0,0.45); }
.cfg-actions { display: flex; align-items: center; gap: 16px; margin-top: 4px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

@media (max-width: 600px) {
  .cp-fields, .cfg-row { grid-template-columns: 1fr; }
  .sub-top { flex-direction: column; }
  .tier-tabs { flex-direction: column; }
}

/* Odds sub-filter chips */
.odds-filter-row { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 18px; }
.odds-chip { background: #111; border: 1px solid rgba(255,255,255,0.08); color: #888; font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 5px; }
.odds-chip.active { border-color: #a78bfa; color: #a78bfa; background: rgba(167,139,250,0.08); }
.odds-chip .count { background: rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 8px; font-size: 10px; }

/* Tier ribbon row */
.tier-ribbon-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.odds-ribbon { display: inline-block; font-size: 9px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 10px; border-radius: 8px; background: rgba(167,139,250,0.12); color: #a78bfa; }

/* Package config labels */
.pkg-label { margin-top: 16px; }
.pkg-1-5 { color: #4fc3f7; }
.pkg-2   { color: var(--gold, #FFD700); }
.pkg-5   { color: #ff7043; }
.cfg-field-full { grid-column: 1 / -1; }
</style>
