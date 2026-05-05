<template>
  <div class="editor">
    <p class="editor-desc">
      Manage testimonial photo evidence. Click the edit button on any card to update its details or swap the photo. Use the button below to add new photo evidence.
    </p>

    <!-- Quick-add photo button -->
    <div class="quick-add-bar">
      <label class="quick-add-btn" for="quick-photo-input">
        📷 Add Photo Evidence
      </label>
      <input
        id="quick-photo-input"
        type="file"
        accept="image/*"
        class="hidden-file"
        @change="quickAdd"
        ref="quickInput"
      />
      <span v-if="quickUploading" class="uploading-msg">Uploading…</span>
      <span v-if="quickError" class="error-msg">⚠ {{ quickError }}</span>
    </div>

    <div v-if="loading" class="state-msg">Loading testimonials…</div>
    <div v-else>
      <div v-if="testimonials.length === 0" class="empty-state">
        No testimonials yet. Add the first one above.
      </div>
      <div v-else class="grid">
        <div v-for="t in testimonials" :key="t.id" class="t-card">
          <!-- Inline Edit Overlay -->
          <div v-if="editingId === t.id" class="edit-overlay">
            <div class="edit-img-row">
              <img
                :src="editPreview || (apiBase + t.imageUrl)"
                class="edit-preview-img"
                alt="Preview"
              />
              <label class="replace-photo-btn" :for="'edit-img-' + t.id">
                🔄 Replace Photo
              </label>
              <input
                :id="'edit-img-' + t.id"
                type="file"
                accept="image/*"
                class="hidden-file"
                @change="onEditFile"
              />
            </div>
            <input
              v-model="editForm.memberName"
              class="edit-input"
              type="text"
              placeholder="Member name (optional)"
            />
            <input
              v-model="editForm.caption"
              class="edit-input"
              type="text"
              placeholder="Caption (optional)"
            />
            <div class="edit-actions">
              <button class="save-btn" @click="saveEdit(t.id)" :disabled="editSaving">
                {{ editSaving ? 'Saving…' : '✓ Save' }}
              </button>
              <button class="cancel-btn" @click="cancelEdit">Cancel</button>
              <span v-if="editError" class="error-msg">⚠ {{ editError }}</span>
            </div>
          </div>

          <!-- Normal Card View -->
          <template v-else>
            <img :src="apiBase + t.imageUrl" class="t-img" alt="Testimonial" />
            <div class="t-meta">
              <span class="t-name">{{ t.memberName || 'Anonymous' }}</span>
              <span v-if="t.caption" class="t-caption">{{ t.caption }}</span>
            </div>
            <div class="card-actions">
              <button class="edit-btn" @click="startEdit(t)" title="Edit">&#9999;</button>
              <button class="del-btn" @click="deleteItem(t.id)" title="Delete">🗑</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '../../utils/adminApi'
const API = process.env.VUE_APP_API_URL || ''

