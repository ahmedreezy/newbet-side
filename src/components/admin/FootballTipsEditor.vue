<template>
  <div class="editor">
    <p class="editor-desc">
      Manage today's <strong>Almax Predictions</strong> shown on the home page. Add images for visual picks.
    </p>

    <!-- Current tips list -->
    <div v-if="loading" class="state-msg">Loading predictions…</div>
    <div v-else>
      <div v-if="tips.length === 0" class="empty-state">No predictions added yet. Add your first one below.</div>
      <div v-else class="tips-list">
        <div v-for="tip in tips" :key="tip.id" class="tip-row">
          <img v-if="tip.imageUrl" :src="'/api/' + tip.imageUrl" class="tip-thumb" alt="" />
          <div class="tip-info">
            <span class="tip-match">{{ tip.home }} vs {{ tip.away }}</span>
            <span class="tip-comp">{{ tip.competition }} · {{ tip.kickoff }}</span>
            <span v-if="tip.prediction" class="tip-pred">🔒 {{ tip.prediction }}</span>
          </div>
          <div class="tip-meta">
            <span class="tip-prob">{{ tip.winProb }}%</span>
            <button class="delete-btn" @click="deleteTip(tip.id)" title="Delete">🗑</button>
          </div>
        </div>
      </div>

      <!-- Add tip form -->
      <div class="add-section">
        <h3 class="add-title">Add New Prediction</h3>
        <form @submit.prevent="addTip" class="editor-form">
          <div class="fields-row">
            <div class="field">
              <label>Home Team</label>
              <input v-model="newTip.home" type="text" placeholder="e.g. Arsenal" required />
            </div>
            <div class="field">
              <label>Away Team</label>
              <input v-model="newTip.away" type="text" placeholder="e.g. Chelsea" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Competition</label>
              <input v-model="newTip.competition" type="text" placeholder="e.g. Premier League" required />
            </div>
            <div class="field">
              <label>Kick-off Time</label>
              <input v-model="newTip.kickoff" type="text" placeholder="e.g. 20:00" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Win Probability (%)</label>
              <input v-model.number="newTip.winProb" type="number" min="1" max="99" placeholder="e.g. 78" required />
            </div>
            <div class="field">
              <label>Kit Colour</label>
              <div class="color-row">
                <input type="color" v-model="newTip.kitColor" class="color-picker" />
                <span class="color-val">{{ newTip.kitColor }}</span>
              </div>
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Kit Number</label>
              <input v-model="newTip.kitNumber" type="text" placeholder="e.g. 10" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field" style="grid-column: 1 / -1">
              <label>Prediction / Pick (🔒 hidden from users)</label>
              <input v-model="newTip.prediction" type="text" placeholder="e.g. Over 2.5 Goals, Both Teams Score" />
            </div>
          </div>

          <!-- Image upload -->
          <div class="field full-field">
            <label>Pick Image (optional — replaces kit art)</label>
            <div class="img-upload-row">
              <label class="img-upload-btn" for="pick-img-input">📷 Choose Image</label>
              <input id="pick-img-input" type="file" accept="image/*" @change="onImageChange" class="hidden-file" />
              <span v-if="imageFile" class="img-filename">{{ imageFile.name }}</span>
            </div>
            <img v-if="imagePreview" :src="imagePreview" class="img-preview" alt="Preview" />
          </div>

          <div class="form-actions">
            <button type="submit" class="save-btn" :disabled="saving">
              {{ saving ? 'Adding…' : '+ Add Prediction' }}
            </button>
            <span v-if="saved" class="saved-msg">✓ Added!</span>
            <span v-if="saveError" class="error-msg">⚠ {{ saveError }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '../../utils/adminApi'

export default {
  name: 'FootballTipsEditor',
  data() {
    return {
      tips: [],
      loading: true,
      saving: false,
      saved: false,
      saveError: '',
      imageFile: null,
      imagePreview: null,
      newTip: {
        home: '', away: '', competition: '', kickoff: '',
        winProb: 75, kitColor: '#FFD700', kitNumber: '10', prediction: ''
      }
    }
  },
  async mounted() {
    await this.loadTips()
  },
  methods: {
    async loadTips() {
      this.loading = true
      try {
        const { data } = await adminApi.get('/api/football-tips')
        this.tips = data
      } catch {
        // Server unavailable
      } finally {
        this.loading = false
      }
    },
    onImageChange(e) {
      const file = e.target.files[0]
      if (!file) return
      this.imageFile = file
      this.imagePreview = URL.createObjectURL(file)
    },
    async addTip() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      try {
        const fd = new FormData()
        Object.entries({ ...this.newTip, accent: this.newTip.kitColor }).forEach(([k, v]) => fd.append(k, v))
        if (this.imageFile) fd.append('image', this.imageFile)
        const { data } = await adminApi.post('/api/football-tips', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
        this.tips.push(data)
        this.saved = true
        this.newTip = { home: '', away: '', competition: '', kickoff: '', winProb: 75, kitColor: '#FFD700', kitNumber: '10', prediction: '' }
        this.imageFile = null
        this.imagePreview = null
        setTimeout(() => { this.saved = false }, 3000)
      } catch {
        this.saveError = 'Failed to save. Make sure the server is running.'
      } finally {
        this.saving = false
      }
    },
    async deleteTip(id) {
      if (!confirm('Delete this prediction?')) return
      try {
        await adminApi.delete('/api/football-tips/' + id)
        this.tips = this.tips.filter(t => t.id !== id)
      } catch {
        alert('Delete failed. Make sure the server is running.')
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 760px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 24px; line-height: 1.6; }
.state-msg { padding: 14px 18px; border-radius: 10px; background: #1a1a1a; font-size: 14px; color: #888; margin-bottom: 24px; }
.empty-state { padding: 20px; text-align: center; color: #555; font-size: 14px; background: #111; border-radius: 10px; margin-bottom: 24px; }

.tips-list { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; overflow: hidden; margin-bottom: 32px; }
.tip-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); gap: 12px; }
.tip-row:last-child { border-bottom: none; }
.tip-thumb { width: 56px; height: 40px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
.tip-info { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.tip-match { font-size: 14px; font-weight: 700; color: #fff; }
.tip-comp { font-size: 12px; color: #666; }
.tip-pred { font-size: 11px; color: #FFD700; opacity: 0.7; }
.tip-meta { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
.tip-prob { background: rgba(255,215,0,0.12); color: #FFD700; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
.delete-btn { background: none; border: none; cursor: pointer; font-size: 16px; padding: 4px; opacity: 0.6; transition: opacity 0.2s; }
.delete-btn:hover { opacity: 1; }

.add-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 16px; }

.editor-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 24px; }
.fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.full-field { margin-bottom: 16px; }
.field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.field input[type="text"],
.field input[type="number"] { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.field input:focus { border-color: rgba(255,215,0,0.45); }
.field input::placeholder { color: #444; }
.hidden-file { display: none; }
.img-upload-row { display: flex; align-items: center; gap: 12px; }
.img-upload-btn { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.2); color: #FFD700; padding: 9px 18px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; }
.img-upload-btn:hover { background: rgba(255,215,0,0.08); }
.img-filename { font-size: 12px; color: #888; }
.img-preview { margin-top: 10px; width: 100%; max-width: 280px; border-radius: 8px; object-fit: cover; max-height: 160px; }

.color-row { display: flex; align-items: center; gap: 12px; }
.color-picker { width: 44px; height: 38px; border: none; background: none; cursor: pointer; border-radius: 6px; padding: 0; }
.color-val { font-size: 13px; color: #888; }

.form-actions { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } }
</style>

