<template>
  <div class="vpe">

    <!-- ── Special Ticket Banner ── -->
    <div class="special-banner">
      <div class="sb-left">
        <span class="sb-icon">⭐</span>
        <div>
          <p class="sb-title">Special Ticket</p>
          <p class="sb-sub">
            Mark any package as <strong>Special</strong> below. Set its price to make it visible
            to users in the VIP selection screen. Clear the price to hide it.
          </p>
        </div>
      </div>
      <div v-if="specialPackage" class="sb-active">
        <span class="sb-active-label">ACTIVE</span>
        <span class="sb-active-name">{{ specialPackage.name }}</span>
        <span class="sb-active-price">{{ specialPackage.specialPrice != null ? Number(specialPackage.specialPrice).toLocaleString() + ' UGX' : 'No price set — hidden' }}</span>
      </div>
      <div v-else class="sb-none">No special ticket active</div>
    </div>

    <!-- ── Packages Table ── -->
    <div v-if="loading" class="vpe-loading">Loading packages…</div>
    <div v-else-if="fetchError" class="vpe-error">{{ fetchError }}</div>
    <template v-else>
      <div class="vpe-table-wrap">
        <table class="vpe-table">
          <thead>
            <tr>
              <th>Package</th>
              <th>Type</th>
              <th>Base Price</th>
              <th class="th-special">⭐ Special</th>
              <th class="th-special-price">Special Price</th>
              <th>Active</th>
              <th>Deadline</th>
              <th>Betslip Link</th>
              <th>Betslip Code</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="pkg in packages"
              :key="pkg.id"
              :class="{ 'row-special': pkg.isSpecial, 'row-inactive': !pkg.isActive }"
            >
              <!-- Name -->
              <td class="td-name">
                <span v-if="pkg.isSpecial" class="special-star">⭐</span>
                {{ pkg.name }}
                <span class="td-sub">{{ pkg.oddsType }}x odds · {{ pkg.planType }}</span>
              </td>

              <!-- Type badge -->
              <td>
                <span :class="['badge', 'badge-' + pkg.planType]">{{ pkg.planType }}</span>
              </td>

              <!-- Base price -->
              <td class="td-num">
                <input
                  v-model.number="pkg._price"
                  type="number"
                  class="field-sm"
                  min="0"
                  step="500"
                  @change="pkg._dirty = true"
                />
              </td>

              <!-- Special toggle -->
              <td class="td-center">
                <label class="toggle">
                  <input type="checkbox" v-model="pkg._isSpecial" @change="onSpecialToggle(pkg)" />
                  <span class="toggle-track"></span>
                </label>
              </td>

              <!-- Special price (only editable when isSpecial) -->
              <td class="td-num">
                <template v-if="pkg._isSpecial">
                  <input
                    v-model="pkg._specialPrice"
                    type="number"
                    class="field-sm field-gold"
                    min="0"
                    step="500"
                    placeholder="Set price to show"
                    @change="pkg._dirty = true"
                  />
                  <span class="field-hint">Clear to hide</span>
                </template>
                <span v-else class="td-muted">—</span>
              </td>

              <!-- Active toggle -->
              <td class="td-center">
                <label class="toggle">
                  <input type="checkbox" v-model="pkg._isActive" @change="pkg._dirty = true" />
                  <span class="toggle-track"></span>
                </label>
              </td>

              <!-- Subscription deadline -->
              <td>
                <input
                  v-model="pkg._deadline"
                  type="time"
                  class="field-sm"
                  @change="pkg._dirty = true"
                  title="Block new subscriptions after this time today (leave blank for no deadline)"
                />
                <span v-if="pkg._deadline" class="field-hint">Closes {{ formatDeadline(pkg._deadline) }}</span>
              </td>

              <!-- Betslip link -->
              <td>
                <input
                  v-model="pkg._betslipLink"
                  type="url"
                  class="field-url"
                  placeholder="https://…"
                  @input="pkg._dirty = true"
                />
              </td>

              <!-- Betslip code -->
              <td>
                <input
                  v-model="pkg._betslipCode"
                  type="text"
                  class="field-code"
                  placeholder="e.g. ABC123"
                  @input="pkg._dirty = true"
                />
              </td>

              <!-- Actions -->
              <td class="td-actions">
                <button
                  class="btn-save"
                  :disabled="!pkg._dirty || pkg._saving"
                  @click="savePackage(pkg)"
                  title="Save changes"
                >
                  {{ pkg._saving ? '…' : '💾' }}
                </button>
                <button
                  class="btn-del"
                  @click="deletePackage(pkg)"
                  title="Delete package"
                >
                  🗑
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-if="saveError" class="vpe-error" style="margin-top:10px">{{ saveError }}</p>

      <!-- ── Add New Package ── -->
      <div class="add-section">
        <h3 class="add-title">➕ Add New Package</h3>
        <form @submit.prevent="addPackage" class="add-form">
          <div class="add-row">
            <div class="add-field">
              <label>Name</label>
              <input v-model="newPkg.name" type="text" placeholder="e.g. Weekly VIP" required />
            </div>
            <div class="add-field add-field-sm">
              <label>Odds Type</label>
              <select v-model="newPkg.oddsType" required>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
                <option value="5">5x</option>
                <option value="10">10x</option>
              </select>
            </div>
            <div class="add-field add-field-sm">
              <label>Plan</label>
              <select v-model="newPkg.planType" required>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="special">Special</option>
              </select>
            </div>
            <div class="add-field add-field-sm">
              <label>Base Price (UGX)</label>
              <input v-model.number="newPkg.price" type="number" min="0" step="500" placeholder="5000" required />
            </div>
            <div class="add-field add-field-toggle">
              <label>Special?</label>
              <label class="toggle">
                <input type="checkbox" v-model="newPkg.isSpecial" />
                <span class="toggle-track"></span>
              </label>
            </div>
          </div>
          <p v-if="addError" class="vpe-error">{{ addError }}</p>
          <button type="submit" class="btn-add" :disabled="addLoading">
            {{ addLoading ? 'Adding…' : '+ Add Package' }}
          </button>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

