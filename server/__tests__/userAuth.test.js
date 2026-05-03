/**
 * Unit tests for src/utils/userAuth.js
 *
 * Runs in Node (default jest environment).
 * localStorage is polyfilled below so the module works without a browser.
 */

// ── localStorage polyfill ─────────────────────────────────────────────────
const store = {}
global.localStorage = {
  getItem:    (k) => Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null,
  setItem:    (k, v) => { store[k] = String(v) },
  removeItem: (k) => { delete store[k] },
  clear:      () => { Object.keys(store).forEach(k => delete store[k]) }
}
// ─────────────────────────────────────────────────────────────────────────

const {
  saveUser,
  getUser,
  getToken,
  clearUser,
  isLoggedIn
} = require('../../src/utils/userAuth.js')

const MOCK_USER  = { id: 1, username: 'Alice', phone: '0700000001' }
const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.test.signature'

beforeEach(() => {
  localStorage.clear()
})

// ═══════════════════════════════════════════════════════════════════════════
// saveUser
// ═══════════════════════════════════════════════════════════════════════════
describe('saveUser()', () => {
  test('persists user object to localStorage as JSON', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    expect(localStorage.getItem('vip_user')).toBe(JSON.stringify(MOCK_USER))
  })

  test('persists token string to localStorage', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    expect(localStorage.getItem('vip_token')).toBe(MOCK_TOKEN)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// getUser
// ═══════════════════════════════════════════════════════════════════════════
describe('getUser()', () => {
  test('returns parsed user object after saveUser', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    expect(getUser()).toEqual(MOCK_USER)
  })

  test('returns null when nothing is stored', () => {
    expect(getUser()).toBeNull()
  })

  test('returns null when stored value is corrupted JSON', () => {
    localStorage.setItem('vip_user', 'not-valid-json{{{')
    expect(getUser()).toBeNull()
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// getToken
// ═══════════════════════════════════════════════════════════════════════════
describe('getToken()', () => {
  test('returns token string after saveUser', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    expect(getToken()).toBe(MOCK_TOKEN)
  })

  test('returns null when nothing is stored', () => {
    expect(getToken()).toBeNull()
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// clearUser
// ═══════════════════════════════════════════════════════════════════════════
describe('clearUser()', () => {
  test('removes user from localStorage', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser()
    expect(localStorage.getItem('vip_user')).toBeNull()
  })

  test('removes token from localStorage', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser()
    expect(localStorage.getItem('vip_token')).toBeNull()
  })

  test('getUser returns null after clearUser', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser()
    expect(getUser()).toBeNull()
  })

  test('getToken returns null after clearUser', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser()
    expect(getToken()).toBeNull()
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// isLoggedIn
// ═══════════════════════════════════════════════════════════════════════════
describe('isLoggedIn()', () => {
  test('returns true when token is stored', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    expect(isLoggedIn()).toBe(true)
  })

  test('returns false when nothing is stored', () => {
    expect(isLoggedIn()).toBe(false)
  })

  test('returns false after clearUser', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser()
    expect(isLoggedIn()).toBe(false)
  })

  test('returns false when only user (no token) is stored', () => {
    localStorage.setItem('vip_user', JSON.stringify(MOCK_USER))
    // token intentionally not set
    expect(isLoggedIn()).toBe(false)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// Unified login flow — VIP modal auth-skip behaviour
// ═══════════════════════════════════════════════════════════════════════════
describe('Unified login flow (auth-skip logic)', () => {
  test('isLoggedIn() returns true enables getUser() to pre-fill auth step', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    // Simulate FeaturedSection.vue openVipMenu() logic:
    // if (isLoggedIn()) { regUser = getUser() }
    const shouldSkipAuthStep = isLoggedIn()
    const prefilledUser = shouldSkipAuthStep ? getUser() : null
    expect(shouldSkipAuthStep).toBe(true)
    expect(prefilledUser).toEqual(MOCK_USER)
  })

  test('when user is NOT logged in, auth step is shown (not skipped)', () => {
    // localStorage is empty (cleared in beforeEach)
    const shouldSkipAuthStep = isLoggedIn()
    const prefilledUser = shouldSkipAuthStep ? getUser() : null
    expect(shouldSkipAuthStep).toBe(false)
    expect(prefilledUser).toBeNull()
  })

  test('getUser() returns full user object including phone for pre-fill', () => {
    const userWithPhone = { id: 5, username: 'Bob', phone: '0780000002' }
    saveUser(userWithPhone, MOCK_TOKEN)
    const u = getUser()
    expect(u.phone).toBe('0780000002')
    expect(u.username).toBe('Bob')
  })

  test('clearUser() after logout means next modal open will show auth step', () => {
    saveUser(MOCK_USER, MOCK_TOKEN)
    clearUser() // user logs out
    expect(isLoggedIn()).toBe(false)
    expect(getUser()).toBeNull()
  })
})
