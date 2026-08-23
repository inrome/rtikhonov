---
name: deploy-site
description: >-
  Deploy the live rtikhonov.com Cloudflare Worker. Use when the user says
  deploy, ship, publish, or that a change is missing on the live site.
---

# Deploy site

`main` is not production. Use the Worker tree.

## 1. Confirm the live tree

`rtikhonov.com/wrangler.jsonc` must exist. If it does not:

```bash
git fetch origin cursor/cloudflare-workers-hosting
git checkout -b cursor/<change>-433e origin/cursor/cloudflare-workers-hosting
```

## 2. Confirm Wrangler auth

```bash
cd rtikhonov.com && npx wrangler whoami
```

If this fails, ask for `CLOUDFLARE_API_TOKEN` on the Cursor Cloud environment.

## 3. Deploy and prove

```bash
cd rtikhonov.com && npm run deploy
curl -sS -H "Cache-Control: no-cache" "https://rtikhonov.com/?t=$(date +%s)"
```

Only then say it is published.

## Do not

- GitHub Pages or GitHub Actions deploy
- Edit the root Astro app on `main` and merge it as a publish
