---
name: workers-builds-ci
description: >-
  One CI/CD path for rtikhonov.com: Cloudflare Workers Builds. Use when the
  user says set up CI/CD, add a pipeline, GitHub Actions, deploy workflow,
  optimize deploy, Workers Builds, test in CI, or wants a preview URL.
---

# Workers Builds is the only pipeline

Load this instead of adding GitHub Actions, GitHub Pages, or a second
deploy robot. Talk in simple words. Roman is not a professional developer.
If a tool or old rule makes the chat longer, say so and follow this path.

CI/CD means: you save the site in GitHub, and a service puts it on the
live website. You should not run secret deploy commands by hand.

## Lead with this (before long research)

1. This site already has CI/CD: **Cloudflare Workers Builds**.
2. Merge to `main` puts the change on https://rtikhonov.com.
3. Do not add GitHub Actions or Pages. That is a second system you do
   not need.
4. **Large changes** look on local `astro dev` first (default). An
   optional web link is the branch preview from Builds. Small posts skip
   this.
5. Hand `npm run deploy` is a backup for outages, not the test of
   “does CI work.”
6. Agents cannot click **Connect** in the Cloudflare dashboard. Say that
   once. Then merge or Retry. Do not hunt tokens or install extra
   Cloudflare skills.

If an old rule, changelog, or plugin skill says otherwise: say it is
stale, follow this path, and update the old text. Do not ask Roman to
pick between two setups.

Dashboard settings: `docs/deploy.md`. Ship a change now:
`.cursor/skills/deploy-site/`. Look at a large change first:
`.cursor/skills/preview-site/`.

## Two kinds of work

**Small** — typo, one line of copy, a new inspiration / blog note, a
tiny style tweak. Run `npm run check` if the tree is dirty. Merge to
`main`. Builds publishes. No local UI tour.

**Large** — new page, new UI, hover/click behavior, or layout that can
break the homepage. Look first:

1. Work on a branch. Open a draft PR.
2. Load `preview-site`. Start or reuse `astro dev`. Open the port from
   `astro dev status`.
3. Click through the change. Check the homepage if the work can break it.
4. If Roman wants a link on the web, push the branch. Builds runs
   `npx wrangler versions upload` on non-`main` branches. That
   `*.workers.dev` preview is enough. Do not add `test.rtikhonov.com`
   unless he asks for that as its own task.
5. Only then merge to `main`.

## Why extra tools are a bad bet

- **GitHub Actions deploy** — a second robot and more secrets. Builds
  already ships the site.
- **GitHub Actions “just for tests”** — a third place to watch. Local
  `npm run check` plus preview is enough. Do not add it unless Roman asks.
- **GitHub Pages** — an old host. A green Pages check does not update
  rtikhonov.com.
- **Hand Wrangler every time** — needs a strong token. Cloud agents
  often lack it. Backup for outages only.
- **Two site folders / old hosting branch** — easy to edit the wrong copy.
- **`cloudflare/wrangler-action` or `withastro/action`** — same problem:
  a second ship path.

Never add `.github/workflows/` for ship or checks unless Roman asks.

## Check Builds, not GitHub

Use Cloudflare-builds MCP: `workers_list` → Worker `rtikhonov` →
`workers_builds_list_builds` → logs if a build fails.

Leftover GitHub Pages / Jekyll / Security Reviewer checks are noise.
They are not CI for this site.

After Roman says Builds is connected: merge, push, or Retry in the
dashboard, then open the live URL. Do not write more docs as a stand-in.

## Do not

- Invent a pipeline. The pipeline exists.
- Dual-path (“until then, also Wrangler / hosting branch / Pages”).
- Demo `npm run deploy` to “test the process.”
- Run `wrangler login` and wait on a localhost OAuth callback in Cloud.
- Fetch `cursor/cloudflare-workers-hosting` or `cd rtikhonov.com/`.
- Treat a green GitHub check as published.
