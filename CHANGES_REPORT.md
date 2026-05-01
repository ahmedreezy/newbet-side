# Changes Report — May 1, 2026

## Summary

Four issues addressed in the first session:
1. Remove AI-generated (hardcoded) testimonials from the footer
2. Restore the real photo-upload testimonials section on the homepage
3. Fix a critical DB migration bug (missing `password_hash` column)
4. Add unit tests for the register/login auth endpoints

---

## Session 2 — Navbar Login/Register Modal

### Problem

The top-right login button opened a modal rendered **inside the `<nav>` element**. The nav
has `backdrop-filter: blur(12px)` which creates a new CSS containing block, meaning any
`position: fixed` child is positioned and sized relative to the nav (44 px tall) rather than
the full viewport. In practice the modal backdrop never covered the page, so click-outside
close did not work and the modal appeared broken.

### Root Cause

`backdrop-filter` (and `filter`, `transform`) on an ancestor element creates a new stacking
context **and** a new containing block for fixed-position descendants. This is a well-known
CSS quirk that trips up component-in-nav patterns.

### Fix — `src/components/UserProfile.vue`

| # | What changed | Why |
|---|---|---|
| 1 | Wrapped the auth modal in Vue 3 `<Teleport to="body">` | Moves the overlay DOM node to `<body>`, outside the nav's stacking context. `position: fixed; inset: 0` now correctly covers the full viewport. |
| 2 | Added `document.addEventListener('keydown', handleKeyDown)` in `mounted()` and cleanup in `beforeUnmount()` | Escape key now closes the modal from anywhere on the page. |
| 3 | `openAuth()` sets `document.body.style.overflow = 'hidden'`; `closeAuth()` restores it | Prevents the page from scrolling behind the open modal. |
| 4 | `closeAuth()` resets all form fields and `showRegPw`/`showConfirmPw`/`showLoginPw` flags | Forms are blank next time the modal opens — no stale data from a previous attempt. |
| 5 | `doRegister()` and `doLogin()` now call `this.closeAuth()` on success (instead of directly setting `showAuthModal = false`) | Ensures the scroll lock is always released and forms are always reset on successful auth. |
| 6 | Register tab renamed from "Register" → "New User" | Labels now match the VIP join flow in `FeaturedSection.vue` exactly. |
| 7 | Added `role="dialog" aria-modal="true" aria-label="Account"` to overlay; `role="alert"` on error paragraph; `aria-label` on password-eye buttons | Basic a11y improvements in the touched code. |

**No behaviour changes to the logged-in dropdown or the subscription-check flow** — those
were already correct.

### Register / Login Form Parity Check

The two auth flows were compared field-by-field:

| Field | Navbar (UserProfile.vue) | VIP Join (FeaturedSection.vue step 2) |
|---|---|---|
| Full Name | ✅ `type="text"` | ✅ `type="text"` |
| Phone | ✅ `tel`, `maxlength=10`, `pattern=[0-9]{10}` | ✅ same |
| Password | ✅ `minlength=6`, show/hide toggle | ✅ same |
| Confirm Password | ✅ show/hide toggle | ✅ same |
| Login: Phone | ✅ | ✅ |
| Login: Password | ✅ show/hide toggle | ✅ same |

Both forms call the same API endpoints (`POST /api/users` and `POST /api/users/login`) with
the same payload shape and persist the result via `saveUser()` from `userAuth.js`.

---

## Unit Test Report

**Run command:** `npm test -- --forceExit --verbose`

### Test Suite 1 — `server/__tests__/users.test.js` (backend auth API)

Tests the Express `/api/users` and `/api/users/login` endpoints against an in-memory pg-mem
database.

| # | Test | Result |
|---|---|---|
| 1 | POST /api/users — 201: valid username, phone, password | ✅ PASS |
| 2 | POST /api/users — 400: missing username | ✅ PASS |
| 3 | POST /api/users — 400: missing phone | ✅ PASS |
| 4 | POST /api/users — 400: missing password | ✅ PASS |
| 5 | POST /api/users — 400: password shorter than 6 chars | ✅ PASS |
| 6 | POST /api/users — 409: duplicate phone number | ✅ PASS |
| 7 | POST /api/users/login — 200: correct phone and password | ✅ PASS |
| 8 | POST /api/users/login — 401: wrong password | ✅ PASS |
| 9 | POST /api/users/login — 401: phone not found | ✅ PASS |
| 10 | POST /api/users/login — 400: missing phone | ✅ PASS |
| 11 | POST /api/users/login — 400: missing password | ✅ PASS |

