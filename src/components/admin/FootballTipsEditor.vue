<template>
  <div class="editor">
    <p class="editor-desc">
      Manage Today's Almax Picks with one photo, one caption, and the win probability shown on the public card.
    </p>

    <div v-if="loading" class="state-msg">Loading picks...</div>
    <div v-else>
      <div v-if="tips.length === 0" class="empty-state">No picks added yet. Add the first one below.</div>
      <div v-else class="media-grid">
        <div v-for="tip in tips" :key="tip.id" class="media-item">
          <div v-if="editingId === tip.id" class="edit-panel">
            <MediaUploadCard
              v-model:image="editFile"
              v-model:caption="editForm.caption"
              :preview-src="imageSrc(tip)"
              :input-id="'pick-caption-' + tip.id"
            >
              <div class="prob-field">
                <label>Win Probability</label>
                <input v-model.number="editForm.winProb" type="number" min="1" max="99" />
              </div>
            </MediaUploadCard>
            <div class="actions-row">
              <button class="save-btn" @click="saveEdit(tip.id)" :disabled="editSaving">
                {{ editSaving ? 'Saving...' : 'Save Changes' }}
              </button>
              <button class="ghost-btn" @click="cancelEdit">Cancel</button>
              <span v-if="editError" class="error-msg">{{ editError }}</span>
            </div>
          </div>

          <template v-else>
            <img v-if="imageSrc(tip)" :src="imageSrc(tip)" class="media-img" :alt="tip.caption || 'Almax pick'" />
            <div v-else class="media-placeholder">Photo</div>
            <div class="media-body">
              <p>{{ tip.caption || 'No caption added' }}</p>
              <span>{{ normalizedWinProb(tip) }}% win probability</span>
            </div>
            <div class="card-actions">
              <button class="edit-btn" @click="startEdit(tip)">Edit</button>
              <button class="delete-btn" @click="deleteTip(tip.id)">Delete</button>
            </div>
          </template>
        </div>
      </div>

      <div class="add-section">
        <h3 class="add-title">Add Today's Pick</h3>
        <form @submit.prevent="addTip" class="editor-form">
          <MediaUploadCard v-model:image="imageFile" v-model:caption="newTip.caption" input-id="new-pick-caption">
            <div class="prob-field">
              <label>Win Probability</label>
              <input v-model.number="newTip.winProb" type="number" min="1" max="99" />
            </div>
          </MediaUploadCard>

          <div class="actions-row">
            <button type="submit" class="save-btn" :disabled="saving">
              {{ saving ? 'Adding...' : 'Add Pick' }}
            </button>
            <span v-if="saved" class="saved-msg">Saved</span>
            <span v-if="saveError" class="error-msg">{{ saveError }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '../../utils/adminApi'
import { getApiBaseUrl } from '../../utils/apiBase'
import MediaUploadCard from './MediaUploadCard.vue'

const API = getApiBaseUrl()

export default {
  name: 'FootballTipsEditor',
  components: { MediaUploadCard },
  data() {
    return {
      tips: [],
      loading: true,
      saving: false,
      saved: false,
      saveError: '',
      imageFile: null,
      newTip: { caption: '', winProb: 75 },
      editingId: null,
      editForm: { caption: '', winProb: 75 },
      editFile: null,
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
        this.tips = data || []
      } catch {
        this.tips = []
      } finally {
        this.loading = false
      }
    },
    imageSrc(tip) {
      const url = tip.imageUrl || tip.image_url || ''
      if (!url) return ''
      if (/^(https?:|data:|blob:)/.test(url)) return url
      return API + url
    },
    normalizedWinProb(tip) {
      return tip.winProb || tip.win_prob || 75
    },
    appendTipFields(fd, source) {
      fd.append('caption', source.caption || '')
      fd.append('winProb', source.winProb || 75)
    },
    async addTip() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      try {
        const fd = new FormData()
        this.appendTipFields(fd, this.newTip)
        if (this.imageFile) fd.append('image', this.imageFile)
        const { data } = await adminApi.post('/api/football-tips', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
        this.tips.unshift(data)
        this.saved = true
        this.newTip = { caption: '', winProb: 75 }
        this.imageFile = null
        setTimeout(() => { this.saved = false }, 2500)
      } catch {
        this.saveError = 'Failed to save. Make sure the server is running.'
      } finally {
        this.saving = false
      }
    },
    startEdit(tip) {
      this.editingId = tip.id
      this.editForm = { caption: tip.caption || '', winProb: this.normalizedWinProb(tip) }
      this.editFile = null
      this.editError = ''
    },
    cancelEdit() {
      this.editingId = null
      this.editFile = null
      this.editError = ''
    },
    async saveEdit(id) {
      this.editSaving = true
      this.editError = ''
      try {
        const fd = new FormData()
        this.appendTipFields(fd, this.editForm)
        if (this.editFile) fd.append('image', this.editFile)
        const { data } = await adminApi.post('/api/football-tips/' + id, fd)
        const idx = this.tips.findIndex(t => t.id === id)
        if (idx !== -1) this.tips.splice(idx, 1, data)
        this.cancelEdit()
      } catch {
        this.editError = 'Save failed.'
      } finally {
        this.editSaving = false
      }
    },
    async deleteTip(id) {
      if (!confirm('Delete this pick?')) return
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
.editor { max-width: 920px; }
.editor-desc { color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 22px; }
.state-msg, .empty-state { background: #111; border-radius: 10px; color: #888; font-size: 14px; margin-bottom: 22px; padding: 16px; text-align: center; }
.media-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-bottom: 30px; }
.media-item { background: #111; border: 1px solid rgba(255, 215, 0, 0.12); border-radius: 14px; overflow: hidden; position: relative; }
.media-img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
.media-placeholder { aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; color: #666; background: #080808; }
.media-body { padding: 13px 14px 48px; }
.media-body p { color: #fff; font-size: 14px; line-height: 1.5; margin: 0 0 8px; }
.media-body span { color: #FFD700; font-size: 12px; font-weight: 800; }
.card-actions { bottom: 10px; display: flex; gap: 8px; left: 12px; position: absolute; right: 12px; }
.edit-panel { padding: 14px; }
.add-section { margin-top: 12px; }
.add-title { color: #fff; font-size: 18px; margin: 0 0 14px; }
.editor-form { display: flex; flex-direction: column; gap: 16px; }
.prob-field { display: flex; flex-direction: column; gap: 8px; }
.prob-field label { color: #888; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
.prob-field input { background: #1a1a1a; border: 1px solid rgba(255, 215, 0, 0.16); border-radius: 9px; color: #fff; font-size: 14px; max-width: 180px; outline: none; padding: 11px 13px; }
.actions-row { align-items: center; display: flex; flex-wrap: wrap; gap: 12px; margin-top: 14px; }
.save-btn, .edit-btn { background: linear-gradient(135deg, #FFD700, #FFA500); border: none; border-radius: 9px; color: #000; cursor: pointer; font-size: 13px; font-weight: 900; padding: 10px 18px; }
.ghost-btn, .delete-btn { background: #1a1a1a; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 9px; color: #ddd; cursor: pointer; font-size: 13px; font-weight: 700; padding: 10px 14px; }
.delete-btn { color: #ff8a65; }
.save-btn:disabled { cursor: not-allowed; opacity: 0.6; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 700; }
.error-msg { color: #ff5252; font-size: 13px; }
</style>
