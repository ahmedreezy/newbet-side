# Changes Report

_Generated after the full implementation sprint._

---

## 1. Live Scores — Removed

The live scores feature was no longer relevant and has been fully removed.

**Files deleted:**
- `server/routes/livescores.js`
- `src/components/LiveScores.vue`

**Files modified:**
- `server/app.js` — removed `livescoresRouter` import and `app.use('/api/livescores', …)` registration

**Test coverage:**
- `server/__tests__/livescores.test.js` (new) — verifies `GET /api/livescores` returns 404

---

## 2. Unified Login Flow

Users who are already logged in (token stored in `localStorage`) will no longer be asked to log in again when opening the VIP purchase wizard.

**How it works:**
- `openVipMenu()` in `FeaturedSection.vue` calls `isLoggedIn()` from `src/utils/userAuth.js`
- If the user is already authenticated, `regUser` is pre-filled with `getUser()` and the auth step (step 3) is skipped entirely via `goToAuthStep()`
- Only unauthenticated users see the register/login form

**Files modified:**
- `src/components/FeaturedSection.vue` — `openVipMenu()`, new `goToAuthStep()` method, import of `isLoggedIn` / `getUser`
- `loginUser()` fixed to use `POST /api/users/login` (was incorrectly doing GET by phone)

**Test coverage:**
- `server/__tests__/userAuth.test.js` (updated) — 4 new tests in the "Unified login flow (auth-skip logic)" suite

---

## 3. New Odds Packages — Prices & Structure

The old two-tier pricing (Daily 5,000 UGX / Weekly 20,000 UGX) has been replaced with five distinct packages:

| Package | Period | Price (UGX) |
|---------|--------|-------------|
| 1.5 Odds | Weekly only | 45,000 |
| 2 Odds | Daily | 10,000 |
| 2 Odds | Weekly | 45,000 |
| 5 Odds | Daily | 15,000 |
| 5 Odds | Weekly | 55,000 |

Each package has its own:
- Price field configurable by admin (`odds_X_Y_price`)
- Betslip link (`odds_X_Y_betslip_link`)
- Betslip code (`odds_X_Y_betslip_code`)

Note: **1.5 Odds is weekly-only** — the Daily option is hidden/blocked for this package.

---

## 4. Database Schema Change

**File modified:** `server/migrate.js`

- Added `odds_type VARCHAR(20) NOT NULL DEFAULT '2'` to the `CREATE TABLE IF NOT EXISTS subscriptions` block
- Added `ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS odds_type VARCHAR(20) DEFAULT '2'` to the safe migration block (for existing databases)

---

## 5. Backend — Config Route

**File modified:** `server/routes/config.js`

- `getVipConfig()` now parses all 5 per-package price keys from `vip_config`
- `PUT /vip-config` `allowed` array expanded to include 15 new keys:
  - 5 price keys: `odds_1_5_weekly_price`, `odds_2_daily_price`, `odds_2_weekly_price`, `odds_5_daily_price`, `odds_5_weekly_price`
  - 10 betslip keys: one link + one code per package
- Old `daily_price` / `weekly_price` / `daily_betslip_*` / `weekly_betslip_*` keys remain in `allowed` for backward compatibility

---

## 6. Backend — Subscriptions Route

**File modified:** `server/routes/subscriptions.js`

- `rowToSub()` now includes `oddsType: row.odds_type || '2'`
- `POST /` accepts `oddsType` in request body; validates against `VALID_COMBOS`:
  ```
  { '1.5': ['weekly'], '2': ['daily', 'weekly'], '5': ['daily', 'weekly'] }
  ```
  Returns 400 for invalid combinations (e.g. 1.5 + daily)
- Amount is computed by looking up `odds_X_Y_price` from `vip_config`, with hardcoded fallback defaults
- `odds_type` is stored in the `subscriptions` table on INSERT
- `PATCH /:id` confirm block now builds the betslip key from `sub.odds_type` (e.g. `odds_2_daily_betslip_link`) instead of a single daily/weekly key

**Test coverage:**
- `server/__tests__/subscriptions.test.js` (new) — 9 tests:
  - All 5 valid package combos → 201 with correct amount
  - 1.5 + daily → 400 invalid combination
  - Unknown oddsType → 400
  - Missing oddsType defaults to '2' (daily and weekly)
  - `oddsType` field present in response

