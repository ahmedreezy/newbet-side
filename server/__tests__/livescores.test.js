'use strict'

/**
 * Verifies that the /api/livescores route has been removed.
 * The server should return 404 for any request to that path.
 */

process.env.JWT_SECRET = 'test-secret-key'
process.env.NODE_ENV = 'test'

// ── Stub db before loading app ──────────────────────────────────────────────
jest.mock('../db', () => {
  const { newDb } = require('pg-mem')
  const db = newDb()
  const PgPool = db.adapters.createPg().Pool
  global.__lsTestPool = new PgPool()
  return { get pool() { return global.__lsTestPool } }
})

let request
let app

beforeAll(() => {
  app     = require('../app')
  request = require('supertest')(app)
})

afterAll(async () => {
  if (global.__lsTestPool) await global.__lsTestPool.end()
})

describe('GET /api/livescores', () => {
  test('returns 404 — livescores route has been removed', async () => {
    const res = await request.get('/api/livescores')
    expect(res.status).toBe(404)
  })

  test('returns 404 for sub-paths too', async () => {
    const res = await request.get('/api/livescores/today')
    expect(res.status).toBe(404)
  })
})
