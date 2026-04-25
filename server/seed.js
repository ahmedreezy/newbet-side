require('dotenv').config()
const bcrypt = require('bcryptjs')
const { pool } = require('./db')

const VIP_DEFAULTS = {
  daily_price:           '5000',
  weekly_price:          '20000',
  currency:              'UGX',
  mtn_number:            '0770000000',
  airtel_number:         '0750000000',
  whatsapp_link:         'https://whatsapp.com/channel/0029Vb77Bmb0wajqBRujZY30',
  current_betslip_link:  '',
  current_betslip_code:  '',
  daily_betslip_link:    '',
  daily_betslip_code:    '',
  weekly_betslip_link:   '',
  weekly_betslip_code:   '',
  ad_video_url:          ''
}

async function seed() {
  const password = process.env.ADMIN_INITIAL_PASSWORD
  if (!password) {
    const msg = '❌  ADMIN_INITIAL_PASSWORD env var is required.'
    if (require.main === module) { console.error(msg); process.exit(1) }
    else throw new Error(msg)
  }
  if (password.length < 12) {
    const msg = '❌  ADMIN_INITIAL_PASSWORD must be at least 12 characters.'
    if (require.main === module) { console.error(msg); process.exit(1) }
    else throw new Error(msg)
  }

  const client = await pool.connect()
  try {
    // Admin user
    const hash = await bcrypt.hash(password, 12)
    const res = await client.query(`
      INSERT INTO admin_users (username, password_hash)
      VALUES ($1, $2)
      ON CONFLICT (username) DO NOTHING
      RETURNING id
    `, ['admin', hash])
    if (res.rowCount > 0) {
      console.log('✓ Admin user created (username: admin)')
    } else {
      console.log('  Admin user already exists — skipped.')
    }

    // VIP config defaults
    for (const [key, value] of Object.entries(VIP_DEFAULTS)) {
      await client.query(`
        INSERT INTO vip_config (key, value)
        VALUES ($1, $2)
        ON CONFLICT (key) DO NOTHING
      `, [key, value])
    }
    console.log('✓ VIP config defaults seeded.')

    // Free odd2 default row
    await client.query(`
      INSERT INTO free_odd2 (id, team_a, team_b, pick, odd, time, competition, image_url)
      VALUES (1, 'Team A', 'Team B', 'Over 2.5 Goals', '2.00', '20:45', 'Premier League', '')
      ON CONFLICT (id) DO NOTHING
    `)
    console.log('✓ Free odd2 default seeded.')

    console.log('\n✅ Seeding complete.')
  } finally {
    client.release()
  }
}

if (require.main === module) {
  seed()
    .then(() => pool.end())
    .catch(err => { console.error('Seeding failed:', err.message); process.exit(1) })
}

module.exports = { seed }
