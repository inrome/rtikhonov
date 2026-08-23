---
name: deploy-site
description: >-
  Ships a change to the live rtikhonov.com Cloudflare Worker and verifies it
  on the URL. Use when the user says deploy, ship, publish, or reports that a
  change is missing from the live site.
---

# Deploy site

## Everyday

1. Confirm `wrangler.jsonc` is at the repository root.
2. Large change with nobody having looked at it yet → skill
   `preview-site` first. Small copy and blog posts skip that.
3. `npm run check`
4. Merge to `main`, or ask the owner to merge. Cloudflare Workers Builds
   ships the Worker.
5. Cache-bust `curl` https://rtikhonov.com for the new copy. Only then
   call it published.

"Test the process" or "test CI" means merge, watch Builds, open the live
URL. It never means `npm run deploy`.

Settings: `docs/deploy.md`. Pipeline or setup questions: skill
`workers-builds-ci`.

## Emergency (Builds down or not connected)

```bash
npx wrangler whoami
npm run deploy
```

No token → stop and ask for `CLOUDFLARE_API_TOKEN` with **Workers
Scripts Edit** on the Cursor Cloud environment. Never wait on a
`wrangler login` localhost callback in Cloud.

## Do not

- Add GitHub Pages, `.github/workflows/`, `actions/deploy-pages`,
  `withastro/action`, or `cloudflare/wrangler-action`
- Fetch `cursor/cloudflare-workers-hosting` or work in `rtikhonov.com/`
- Use todo lists or `git diff main...HEAD` for a clean ship
- Commit unless the user asked
