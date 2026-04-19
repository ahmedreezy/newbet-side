<template>
  <div class="editor">
    <p class="editor-desc">
      Upload and manage winning slips shown to users. Images are stored on the local server. Changes go live immediately.
    </p>

    <!-- Wins list -->
    <div v-if="loading" class="state-msg">Loading wins…</div>
    <div v-else>
      <div v-if="wins.length === 0" class="empty-state">No wins added yet. Add one below.</div>
      <div v-else class="wins-grid">
        <div v-for="win in wins" :key="win.id" class="win-card">
          <div v-if="win.imageUrl" class="win-img-wrap">
            <img :src="win.imageUrl" :alt="win.betType + ' winning slip'" class="win-img" />
          </div>
          <div v-else class="win-img-placeholder">
            <span>🎫</span><span>No image</span>
          </div>
          <div class="win-body">
            <div class="win-type">{{ win.betType }}</div>
            <div class="win-amounts">{{ win.staked }} → {{ win.returned }}</div>
            <div class="win-odds">Odds: {{ win.odds }}</div>
            <div class="win-date">{{ win.date }}</div>
          </div>
          <button class="delete-btn" @click="deleteWin(win.id)" title="Delete">🗑 Delete</button>
        </div>
      </div>

      <!-- Add win form -->
      <div class="add-section">
        <h3 class="add-title">Add Winning Slip</h3>
        <form @submit.prevent="addWin" class="editor-form">
          <div class="fields-row">
            <div class="field">
              <label>Bet Type</label>
              <input v-model="newWin.betType" type="text" placeholder="e.g. Accumulator" required />
            </div>
            <div class="field">
              <label>Date</label>
              <input v-model="newWin.date" type="text" placeholder="e.g. Apr 16, 2026" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Amount Staked</label>
              <input v-model="newWin.staked" type="text" placeholder="e.g. 10,000 UGX" required />
            </div>
            <div class="field">
              <label>Amount Won</label>
              <input v-model="newWin.returned" type="text" placeholder="e.g. 210,000 UGX" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Total Odds</label>
              <input v-model="newWin.odds" type="text" placeholder="e.g. 21.00" required />
            </div>
            <div class="field">
              <label>Member Name (optional)</label>
              <input v-model="newWin.memberName" type="text" placeholder="e.g. K. Moses" />
            </div>
          </div>

          <div class="field upload-field">
            <label>Winning Slip Image (optional)</label>
            <div class="upload-area" @click="$refs.fileInput.click()" @dragover.prevent @drop.prevent="onFileDrop">
              <input ref="fileInput" type="file" accept="image/*" @change="onFileChange" style="display:none" />
              <span v-if="!imageFile" class="upload-hint">📎 Click or drag-drop an image here</span>
              <span v-else class="upload-selected">✓ {{ imageFile.name }}</span>
            </div>
            <div v-if="uploadProgress > 0 && uploadProgress < 100" class="progress-bar">
              <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="save-btn" :disabled="saving">
              {{ saving ? 'Uploading…' : '+ Add Win' }}
            </button>
            <span v-if="saved" class="saved-msg">✓ Win added!</span>
            <span v-if="saveError" class="error-msg">⚠ {{ saveError }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RecentWinsEditor',
  data() {
    return {
      wins: [],
      loading: true,
      saving: false,
      saved: false,
      saveError: '',
      uploadProgress: 0,
      imageFile: null,
      newWin: { betType: '', date: '', staked: '', returned: '', odds: '', memberName: '' }
    }
  },
  async mounted() {
    await this.loadWins()
  },
  methods: {
    async loadWins() {
      this.loading = true
      try {
        const { data } = await axios.get('/api/recent-wins')
        this.wins = data
      } catch {
        // Server not reachable — show empty state
      } finally {
        this.loading = false
      }
    },
    onFileChange(e) {
      this.imageFile = e.target.files[0] || null
    },
    onFileDrop(e) {
      this.imageFile = e.dataTransfer.files[0] || null
    },
    async addWin() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      this.uploadProgress = 0
      try {
        const formData = new FormData()
        Object.entries(this.newWin).forEach(([k, v]) => formData.append(k, v))
        if (this.imageFile) formData.append('image', this.imageFile)

        const { data } = await axios.post('/api/recent-wins', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (e) => {
            this.uploadProgress = e.total ? Math.round((e.loaded / e.total) * 100) : 0
          }
        })
        this.wins.unshift(data)
        this.saved = true
        this.newWin = { betType: '', date: '', staked: '', returned: '', odds: '', memberName: '' }
        this.imageFile = null
        this.uploadProgress = 0
        if (this.$refs.fileInput) this.$refs.fileInput.value = ''
        setTimeout(() => { this.saved = false }, 3000)
      } catch {
        this.saveError = 'Failed to save. Is the local server running?'
      } finally {
        this.saving = false
      }
    },
    async deleteWin(id) {
      if (!confirm('Delete this winning slip?')) return
      try {
        await axios.delete(`/api/recent-wins/${id}`)
        this.wins = this.wins.filter(w => w.id !== id)
      } catch {
        alert('Delete failed. Is the local server running?')
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 900px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 24px; line-height: 1.6; }
.state-msg { padding: 14px 18px; border-radius: 10px; background: #1a1a1a; font-size: 14px; color: #888; margin-bottom: 24px; }
.empty-state { padding: 20px; text-align: center; color: #555; font-size: 14px; background: #111; border-radius: 10px; margin-bottom: 24px; }

.wins-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-bottom: 32px; }
.win-card { background: #111; border: 1px solid rgba(255,215,0,0.12); border-radius: 12px; overflow: hidden; }
.win-img-wrap { background: #1a1a1a; }
.win-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
.win-img-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; height: 100px; background: #1a1a1a; color: #444; font-size: 13px; }
.win-body { padding: 12px 14px; }
.win-type { font-size: 13px; font-weight: 700; color: #FFD700; margin-bottom: 4px; }
.win-amounts { font-size: 14px; color: #fff; font-weight: 700; }
.win-odds, .win-date { font-size: 12px; color: #666; margin-top: 2px; }
.delete-btn { width: 100%; padding: 10px; background: rgba(255,82,82,0.08); border: none; border-top: 1px solid rgba(255,82,82,0.12); color: #ff5252; font-size: 13px; cursor: pointer; transition: background 0.2s; }
.delete-btn:hover { background: rgba(255,82,82,0.18); }

.add-section { }
.add-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 16px; }
.editor-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 24px; }
.fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.field input { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.field input:focus { border-color: rgba(255,215,0,0.45); }
.field input::placeholder { color: #444; }
.upload-field { margin-bottom: 8px; }
.upload-area { background: #1a1a1a; border: 2px dashed rgba(255,215,0,0.2); border-radius: 10px; padding: 20px; text-align: center; cursor: pointer; transition: border-color 0.2s; }
.upload-area:hover { border-color: rgba(255,215,0,0.45); }
.upload-hint { font-size: 13px; color: #555; }
.upload-selected { font-size: 13px; color: #4caf50; font-weight: 600; }
.progress-bar { height: 4px; background: #1a1a1a; border-radius: 4px; overflow: hidden; margin-top: 8px; }
.progress-fill { height: 100%; background: linear-gradient(90deg,#FFD700,#FFA500); transition: width 0.2s; }
.form-actions { display: flex; align-items: center; gap: 16px; margin-top: 16px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } }
</style>