**11 / 11 PASS**

---

### Test Suite 2 — `server/__tests__/userAuth.test.js` (frontend auth utilities)

Tests the pure-JS functions in `src/utils/userAuth.js` that read/write `localStorage`.
A minimal `localStorage` polyfill is defined at the top of the file so the tests run in the
default Node environment without installing `jest-environment-jsdom`.

| # | Test | Result |
|---|---|---|
| 1 | `saveUser()` — persists user object to localStorage as JSON | ✅ PASS |
| 2 | `saveUser()` — persists token string to localStorage | ✅ PASS |
| 3 | `getUser()` — returns parsed user object after saveUser | ✅ PASS |
| 4 | `getUser()` — returns null when nothing is stored | ✅ PASS |
| 5 | `getUser()` — returns null when stored value is corrupted JSON | ✅ PASS |
| 6 | `getToken()` — returns token string after saveUser | ✅ PASS |
| 7 | `getToken()` — returns null when nothing is stored | ✅ PASS |
| 8 | `clearUser()` — removes user from localStorage | ✅ PASS |
| 9 | `clearUser()` — removes token from localStorage | ✅ PASS |
| 10 | `clearUser()` — getUser returns null after clearUser | ✅ PASS |
| 11 | `clearUser()` — getToken returns null after clearUser | ✅ PASS |
| 12 | `isLoggedIn()` — returns true when token is stored | ✅ PASS |
| 13 | `isLoggedIn()` — returns false when nothing is stored | ✅ PASS |
| 14 | `isLoggedIn()` — returns false after clearUser | ✅ PASS |
| 15 | `isLoggedIn()` — returns false when only user (no token) is stored | ✅ PASS |

**15 / 15 PASS**

---

### Overall Result

```
Test Suites: 2 passed, 2 total
Tests:       26 passed, 26 total
Time:        ~6.6 s
```


---

## Changes Made

### 1. `src/components/FooterSection.vue` — Remove hardcoded AI testimonials

**What was removed:**
- **Template**: Entire `<div class="testimonials-section">` block containing 4 hardcoded testimonial cards (James M., Amara S., Tunde K., Lisa R.) rendered via `v-for`
- **Script `data()`**: The `testimonials: [...]` array with 4 fake member objects
- **CSS (`<style scoped>`)**: All 14 testimonial-related CSS rules:
  `.testimonials-section`, `.section-heading`, `.gold-text`, `.testimonials-grid`,
  `.t-card`, `.t-header`, `.t-avatar`, `.t-meta`, `.t-name`, `.t-date`,
  `.t-stars`, `.t-message`, `.t-win`, `.t-win-label`, `.t-win-amount`

**Why:** These testimonials were hardcoded/AI-generated placeholder content, not real member submissions. The footer now shows only the social links and copyright bar.

**Conflict risk:** None — all styles were `scoped`, so removal has zero effect on any other component.

---

### 2. `src/views/HomePage.vue` — Restore real TestimonialsSection

**What was changed:**
- Re-added `<TestimonialsSection />` to the template between `<RecentWinnings />` and `<FooterSection />`
- Re-added `import TestimonialsSection from '../components/TestimonialsSection.vue'`
- Re-added `TestimonialsSection` to the `components: {}` object

**Why:** `TestimonialsSection.vue` is the real photo-upload-backed testimonials component. It fetches from `GET /api/testimonials` (DB-driven, admin-managed via `TestimonialsEditor.vue`). It was accidentally removed in a previous session instead of the AI-generated footer testimonials.

**Conflict risk:** None — `TestimonialsSection` uses its own scoped styles and its own data; it does not conflict with the (now removed) footer testimonials.

---

### 3. `server/migrate.js` — Fix users table schema

**What was changed:**
```sql
-- BEFORE (broken — missing password_hash, has unused columns):
CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(200) NOT NULL,
  dob        VARCHAR(20),           -- never used
  email      VARCHAR(200),          -- never used
  phone      VARCHAR(30) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AFTER (correct):
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  username      VARCHAR(200) NOT NULL,
  phone         VARCHAR(30) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
```

**Why:** `password_hash` is written during registration and read during login (in `server/routes/users.js`). Without it in the migration, any fresh database install would crash on the first registration attempt. The `dob` and `email` columns were left over from an old schema — they are not read or written anywhere in the current codebase.

