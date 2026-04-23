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

          <!-- ── Inline edit overlay ── -->
          <div v-if="editingId === win.id" class="edit-overlay">
            <div class="edit-img-row">
              <img
                :src="editPreview || win.imageUrl || ''"
                v-if="editPreview || win.imageUrl"
                class="edit-preview-img"
                alt="Preview"
              />
              <div v-else class="no-img-placeholder">🎫 No image</div>
              <label class="replace-photo-btn" :for="'edit-img-' + win.id">🔄 Replace Image</label>
              <input :id="'edit-img-' + win.id" type="file" accept="image/*" class="hidden-file" @change="onEditFile" />
            </div>
            <div class="edit-fields">
              <div class="edit-fields-row">
                <div class="edit-field">
                  <label>Bet Type</label>
                  <input v-model="editForm.betType" type="text" placeholder="e.g. Accumulator" />
                </div>
                <div class="edit-field">
                  <label>Date</label>
                  <input v-model="editForm.date" type="text" placeholder="e.g. Apr 16, 2026" />
                </div>
              </div>
              <div class="edit-fields-row">
                <div class="edit-field">
                  <label>Amount Staked</label>
                  <input v-model="editForm.staked" type="text" placeholder="e.g. 10,000 UGX" />
                </div>
                <div class="edit-field">
                  <label>Amount Won</label>
                  <input v-model="editForm.returned" type="text" placeholder="e.g. 210,000 UGX" />
                </div>
              </div>
              <div class="edit-fields-row">
                <div class="edit-field">
                  <label>Total Odds</label>
                  <input v-model="editForm.odds" type="text" placeholder="e.g. 21.00" />
                </div>
                <div class="edit-field">
                  <label>Member Name</label>
                  <input v-model="editForm.memberName" type="text" placeholder="e.g. K. Moses" />
                </div>
              </div>
            </div>
            <div class="edit-actions">
              <button class="save-btn" @click="saveEdit(win.id)" :disabled="editSaving">{{ editSaving ? 'Saving…' : '✓ Save' }}</button>
              <button class="cancel-edit-btn" @click="cancelEdit">Cancel</button>
              <span v-if="editError" class="error-msg">⚠ {{ editError }}</span>
            </div>
          </div>

          <!-- ── Normal card view ── -->
          <template v-else>
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
              <div v-if="win.memberName" class="win-member">👤 {{ win.memberName }}</div>
            </div>
            <div class="card-actions">
              <button class="edit-btn" @click="startEdit(win)" title="Edit">&#9999; Edit</button>
              <button class="delete-btn" @click="deleteWin(win.id)" title="Delete">🗑 Delete</button>
            </div>
          </template>

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
import adminApi from '../../utils/adminApi'

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
      newWin: { betType: '', date: '', staked: '', returned: '', odds: '', memberName: '' },
      // Inline edit state
      editingId: null,
      editForm: { betType: '', date: '', staked: '', returned: '', odds: '', memberName: '' },
      editFile: null,
      editPreview: null,
      editSaving: false,
      editError: ''
    }
  },
  async mounted() {
    await this.loadWins()
  },
  methods: {
    async loadWins() {
      this.loading = true
      try {
        const { data } = await adminApi.get('/api/recent-wins')
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

        const { data } = await adminApi.post('/api/recent-wins', formData, {
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
        await adminApi.delete(`/api/recent-wins/${id}`)
        this.wins = this.wins.filter(w => w.id !== id)
      } catch {
        alert('Delete failed. Is the local server running?')
      }
    },
    startEdit(win) {
      this.editingId = win.id
      this.editForm = { betType: win.betType, date: win.date, staked: win.staked, returned: win.returned, odds: win.odds, memberName: win.memberName || '' }
      this.editFile = null
      this.editPreview = null
      this.editError = ''
    },
    cancelEdit() {
      this.editingId = null
      this.editFile = null
      this.editPreview = null
      this.editError = ''
    },
    onEditFile(e) {
      const file = e.target.files[0]
      if (!file) return
      this.editFile = file
      this.editPreview = URL.createObjectURL(file)
    },
    async saveEdit(id) {
      this.editSaving = true
      this.editError = ''
      try {
        const fd = new FormData()
        Object.entries(this.editForm).forEach(([k, v]) => fd.append(k, v))
        if (this.editFile) fd.append('image', this.editFile)
        const { data } = await adminApi.put(`/api/recent-wins/${id}`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        const idx = this.wins.findIndex(w => w.id === id)
        if (idx !== -1) this.wins.splice(idx, 1, data)
        this.cancelEdit()
      } catch {
        this.editError = 'Save failed. Is the server running?'
      } finally {
        this.editSaving = false
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

.add-section { margin-top: 8px; }
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

.win-member { font-size: 12px; color: #888; margin-top: 3px; }
.card-actions { display: flex; border-top: 1px solid rgba(255,215,0,0.08); }
.edit-btn, .delete-btn { flex: 1; padding: 10px; border: none; font-size: 13px; cursor: pointer; transition: background 0.2s; font-weight: 600; }
.edit-btn { background: rgba(255,215,0,0.06); color: #FFD700; border-right: 1px solid rgba(255,215,0,0.08); }
.edit-btn:hover { background: rgba(255,215,0,0.14); }
.delete-btn { background: rgba(255,82,82,0.08); color: #ff5252; }
.delete-btn:hover { background: rgba(255,82,82,0.18); }

/* ── Inline Edit Overlay ── */
.hidden-file { display: none; }
.edit-overlay { padding: 14px; display: flex; flex-direction: column; gap: 10px; background: #1a1a1a; border-radius: 12px; }
.edit-img-row { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.edit-preview-img { width: 100%; max-height: 130px; object-fit: cover; border-radius: 8px; }
.no-img-placeholder { width: 100%; height: 80px; background: #111; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #444; font-size: 13px; }
.replace-photo-btn { font-size: 11px; font-weight: 700; color: #FFD700; cursor: pointer; background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.2); border-radius: 6px; padding: 5px 10px; user-select: none; transition: background 0.2s; }
.replace-photo-btn:hover { background: rgba(255,215,0,0.16); }
.edit-fields { display: flex; flex-direction: column; gap: 8px; }
.edit-fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.edit-field { display: flex; flex-direction: column; gap: 4px; }
.edit-field label { font-size: 10px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.edit-field input { background: #111; border: 1px solid rgba(255,215,0,0.15); border-radius: 7px; padding: 7px 10px; color: #fff; font-size: 12px; outline: none; transition: border-color 0.2s; }
.edit-field input:focus { border-color: rgba(255,215,0,0.45); }
.edit-field input::placeholder { color: #444; }
.edit-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.cancel-edit-btn { background: transparent; border: 1px solid rgba(255,255,255,0.15); border-radius: 7px; padding: 7px 14px; color: #aaa; font-size: 12px; cursor: pointer; transition: border-color 0.2s; }
.cancel-edit-btn:hover { border-color: rgba(255,255,255,0.35); color: #fff; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } .edit-fields-row { grid-template-columns: 1fr; } }
</style>

