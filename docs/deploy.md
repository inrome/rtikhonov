# Deploy

GitHub stores the code. Cloudflare Worker `rtikhonov` serves
https://rtikhonov.com and https://www.rtikhonov.com.

**Published** means a visitor can open the change on those URLs.

## Everyday path

1. Edit on a branch. Open a PR into `main`.
2. Run `npm run check`.
3. Merge to `main`.
4. Cloudflare Workers Builds deploys.
5. Confirm with a cache-bust:

```sh
curl -sS -H "Cache-Control: no-cache" "https://rtikhonov.com/?t=$(date +%s)"
```

Do not add GitHub Pages or `actions/deploy-pages`.

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
| Other branches | `npx wrangler versions upload` (PR preview URLs) |

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
