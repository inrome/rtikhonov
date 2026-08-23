---
name: preview-site
description: >-
  Starts or reuses the Astro local preview on the right port and verifies UI
  changes with the shortest check that proves the edit. Use when editing
  rtikhonov.com UI, checking gallery, card, or hover behavior, when HMR looks
  stale after .astro style edits, or to look at a large change (new page or
  new UI) before shipping. Skip for a typo, blog note, or tiny copy change.
---

# Preview site (fast path)

This is the look-before-you-ship step. Default for a **large** change
(new page, new UI, hover or click behavior, layout that can break the
homepage). Skip it for a **small** change (typo, inspiration or blog
note, tiny copy).

The site is the repository root (`wrangler.jsonc` here). Do not trust a
previous turn's cwd. On the owner laptop only, export nvm Node first:
`export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"`.

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

## Optional web preview

For a link the owner can open himself, push the branch. Workers Builds
runs `npx wrangler versions upload` on non-`main` branches and returns a
`*.workers.dev` URL. Merge only after he says it looks good. Do not add
a custom test domain unless he asks for it as its own task.

## Don’t

- `cd rtikhonov.com` (that folder is gone; the app is the repo root)
- Start a new `astro` via global `npx` when local `node_modules/.bin/astro` exists
- Keep verifying after the first successful computed-style check for CSS-only edits
- Force a full UI tour for a blog post or tiny copy change
- Add GitHub Actions “so we can test in CI”
