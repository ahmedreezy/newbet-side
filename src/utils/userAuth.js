const USER_KEY  = 'vip_user'
const TOKEN_KEY = 'vip_token'

export function saveUser(user, token) {
  localStorage.setItem(USER_KEY,  JSON.stringify(user))
  localStorage.setItem(TOKEN_KEY, token)
}

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || null
}

export function clearUser() {
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

export function isLoggedIn() {
  return !!getToken()
}
