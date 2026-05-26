<template>
  <div class="editor">
    <p class="editor-desc">
      View all registered members, their subscription status, and manually manage accounts.
    </p>

    <div class="toolbar">
      <div class="search-wrap">
        <span class="search-mark">⌕</span>
        <input v-model="search" class="search-input" type="text" placeholder="Search by name, phone, or email" />
      </div>
      <span class="count-badge">{{ filtered.length }} members</span>
    </div>

    <div v-if="loading" class="state-msg">Loading members…</div>
    <div v-else-if="filtered.length === 0" class="empty-state">
      <strong>No members found</strong>
      <span>Try a different search term or clear the filter.</span>
    </div>
    <div v-else class="user-list">
      <div v-for="u in filtered" :key="u.id" class="user-card">
        <div class="user-left">
          <div class="avatar">{{ (u.username || '?')[0].toUpperCase() }}</div>
          <div class="user-info">
            <span class="user-name">{{ u.username }}</span>
            <span class="user-phone">Phone: {{ u.phone }}</span>
            <span v-if="u.email" class="user-email">Email: {{ u.email }}</span>
            <span v-if="u.dob" class="user-dob">DOB: {{ u.dob }}</span>
          </div>
        </div>
        <div class="user-right">
          <div class="sub-status" :class="subStatusClass(u)">
            {{ subStatusLabel(u) }}
          </div>
          <div v-if="u.activeSub" class="sub-exp">
            Expires: {{ formatDate(u.activeSub.expiresAt) }}
          </div>
          <button class="del-btn" @click="deleteUser(u.id)" title="Remove member">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '../../utils/adminApi'

export default {
  name: 'UsersEditor',
  data() {
    return {
      users: [],
      loading: true,
      search: ''
    }
  },
  computed: {
    filtered() {
      const q = this.search.toLowerCase().trim()
      if (!q) return this.users
      return this.users.filter(u =>
        (u.username || '').toLowerCase().includes(q) ||
        (u.phone || '').includes(q) ||
        (u.email || '').toLowerCase().includes(q)
      )
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.loading = true
      try {
        const { data } = await adminApi.get('/api/users')
        this.users = data
      } catch {
        this.users = []
      } finally {
        this.loading = false
      }
    },
    subStatusClass(u) {
      if (u.activeSub) return 'status-active'
      if (u.pendingSub) return 'status-pending'
      return 'status-none'
    },
    subStatusLabel(u) {
      if (u.activeSub) return 'ACTIVE - ' + (u.activeSub.planType || '').toUpperCase()
      if (u.pendingSub) return 'PENDING PAYMENT'
      return 'No subscription'
    },
    formatDate(ts) {
      if (!ts) return '—'
      return new Date(ts).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    },
    async deleteUser(id) {
      if (!confirm('Remove this member and cancel their subscriptions?')) return
      try {
        await adminApi.delete('/api/users/' + id)
        this.users = this.users.filter(u => u.id !== id)
      } catch {
        alert('Delete failed.')
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 900px; }
.editor-desc { font-size: 14px; color: rgba(255,255,255,0.58); margin-bottom: 24px; line-height: 1.7; border-left: 3px solid #FFD700; padding: 12px 0 12px 16px; }
.state-msg { font-size: 14px; color: #888; padding: 14px; }
.empty-state { padding: 34px; text-align: center; color: rgba(255,255,255,0.46); font-size: 14px; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; display: flex; flex-direction: column; gap: 6px; }
.empty-state strong { color: #fff; font-size: 16px; }

.toolbar { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.search-wrap { position: relative; flex: 1; }
.search-mark { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: rgba(255,215,0,0.66); font-size: 18px; }
.search-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 11px; padding: 12px 16px 12px 42px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s, background 0.2s; }
.search-input:focus { border-color: rgba(255,215,0,0.4); }
.search-input::placeholder { color: #444; }
.count-badge { background: rgba(255,215,0,0.1); color: #FFD700; font-size: 12px; font-weight: 800; padding: 8px 14px; border-radius: 999px; white-space: nowrap; }

.user-list { display: flex; flex-direction: column; gap: 12px; }
.user-card {
  background: rgba(17,17,17,0.88);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  transition: border-color 0.2s;
}
.user-card:hover { border-color: rgba(255,215,0,0.24); background: rgba(255,255,255,0.035); }
.user-left { display: flex; align-items: flex-start; gap: 14px; }
.avatar {
  width: 44px; height: 44px; border-radius: 12px;
  background: linear-gradient(135deg, #B8860B, #FFD700);
  color: #000; font-size: 18px; font-weight: 900;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.user-info { display: flex; flex-direction: column; gap: 3px; }
.user-name  { font-size: 15px; font-weight: 700; color: #fff; }
.user-phone, .user-email, .user-dob { font-size: 12px; color: rgba(255,255,255,0.46); }

.user-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.sub-status { font-size: 11px; font-weight: 900; padding: 6px 12px; border-radius: 999px; letter-spacing: 0.4px; }
.status-active  { background: rgba(0,200,83,0.12); color: #00c853; }
.status-pending { background: rgba(255,165,0,0.12); color: #FFA500; }
.status-none    { background: rgba(255,255,255,0.06); color: #666; }
.sub-exp { font-size: 11px; color: #666; }
.del-btn {
  background: rgba(255,82,82,0.1); border: 1px solid rgba(255,82,82,0.2);
  color: #ff5252; font-size: 12px; font-weight: 800; padding: 7px 14px;
  border-radius: 8px; cursor: pointer; transition: background 0.2s;
}
.del-btn:hover { background: rgba(255,82,82,0.2); }

@media (max-width: 600px) {
  .user-card { flex-direction: column; }
  .user-right { align-items: flex-start; }
}
</style>
