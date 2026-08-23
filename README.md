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
- [Deploy](docs/deploy.md) — Workers Builds (the only CI/CD), preview vs ship, emergency Wrangler
- [Agent context](docs/agent-context.md) — how rules and skills are written and kept cheap
- [Changelog](CHANGELOG.md) — notable site and documentation changes

Also see [AGENTS.md](AGENTS.md) and [.cursor/rules/](.cursor/rules/).

## Commands

```sh
npm install
npm run dev
npm run check        # docs + agent context + astro check
npm run build
npm run preview
npm run deploy
```

`npm run deploy` is emergency only (docs check + build + Wrangler). Everyday
ships go through merge to `main`.

## Deploy

GitHub is version control only. CI/CD is Cloudflare Workers Builds. Never
add GitHub Pages or GitHub Actions.

1. Change the site on a PR into `main`. Large work: look on the local
   preview first. Small copy and blog notes can merge without that tour.
2. Merge. Cloudflare Workers Builds runs `npm run build`, then
   `npx wrangler deploy`.
3. Open [rtikhonov.com](https://rtikhonov.com) (or `curl` it) and confirm.

A push to a PR branch uploads a preview version (not production). The stable
alias is `https://<branch-with-dashes>-rtikhonov.inrome.workers.dev`.

Exact dashboard settings: [docs/deploy.md](docs/deploy.md). Cursor rules
live in [.cursor/rules/](.cursor/rules/) and skills in
[.cursor/skills/](.cursor/skills/) — `deploy-site` to ship,
`workers-builds-ci` for pipeline questions, `preview-site` to look first.

## Add a week on /weeks

The life calendar is `/weeks/`. It is not in the nav. Each square is one week
from 16 May 1992. Colors update in the browser: past, this week (orange), and
future.

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
