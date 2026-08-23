## The project

Personal one-pager on Astro, served by Cloudflare Worker `rtikhonov`.
The live app is the **repository root** (`wrangler.jsonc` here). Edit
`src/`. There is no second Astro tree.

Talk in plain B1 English. Roman is not a professional developer. Explain
trade-offs and flag risky tech choices instead of adding tools.

## Development

Use the `node` on PATH if it is >= 22.12. On the owner laptop only:
`export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"`.

Run the dev server in the background (`astro dev --background`), manage
it with `astro dev status` / `stop` / `logs`, and verify on the port
`status` prints. Details: `.cursor/skills/preview-site/`.

## Content

Inspiration posts live in `src/content/inspiration/*.md`. The schema is
`src/content.config.ts`. Query through `getInspirationPosts()` in
`src/lib/inspiration.ts`, not `getCollection()`, so drafts and sorting
stay consistent. `INSPIRATION_ENABLED` in `src/consts.ts` gates public
display. Fields and how to add a post: [docs/content.md](docs/content.md).

## Ship

**Published** means a visitor can open the change on https://rtikhonov.com.
A commit on `main`, a green GitHub check, and `draft: false` are not
published.

CI/CD is Cloudflare Workers Builds. Merge to `main` and Cloudflare
deploys. GitHub is version control only — never add GitHub Pages or a
`.github/workflows/` deploy. `npm run deploy` (Wrangler) is for a Builds
outage only.

Large changes look on a preview first; small posts merge straight away.

Full policy: `.cursor/rules/deploy.mdc`. Ship a change:
`.cursor/skills/deploy-site/`. Pipeline questions:
`.cursor/skills/workers-builds-ci/`. Settings:
[docs/deploy.md](docs/deploy.md).

## Public repo

Everything here is visible to the world. Never commit secrets, `.env*`
files, or private personal data. Keep deploy secrets in Cloudflare or
Cursor environment secrets. Full policy:
`.cursor/rules/public-repo-security.mdc`.

## Documentation

Overview and doc index: [README.md](README.md). Guides live in
[docs/](docs/). Keep them current with every user-facing change; see
`.cursor/skills/maintain-project-docs/`.
