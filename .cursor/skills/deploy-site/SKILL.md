---
name: deploy-site
description: >-
  Deploy the live rtikhonov.com Cloudflare Worker. Use when the user says
  deploy, ship, publish, or that a change is missing on the live site.
---

# Deploy site

Load this instead of inventing a GitHub Pages or `main`-merge publish path.

## 1. Confirm the live tree

`rtikhonov.com/wrangler.jsonc` must exist. If it does not, you are on `main`’s
root site — fetch `origin/cursor/cloudflare-workers-hosting` and work there.

## 2. Confirm Wrangler auth

```bash
cd rtikhonov.com && npx wrangler whoami
```

No token / not logged in → stop and ask for `CLOUDFLARE_API_TOKEN` on the
Cursor Cloud environment. Do not ship.

## 3. Deploy

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd rtikhonov.com && npm run deploy
```

Skip the PATH export when `node` is already ≥ 22.12.

## 4. Prove it is live

`curl` https://rtikhonov.com (no-cache) for the new copy. Only then say it is
published. A GitHub merge is not enough.

## Do not

- GitHub Pages, `actions/deploy-pages`, `withastro/action`
- Treat `main` or GitHub Actions as production
- Todo lists or `git diff main...HEAD` for a clean deploy
- Commit unless the user asked
