# rtikhonov.com

Personal site built with [Astro](https://astro.build), hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

The app lives at the repository root. **Published** means a visitor can open
[rtikhonov.com](https://rtikhonov.com). A merge to `main` ships when Cloudflare
Workers Builds is connected.

## Documentation

- [Features](docs/features.md) — page structure and feature summary
- [Design principles](docs/design-principles.md) — feel, restraint, and decision rules
- [Content](docs/content.md) — projects, inspiration posts, and timeline data
- [Visual system](docs/visual-system.md) — tokens, layout, typography, cards, images, icons
- [Interactions](docs/interactions.md) — card hover lift and portrait holographic sheen
- [SEO / social](docs/seo-social.md) — titles, meta, Open Graph, favicons, sharing rules
- [Crawling / AI](docs/crawling-ai.md) — robots, portrait opt-out, contact obfuscation
- [Deploy](docs/deploy.md) — Workers Builds settings and emergency Wrangler
- [Changelog](CHANGELOG.md) — notable site and documentation changes

Also see [AGENTS.md](AGENTS.md) and [.cursor/rules/](.cursor/rules/).

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
npm run deploy
```

`npm run deploy` is emergency only (docs check + build + Wrangler). Everyday
ships go through merge to `main`.

## Deploy

GitHub is version control only. Never add GitHub Pages or `actions/deploy-pages`.

1. Change the site on a PR into `main`.
2. Merge. Cloudflare Workers Builds runs `npm ci && npm run build`, then
   `npx wrangler deploy`.
3. Open [rtikhonov.com](https://rtikhonov.com) (or `curl` it) and confirm.

Exact dashboard settings: [docs/deploy.md](docs/deploy.md). Cursor:
`.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/`. Preview:
`.cursor/skills/preview-site/`.
