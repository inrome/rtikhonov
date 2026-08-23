---
name: deploy-site
description: >-
  Deploy the live rtikhonov.com Cloudflare Worker. Use when the user says
  deploy, ship, publish, or that a change is missing on the live site.
---

# Deploy site

Load this instead of inventing a GitHub Pages path or a second site tree.

## Everyday

1. Confirm `wrangler.jsonc` is at the **repository root**.
2. `npm run check`
3. Merge to `main` (or ask the owner to merge). Cloudflare Workers Builds
   ships the Worker.
4. `curl` https://rtikhonov.com (no-cache) for the new copy. Only then say
   it is published.

Settings: `docs/deploy.md`.

## Emergency (Builds down or not connected)

```bash
npx wrangler whoami
npm run deploy
```

No token / not logged in → stop and ask for `CLOUDFLARE_API_TOKEN` on the
Cursor Cloud environment.

Skip the laptop nvm PATH export when `node` is already ≥ 22.12.

## Do not

- GitHub Pages, `actions/deploy-pages`, `withastro/action`
- Fetch `cursor/cloudflare-workers-hosting` or work in `rtikhonov.com/`
- Todo lists or `git diff main...HEAD` for a clean ship
- Commit unless the user asked
