#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
npm ci --no-audit --no-fund
mkdir -p .work/install
npx playwright install --with-deps chromium webkit firefox 2>&1 | tee .work/install/browsers.log
npm run self-test
npm test -- "$@"