**Conflict risk:** None — `IF NOT EXISTS` means the existing production database (which already has `password_hash` via a previous `ALTER TABLE`) is not affected.

---

### 4. `server/app.js` — New file (Express app export)

**What was added:** A new file that builds and exports the configured Express app without calling `app.listen()`.

**Why:** Required to allow unit tests to import the app cleanly without starting a server or triggering DB connections. Follows standard Express test architecture.

**Conflict risk:** None — `server/index.js` now imports this file (`require('./app')`) and calls `app.listen()` itself. Runtime behaviour is identical.

---

### 5. `server/index.js` — Refactored to use `app.js`

**What was changed:** Removed the ~50 lines of app setup (cors, middleware, route mounting) and replaced with `const app = require('./app')`. The `start()` function and `app.listen()` call are unchanged.

**Conflict risk:** None — the running server behaviour is identical.

---

### 6. `server/__tests__/users.test.js` — New test file

**What was added:** 11 unit tests covering all validation and auth paths for the two public endpoints.

**Test coverage:**

| # | Suite | Description | Expected | Result |
|---|---|---|---|---|
| 1 | Register | Valid username + phone + password | 201 + JWT token | ✅ PASS |
| 2 | Register | Missing username | 400 "required" | ✅ PASS |
| 3 | Register | Missing phone | 400 "required" | ✅ PASS |
| 4 | Register | Missing password | 400 "required" | ✅ PASS |
| 5 | Register | Password < 6 chars | 400 "6 characters" | ✅ PASS |
| 6 | Register | Duplicate phone number | 409 "already registered" | ✅ PASS |
| 7 | Login | Correct phone + password | 200 + JWT token | ✅ PASS |
| 8 | Login | Wrong password | 401 "Incorrect password" | ✅ PASS |
| 9 | Login | Phone not in DB | 401 "not found" | ✅ PASS |
| 10 | Login | Missing phone | 400 "required" | ✅ PASS |
| 11 | Login | Missing password | 400 "required" | ✅ PASS |

**Test run output:**
```
Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Time:        13.092 s
```

**Strategy:** Jest mocks `../db` with a `pg-mem` in-memory PostgreSQL-compatible pool. No real database or network connection required. Tests are fully isolated and repeatable.

---

### 7. `package.json` — Added test script and Jest config

```json
"scripts": {
  "test": "jest"
},
"jest": {
  "testEnvironment": "node",
  "testMatch": ["**/server/__tests__/**/*.test.js"],
  "testTimeout": 15000
}
```

---

## Conflict Audit

| Area | Check | Result |
|---|---|---|
| `FooterSection.vue` CSS removal | All styles are `scoped` — no global leakage | ✅ Safe |
| `TestimonialsSection` restored in `HomePage` | Different component from footer; different data source | ✅ No conflict |
| Both testimonials sections visible simultaneously | Footer testimonials removed; only `TestimonialsSection` (DB-driven) remains | ✅ No duplication |
| `migrate.js` removing `dob`/`email` | Grep confirms neither column is read/written in any route file | ✅ Safe |
| `migrate.js` adding `password_hash` | `IF NOT EXISTS` guard means existing DBs are unaffected | ✅ Safe |
| `server/app.js` vs `server/index.js` | `index.js` now imports `app.js`; runtime behaviour identical | ✅ No regression |
| Jest mock of `../db` | Scoped to test environment only; never runs in production | ✅ Safe |
| `localStorage` keys (`vip_user`, `vip_token`) | Used consistently in `userAuth.js`, `UserProfile.vue`, `FeaturedSection.vue` | ✅ No conflict |
| API contract (`POST /api/users`, `POST /api/users/login`) | Frontend sends `{username, phone, password}` / `{phone, password}` — exactly matches backend validation | ✅ Aligned |

---

## Files Changed

| File | Type | Change |
|---|---|---|
| `src/components/FooterSection.vue` | Modified | Removed AI testimonials (template + data + CSS) |
| `src/views/HomePage.vue` | Modified | Restored `TestimonialsSection` (import + component + template) |
| `server/migrate.js` | Modified | Fixed users table: added `password_hash`, removed `dob`/`email` |
| `server/app.js` | Created | Express app export (for testing) |
| `server/index.js` | Modified | Refactored to use `server/app.js` |
| `server/__tests__/users.test.js` | Created | 11 unit tests for register + login |
| `package.json` | Modified | Added `test` script + Jest config |

---

## How to Run Tests

```bash
npm test
```

All 11 tests pass without a running database or server.