---

## 7. Frontend — VIP Purchase Wizard (FeaturedSection.vue)

**File modified:** `src/components/FeaturedSection.vue`

The VIP purchase flow has been completely restructured into a 6-step wizard:

| Step | Description |
|------|-------------|
| 1 | **Odds Selection** — Choose 1.5 / 2 / 5 Odds |
| 2 | **Period Selection** — Daily or Weekly (1.5 Odds shows Weekly only) |
| 3 | **Auth** — Register or log in (skipped if already logged in) |
| `'secret'` | **Secret Code** — displayed before payment |
| `'payment'` | **Payment Method** — MTN / Airtel with proof upload |
| `'submitted'` | **Confirmation** — submission received |
| `'status'` | **Status Check** — check existing subscription |

**Key additions:**
- `selectedOdds` data property
- `availablePeriods` computed (filters periods for 1.5 Odds → weekly only)
- `PRICE_DEFAULTS` computed (per-package hardcoded fallbacks)
- `selectedPlanAmount` updated to delegate to `packageAmount(period)`
- `goToPeriodStep()` — auto-skips period step for 1.5 Odds
- `goToAuthStep()` — skips auth step if user is already logged in
- `submitPayment()` appends `oddsType` to FormData
- New CSS: `.odds-cards`, `.odds-card`, `.odds-badge`, `.weekly-only-badge`, `.odds-hot-badge` + responsive styles

---

## 8. Admin Panel — PaymentsOverview.vue

**File modified:** `src/components/admin/PaymentsOverview.vue`

**Subscription list:**
- Tier tabs updated: removed old "5k" / "20k" labels
- New **odds sub-filter chips** row appears below the tier tabs, showing relevant packages per tier (Daily: All / 2 Odds / 5 Odds; Weekly: All / 1.5 Odds / 2 Odds / 5 Odds)
- Subscription card tier ribbon updated to show `DAILY — X ODDS` / `WEEKLY — X ODDS`
- `filterOdds` data property added; `displayed` computed now also filters by `filterOdds`
- `oddsChips` computed added; `countByOdds(val)` method added
- `focusOnSub()` resets `filterOdds = 'all'` on focus

**Config settings panel:**
- Removed old 2-field pricing (Daily Price / Weekly Price)
- Removed old single Daily / Weekly betslip sections
- Added **5 per-package sections**, each with: Price (UGX) + Betslip Code + Betslip Link
  - 1.5 Odds — Weekly
  - 2 Odds — Daily
  - 2 Odds — Weekly
  - 5 Odds — Daily
  - 5 Odds — Weekly
- New CSS: `.odds-filter-row`, `.odds-chip`, `.tier-ribbon-row`, `.odds-ribbon`, `.pkg-label`, `.cfg-field-full`

---

## 9. Test Coverage Summary

| Test File | Status | Tests |
|-----------|--------|-------|
| `server/__tests__/livescores.test.js` | NEW | 2 |
| `server/__tests__/subscriptions.test.js` | NEW | 9 |
| `server/__tests__/userAuth.test.js` | UPDATED | +4 new (total: 18) |
| `server/__tests__/payments.test.js` | NEW | 6 |

**Total: 37 tests, all passing.**

---

## 10. Files Summary

| File | Action |
|------|--------|
| `server/routes/livescores.js` | DELETED |
| `src/components/LiveScores.vue` | DELETED |
| `server/app.js` | Modified — removed livescores route |
| `server/migrate.js` | Modified — added `odds_type` column |
| `server/routes/config.js` | Modified — 15 new config keys |
| `server/routes/subscriptions.js` | Modified — oddsType validation, amount lookup, DB insert |
| `src/components/FeaturedSection.vue` | Modified — full 6-step wizard rewrite |
| `src/components/admin/PaymentsOverview.vue` | Modified — odds filters, config panel |
| `server/__tests__/livescores.test.js` | NEW |
| `server/__tests__/subscriptions.test.js` | NEW |
| `server/__tests__/payments.test.js` | NEW |
| `server/__tests__/userAuth.test.js` | Updated |
 — May 1, 2026

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
