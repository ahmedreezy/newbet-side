<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-logo">
        <span class="logo-icon">🏆</span>
        <span class="logo-text">BET<span class="gold">TIPS</span></span>
      </div>
      <h2 class="login-title">Admin Portal</h2>
      <p class="login-sub">Sign in to manage site content</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="field">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter username"
            autocomplete="username"
            required
          />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            autocomplete="current-password"
            required
          />
        </div>

        <p v-if="error" class="error-msg">⚠ {{ error }}</p>

        <button type="submit" class="login-btn" :disabled="loading">
          <span v-if="loading">Signing in…</span>
          <span v-else>Sign In →</span>
        </button>
      </form>

      <a href="/" class="back-link">← Back to site</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: ''
    }
  },
  methods: {
    handleLogin() {
      this.error = ''
      this.loading = true

      const correctUser = process.env.VUE_APP_ADMIN_USER
      const correctPass = process.env.VUE_APP_ADMIN_PASS

      setTimeout(() => {
        if (this.username === correctUser && this.password === correctPass) {
          localStorage.setItem('adminAuth', '1')
          this.$router.push('/admin/dashboard')
        } else {
          this.error = 'Invalid username or password.'
          this.loading = false
        }
      }, 400)
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: radial-gradient(ellipse at center, #1a1200 0%, #0a0a0a 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.login-card {
  background: #111;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 18px;
  padding: 48px 40px;
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 0 60px rgba(255, 215, 0, 0.08);
}

.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 28px;
}
.logo-icon { font-size: 28px; }
.logo-text {
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
}
.gold { color: #FFD700; }

.login-title {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 6px;
}
.login-sub {
  font-size: 14px;
  color: #888;
  margin-bottom: 32px;
}

.login-form { text-align: left; }

.field {
  margin-bottom: 18px;
}
.field label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.field input {
  width: 100%;
  background: #1a1a1a;
  border: 1px solid rgba(255,215,0,0.15);
  border-radius: 10px;
  padding: 13px 16px;
  color: #fff;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}
.field input:focus {
  border-color: rgba(255, 215, 0, 0.5);
}
.field input::placeholder { color: #555; }

.error-msg {
  color: #ff5252;
  font-size: 13px;
  margin-bottom: 16px;
  text-align: center;
  background: rgba(255,82,82,0.1);
  border-radius: 8px;
  padding: 8px 12px;
}

.login-btn {
  width: 100%;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 8px;
  letter-spacing: 0.5px;
}
.login-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.login-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.back-link {
  display: inline-block;
  margin-top: 24px;
  font-size: 13px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover { color: #FFD700; }
</style>
