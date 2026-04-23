<template>
  <div class="editor">
    <p class="editor-desc">
      Update the <strong>Free Daily Tip</strong> that shows after the video ad. Changes go live immediately after saving.
    </p>

    <div v-if="fetchLoading" class="state-msg">Loading current values…</div>
    <div v-else-if="fetchError" class="state-msg error">⚠ Could not load — make sure the server is running.</div>

    <form @submit.prevent="save" class="editor-form">
      <div class="fields-row">
        <div class="field">
          <label>Team A (Home)</label>
          <input v-model="form.teamA" type="text" placeholder="e.g. Arsenal" required />
        </div>
        <div class="field">
          <label>Team B (Away)</label>
          <input v-model="form.teamB" type="text" placeholder="e.g. Chelsea" required />
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <label>Pick / Market</label>
          <input v-model="form.pick" type="text" placeholder="e.g. Over 2.5 Goals" required />
        </div>
        <div class="field">
          <label>Odd</label>
          <input v-model="form.odd" type="number" step="0.01" min="1.01" placeholder="e.g. 2.00" required />
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <label>Kick-off Time</label>
          <input v-model="form.time" type="text" placeholder="e.g. 20:45" required />
        </div>
        <div class="field">
          <label>Competition</label>
          <input v-model="form.competition" type="text" placeholder="e.g. Premier League" required />
        </div>
      </div>

      <!-- Image upload -->
      <div class="field full-field">
        <label>Tip Image (optional)</label>
        <div class="img-upload-row">
          <label class="img-upload-btn" for="tip-img-input">
            📷 Choose Image
          </label>
          <input id="tip-img-input" type="file" accept="image/*" @change="onImageChange" class="hidden-file" />
          <span v-if="imageFile" class="img-filename">{{ imageFile.name }}</span>
          <span v-else-if="form.imageUrl" class="img-filename">Current image set ✓</span>
        </div>
        <img v-if="imagePreview || form.imageUrl" :src="imagePreview || ('/api/' + form.imageUrl)" class="img-preview" alt="Tip image preview" />
      </div>

      <div class="form-actions">
        <button type="submit" class="save-btn" :disabled="saving">
          {{ saving ? 'Saving…' : '✓ Save & Publish' }}
        </button>
        <span v-if="saved" class="saved-msg">✓ Saved successfully!</span>
        <span v-if="saveError" class="error-msg">⚠ {{ saveError }}</span>
      </div>
    </form>

    <!-- Preview card -->
    <div class="preview-wrap">
      <p class="preview-label">LIVE PREVIEW</p>
      <div class="preview-card">
        <img v-if="imagePreview || form.imageUrl" :src="imagePreview || ('/api/' + form.imageUrl)" class="preview-img" alt="" />
        <div class="preview-match">
          <span>{{ form.teamA || 'Team A' }}</span>
          <span class="vs">VS</span>
          <span>{{ form.teamB || 'Team B' }}</span>
        </div>
        <div class="preview-row"><span class="pl">PICK</span><span>{{ form.pick || '–' }}</span></div>
        <div class="preview-row"><span class="pl">ODD</span><span class="pv-odd">{{ form.odd || '–' }}</span></div>
        <div class="preview-row"><span class="pl">TIME</span><span>{{ form.time || '–' }}</span></div>
        <div class="preview-row"><span class="pl">COMP</span><span>{{ form.competition || '–' }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '../../utils/adminApi'

export default {
  name: 'FreeOdd2Editor',
  data() {
    return {
      form: { teamA: '', teamB: '', pick: '', odd: '', time: '', competition: '', imageUrl: '' },
      imageFile: null,
      imagePreview: null,
      fetchLoading: true,
      fetchError: false,
      saving: false,
      saved: false,
      saveError: ''
    }
  },
  async mounted() {
    try {
      const { data } = await adminApi.get('/api/config/free-odd2')
      if (data) Object.assign(this.form, data)
    } catch {
      this.fetchError = true
    } finally {
      this.fetchLoading = false
    }
  },
  methods: {
    onImageChange(e) {
      const file = e.target.files[0]
      if (!file) return
      this.imageFile = file
      this.imagePreview = URL.createObjectURL(file)
    },
    async save() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      try {
        const fd = new FormData()
        Object.entries(this.form).forEach(([k, v]) => { if (k !== 'imageUrl') fd.append(k, v) })
        if (this.imageFile) fd.append('image', this.imageFile)
        await adminApi.put('/api/config/free-odd2', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
        this.saved = true
        setTimeout(() => { this.saved = false }, 3000)
      } catch {
        this.saveError = 'Save failed. Make sure the server is running.'
      } finally {
        this.saving = false
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 760px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 28px; line-height: 1.6; }
.state-msg { padding: 14px 18px; border-radius: 10px; background: #1a1a1a; font-size: 14px; color: #888; margin-bottom: 24px; }
.state-msg.error { color: #ff8a65; border: 1px solid rgba(255,82,82,0.2); }

.editor-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 28px; margin-bottom: 32px; }
.fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
.field { display: flex; flex-direction: column; gap: 8px; }
.full-field { margin-bottom: 18px; }
.field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.field input { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.field input:focus { border-color: rgba(255,215,0,0.45); }
.field input::placeholder { color: #444; }
.hidden-file { display: none; }
.img-upload-row { display: flex; align-items: center; gap: 12px; }
.img-upload-btn { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.2); color: #FFD700; padding: 9px 18px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; }
.img-upload-btn:hover { background: rgba(255,215,0,0.08); }
.img-filename { font-size: 12px; color: #888; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px; }
.img-preview { margin-top: 10px; width: 100%; max-width: 320px; border-radius: 10px; object-fit: cover; max-height: 180px; }

.form-actions { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

.preview-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #555; text-transform: uppercase; margin-bottom: 14px; }
.preview-card { background: #111; border: 1px solid rgba(255,215,0,0.2); border-radius: 14px; padding: 0; max-width: 340px; overflow: hidden; }
.preview-img { width: 100%; max-height: 160px; object-fit: cover; display: block; }
.preview-match { display: flex; align-items: center; gap: 12px; font-size: 15px; font-weight: 700; color: #fff; padding: 16px 22px 10px; }
.vs { color: #FFD700; font-size: 12px; }
.preview-row { display: flex; justify-content: space-between; font-size: 13px; padding: 8px 22px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.preview-row:last-child { border-bottom: none; padding-bottom: 16px; }
.pl { color: #555; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.pv-odd { color: #FFD700; font-size: 18px; font-weight: 900; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } }
</style>
