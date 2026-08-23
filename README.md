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

Deployment is handled by Cloudflare Wrangler, not GitHub Actions or GitHub Pages. **`git push` does not update the live site.** From the repo root, run `npm --prefix rtikhonov.com run deploy`. That command checks docs, builds the site, and deploys with IPv4-first DNS (needed on Node 24 + macOS).

Inspiration is in the codebase but gated by `INSPIRATION_ENABLED` in `rtikhonov.com/src/consts.ts` (off until flipped and redeployed).

Agent path: `.cursor/rules/agent-efficiency.mdc`, `.cursor/rules/production-source.mdc`, `.cursor/rules/deploy.mdc`, `.cursor/skills/deploy-site/`, `.cursor/skills/check-live-site/` — curl live when something looks missing, `wrangler whoami`, then `npm run deploy`. Local UI preview: `.cursor/skills/preview-site/`.