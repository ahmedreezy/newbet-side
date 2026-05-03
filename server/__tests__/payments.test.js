'use strict'

/**
 * Unit tests for GET /api/payments (admin) and
 * POST /api/subscriptions creating an associated payment record.
 *
 * Verifies that payment records are created alongside subscriptions,
 * and that the payment response reflects the correct plan details.
 */

process.env.JWT_SECRET = 'test-secret-key'
process.env.NODE_ENV   = 'test'

const jwt    = require('jsonwebtoken')
const { newDb } = require('pg-mem')

function buildMemPool() {
  const db = newDb()
  db.public.none(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      username      VARCHAR(200) NOT NULL,
      phone         VARCHAR(30)  UNIQUE NOT NULL,
      email         VARCHAR(255),
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
      phone             VARCHAR(30) DEFAULT '',
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
  db.public.none(`INSERT INTO users (id, username, phone) VALUES (1, 'Testuser', '0700000001')`)
  const PgPool = db.adapters.createPg().Pool
  return new PgPool()
}

jest.mock('../db', () => {
  return { get pool() { return global.__payTestPool } }
})

let request
let app

const ADMIN_TOKEN = jwt.sign({ id: 0, role: 'admin' }, 'test-secret-key', { expiresIn: '1h' })

beforeAll(() => {
  global.__payTestPool = buildMemPool()
  app = require('../app')
  request = require('supertest')(app)
})

afterAll(async () => {
  if (global.__payTestPool) await global.__payTestPool.end()
})

// ═══════════════════════════════════════════════════════════════════════════
// GET /api/payments (admin-only)
// ═══════════════════════════════════════════════════════════════════════════
describe('GET /api/payments', () => {
  test('returns 401 without admin token', async () => {
    const res = await request.get('/api/payments')
    expect([401, 403]).toContain(res.status)
  })

  test('returns empty array when no payments exist', async () => {
    const res = await request
      .get('/api/payments')
      .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body).toHaveLength(0)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// Payment record is created when subscription is submitted
// ═══════════════════════════════════════════════════════════════════════════
describe('POST /api/subscriptions creates associated payment record', () => {
  async function createSub(oddsType, planType) {
    return request.post('/api/subscriptions').send({
      userId: '1', paymentMethod: 'mtn', phone: '0700000001', oddsType, planType
    })
  }

  test('payment record is returned alongside subscription in response', async () => {
    const res = await createSub('2', 'daily')
    expect(res.status).toBe(201)
    expect(res.body.payment).toBeDefined()
    // payment is a raw DB row returned from INSERT — has snake_case keys
    const subId = res.body.payment.subscription_id || res.body.payment.subscriptionId
    expect(subId).toBeTruthy()
  })

  test('payment amount matches subscription amount for 5 odds weekly (55000)', async () => {
    const res = await createSub('5', 'weekly')
    expect(res.status).toBe(201)
    expect(res.body.payment.amount).toBe(55000)
  })

  test('payment plan_type reflects the selected period', async () => {
    const res = await createSub('2', 'daily')
    expect(res.status).toBe(201)
    expect(res.body.payment.planType || res.body.payment.plan_type).toBe('daily')
  })

  test('GET /api/payments returns the newly created payment after submission', async () => {
    await createSub('5', 'daily')
    const res = await request
      .get('/api/payments')
      .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
    // Verify standard payment fields are present
    const p = res.body[0]
    expect(p).toHaveProperty('id')
    expect(p).toHaveProperty('amount')
    expect(p).toHaveProperty('planType')
    expect(p).toHaveProperty('status')
  })
})
