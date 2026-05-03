<template>
  <div class="editor">
    <p class="editor-desc">
      Manage today's <strong>Almax Predictions</strong>. Upload an image and write a caption — the card displays those prominently with win probability and a locked expert tip for VIPs.
    </p>

    <!-- Current tips list -->
    <div v-if="loading" class="state-msg">Loading predictions…</div>
    <div v-else>
      <div v-if="tips.length === 0" class="empty-state">No predictions added yet. Add your first one below.</div>
      <div v-else class="tips-list">
        <div v-for="tip in tips" :key="tip.id" class="tip-row">

          <!-- Inline edit overlay -->
          <div v-if="editingId === tip.id" class="edit-overlay">
            <div class="edit-img-row">
              <img v-if="editPreview || tip.imageUrl" :src="editPreview || ('/api/' + tip.imageUrl)" class="edit-preview-img" alt="Preview" />
              <div v-else class="no-img-ph">📷 No image</div>
              <label class="replace-photo-btn" :for="'edit-img-' + tip.id">🔄 Replace Image</label>
              <input :id="'edit-img-' + tip.id" type="file" accept="image/*" class="hidden-file" @change="onEditFile" />
            </div>
            <div class="edit-fields">
              <div class="edit-field full">
                <label>Caption</label>
                <input v-model="editForm.caption" type="text" placeholder="e.g. Arsenal look unstoppable this week…" />
              </div>
              <div class="edit-fields-row">
                <div class="edit-field">
                  <label>Kick-off</label>
                  <input v-model="editForm.kickoff" type="text" placeholder="e.g. 20:00" />
                </div>
                <div class="edit-field">
                  <label>Win % </label>
                  <input v-model.number="editForm.winProb" type="number" min="1" max="99" placeholder="75" />
                </div>
              </div>
              <div class="edit-field full">
                <label>Expert Tip (🔒 hidden)</label>
                <input v-model="editForm.prediction" type="text" placeholder="e.g. Over 2.5 Goals" />
              </div>
            </div>
            <div class="edit-actions">
              <button class="save-inline-btn" @click="saveEdit(tip.id)" :disabled="editSaving">{{ editSaving ? 'Saving…' : '✓ Save' }}</button>
              <button class="cancel-edit-btn" @click="cancelEdit">Cancel</button>
              <span v-if="editError" class="error-msg">⚠ {{ editError }}</span>
            </div>
          </div>

          <!-- Normal row view -->
          <template v-else>
            <img v-if="tip.imageUrl" :src="'/api/' + tip.imageUrl" class="tip-thumb" alt="" />
            <div class="tip-info">
              <span class="tip-caption">{{ tip.caption || '(no caption)' }}</span>
              <span class="tip-comp">⏰ {{ tip.kickoff }} · {{ tip.winProb }}% win prob</span>
              <span v-if="tip.prediction" class="tip-pred">🔒 {{ tip.prediction }}</span>
            </div>
            <div class="tip-meta">
              <button class="edit-btn" @click="startEdit(tip)">✏ Edit</button>
              <button class="delete-btn" @click="deleteTip(tip.id)" title="Delete">🗑 Delete</button>
            </div>
          </template>

        </div>
      </div>

      <!-- Add tip form -->
      <div class="add-section">
        <h3 class="add-title">Add New Prediction</h3>
        <form @submit.prevent="addTip" class="editor-form">

          <!-- Image upload (prominent) -->
          <div class="field full-field">
            <label>Match Image <span class="req">*</span></label>
            <div class="img-upload-row">
              <label class="img-upload-btn" for="pick-img-input">📷 Choose Image</label>
              <input id="pick-img-input" type="file" accept="image/*" @change="onImageChange" class="hidden-file" />
              <span v-if="imageFile" class="img-filename">{{ imageFile.name }}</span>
              <span v-else class="img-filename muted">No file chosen</span>
            </div>
            <img v-if="imagePreview" :src="imagePreview" class="img-preview" alt="Preview" />
          </div>

          <!-- Caption -->
          <div class="field full-field">
            <label>Caption <span class="req">*</span></label>
            <input v-model="newTip.caption" type="text" placeholder="e.g. Arsenal are in fine form heading into this clash" required />
          </div>

          <div class="fields-row">
            <div class="field">
              <label>Kick-off Time <span class="req">*</span></label>
              <input v-model="newTip.kickoff" type="text" placeholder="e.g. 20:00" required />
            </div>
            <div class="field">
              <label>Win Probability (%)</label>
              <input v-model.number="newTip.winProb" type="number" min="1" max="99" placeholder="e.g. 78" />
            </div>
          </div>

          <div class="field full-field">
            <label>Expert Tip / Pick <span class="hint">(🔒 hidden from non-VIP users)</span></label>
            <input v-model="newTip.prediction" type="text" placeholder="e.g. Over 2.5 Goals, Both Teams Score" />
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
        caption: '', kickoff: '', winProb: 75, prediction: ''
      },
      editingId: null,
      editForm: { caption: '', kickoff: '', winProb: 75, prediction: '' },
      editFile: null,
      editPreview: null,
      editSaving: false,
      editError: ''
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
        fd.append('caption',    this.newTip.caption)
        fd.append('kickoff',    this.newTip.kickoff)
        fd.append('winProb',    this.newTip.winProb)
        fd.append('prediction', this.newTip.prediction)
        if (this.imageFile) fd.append('image', this.imageFile)
        const { data } = await adminApi.post('/api/football-tips', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
        this.tips.push(data)
        this.saved = true
        this.newTip = { caption: '', kickoff: '', winProb: 75, prediction: '' }
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
    },
    startEdit(tip) {
      this.editingId = tip.id
      this.editForm = { caption: tip.caption || '', kickoff: tip.kickoff || '', winProb: tip.winProb || 75, prediction: tip.prediction || '' }
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
        fd.append('caption',    this.editForm.caption)
        fd.append('kickoff',    this.editForm.kickoff)
        fd.append('winProb',    this.editForm.winProb)
        fd.append('prediction', this.editForm.prediction)
        if (this.editFile) fd.append('image', this.editFile)
        const { data } = await adminApi.put('/api/football-tips/' + id, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
        const idx = this.tips.findIndex(t => t.id === id)
        if (idx !== -1) this.tips.splice(idx, 1, data)
        this.cancelEdit()
      } catch {
        this.editError = 'Save failed. Make sure the server is running.'
      } finally {
        this.editSaving = false
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
.tip-row { border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; padding: 12px 16px; gap: 12px; }
.tip-row:last-child { border-bottom: none; }

/* Edit mode — stretch full width */
.tip-row:has(.edit-overlay) { display: block; padding: 0; }
.tip-thumb { width: 64px; height: 48px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
.tip-info { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.tip-caption { font-size: 14px; font-weight: 700; color: #fff; }
.tip-comp { font-size: 12px; color: #666; }
.tip-pred { font-size: 11px; color: #FFD700; opacity: 0.7; }
.tip-meta { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.edit-btn { background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.2); color: #FFD700; border-radius: 7px; padding: 6px 12px; font-size: 12px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.edit-btn:hover { background: rgba(255,215,0,0.16); }
.delete-btn { background: rgba(255,82,82,0.08); border: 1px solid rgba(255,82,82,0.2); color: #ff5252; border-radius: 7px; padding: 6px 12px; font-size: 12px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.delete-btn:hover { background: rgba(255,82,82,0.18); }

/* Inline edit overlay */
.edit-overlay { padding: 14px; display: flex; flex-direction: column; gap: 10px; background: #1a1a1a; }
.edit-img-row { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.edit-preview-img { width: 100%; max-height: 140px; object-fit: cover; border-radius: 8px; }
.no-img-ph { width: 100%; height: 70px; background: #111; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #444; font-size: 13px; }
.replace-photo-btn { font-size: 11px; font-weight: 700; color: #FFD700; cursor: pointer; background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.2); border-radius: 6px; padding: 5px 10px; user-select: none; transition: background 0.2s; }
.replace-photo-btn:hover { background: rgba(255,215,0,0.16); }
.edit-fields { display: flex; flex-direction: column; gap: 8px; }
.edit-fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.edit-field { display: flex; flex-direction: column; gap: 4px; }
.edit-field.full { grid-column: 1 / -1; }
.edit-field label { font-size: 10px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.edit-field input { background: #111; border: 1px solid rgba(255,215,0,0.15); border-radius: 7px; padding: 8px 10px; color: #fff; font-size: 13px; outline: none; transition: border-color 0.2s; }
.edit-field input:focus { border-color: rgba(255,215,0,0.45); }
.edit-field input::placeholder { color: #444; }
.edit-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.save-inline-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 7px; padding: 8px 16px; font-size: 12px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-inline-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.cancel-edit-btn { background: transparent; border: 1px solid rgba(255,255,255,0.15); border-radius: 7px; padding: 8px 14px; color: #aaa; font-size: 12px; cursor: pointer; transition: border-color 0.2s; }
.cancel-edit-btn:hover { border-color: rgba(255,255,255,0.35); color: #fff; }

.add-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 16px; }

.editor-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 24px; }
.fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.full-field { margin-bottom: 16px; }
.field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.req { color: #FFD700; }
.hint { text-transform: none; font-weight: 400; color: #555; letter-spacing: 0; font-size: 11px; }
.field input[type="text"],
.field input[type="number"] { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.field input:focus { border-color: rgba(255,215,0,0.45); }
.field input::placeholder { color: #444; }
.hidden-file { display: none; }
.img-upload-row { display: flex; align-items: center; gap: 12px; }
.img-upload-btn { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.2); color: #FFD700; padding: 9px 18px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; }
.img-upload-btn:hover { background: rgba(255,215,0,0.08); }
.img-filename { font-size: 12px; color: #888; }
.img-filename.muted { color: #444; }
.img-preview { margin-top: 10px; width: 100%; max-width: 320px; border-radius: 8px; object-fit: cover; max-height: 180px; }

.form-actions { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } }
</style>

