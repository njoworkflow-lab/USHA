# Rules for coding agents (Codex and others)

This repo is the static, multilingual website usha.one (Russian at `/`, English at `/en/`, Arabic at `/ar/` right-to-left, plus guide pages). It is served by GitHub Pages. The live chat on the site talks to a separate server in `njoworkflow-lab/usha-brain`.

You are the implementer. A separate reviewer checks every pull request before it merges.

## How the site is built

- Source: `index.html` and everything in `tools/seo/` (the builder `build.mjs`, the content and enhancement layer in `tools/seo/enhance/`, `guides.mjs`, `ar.json`).
- `node tools/seo/build.mjs` (Node.js 22, no npm packages) regenerates `index.html`, `en/`, `ar/`, `guides/`, `assets/`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` and `sw.js`. The build must stay idempotent: running it twice gives identical files.
- After a merge to `main`, the `SEO build` workflow rebuilds and commits the generated files, then requests a Pages build and notifies IndexNow.

## The live chat setting

`USHA_LIVE_API` and `USHA_TURNSTILE_KEY` override the live chat server and the bot-check key at build time. Empty values switch the live chat off.

- Use the empty overrides only for disposable local test builds outside the checkout.
- If you run the build inside the checkout before committing, run it with no overrides, so the defaults keep the live chat on.
- Never commit generated files built with the chat switched off.

## Checks before a pull request

1. Build in a disposable copy and serve it locally.
2. All 11 sitemap pages return 200 with the right `lang`, canonical link, an `<h1>` and JSON-LD; `robots.txt`, `llms.txt`, `llms-full.txt` and `sw.js` load.
3. Browser check in Russian, English and Arabic: no JavaScript errors, no failed asset requests, no horizontal scroll at phone width (about 390 px) or desktop, Arabic stays right-to-left.
4. Put the results in the pull request.

## Always

- Work on a new branch and open a pull request to `main`. Describe what changed, the checks and their output, and anything you weren't sure about.
- Touch only what the task names. If something blocks you, stop and say so.
- Keep the three languages in step: a text change in one language needs the matching change in the others, unless the task says otherwise.

## Never

- Never merge pull requests, delete branches, publish, trigger Pages or IndexNow, or change repository settings.
- Never open secret files, and never add, print, log or commit a key, token or secret.
- Never add npm dependencies or a package manifest unless the task says so.
- Never put AI model names in commit messages or pull request text.
