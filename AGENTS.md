## Development

The live Astro site is the repository root (`wrangler.jsonc` is here). When
starting the dev server, use background mode:

```
astro dev --background
```

Manage the server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

On the owner laptop, Node may live in nvm:

```
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
```

On Cursor Cloud, use the `node` already on PATH if it is >= 22.12. Do not
require `/Users/rtikhonov/Desktop/...`.

For local UI checks, use `.cursor/skills/preview-site/` — one server, verify on
the port from `astro dev status`. That look-step is the default for a
large change (new page or new UI). Skip it for a typo, blog note, or
tiny copy change.

## Content

Inspiration posts live in `src/content/inspiration/*.md`.
The schema is in `src/content.config.ts`, and shared queries are in
`src/lib/inspiration.ts` — use `getInspirationPosts()` instead of
calling `getCollection()` directly, so drafts and sorting stay consistent.

Public display is gated by `INSPIRATION_ENABLED` in `src/consts.ts`.
Set it to `true` and merge to `main` (Cloudflare Workers Builds ships it).

See [docs/content.md](docs/content.md) for frontmatter fields and how to add a post.

## What "published" means

**Published** means a visitor can open the change on https://rtikhonov.com.

A merge to `main` publishes because **Cloudflare Workers Builds** deploys
the Worker. GitHub only stores the code.

These are **not** published:

- A commit or PR that is not on `main`
- A green GitHub check
- A GitHub Pages run (do not add Pages or `actions/deploy-pages`)
- `draft: false` on a post (that only affects the build)

## Deploy

GitHub is version control only. Ship only with Cloudflare Workers.
**CI/CD is Workers Builds.** Do not add GitHub Actions. If asked to set
up a pipeline, use `.cursor/skills/workers-builds-ci/`.

Default path (Workers Builds):

1. Edit on `main` (or a PR into `main`).
2. Large change: look with `.cursor/skills/preview-site/` first.
3. `npm run check`
4. Open a PR. Preview versions come from Workers Builds on non-`main` branches.
5. Merge to `main`. Cloudflare builds and deploys Worker `rtikhonov`.
6. `curl` https://rtikhonov.com (cache-bust) and confirm the new copy.

Emergency / first cutover only: `npm run deploy` after `npx wrangler whoami`
works (`CLOUDFLARE_API_TOKEN` in Cursor environment secrets). Do not use this
as the everyday path or as a CI test.

Do not TodoWrite or `git diff main...HEAD` for a clean-tree ship.

See [docs/deploy.md](docs/deploy.md), `.cursor/rules/deploy.mdc`,
`.cursor/skills/deploy-site/`, and `.cursor/skills/workers-builds-ci/`.

## Security and privacy (public repo)

This repository is public. Everything committed is visible on the internet.

- Never commit secrets (API keys, tokens, passwords, private keys) or `.env*` files.
- Never commit private personal data (address, phone, IDs) unless the owner explicitly wants it public.
- Use placeholders for unpublished contact details; only ship emails/links the owner approved.
- Put deploy secrets in Cloudflare Workers Builds or Cursor environment secrets,
  not in source. Never commit `CLOUDFLARE_API_TOKEN`.
- If a secret may already be in git history, warn the owner and rotate it — removing the file is not enough.
- When unsure whether content should be public, ask before adding it.

See also `.cursor/rules/public-repo-security.mdc`.

## Documentation

Site overview and doc index: [README.md](README.md). Detailed guides live under [docs/](docs/).

Full documentation: https://docs.astro.build
