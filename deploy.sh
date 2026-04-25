#!/bin/bash
set -e

echo ""
echo "=========================================="
echo " DEPLOY STARTED: $(date)"
echo "=========================================="

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$APP_DIR"

echo "[1/4] Pulling latest code from main…"
git pull origin main

echo "[2/4] Installing production dependencies…"
npm install --production

echo "[3/4] Running DB migrations…"
node server/migrate.js

echo "[4/4] Restarting Node app (Passenger)…"
mkdir -p tmp
touch tmp/restart.txt

echo ""
echo "✓ DEPLOY COMPLETE: $(date)"
echo "=========================================="
