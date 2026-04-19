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
        <span class="header-date">{{ todayDate }}</span>
      </header>

      <div class="panel-body">
        <FreeOdd2Editor   v-if="activeSection === 'free-odd2'" />
        <FootballTipsEditor v-if="activeSection === 'football-tips'" />
        <AlmaxPredictionsEditor v-if="activeSection === 'almax-predictions'" />
        <RecentWinsEditor v-if="activeSection === 'recent-wins'" />
        <PaymentsOverview v-if="activeSection === 'payments'" />
      </div>
    </main>
  </div>
</template>

<script>
import FreeOdd2Editor   from '../../components/admin/FreeOdd2Editor.vue'
import FootballTipsEditor from '../../components/admin/FootballTipsEditor.vue'
import AlmaxPredictionsEditor from '../../components/admin/AlmaxPredictionsEditor.vue'
import RecentWinsEditor from '../../components/admin/RecentWinsEditor.vue'
import PaymentsOverview from '../../components/admin/PaymentsOverview.vue'

export default {
  name: 'AdminDashboard',
  components: { FreeOdd2Editor, FootballTipsEditor, AlmaxPredictionsEditor, RecentWinsEditor, PaymentsOverview },
  data() {
    const d = new Date()
    return {
      activeSection: 'free-odd2',
      todayDate: d.toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
      navItems: [
        { id: 'free-odd2',          icon: '⚡', label: 'Free Odd 2' },
        { id: 'football-tips',      icon: '⚽', label: 'Football Tips' },
        { id: 'almax-predictions',  icon: '🎯', label: 'Almax Predictions' },
        { id: 'recent-wins',        icon: '🏆', label: 'Recent Wins' },
        { id: 'payments',           icon: '💳', label: 'Payments' }
      ]
    }
  },
  computed: {
    currentSection() {
      return this.navItems.find(n => n.id === this.activeSection) || {}
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('adminAuth')
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background: #0a0a0a;
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #fff;
}

/* ── Sidebar ─────────────────────────────────────────────── */
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #111;
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
.logo-text { color: #fff; }
.gold { color: #FFD700; }

.sidebar-role {
  font-size: 11px;
  color: #555;
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
  color: #888;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, color 0.2s;
}
.nav-item:hover { background: rgba(255,215,0,0.06); color: #ccc; }
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
  background: #0f0f0f;
}
.section-title {
  font-size: 22px;
  font-weight: 800;
  color: #fff;
}
.header-date {
  font-size: 13px;
  color: #555;
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
