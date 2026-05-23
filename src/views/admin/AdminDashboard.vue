<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span>🏆</span>
        <span class="logo-text">ALMAX<span class="gold"> ADMIN</span></span>
      </div>
      <p class="sidebar-role">Admin Panel</p>

      <nav class="sidebar-nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="['nav-item', { active: activeSection === item.id }]"
          @click="activeSection = item.id"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </button>
      </nav>

      <button class="logout-btn" @click="logout">
        <span>⬅</span> Logout
      </button>
    </aside>

    <!-- Main content -->
    <main class="main-panel">
      <header class="main-header">
        <h1 class="section-title">{{ currentSection.label }}</h1>
        <div class="header-right">
          <span class="header-date">{{ todayDate }}</span>
          <!-- Notification bell -->
          <div class="notif-bell-wrap" v-click-outside="closeNotif">
            <button class="notif-bell" @click="toggleNotif" title="Status check notifications">
              &#128276;
              <span v-if="unreadCount > 0" class="notif-badge">{{ unreadCount > 99 ? '99+' : unreadCount }}</span>
            </button>
            <div v-if="showNotifDropdown" class="notif-dropdown">
              <div class="notif-header">
                <span class="notif-title">Status Checks</span>
                <button v-if="notifications.some(n => !n.is_read)" class="notif-read-all" @click="markAllRead">Mark all read</button>
              </div>
              <div v-if="notifications.length === 0" class="notif-empty">No notifications yet</div>
              <div
                v-for="n in notifications"
                :key="n.id"
                :class="['notif-item', { unread: !n.is_read }]"
                @click="onNotifClick(n)"
              >
                <div class="notif-user">{{ n.username || n.phone }}</div>
                <div class="notif-detail">
                  <span class="notif-plan" v-if="n.plan_type">{{ n.plan_type }}</span>
                  <span :class="['notif-status', 'ns-' + (n.sub_status || 'none')]">{{ n.sub_status || 'none' }}</span>
                </div>
                <div class="notif-time">{{ formatNotifTime(n.created_at) }}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="panel-body">
        <FreeOdd2Editor      v-if="activeSection === 'free-odd2'" />
        <FootballTipsEditor  v-if="activeSection === 'football-tips'" />
        <RecentWinsEditor    v-if="activeSection === 'recent-wins'" />
        <VipPackagesEditor   v-if="activeSection === 'vip-packages'" />
        <PaymentsOverview    v-if="activeSection === 'payments'" :focusSubscriptionId="focusSubId" @vue:unmounted="focusSubId = null" />
        <TestimonialsEditor  v-if="activeSection === 'testimonials'" />
        <UsersEditor         v-if="activeSection === 'users'" />
        <SitePreview         v-if="activeSection === 'preview'" />
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import FreeOdd2Editor     from '../../components/admin/FreeOdd2Editor.vue'
import FootballTipsEditor  from '../../components/admin/FootballTipsEditor.vue'
import RecentWinsEditor    from '../../components/admin/RecentWinsEditor.vue'
import VipPackagesEditor   from '../../components/admin/VipPackagesEditor.vue'
import PaymentsOverview    from '../../components/admin/PaymentsOverview.vue'
import TestimonialsEditor  from '../../components/admin/TestimonialsEditor.vue'
import UsersEditor         from '../../components/admin/UsersEditor.vue'
import SitePreview         from '../../components/admin/SitePreview.vue'