function authHeaders() {
  return { Authorization: 'Bearer ' + localStorage.getItem('adminToken') }
}

export default {
  name: 'VipPackagesEditor',
  data() {
    return {
      packages:   [],
      loading:    true,
      fetchError: '',
      saveError:  '',
      addError:   '',
      addLoading: false,
      newPkg: { name: '', oddsType: '2', planType: 'weekly', price: 5000, isSpecial: false }
    }
  },
  computed: {
    specialPackage() {
      return this.packages.find(p => p._isSpecial) || null
    }
  },
  async mounted() {
    await this.fetchPackages()
  },
  methods: {
    formatDeadline(hhmm) {
      if (!hhmm) return ''
      const [h, m] = hhmm.split(':').map(Number)
      const ampm = h >= 12 ? 'PM' : 'AM'
      const hour = h % 12 || 12
      return `${hour}:${String(m).padStart(2, '0')} ${ampm}`
    },
    async fetchPackages() {
      this.loading    = true
      this.fetchError = ''
      try {
        const { data } = await axios.get('/api/groups/admin', { headers: authHeaders() })
        this.packages = data.map(g => {
          const norm = {
            ...g,
            isSpecial:            g.isSpecial            ?? g.is_special    ?? false,
            isActive:             g.isActive             ?? g.is_active     ?? true,
            specialPrice:         g.specialPrice != null ? g.specialPrice
                                : g.special_price != null ? g.special_price : null,
            betslipLink:          g.betslipLink  ?? g.betslip_link  ?? '',
            betslipCode:          g.betslipCode  ?? g.betslip_code  ?? '',
            subscriptionDeadline: g.subscriptionDeadline ?? g.subscription_deadline ?? null,
          }
          return {
            ...norm,
            _price:        norm.price,
            _specialPrice: norm.specialPrice != null ? norm.specialPrice : '',
            _betslipLink:  norm.betslipLink  || '',
            _betslipCode:  norm.betslipCode  || '',
            _isSpecial:    norm.isSpecial    || false,
            _isActive:     norm.isActive     !== false,
            _deadline:     norm.subscriptionDeadline || '',
            _dirty:        false,
            _saving:       false
          }
        })
      } catch (err) {
        this.fetchError = err.response?.data?.error || 'Failed to load packages'
      } finally {
        this.loading = false
      }
    },

    onSpecialToggle(pkg) {
      // Only one package can be special at a time
      if (pkg._isSpecial) {
        this.packages.forEach(p => {
          if (p.id !== pkg.id && p._isSpecial) {
            p._isSpecial = false
            p._dirty = true
          }
        })
      }
      pkg._dirty = true
    },

    async savePackage(pkg) {
      pkg._saving   = true
      this.saveError = ''
      try {
        // Laravel update() validates snake_case keys — must match exactly
        const payload = {
          name:                  pkg.name,
          price:                 Number(pkg._price),
          betslip_link:          pkg._betslipLink  || '',
          betslip_code:          pkg._betslipCode  || '',
          is_active:             pkg._isActive,
          is_special:            pkg._isSpecial,
          special_price:         pkg._isSpecial && pkg._specialPrice !== ''
            ? Number(pkg._specialPrice)
            : null,
          subscription_deadline: pkg._deadline || null
        }
        const { data } = await axios.patch('/api/groups/' + pkg.id, payload, { headers: authHeaders() })
        // Sync back from camelCase response (GroupController.formatGroup returns camelCase)
        pkg.price        = data.price
        pkg.specialPrice = data.specialPrice
        pkg.betslipLink  = data.betslipLink
        pkg.betslipCode  = data.betslipCode
        pkg.isSpecial    = data.isSpecial
        pkg.isActive     = data.isActive
        pkg._price        = data.price
        pkg._specialPrice = data.specialPrice != null ? data.specialPrice : ''
        pkg._betslipLink  = data.betslipLink  || ''
        pkg._betslipCode  = data.betslipCode  || ''
        pkg._isSpecial    = data.isSpecial    || false
        pkg._isActive     = data.isActive     !== false
        pkg._deadline     = data.subscriptionDeadline || ''
        pkg._dirty  = false      } catch (err) {
        this.saveError = err.response?.data?.error || err.response?.data?.message || 'Save failed'
      } finally {
        pkg._saving = false
      }
    },

    async deletePackage(pkg) {
      if (!confirm(`Delete "${pkg.name}"? This cannot be undone.`)) return
      try {
        await axios.delete('/api/groups/' + pkg.id, { headers: authHeaders() })
        this.packages = this.packages.filter(p => p.id !== pkg.id)
      } catch (err) {
        this.saveError = err.response?.data?.error || 'Delete failed'
      }
    },

    async addPackage() {
      this.addLoading = true
      this.addError   = ''
      try {
        // Laravel store() validates snake_case keys — transform before posting
        const body = {
          name:       this.newPkg.name,
          odds_type:  this.newPkg.oddsType,
          plan_type:  this.newPkg.planType,
          price:      Number(this.newPkg.price),
          is_special: this.newPkg.isSpecial || false
        }
        const { data } = await axios.post('/api/groups', body, { headers: authHeaders() })
        this.packages.push({
          ...data,
          _price:        data.price,
          _specialPrice: data.specialPrice != null ? data.specialPrice : '',
          _betslipLink:  data.betslipLink  || '',
          _betslipCode:  data.betslipCode  || '',
          _isSpecial:    data.isSpecial    || false,
          _isActive:     data.isActive     !== false,
          _dirty:        false,
          _saving:       false
        })
        this.newPkg = { name: '', oddsType: '2', planType: 'weekly', price: 5000, isSpecial: false }
      } catch (err) {
        this.addError = err.response?.data?.error || 'Failed to add package'
      } finally {
        this.addLoading = false
      }
    }
  }
}
</script>

