# rtikhonov.com

Personal site built with [Astro](https://astro.build), hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

The site lives in `rtikhonov.com/`. Personal one-pager plus Inspiration notes.

## Documentation

- [Features](docs/features.md) — page structure and feature summary
- [Design principles](docs/design-principles.md) — feel, restraint, and decision rules
- [Content](docs/content.md) — projects, inspiration posts, and timeline data
- [Visual system](docs/visual-system.md) — tokens, layout, typography, cards, images, icons
- [Interactions](docs/interactions.md) — card hover lift and portrait holographic sheen
- [SEO / social](docs/seo-social.md) — titles, meta, Open Graph, favicons, sharing rules
- [Crawling / AI](docs/crawling-ai.md) — robots, portrait opt-out, contact obfuscation
- [Changelog](CHANGELOG.md) — notable site and documentation changes

Also see [AGENTS.md](AGENTS.md) and [.cursor/rules/](.cursor/rules/).

## Commands

Run these from the repository root:

```sh
npm --prefix rtikhonov.com install
npm --prefix rtikhonov.com run dev
npm --prefix rtikhonov.com run build
npm --prefix rtikhonov.com run check:docs
npm --prefix rtikhonov.com run preview
npm --prefix rtikhonov.com run deploy
```

## Deploy

GitHub is version control only. Never add GitHub Pages or `actions/deploy-pages`.

The live Worker is this tree (`rtikhonov.com/wrangler.jsonc`), not the root
Astro app on `main`. Agents must run `npx wrangler whoami` first. Cloud Agents
need `CLOUDFLARE_API_TOKEN` in the Cursor environment. Then:

```sh
npm --prefix rtikhonov.com run deploy
```

That checks docs, builds, and deploys with Wrangler. After it finishes, open
[rtikhonov.com](https://rtikhonov.com) (or `curl` it) and confirm the change.
A merge is not a publish.

If the repo is connected to Cloudflare Workers Builds, set **Root directory**
to `rtikhonov.com`.

Cursor: `.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/`. Preview:
`.cursor/skills/preview-site/`.