export default {
  name: 'AdminDashboard',
  components: { FreeOdd2Editor, FootballTipsEditor, RecentWinsEditor, VipPackagesEditor, PaymentsOverview, TestimonialsEditor, UsersEditor, SitePreview },
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el._clickOutside = (e) => { if (!el.contains(e.target)) binding.value() }
        document.addEventListener('click', el._clickOutside)
      },
      unmounted(el) { document.removeEventListener('click', el._clickOutside) }
    }
  },
  data() {
    const d = new Date()
    return {
      activeSection: 'free-odd2',
      todayDate: d.toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
      navItems: [
        { id: 'free-odd2',     icon: '⚡', label: 'Free Daily Tip' },
        { id: 'football-tips', icon: '⚽', label: 'Almax Predictions' },
        { id: 'recent-wins',   icon: '🏆', label: 'Recent Wins' },
        { id: 'vip-packages',  icon: '⭐', label: 'VIP Packages' },
        { id: 'payments',      icon: '💳', label: 'Payments' },
        { id: 'users',         icon: '👥', label: 'Members' },
        { id: 'testimonials',  icon: '💬', label: 'Testimonials' },
        { id: 'preview',       icon: '👁', label: 'Site Preview' }
      ],
      notifications: [],
      unreadCount: 0,
      showNotifDropdown: false,
      notifPollInterval: null,
      focusSubId: null
    }
  },
  computed: {
    currentSection() {
      return this.navItems.find(n => n.id === this.activeSection) || {}
    }
  },
  async mounted() {
    await this.fetchNotifCount()
    this.notifPollInterval = setInterval(this.fetchNotifCount, 30000)
  },
  beforeUnmount() {
    if (this.notifPollInterval) clearInterval(this.notifPollInterval)
  },
  methods: {
    logout() {
      localStorage.removeItem('adminToken')
      this.$router.push('/admin/login')
    },
    async fetchNotifCount() {
      try {
        const token = localStorage.getItem('adminToken')
        if (!token) return
        const { data } = await axios.get('/api/notifications/unread-count', {
          headers: { Authorization: 'Bearer ' + token }
        })
        this.unreadCount = data.count || 0
      } catch { /* silent */ }
    },
    async fetchNotifications() {
      try {
        const token = localStorage.getItem('adminToken')
        if (!token) return
        const { data } = await axios.get('/api/notifications', {
          headers: { Authorization: 'Bearer ' + token }
        })
        this.notifications = data || []
      } catch { /* silent */ }
    },
    async toggleNotif() {
      this.showNotifDropdown = !this.showNotifDropdown
      if (this.showNotifDropdown) await this.fetchNotifications()
    },
    closeNotif() { this.showNotifDropdown = false },
    async onNotifClick(notif) {
      this.showNotifDropdown = false
      try {
        const token = localStorage.getItem('adminToken')
        await axios.patch('/api/notifications/' + notif.id + '/read', {}, {
          headers: { Authorization: 'Bearer ' + token }
        })
        notif.is_read = true
        this.unreadCount = Math.max(0, this.unreadCount - 1)
      } catch { /* silent */ }
      this.focusSubId = notif.subscription_id || null
      this.activeSection = 'payments'
    },
    async markAllRead() {
      try {
        const token = localStorage.getItem('adminToken')
        await axios.patch('/api/notifications/read-all', {}, {
          headers: { Authorization: 'Bearer ' + token }
        })
        this.notifications.forEach(n => { n.is_read = true })
        this.unreadCount = 0
      } catch { /* silent */ }
    },
    formatNotifTime(ts) {
      if (!ts) return ''
      const d = new Date(ts)
      const now = new Date()
      const diff = Math.floor((now - d) / 60000)
      if (diff < 1) return 'just now'
      if (diff < 60) return diff + 'm ago'
      if (diff < 1440) return Math.floor(diff / 60) + 'h ago'
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--dark);
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: var(--white);
}

/* ── Sidebar ─────────────────────────────────────────────── */
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: var(--dark-2);
  border-right: 1px solid rgba(255,215,0,0.12);
  display: flex;
  flex-direction: column;
  padding: 28px 16px 24px;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
}
.logo-text { color: var(--white); }
.gold { color: #FFD700; }

.sidebar-role {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0 8px;
  margin-bottom: 32px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, color 0.2s;
}
.nav-item:hover { background: rgba(255,215,0,0.06); color: var(--white); }
.nav-item.active {
  background: rgba(255,215,0,0.12);
  color: #FFD700;
  border-left: 3px solid #FFD700;
}
.nav-icon { font-size: 18px; }

.logout-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,82,82,0.25);
  background: transparent;
  color: #ff5252;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 16px;
}
.logout-btn:hover { background: rgba(255,82,82,0.1); }

/* ── Main Panel ──────────────────────────────────────────── */
.main-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255,215,0,0.08);
  background: var(--dark-3);
}
.section-title {
  font-size: 22px;
  font-weight: 800;
  color: var(--white);
}
.header-date {
  font-size: 13px;
  color: var(--text-muted);
}

.panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .dashboard { flex-direction: column; }
  .sidebar {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;
    gap: 6px;
  }
  .sidebar-logo, .sidebar-role { display: none; }
  .sidebar-nav { flex-direction: row; flex: unset; }
  .logout-btn { margin-top: 0; padding: 10px 12px; font-size: 12px; }
  .nav-label { display: none; }
  .nav-item { padding: 10px; }
  .panel-body { padding: 16px; }
  .main-header { padding: 16px; }
}
</style>
