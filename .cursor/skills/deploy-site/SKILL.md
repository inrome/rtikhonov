---
name: deploy-site
description: >-
  Deploy the live rtikhonov.com Cloudflare Worker. Use when the user says
  deploy, ship, publish, or that a change is missing on the live site.
---

# Deploy site

Load this instead of inventing a GitHub Pages path or a second site tree.
Talk in simple words. For CI/CD setup or “add a pipeline,” use
`.cursor/skills/workers-builds-ci/` instead.

## Everyday

1. Confirm `wrangler.jsonc` is at the **repository root**.
2. If the change is **large** (new page, new UI) and nobody looked at it
   yet, hand off to `.cursor/skills/preview-site/` first. Small posts
   and tiny copy skip that.
3. `npm run check`
4. Merge to `main` (or ask the owner to merge). Cloudflare Workers
   Builds ships the Worker.
5. `curl` https://rtikhonov.com (no-cache) for the new copy. Only then
   say it is published.

“Test the process” / “test CI” means merge + Builds + open the live
URL. It does **not** mean `npm run deploy`.

Settings: `docs/deploy.md`.

## Emergency (Builds down or not connected)

```bash
npx wrangler whoami
npm run deploy
```

No token / not logged in → stop and ask for `CLOUDFLARE_API_TOKEN` on
the Cursor Cloud environment. Do not run `wrangler login` and wait on a
localhost OAuth callback in Cloud.

Skip the laptop nvm PATH export when `node` is already ≥ 22.12.

## Do not

- GitHub Pages, `actions/deploy-pages`, `withastro/action`,
  `cloudflare/wrangler-action`, or any new `.github/workflows/` that
  ships the site
- Fetch `cursor/cloudflare-workers-hosting` or work in `rtikhonov.com/`
- Todo lists or `git diff main...HEAD` for a clean ship
- Commit unless the user asked
