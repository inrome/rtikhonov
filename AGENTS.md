## Development

The live Astro site lives in `rtikhonov.com/` (it has `wrangler.jsonc`). Run
Astro commands from that folder. When starting the dev server, use background
mode:

```
cd rtikhonov.com
astro dev --background
```

Manage the server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Agent shells often reset cwd to the **repo** root. Every Astro/npm/wrangler
command should `cd` into `rtikhonov.com/` first (absolute path is fine).

On the owner laptop, Node may live in nvm:

```
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd rtikhonov.com
```

On Cursor Cloud, use the `node` already on PATH if it is >= 22.12. Do not
require `/Users/rtikhonov/Desktop/...`.

For local UI checks, use `.cursor/skills/preview-site/` — one server, verify on
the port from `astro dev status`.

## Content

Inspiration posts live in `rtikhonov.com/src/content/inspiration/*.md`.
The schema is in `rtikhonov.com/src/content.config.ts`, and shared queries are in
`rtikhonov.com/src/lib/inspiration.ts` — use `getInspirationPosts()` instead of
calling `getCollection()` directly, so drafts and sorting stay consistent.

Public display is gated by `INSPIRATION_ENABLED` in `rtikhonov.com/src/consts.ts`.
Set it to `true` and **Cloudflare-deploy** to show the section.

See [docs/content.md](docs/content.md) for frontmatter fields and how to add a post.

## What "published" means

**Published** means a visitor can open the change on https://rtikhonov.com

These are **not** published:

- A commit or merge to `main`
- A green GitHub check
- A successful GitHub Pages run (that workflow is removed; do not bring it back)
- `draft: false` on a post (that only affects the build)

## Deploy

GitHub is version control only. Ship only with Cloudflare Workers.

Follow `.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/`:

1. Confirm `rtikhonov.com/wrangler.jsonc` exists. If not, you are on the wrong
   tree — use `cursor/cloudflare-workers-hosting`, not the root app on `main`.
2. `npx wrangler whoami` in `rtikhonov.com/`. If it fails, ask for
   `CLOUDFLARE_API_TOKEN` on the Cloud environment and stop.
3. `cd rtikhonov.com && npm run deploy`
4. `curl` https://rtikhonov.com and confirm the new copy.

Do not TodoWrite or `git diff main...HEAD` for a clean-tree deploy.

## Security and privacy (public repo)

This repository is public. Everything committed is visible on the internet.

- Never commit secrets (API keys, tokens, passwords, private keys) or `.env*` files.
- Never commit private personal data (address, phone, IDs) unless the owner explicitly wants it public.
- Use placeholders for unpublished contact details; only ship emails/links the owner approved.
- Put deploy secrets in GitHub Actions secrets / environment variables, not in source.
  For Cloud Agents, put `CLOUDFLARE_API_TOKEN` in the Cursor environment secrets —
  never in the repo.
- If a secret may already be in git history, warn the owner and rotate it — removing the file is not enough.
- When unsure whether content should be public, ask before adding it.

See also `.cursor/rules/public-repo-security.mdc`.

## Documentation

Site overview and doc index: [README.md](README.md). Detailed guides live under [docs/](docs/).

Full documentation: https://docs.astro.build
