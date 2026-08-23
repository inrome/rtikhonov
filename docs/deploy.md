# Deploy

GitHub stores the code. Cloudflare Worker `rtikhonov` serves
https://rtikhonov.com and https://www.rtikhonov.com.

**Published** means a visitor can open the change on those URLs.

## Why this way

CI/CD means: you save the site in GitHub, and a service puts it on the
live website. That service is **Cloudflare Workers Builds**. You already
have it. Merge to `main`. The live site updates.

Do not add GitHub Actions or GitHub Pages. Those are a second robot and
an old host. A green GitHub check does not update rtikhonov.com.

**Small work** (typo, blog / inspiration note, tiny copy): merge. No
local tour.

**Large work** (new page, new UI): look first on local `astro dev`. If
you want a link on the web, push the branch and open the Builds preview
(`*.workers.dev`). Merge only after it looks good. Do not add a custom
test domain unless you want that as its own task.

## Everyday path

1. Edit on a branch. Open a PR into `main`.
2. For a large change, look on the local preview first.
3. Run `npm run check`.
4. Merge to `main`.
5. Cloudflare Workers Builds deploys.
6. Confirm with a cache-bust:

```sh
curl -sS -H "Cache-Control: no-cache" "https://rtikhonov.com/?t=$(date +%s)"
```

Do not add GitHub Pages, GitHub Actions, or `actions/deploy-pages`.

## Workers Builds

Worker `rtikhonov` is connected to `inrome/rtikhonov`. Cloudflare ships on
git push. Confirm settings in Worker → **Settings** → **Builds**:

| Setting | Value |
|---|---|
| Repository | `inrome/rtikhonov` |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Version command | `npx wrangler versions upload` |
| Non-production builds | On |
| Include paths | `*` |
| Exclude paths | `node_modules/**`, `.git/` |

A merge to `main` publishes. A push to another branch only creates a preview
if **Builds for non-production branches** is on. Connecting Git does not
rebuild older commits — push a new commit (or Retry in the dashboard).

## Emergency Wrangler

Use only if Builds is down or not connected yet.

```sh
npx wrangler whoami
npm run deploy
```

Cloud Agents need `CLOUDFLARE_API_TOKEN` in Cursor environment secrets.
`wrangler whoami` can succeed while `wrangler deploy` still fails. The token
must include **Account → Workers Scripts → Edit**. Without that, Cloudflare
returns 403 / code 10000 on `/workers/services/rtikhonov`.

Desktop can use `wrangler login`. Do not run `wrangler login` and wait on a
localhost OAuth callback in Cloud.

## GitHub Pages

Turn Pages **off** in the GitHub repo: Settings → Pages → Disabled.

Do not add a root `CNAME` or `public/CNAME` for Pages. Custom domains belong
on the Worker in `wrangler.jsonc`.
