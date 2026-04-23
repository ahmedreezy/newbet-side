<template>
  <div class="video-ad-overlay" role="dialog" aria-modal="true" aria-label="Video Advertisement">
    <div class="video-ad-wrap">
      <!-- Ad label -->
      <div class="ad-top-bar">
        <span class="ad-label">Advertisement</span>
        <button
          class="skip-btn"
          :disabled="skipCountdown > 0"
          @click="skip"
        >
          <template v-if="skipCountdown > 0">
            Skip in {{ skipCountdown }}s
          </template>
          <template v-else>
            Skip Ad ›
          </template>
        </button>
      </div>

      <!-- Video container -->
      <div class="video-container">
        <template v-if="videoUrl">
          <iframe
            v-if="isYoutube"
            :src="youtubeEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video-iframe"
          ></iframe>
          <video
            v-else
            :src="videoUrl"
            autoplay
            class="video-player"
            @ended="onVideoEnd"
          ></video>
        </template>
        <div v-else class="ad-placeholder">
          <div class="ad-pulse">
            <span class="ad-icon">🎬</span>
          </div>
          <p class="ad-placeholder-text">Advertisement</p>
          <p class="ad-placeholder-sub">Your ad will play here</p>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="ad-progress-bar">
        <div class="ad-progress-fill" :style="{ width: progressPct + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VideoAdModal',
  emits: ['done'],
  data() {
    return {
      videoUrl: '',
      skipCountdown: 10,
      progressPct: 0,
      _timer: null
    }
  },
  computed: {
    isYoutube() {
      return this.videoUrl && (
        this.videoUrl.includes('youtube.com') ||
        this.videoUrl.includes('youtu.be')
      )
    },
    youtubeEmbedUrl() {
      if (!this.videoUrl) return ''
      let videoId = ''
      try {
        const u = new URL(this.videoUrl)
        if (u.hostname === 'youtu.be') {
          videoId = u.pathname.slice(1)
        } else {
          videoId = u.searchParams.get('v') || ''
        }
      } catch {
        return ''
      }
      if (!videoId) return ''
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    }
  },
  async mounted() {
    try {
      const { data } = await axios.get('/api/config/vip-config')
      if (data && data.ad_video_url) this.videoUrl = data.ad_video_url
    } catch { /* ignore */ }
    this.startCountdown()
  },
  beforeUnmount() {
    clearInterval(this._timer)
  },
  methods: {
    startCountdown() {
      const totalMs = 10000
      const interval = 100
      let elapsed = 0
      this._timer = setInterval(() => {
        elapsed += interval
        this.progressPct = Math.min((elapsed / totalMs) * 100, 100)
        this.skipCountdown = Math.max(0, Math.ceil((totalMs - elapsed) / 1000))
        if (elapsed >= totalMs) {
          clearInterval(this._timer)
          this.skipCountdown = 0
        }
      }, interval)
    },
    skip() {
      clearInterval(this._timer)
      this.$emit('done')
    },
    onVideoEnd() {
      this.$emit('done')
    }
  }
}
</script>

<style scoped>
.video-ad-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.video-ad-wrap {
  width: min(560px, 94vw);
  background: var(--ad-wrap-bg);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255,215,0,0.2);
  box-shadow: 0 20px 60px rgba(0,0,0,0.7);
}
.ad-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--ad-bar-bg);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.ad-label {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
}
.skip-btn {
  background: rgba(255,215,0,0.12);
  border: 1px solid rgba(255,215,0,0.3);
  color: #FFD700;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}
.skip-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #888;
  border-color: rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
}
.skip-btn:not(:disabled):hover { background: rgba(255,215,0,0.25); }

.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  position: relative;
}
.video-iframe,
.video-player {
  width: 100%;
  height: 100%;
  display: block;
}

.ad-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--dark-3);
}
.ad-pulse {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgba(255,215,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: adPulse 2s ease-in-out infinite;
}
@keyframes adPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255,215,0,0.3); }
  50%       { box-shadow: 0 0 0 16px rgba(255,215,0,0); }
}
.ad-icon { font-size: 36px; }
.ad-placeholder-text { font-size: 16px; font-weight: 700; color: #FFD700; }
.ad-placeholder-sub  { font-size: 12px; color: var(--text-muted); }

.ad-progress-bar {
  height: 3px;
  background: rgba(255,255,255,0.07);
}
.ad-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #B8860B, #FFD700);
  transition: width 0.1s linear;
}
</style>
