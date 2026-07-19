---
name: preview-site
description: >-
  Starts or reuses the Astro local preview, picks the correct port, and verifies
  UI changes with a short path. Use when editing rtikhonov.com UI, checking
  gallery/card/hover behavior, or when HMR looks stale after .astro style edits.
---

# Preview site (fast path)

Site root: `/Users/rtikhonov/Desktop/rtikhonov.com/rtikhonov.com` (never the repo root).

## Every shell command

Embed the site root in the command. Do not trust a previous turn’s cwd.

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd /Users/rtikhonov/Desktop/rtikhonov.com/rtikhonov.com
```

## Server lifecycle (one server only)

1. `./node_modules/.bin/astro dev status` — note the **URL/port/pid**.
2. If running → use that URL. Do **not** start another server.
3. If stopped → `./node_modules/.bin/astro dev --background`.
4. Orphans / wrong port after restart: stop, then kill leftovers, then start once:

```bash
./node_modules/.bin/astro dev stop
lsof -ti :4321,4322,4323 | xargs kill 2>/dev/null
./node_modules/.bin/astro dev --background
```

Verify only against the port printed by `astro dev status` (or the start output). Never assume 4321.

## When CSS/UI verify fails

1. Hard-refresh the exact status URL.
2. If served CSS still lacks the new rule (CDP/styleSheets or computed style) → restart once (step 4 above), then re-check.
3. Do not open a second browser tab on an old port and keep debugging there.

## Lean verification

| Change type | Verify with |
|---|---|
| CSS tokens / `user-select` / cursor | One `getComputedStyle` (or read the file). Stop. |
| Hover lift / layout | Screenshot or snapshot on the **status** URL. |
| Drag / click / scroll interaction | Short scripted pointer events **or** one manual check. Avoid long CDP drag loops unless the bug is interaction-specific. |

Skip browser automation when the edit is a few lines of CSS and the file content is already correct — restart + hard refresh is enough.

## Don’t

- `npm install` / `npx astro` from the repo root (no site `package.json` there)
- Start a new `astro` via global `npx` when local `node_modules/.bin/astro` exists
- Keep verifying after the first successful computed-style check for CSS-only edits
