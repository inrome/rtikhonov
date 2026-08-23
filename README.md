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
2. Merge. Cloudflare Workers Builds runs `npm run build`, then
   `npx wrangler deploy`.
3. Open [rtikhonov.com](https://rtikhonov.com) (or `curl` it) and confirm.

A push to a PR branch uploads a preview version (not production). The stable
alias is `https://<branch-with-dashes>-rtikhonov.inrome.workers.dev`.

The test host is [test.rtikhonov.com](https://test.rtikhonov.com). It is Worker
`rtikhonov-test`. Ship it with `npm run deploy:test` (needs a Cloudflare token
with Workers Scripts Edit). Do not point that command at production.

Exact dashboard settings: [docs/deploy.md](docs/deploy.md). Cursor:
`.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/`. Preview:
`.cursor/skills/preview-site/`.

## Add a week on /weeks

The life calendar is `/weeks/`. Each square is one week from 16 May 1992. Colors
update in the browser: past, this week (orange), and future.

To mark a week, add an object to `WEEK_ANNOTATIONS` in `src/lib/weeks.ts`:

```ts
{
  date: "1992-05-16",
  emoji: "🇺🇦",
  title: "The week I was born",
  location: "Kryvyi Rih, Ukraine",
}
```

`date` is any day in that week (`YYYY-MM-DD`). The page derives the week number
and the date range. Use one color emoji. `location` is optional. Keep the title
and location factual.
