'use strict'

/**
 * Unit tests for POST /api/subscriptions
 *
 * Validates the new oddsType + planType combinations, price lookup,
 * and default/fallback behaviour introduced in Phase 4.
 */

process.env.JWT_SECRET = 'test-secret-key'
process.env.NODE_ENV   = 'test'

const { newDb } = require('pg-mem')

// ── Build an in-memory pg pool ──────────────────────────────────────────────
function buildMemPool() {
  const db = newDb()
  db.public.none(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      username      VARCHAR(200) NOT NULL,
      phone         VARCHAR(30)  UNIQUE NOT NULL,
      password_hash VARCHAR(255),
      created_at    TIMESTAMPTZ  DEFAULT NOW()
    )
  `)
  db.public.none(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id                SERIAL PRIMARY KEY,
      user_id           INTEGER NOT NULL,
      plan_type         VARCHAR(20) NOT NULL DEFAULT 'daily',
      odds_type         VARCHAR(20) NOT NULL DEFAULT '2',
      payment_method    VARCHAR(20) NOT NULL,
      phone             VARCHAR(30)  DEFAULT '',
      amount            NUMERIC(10,2) NOT NULL DEFAULT 0,
      status            VARCHAR(20) NOT NULL DEFAULT 'pending',
      proof_url         TEXT,
      secret_code_hash  TEXT DEFAULT '',
      betslip_link      TEXT,
      betslip_code      TEXT,
      rejection_reason  TEXT,
      started_at        TIMESTAMPTZ,
      expires_at        TIMESTAMPTZ,
      created_at        TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  db.public.none(`
    CREATE TABLE IF NOT EXISTS payments (
      id               SERIAL PRIMARY KEY,
      subscription_id  INTEGER,
      user_id          INTEGER NOT NULL,
      amount           NUMERIC(10,2),
      plan_type        VARCHAR(20),
      payment_method   VARCHAR(20),
      phone            VARCHAR(30),
      status           VARCHAR(20) DEFAULT 'pending',
      created_at       TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  db.public.none(`
    CREATE TABLE IF NOT EXISTS vip_config (
      key   VARCHAR(100) PRIMARY KEY,
      value TEXT NOT NULL
    )
  `)
  // Seed default prices
  const prices = [
    ['odds_1_5_weekly_price', '45000'],
    ['odds_2_daily_price',    '10000'],
    ['odds_2_weekly_price',   '45000'],
    ['odds_5_daily_price',    '15000'],
    ['odds_5_weekly_price',   '55000'],
  ]
  for (const [k, v] of prices) {
    db.public.none(`INSERT INTO vip_config (key, value) VALUES ('${k}', '${v}')`)
  }
  // Seed a test user
  db.public.none(`INSERT INTO users (id, username, phone) VALUES (1, 'Testuser', '0700000001')`)

  const PgPool = db.adapters.createPg().Pool
  return new PgPool()
}

jest.mock('../db', () => {
  return { get pool() { return global.__subTestPool } }
})

let request
let app

beforeAll(() => {
  global.__subTestPool = buildMemPool()
  app = require('../app')
  request = require('supertest')(app)
})

afterAll(async () => {
  if (global.__subTestPool) await global.__subTestPool.end()
})

// Helpers
const BASE = { userId: '1', paymentMethod: 'mtn', phone: '0700000001' }

async function post(body) {
  return request.post('/api/subscriptions').send(body)
}

// ═══════════════════════════════════════════════════════════════════════════
// Valid combinations — all 5 packages
// ═══════════════════════════════════════════════════════════════════════════
describe('POST /api/subscriptions — valid packages', () => {
  const cases = [
    { oddsType: '1.5', planType: 'weekly',  expectedAmount: 45000 },
    { oddsType: '2',   planType: 'daily',   expectedAmount: 10000 },
    { oddsType: '2',   planType: 'weekly',  expectedAmount: 45000 },
    { oddsType: '5',   planType: 'daily',   expectedAmount: 15000 },
    { oddsType: '5',   planType: 'weekly',  expectedAmount: 55000 },
  ]

  test.each(cases)('$oddsType odds $planType → 201 with amount $expectedAmount', async ({ oddsType, planType, expectedAmount }) => {
    const res = await post({ ...BASE, oddsType, planType })
    expect(res.status).toBe(201)
    expect(res.body.subscription).toBeDefined()
    expect(res.body.subscription.amount).toBe(expectedAmount)
    expect(res.body.subscription.oddsType).toBe(oddsType)
    expect(res.body.subscription.planType).toBe(planType)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// Invalid combination — 1.5 daily
// ═══════════════════════════════════════════════════════════════════════════
describe('POST /api/subscriptions — invalid combo', () => {
  test('1.5 odds + daily returns 400', async () => {
    const res = await post({ ...BASE, oddsType: '1.5', planType: 'daily' })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/invalid combination/i)
  })

  test('unknown oddsType returns 400', async () => {
    const res = await post({ ...BASE, oddsType: '10', planType: 'daily' })
    expect(res.status).toBe(400)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// oddsType defaults to '2' when omitted
// ═══════════════════════════════════════════════════════════════════════════
describe('POST /api/subscriptions — oddsType defaults', () => {
  test('missing oddsType defaults to 2 odds daily (10000 UGX)', async () => {
    const res = await post({ ...BASE, planType: 'daily' })
    expect(res.status).toBe(201)
    expect(res.body.subscription.oddsType).toBe('2')
    expect(res.body.subscription.amount).toBe(10000)
  })

  test('missing oddsType defaults to 2 odds weekly (45000 UGX)', async () => {
    const res = await post({ ...BASE, planType: 'weekly' })
    expect(res.status).toBe(201)
    expect(res.body.subscription.oddsType).toBe('2')
    expect(res.body.subscription.amount).toBe(45000)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// oddsType is persisted and returned in response
// ═══════════════════════════════════════════════════════════════════════════
describe('POST /api/subscriptions — oddsType in response', () => {
  test('oddsType field is present in subscription response', async () => {
    const res = await post({ ...BASE, oddsType: '5', planType: 'weekly' })
    expect(res.status).toBe(201)
    expect(Object.prototype.hasOwnProperty.call(res.body.subscription, 'oddsType')).toBe(true)
  })
})
