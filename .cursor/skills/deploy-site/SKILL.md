---
name: deploy-site
description: >-
  Deploy rtikhonov.com to Cloudflare Workers when the user says deploy, ship,
  or publish to prod. Prefer this over maintain-project-docs for deploy-only
  requests.
---

# Deploy site

## Fast path (default)

1. `git status` only.
2. If dirty with notable undocumented user-facing changes → use `maintain-project-docs`, then continue.
3. Auth check (skip long setup if already logged in):

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd rtikhonov.com
NODE_OPTIONS="--dns-result-order=ipv4first" npx wrangler whoami
```

OAuth **or** `CLOUDFLARE_API_TOKEN` is enough.

4. Deploy:

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd rtikhonov.com && npm run deploy
```

Need network access. Expect ~30–60s. Do not re-run `check:docs` or `astro build` separately — `deploy` already does both (with IPv4-first DNS for Wrangler).

5. Verify with `curl` on `https://rtikhonov.com` (and new paths). Report Version ID + live URLs.

## Auth missing

Ask for Cursor secret `CLOUDFLARE_API_TOKEN` (Workers edit template) or have the user run `wrangler login` where interactive login works. Re-check `whoami` before more guidance.

## Do not

- Todo lists for deploy
- `git diff main...HEAD` unless debugging a failed deploy
- Manual README / docs / CHANGELOG review when `git status` is clean
- Commit or push unless asked
- Treat a green GitHub Actions Pages deploy as proof that `rtikhonov.com` updated