export default {
  name: 'TestimonialsEditor',
  data() {
    return {
      testimonials: [],
      loading: true,
      apiBase: API,
      // Quick add
      quickUploading: false,
      quickError: '',
      // Inline edit
      editingId: null,
      editForm: { memberName: '', caption: '' },
      editFile: null,
      editPreview: null,
      editSaving: false,
      editError: ''
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.loading = true
      try {
        const { data } = await adminApi.get(`${API}/api/testimonials`)
        this.testimonials = data
      } catch {
        this.testimonials = []
      } finally {
        this.loading = false
      }
    },

    // ── Quick Add ──────────────────────────────────────────────
    async quickAdd(e) {
      const file = e.target.files[0]
      if (!file) return
      this.quickUploading = true
      this.quickError = ''
      try {
        const fd = new FormData()
        fd.append('image', file)
        const { data } = await adminApi.post(`${API}/api/testimonials`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.testimonials.unshift(data)
      } catch {
        this.quickError = 'Upload failed. Make sure server is running.'
        setTimeout(() => { this.quickError = '' }, 4000)
      } finally {
        this.quickUploading = false
        // Reset so the same file can be re-selected
        if (this.$refs.quickInput) this.$refs.quickInput.value = ''
      }
    },

    // ── Inline Edit ────────────────────────────────────────────
    startEdit(t) {
      this.editingId = t.id
      this.editForm = { memberName: t.memberName || '', caption: t.caption || '' }
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
        fd.append('memberName', this.editForm.memberName)
        fd.append('caption', this.editForm.caption)
        if (this.editFile) fd.append('image', this.editFile)
        const { data } = await adminApi.put(`${API}/api/testimonials/${id}`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        const idx = this.testimonials.findIndex(t => t.id === id)
        if (idx !== -1) this.testimonials.splice(idx, 1, data)
        this.cancelEdit()
      } catch {
        this.editError = 'Save failed.'
      } finally {
        this.editSaving = false
      }
    },

    // ── Delete ─────────────────────────────────────────────────
    async deleteItem(id) {
      if (!confirm('Delete this testimonial?')) return
      try {
        await adminApi.delete(`${API}/api/testimonials/${id}`)
        this.testimonials = this.testimonials.filter(t => t.id !== id)
      } catch {
        alert('Delete failed.')
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 900px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 20px; line-height: 1.6; }
.state-msg { font-size: 14px; color: #888; padding: 14px; }
.empty-state { padding: 20px; text-align: center; color: #555; font-size: 14px; background: #111; border-radius: 10px; margin-bottom: 24px; }
.hidden-file { display: none; }

/* ── Quick Add Bar ── */
.quick-add-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  padding: 16px 20px;
  background: #111;
  border: 1px dashed rgba(255,215,0,0.2);
  border-radius: 12px;
}
.quick-add-btn {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  border-radius: 9px;
  padding: 10px 22px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s;
  user-select: none;
}
.quick-add-btn:hover { opacity: 0.85; }
.uploading-msg { font-size: 13px; color: #aaa; }
.error-msg { color: #ff5252; font-size: 13px; }

/* ── Grid ── */
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px; }
.t-card {
  background: #111;
  border: 1px solid rgba(255,215,0,0.1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.t-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; }
.t-meta { padding: 8px 10px; display: flex; flex-direction: column; gap: 3px; }
.t-name   { font-size: 12px; font-weight: 700; color: #FFD700; }
.t-caption{ font-size: 11px; color: #666; }

/* Card action buttons */
.card-actions { position: absolute; top: 8px; right: 8px; display: flex; gap: 6px; }
.edit-btn, .del-btn {
  background: rgba(0,0,0,0.72);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 7px;
  opacity: 0.75;
  transition: opacity 0.2s;
}
.edit-btn:hover, .del-btn:hover { opacity: 1; }

/* ── Inline Edit Overlay ── */
.edit-overlay {
  background: #1a1a1a;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  min-height: 220px;
}
.edit-img-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.edit-preview-img {
  width: 100%;
  max-height: 140px;
  object-fit: cover;
  border-radius: 8px;
}
.replace-photo-btn {
  font-size: 11px;
  font-weight: 700;
  color: #FFD700;
  cursor: pointer;
  background: rgba(255,215,0,0.08);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 6px;
  padding: 5px 10px;
  text-align: center;
  user-select: none;
  transition: background 0.2s;
}
.replace-photo-btn:hover { background: rgba(255,215,0,0.16); }
.edit-input {
  background: #111;
  border: 1px solid rgba(255,215,0,0.15);
  border-radius: 7px;
  padding: 8px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
  width: 100%;
  transition: border-color 0.2s;
}
.edit-input:focus { border-color: rgba(255,215,0,0.45); }
.edit-input::placeholder { color: #444; }
.edit-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.save-btn {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  border-radius: 7px;
  padding: 7px 16px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s;
}
.save-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.cancel-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  padding: 7px 14px;
  color: #aaa;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 0.2s;
}
.cancel-btn:hover { border-color: rgba(255,255,255,0.35); color: #fff; }

@media (max-width: 600px) {
  .grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
}
</style>

