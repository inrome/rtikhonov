---
name: workers-builds-ci
description: >-
  Explains the CI/CD setup for rtikhonov.com, which is Cloudflare Workers
  Builds, and argues against adding a second pipeline. Use when the user
  asks to set up CI/CD, add a pipeline or GitHub Actions, optimize or speed
  up deploy, test in CI, check Workers Builds, or get a preview URL.
---

# Workers Builds is the only pipeline

Answer with the path below before any repo archaeology. The pipeline
already exists; the job is to confirm it, not design one.

CI/CD here means: push to GitHub, and Cloudflare puts the site live. No
hand deploy commands.

## Say this first

1. This site already has CI/CD: Cloudflare Workers Builds.
2. Merge to `main` publishes to https://rtikhonov.com.
3. Adding GitHub Actions or Pages means a second system to keep working.
4. Large change: look on a local preview first. Small post: merge.
5. `npm run deploy` is an outage backup, not a CI test.
6. Agents cannot click **Connect** in the Cloudflare dashboard. State
   that once, then merge or hit Retry.

Never dual-path ("until then, also Wrangler / Pages / a hosting branch").
When an old rule, changelog entry, or plugin skill disagrees, say it is
stale, follow this path, and fix the stale text.

## Ship by size

**Small** — typo, one line of copy, an inspiration or blog note, a tiny
style tweak. Run `npm run check` if the tree is dirty, then merge. No UI
tour.

**Large** — new page, new UI, hover or click behavior, or layout that can
break the homepage:

1. Branch, then open a draft PR.
2. Follow skill `preview-site` and click through the change.
3. For a link the owner can open on the web, push the branch. Builds runs
   `npx wrangler versions upload` on non-`main` branches and returns a
   `*.workers.dev` URL. That is enough — do not add a custom test domain.
4. Merge to `main` only after he says it looks good.

## Reasons to keep for the owner

- **GitHub Actions deploy** — a second robot needing its own secrets.
- **Actions "just for tests"** — a third dashboard to watch; local
  `npm run check` plus a preview covers this site.
- **GitHub Pages** — an old host; a green Pages check changes nothing live.
- **Hand Wrangler** — needs a strong token that Cloud agents often lack.
- **A second site folder** — invites editing the wrong copy.

## Check Builds, not GitHub

Use the Cloudflare-builds MCP: `workers_list` → Worker `rtikhonov` →
`workers_builds_list_builds` → build logs on failure.

Leftover GitHub Pages, Jekyll, or code-review checks are noise, not CI.
Connecting Git does not rebuild old commits: push a new commit or hit
Retry, then open the live URL. Do not substitute more doc edits, token
hunts, or extra plugin installs for that step.
