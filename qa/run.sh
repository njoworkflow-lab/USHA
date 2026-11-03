#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
npm ci --no-audit --no-fund
# The brief explicitly permits Chromium-only when other engines cannot install.
# Record each installation attempt; the runner also verifies actual launchability.
mkdir -p .work/install
for browser in chromium webkit firefox; do
  if ! npx playwright install --with-deps "$browser" > ".work/install/$browser.log" 2>&1; then
    echo "$browser installation failed; see qa/.work/install/$browser.log"
  fi
done
npm run self-test
npm test -- "$@"
