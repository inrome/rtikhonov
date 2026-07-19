# rtikhonov.com

Personal site built with [Astro](https://astro.build), hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

The site lives in `rtikhonov.com/`. Minimal personal one-pager.

## Documentation

- [Features](docs/features.md) — page structure and feature summary
- [Design principles](docs/design-principles.md) — feel, restraint, and decision rules
- [Content](docs/content.md) — projects collection and timeline data
- [Visual system](docs/visual-system.md) — tokens, layout, typography, cards, images, icons
- [Interactions](docs/interactions.md) — card and portrait tilt
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

Deployment is handled by Cloudflare, not GitHub Actions. From the repo root, run `npm --prefix rtikhonov.com run deploy`. That command checks docs, builds the site, and deploys with Wrangler using IPv4-first DNS (needed on Node 24 + macOS). If the repo is connected to Cloudflare Workers Builds, set the build **Root directory** to `rtikhonov.com` in the Cloudflare dashboard.
