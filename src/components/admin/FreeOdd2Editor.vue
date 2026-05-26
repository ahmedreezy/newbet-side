<template>
  <div class="editor">
    <p class="editor-desc">
      Update the Free Daily Tip with one photo and one caption. Changes go live immediately after saving.
    </p>

    <div v-if="fetchLoading" class="state-msg">Loading current tip...</div>
    <div v-else-if="fetchError" class="state-msg error">Could not load. Make sure the server is running.</div>

    <form @submit.prevent="save" class="editor-form">
      <MediaUploadCard
        v-model:image="imageFile"
        v-model:caption="form.caption"
        :preview-src="imageSrc(form.imageUrl || form.image_url)"
        input-id="free-tip-caption"
      />

      <div class="form-actions">
        <button type="submit" class="save-btn" :disabled="saving">
          {{ saving ? 'Saving...' : 'Save & Publish' }}
        </button>
        <span v-if="saved" class="saved-msg">Saved successfully</span>
        <span v-if="saveError" class="error-msg">{{ saveError }}</span>
      </div>
    </form>

    <div class="preview-wrap">
      <p class="preview-label">Live Preview</p>
      <div class="preview-card">
        <img v-if="previewImage" :src="previewImage" class="preview-img" alt="Free daily tip preview" style="cursor:zoom-in" @click="$lightbox.open(previewImage)" />
        <div v-else class="preview-empty">Photo</div>
        <p>{{ form.caption || 'Caption will appear here' }}</p>
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
  name: 'FreeOdd2Editor',
  components: { MediaUploadCard },
  data() {
    return {
      form: { caption: '', imageUrl: '' },
      imageFile: null,
      fetchLoading: true,
      fetchError: false,
      saving: false,
      saved: false,
      saveError: ''
    }
  },
  computed: {
    previewImage() {
      if (this.imageFile) return URL.createObjectURL(this.imageFile)
      return this.imageSrc(this.form.imageUrl || this.form.image_url || '')
    }
  },
  async mounted() {
    try {
      const { data } = await adminApi.get('/api/config/free-odd2')
      if (data) {
        this.form.caption = data.caption || data.pick || ''
        this.form.imageUrl = data.imageUrl || data.image_url || ''
      }
    } catch {
      this.fetchError = true
    } finally {
      this.fetchLoading = false
    }
  },
  methods: {
    imageSrc(url) {
      if (!url) return ''
      if (/^(https?:|data:|blob:)/.test(url)) return url
      return API + url
    },
    async save() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      try {
        const fd = new FormData()
        fd.append('caption', this.form.caption || '')
        if (this.imageFile) fd.append('image', this.imageFile)
        const { data } = await adminApi.post('/api/config/free-odd2', fd)
        this.form.caption = data.caption || data.pick || this.form.caption
        this.form.imageUrl = data.imageUrl || data.image_url || this.form.imageUrl
        this.imageFile = null
        this.saved = true
        setTimeout(() => { this.saved = false }, 2500)
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
.editor-desc { color: rgba(255,255,255,0.58); font-size: 14px; line-height: 1.7; margin-bottom: 24px; border-left: 3px solid #FFD700; padding: 12px 0 12px 16px; }
.state-msg { background: #111; border-radius: 10px; color: #888; font-size: 14px; margin-bottom: 20px; padding: 14px 18px; }
.state-msg.error { border: 1px solid rgba(255, 82, 82, 0.2); color: #ff8a65; }
.editor-form { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
.form-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 14px; }
.save-btn { background: linear-gradient(135deg, #FFD700, #FFA500); border: none; border-radius: 9px; color: #000; cursor: pointer; font-size: 14px; font-weight: 900; min-height: 42px; padding: 11px 24px; }
.save-btn:disabled { cursor: not-allowed; opacity: 0.6; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 700; }
.error-msg { color: #ff5252; font-size: 13px; }
.preview-label { color: #555; font-size: 11px; font-weight: 800; letter-spacing: 2px; margin-bottom: 12px; text-transform: uppercase; }
.preview-card { background: #111; border: 1px solid rgba(255, 215, 0, 0.16); border-radius: 14px; max-width: 360px; overflow: hidden; }
.preview-img, .preview-empty { aspect-ratio: 4 / 3; display: flex; width: 100%; }
.preview-img { object-fit: cover; }
.preview-empty { align-items: center; background: #080808; color: #666; justify-content: center; }
.preview-card p { color: #fff; font-size: 14px; line-height: 1.5; margin: 0; padding: 16px; }
</style>
