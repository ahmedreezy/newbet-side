require('dotenv').config()
const { pool } = require('./db')

async function migrate() {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id            SERIAL PRIMARY KEY,
        username      VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at    TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS users (
        id            SERIAL PRIMARY KEY,
        username      VARCHAR(200) NOT NULL,
        phone         VARCHAR(30) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        created_at    TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS subscriptions (
        id               SERIAL PRIMARY KEY,
        user_id          INTEGER REFERENCES users(id) ON DELETE CASCADE,
        plan_type        VARCHAR(20)  NOT NULL,
        odds_type        VARCHAR(20)  NOT NULL DEFAULT '2',
        payment_method   VARCHAR(20)  NOT NULL,
        phone            VARCHAR(30)  DEFAULT '',
        amount           NUMERIC       NOT NULL,
        status           VARCHAR(20)  NOT NULL DEFAULT 'pending',
        proof_url        VARCHAR(500),
        rejection_reason TEXT,
        betslip_link     VARCHAR(500) DEFAULT '',
        betslip_code     VARCHAR(100) DEFAULT '',
        secret_code_hash VARCHAR(255) DEFAULT '',
        started_at       TIMESTAMPTZ,
        expires_at       TIMESTAMPTZ,
        created_at       TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS payments (
        id              SERIAL PRIMARY KEY,
        subscription_id INTEGER REFERENCES subscriptions(id) ON DELETE CASCADE,
        user_id         INTEGER REFERENCES users(id) ON DELETE CASCADE,
        amount          NUMERIC      NOT NULL,
        plan_type       VARCHAR(20),
        payment_method  VARCHAR(20),
        phone           VARCHAR(30) DEFAULT '',
        status          VARCHAR(20) DEFAULT 'pending',
        created_at      TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS football_tips (
        id          SERIAL PRIMARY KEY,
        home        VARCHAR(200) NOT NULL,
        away        VARCHAR(200) NOT NULL,
        competition VARCHAR(200) NOT NULL,
        kickoff     VARCHAR(50)  NOT NULL,
        win_prob    INTEGER      DEFAULT 75,
        kit_color   VARCHAR(20)  DEFAULT '#FFD700',
        kit_number  VARCHAR(10)  DEFAULT '10',
        prediction  TEXT         DEFAULT '',
        accent      VARCHAR(20)  DEFAULT '#FFD700',
        image_url   VARCHAR(500) DEFAULT '',
        created_at  TIMESTAMPTZ  DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS almax_predictions (
        id          SERIAL PRIMARY KEY,
        home        VARCHAR(200) NOT NULL,
        away        VARCHAR(200) NOT NULL,
        competition VARCHAR(200) NOT NULL,
        kickoff     VARCHAR(50)  NOT NULL,
        tip         VARCHAR(200) NOT NULL,
        odds        VARCHAR(50)  DEFAULT '',
        result      VARCHAR(50)  DEFAULT 'pending',
        created_at  TIMESTAMPTZ  DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS recent_wins (
        id          SERIAL PRIMARY KEY,
        bet_type    VARCHAR(100) NOT NULL,
        date        VARCHAR(50)  NOT NULL,
        staked      VARCHAR(50)  NOT NULL,
        returned    VARCHAR(50)  NOT NULL,
        odds        VARCHAR(50)  NOT NULL,
        member_name VARCHAR(200) DEFAULT '',
        image_url   VARCHAR(500) DEFAULT '',
        created_at  TIMESTAMPTZ  DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS testimonials (
        id          SERIAL PRIMARY KEY,
        caption     TEXT         DEFAULT '',
        member_name VARCHAR(200) DEFAULT '',
        image_url   VARCHAR(500) DEFAULT '',
        created_at  TIMESTAMPTZ  DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS vip_config (
        key   VARCHAR(100) PRIMARY KEY,
        value TEXT NOT NULL DEFAULT ''
      );

      CREATE TABLE IF NOT EXISTS status_checks (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER REFERENCES users(id) ON DELETE CASCADE,
        phone      VARCHAR(30),
        username   VARCHAR(200),
        plan_type  VARCHAR(20),
        sub_status VARCHAR(20),
        is_read    BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS free_odd2 (
        id          INTEGER PRIMARY KEY DEFAULT 1,
        team_a      VARCHAR(200) DEFAULT 'Team A',
        team_b      VARCHAR(200) DEFAULT 'Team B',
        pick        VARCHAR(200) DEFAULT 'Over 2.5 Goals',
        odd         VARCHAR(20)  DEFAULT '2.00',
        time        VARCHAR(20)  DEFAULT '20:45',
        competition VARCHAR(200) DEFAULT 'Premier League',
        image_url   VARCHAR(500) DEFAULT '',
        updated_at  TIMESTAMPTZ  DEFAULT NOW()
      );
    `)
    console.log('✓ Tables created/verified.')

    // Column additions for schema evolution — safe to run on existing DBs
    await client.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS betslip_link     VARCHAR(500) DEFAULT '';
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS betslip_code     VARCHAR(100) DEFAULT '';
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS rejection_reason TEXT;
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS proof_url        VARCHAR(500);
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS started_at       TIMESTAMPTZ;
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS expires_at       TIMESTAMPTZ;
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS secret_code_hash VARCHAR(255) DEFAULT '';
      ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS odds_type        VARCHAR(20)  DEFAULT '2';
    `)
    console.log('✓ Migration complete — all tables and columns up to date.')
  } finally {
    client.release()
  }
}

if (require.main === module) {
  migrate()
    .then(() => pool.end())
    .catch(err => { console.error('Migration failed:', err.message); process.exit(1) })
}

module.exports = { migrate }
