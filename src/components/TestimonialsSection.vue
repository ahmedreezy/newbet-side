<template>
  <section class="testimonials" id="testimonials">
    <div class="section-header">
      <h2>WHAT OUR <span class="gold-text">MEMBERS SAY</span></h2>
    </div>

    <div v-if="loading" class="state-box">
      <div class="spin-ring"></div>
      <span>Loading testimonials…</span>
    </div>

    <div v-else-if="testimonials.length === 0" class="empty-state">
      <span class="empty-icon">💬</span>
      <p>Testimonials coming soon!</p>
    </div>

    <div v-else class="testimonials-grid">
      <div
        v-for="t in testimonials"
        :key="t.id"
        class="testimonial-card"
      >
        <div class="t-img-wrap">
          <img
            :src="imageSrc(t)"
            :alt="t.caption || 'Testimonial'"
            class="t-img"
            loading="lazy"
          />
        </div>
        <div v-if="t.caption" class="t-info">
          <span v-if="t.caption" class="t-caption">{{ t.caption }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { getApiBaseUrl } from '../utils/apiBase'

const API = getApiBaseUrl()

export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [],
      loading: true,
      apiBase: API
    }
  },
  async mounted() {
    await this.fetchTestimonials()
  },
  methods: {
    async fetchTestimonials() {
      this.loading = true
      try {
        const res = await axios.get(`${API}/api/testimonials`)
        this.testimonials = res.data || []
      } catch {
        this.testimonials = []
      } finally {
        this.loading = false
      }
    },
    imageSrc(item) {
      const url = item.imageUrl || item.image_url || ''
      if (!url) return ''
      if (/^(https?:|data:|blob:)/.test(url)) return url
      return this.apiBase + url
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 60px 24px 40px;
  max-width: 1100px;
  margin: 0 auto;
  scroll-margin-top: 72px;
}
.section-header {
  text-align: center;
  margin-bottom: 36px;
}
.section-header h2 {
  font-size: clamp(22px, 5vw, 34px);
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--white);
}
.gold-text { color: var(--gold); }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.testimonial-card {
  background: var(--dark-card);
  border: 1px solid rgba(255,215,0,0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s, border-color 0.25s;
}
.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,215,0,0.35);
}
.t-img-wrap { width: 100%; aspect-ratio: 9/16; overflow: hidden; background: #111; }
.t-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.t-info {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.t-caption{ font-size: 12px; color: var(--text-muted); line-height: 1.5; }

.state-box, .empty-state {
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; padding: 48px 20px; color: var(--text-muted); font-size: 14px;
}
.empty-icon { font-size: 40px; }
.spin-ring {
  width: 32px; height: 32px;
  border: 3px solid rgba(255,215,0,0.2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 600px) {
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .t-img-wrap { aspect-ratio: 3/4; }
}
</style>
