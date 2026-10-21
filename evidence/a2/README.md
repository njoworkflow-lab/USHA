# Rating card checks

Part 2 only. Changes remain uncommitted. BRIEF.md is not part of this change.

## Completed

- Node.js v22.22.0; `node tools/seo/build.mjs` run twice with no overrides. SHA-256 maps are identical for all 44 generated files, including the generated asset names.
- `node tools/seo/test-code-step.mjs`: 7 tests passed, 0 failed.
- `node --check tools/seo/enhance/live.js` and `git diff --check`: passed.
- Disposable built copies: `/tmp/a2web-before` and `/tmp/a2web-after`.
- Static validation of all 11 sitemap pages: expected lang and canonical, H1, and parseable JSON-LD. robots.txt, llms.txt, llms-full.txt and sw.js are present and nonempty.

## Browser verification pending

The supplied file bridge has returned no results for the 24 `a2web-*.json` requests queued in its `req/` folder. No screenshots have been produced or copied here. HTTP, browser layout, accessibility interactions, API behavior and console/network checks are not yet verified.

Queued checks:

| Request IDs | States / checks |
| --- | --- |
| `a2web-before-{en,ru,ar}-{390,1440}` | Before screenshots, all three languages and both widths |
| `a2web-after-{en,ru,ar}-{390,1440}` | Rating card and thank-you screenshots; empty selection, submission payload/auth, keyboard arrows/Tab/Enter, rewrite with empty note, saved rating after reopening, geometry and overflow |
| `a2web-expired-{en,ru,ar}-{390,1440}` | Expired invitation and thank-you screenshots; rating with the expired session bearer token, card geometry and overflow |
| `a2web-error-400-en` | Rejection, retained values, retry, error screenshot |
| `a2web-error-429-ar` | Rate limit, retained values, retry, RTL error screenshot |
| `a2web-network-and-validation` | Offline retry, 301-character rejection, 300-character acceptance, pending state and duplicate submission guard |
| `a2web-last-answer-{en,ar}` | Card absent with one question left; card appears after a mocked final streamed answer; rating with an empty optional note |
| `a2web-site-pages` | HTTP 200 and metadata on all sitemap pages; public crawler files load |

The bridge's API mocks are used throughout. The last-answer checks convert their mocked `/api/chat` JSON events to an SSE Response in an eval step because the bridge mock list only emits JSON. No real API requests are needed.

When results arrive, inspect result.json and selected screenshots before copying them from the bridge's res folder. Before/after screenshots are requested for every language and width, with additional thank-you, expired and error examples. Expected HTTP 400/429 console entries in the rejection checks should be distinguished from unexpected JavaScript or asset errors.
