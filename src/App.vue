<template>
  <div id="app-root" :class="{ 'light-mode': isLight }">
    <!-- ── Theme Nav Bar ── -->
    <nav v-if="!isAdminRoute" class="theme-nav" aria-label="Appearance settings">
      <div class="theme-nav-inner">
        <a class="theme-brand" href="/" aria-label="Almax Football Predictions home">
          <img class="theme-brand-logo" src="@/assets/almax-mark.png" alt="" />
          <span class="theme-brand-text">ALMAX</span>
        </a>
        <span class="theme-nav-label">Appearance</span>
        <div class="theme-nav-pills" role="group" aria-label="Choose theme">
          <button
            v-for="opt in themeOptions"
            :key="opt.value"
            :class="['theme-pill', { active: themeMode === opt.value }]"
            :aria-pressed="themeMode === opt.value"
            @click="setTheme(opt.value)"
          >
            <span class="pill-icon" aria-hidden="true">{{ opt.icon }}</span>
            <span class="pill-label">{{ opt.label }}</span>
          </button>
        </div>
        <UserProfile class="nav-user-profile" />
      </div>
    </nav>

    <router-view />

    <PhotoLightbox />

    <footer v-if="!isAdminRoute" class="powered-footnote">
      Powered by Dape Technologies
      <span class="powered-phones">
        <a
          class="powered-phone-link"
          href="https://wa.me/qr/DDOSZR6M6OI3A1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp 0704045918"
        >
          <span class="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.84 1.49h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.18-3.51-8.43ZM12.09 21.83h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.89 9.89 0 0 1-1.51-5.29c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.01c0 5.47-4.46 9.92-9.92 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
            </svg>
          </span>
          0704045918
        </a>
        <span class="powered-separator">/</span>
        <a
          class="powered-phone-link"
          href="https://wa.me/qr/L3QQY4UE76ONM1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp 0742026823"
        >
          <span class="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.84 1.49h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.18-3.51-8.43ZM12.09 21.83h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.89 9.89 0 0 1-1.51-5.29c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.01c0 5.47-4.46 9.92-9.92 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
            </svg>
          </span>
          0742026823
        </a>
      </span>
    </footer>
  </div>
</template>

<script>
import './assets/styles/global.css'
import UserProfile from './components/UserProfile.vue'
import PhotoLightbox from './components/PhotoLightbox.vue'
export default {
  name: 'App',
  components: { UserProfile, PhotoLightbox },
  data() {
    const saved = localStorage.getItem('theme') || 'dark'
    return {
      themeMode: saved,
      systemIsLight: window.matchMedia('(prefers-color-scheme: light)').matches,
      _systemMedia: null,
      themeOptions: [
        { value: 'light',  icon: '☀️', label: 'Light'  },
        { value: 'dark',   icon: '🌙', label: 'Dark'   },
        { value: 'system', icon: '🖥',  label: 'System' },
      ]
    }
  },
  computed: {
    isAdminRoute() {
      return this.$route && (
        this.$route.path.startsWith('/admin') ||
        this.$route.path.startsWith('/dev')
      )
    },
    isLight() {
      if (this.themeMode === 'system') return this.systemIsLight
      return this.themeMode === 'light'
    }
  },
  watch: {
    isLight(val) {
      document.body.classList.toggle('light-mode', val)
    },
    themeMode(val) {
      localStorage.setItem('theme', val)
      if (val === 'system') {
        this._attachSystemListener()
      } else {
        this._detachSystemListener()
      }
    }
  },
  mounted() {
    document.body.classList.toggle('light-mode', this.isLight)
    if (this.themeMode === 'system') this._attachSystemListener()
  },
  beforeUnmount() {
    this._detachSystemListener()
  },
  methods: {
    setTheme(mode) { this.themeMode = mode },
    _attachSystemListener() {
      this._systemMedia = window.matchMedia('(prefers-color-scheme: light)')
      this._systemMedia.addEventListener('change', this._onSystemChange)
    },
    _detachSystemListener() {
      if (this._systemMedia) {
        this._systemMedia.removeEventListener('change', this._onSystemChange)
        this._systemMedia = null
      }
    },
    _onSystemChange(e) {
      this.systemIsLight = e.matches
    }
  }
}
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
#app-root { min-height: 100vh; }
.powered-footnote {
  background: #050505;
  border-top: 1px solid rgba(255, 215, 0, 0.12);
  color: rgba(255, 255, 255, 0.48);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.5;
  padding: 8px 14px;
  text-align: center;
}
.powered-phones {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-left: 6px;
}
.powered-phone-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 215, 0, 0.78);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}
.powered-phone-link:hover {
  color: #25d366;
}
.whatsapp-icon {
  display: inline-flex;
  align-items: center;
  color: #25d366;
}
.powered-separator {
  color: rgba(255, 255, 255, 0.28);
}
body.light-mode .powered-footnote {
  background: #f3f4f6;
  border-top-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.56);
}
body.light-mode .powered-phone-link {
  color: #6b4c0a;
}
body.light-mode .powered-phone-link:hover {
  color: #128c4a;
}
body.light-mode .powered-separator {
  color: rgba(0, 0, 0, 0.28);
}

/* ── Theme Nav ── */
.theme-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 9999;
  height: 44px;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 215, 0, 0.18);
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
body.light-mode .theme-nav {
  background: rgba(240, 242, 245, 0.96);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
}
.theme-nav-inner {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 10px;
  padding: 0 18px;
}
.theme-brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
  color: #fff;
  text-decoration: none;
  min-width: 0;
}
.theme-brand-logo {
  width: 30px;
  height: 30px;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.28));
}
.theme-brand-text {
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1.6px;
  line-height: 1;
}
body.light-mode .theme-brand-text {
  color: #141414;
}
.nav-user-profile { margin-left: 4px; }
.theme-nav-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(170, 170, 170, 0.7);
  user-select: none;
}
body.light-mode .theme-nav-label {
  color: rgba(80, 80, 80, 0.8);
}
.theme-nav-pills {
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 3px;
}
body.light-mode .theme-nav-pills {
  background: rgba(0, 0, 0, 0.07);
}
.theme-pill {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 20px;
  border: none;
  background: transparent;
  color: rgba(170, 170, 170, 0.75);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}
body.light-mode .theme-pill {
  color: rgba(80, 80, 80, 0.8);
}
.theme-pill:hover {
  background: rgba(255, 215, 0, 0.1);
  color: #FFD700;
}
.theme-pill.active {
  background: rgba(255, 215, 0, 0.18);
  color: #FFD700;
  font-weight: 700;
}
body.light-mode .theme-pill.active {
  background: rgba(184, 134, 11, 0.15);
  color: #6b4c0a;
}
.pill-icon { font-size: 13px; line-height: 1; }
.pill-label { line-height: 1; }

@media (max-width: 480px) {
  .theme-nav-inner { padding: 0 10px; gap: 8px; }
  .theme-brand-logo { width: 28px; height: 28px; }
  .theme-brand-text { display: none; }
  .theme-nav-label { display: none; }
  .pill-label { display: none; }
  .theme-pill { padding: 4px 9px; }
}
</style>