<style scoped>
.vpe { padding: 0 0 40px; }

/* ── Special banner ── */
.special-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.05));
  border: 1px solid rgba(255,215,0,0.25);
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.sb-left { display: flex; align-items: flex-start; gap: 14px; }
.sb-icon { font-size: 28px; line-height: 1; }
.sb-title { font-size: 15px; font-weight: 800; color: #FFD700; margin: 0 0 4px; }
.sb-sub   { font-size: 12px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.5; max-width: 420px; }
.sb-sub strong { color: #FFD700; }
.sb-active { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.sb-active-label { font-size: 10px; font-weight: 800; letter-spacing: 1px; color: #000; background: #4caf50; border-radius: 6px; padding: 3px 8px; }
.sb-active-name  { font-size: 14px; font-weight: 700; color: #fff; }
.sb-active-price { font-size: 14px; font-weight: 700; color: #FFD700; }
.sb-none { font-size: 13px; color: rgba(255,255,255,0.35); font-style: italic; }

/* ── Table ── */
.vpe-table-wrap { overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); }
.vpe-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 860px;
}
.vpe-table thead tr { background: rgba(255,255,255,0.04); }
.vpe-table th {
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  padding: 12px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  white-space: nowrap;
}
.th-special       { color: #FFD700; }
.th-special-price { color: rgba(255,215,0,0.6); }
.vpe-table td {
  padding: 11px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  vertical-align: middle;
  color: rgba(255,255,255,0.85);
}
.vpe-table tbody tr:last-child td { border-bottom: none; }
.vpe-table tbody tr:hover { background: rgba(255,255,255,0.03); }
.row-special { background: rgba(255,215,0,0.04) !important; }
.row-inactive { opacity: 0.5; }

.td-name { font-weight: 600; }
.td-sub  { display: block; font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 400; margin-top: 2px; }
.td-num  { white-space: nowrap; }
.td-center { text-align: center; }
.td-muted  { color: rgba(255,255,255,0.25); }
.td-actions { white-space: nowrap; }
.special-star { margin-right: 4px; }

/* Badges */
.badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.badge-daily   { background: rgba(255,215,0,0.15); color: #FFD700; }
.badge-weekly  { background: rgba(100,210,255,0.15); color: #64d2ff; }
.badge-monthly { background: rgba(120,255,150,0.15); color: #78ff96; }
.badge-special { background: rgba(255,100,100,0.15); color: #ff6464; }

/* Inputs */
.field-sm {
  width: 90px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px;
  padding: 6px 10px;
  color: #fff;
  font-size: 13px;
  outline: none;
}
.field-gold { border-color: rgba(255,215,0,0.35); color: #FFD700; background: rgba(255,215,0,0.06); }
.field-url, .field-code {
  width: 100%;
  min-width: 120px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px;
  padding: 6px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
}
.field-url:focus, .field-code:focus, .field-sm:focus { border-color: rgba(255,215,0,0.4); }
.field-hint { display: block; font-size: 10px; color: rgba(255,255,255,0.35); margin-top: 3px; }

/* Toggle */
.toggle { position: relative; display: inline-flex; cursor: pointer; }
.toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle-track {
  width: 36px; height: 20px;
  background: rgba(255,255,255,0.12);
  border-radius: 20px;
  transition: background 0.2s;
  position: relative;
}
.toggle-track::after {
  content: '';
  position: absolute;
  top: 3px; left: 3px;
  width: 14px; height: 14px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  transition: transform 0.2s, background 0.2s;
}
.toggle input:checked + .toggle-track { background: #FFD700; }
.toggle input:checked + .toggle-track::after { transform: translateX(16px); background: #000; }

/* Buttons */
.btn-save {
  background: rgba(255,215,0,0.12);
  border: 1px solid rgba(255,215,0,0.3);
  border-radius: 7px;
  padding: 5px 10px;
  color: #FFD700;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
  margin-right: 6px;
}
.btn-save:hover:not(:disabled) { background: rgba(255,215,0,0.22); }
.btn-save:disabled { opacity: 0.35; cursor: not-allowed; }
.btn-del {
  background: rgba(255,82,82,0.1);
  border: 1px solid rgba(255,82,82,0.25);
  border-radius: 7px;
  padding: 5px 10px;
  color: #ff5252;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.btn-del:hover { background: rgba(255,82,82,0.22); }

/* ── Add section ── */
.add-section {
  margin-top: 28px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 22px 24px;
}
.add-title { font-size: 14px; font-weight: 800; color: #fff; margin: 0 0 18px; }
.add-row   { display: flex; gap: 14px; flex-wrap: wrap; align-items: flex-end; margin-bottom: 14px; }
.add-field { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px; }
.add-field-sm { flex: 0 0 130px; min-width: 0; }
.add-field-toggle { flex: 0 0 80px; align-items: center; gap: 10px; flex-direction: row; padding-bottom: 4px; }
.add-field label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.6px; }
.add-field input,
.add-field select {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 9px;
  padding: 10px 12px;
  color: #fff;
  font-size: 13px;
  outline: none;
  width: 100%;
}
.add-field select option { background: #1a1a2e; }
.add-field input:focus, .add-field select:focus { border-color: rgba(255,215,0,0.4); }
.btn-add {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 11px 24px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-add:hover:not(:disabled) { opacity: 0.88; }
.btn-add:disabled { opacity: 0.5; cursor: not-allowed; }

.vpe-loading { color: rgba(255,255,255,0.5); padding: 32px 0; text-align: center; }
.vpe-error { color: #ff5252; font-size: 13px; background: rgba(255,82,82,0.08); border-radius: 8px; padding: 10px 14px; }
</style>
