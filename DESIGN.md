# Design and features

Minimal personal one-pager. Astro static site in `rtikhonov.com/`, hosted on Cloudflare Workers.

## Page anatomy (top → bottom)

1. **Header** — portrait, name, bio, LinkedIn / Telegram links (Tabler icons left of labels)
2. **Projects** — horizontal scroll gallery (content collection)
3. **Timeline** — career history (inline data in `index.astro`)

## Features

### Projects

Content collection: `rtikhonov.com/src/content/projects/*.md`  
Schema: `rtikhonov.com/src/content.config.ts`

| Field | Notes |
|--------|--------|
| `title` | Required |
| `summary` | ≤15 words |
| `date` / `dateEnd` | Optional ISO dates (`YYYY-MM-DD`) for filter/sort; display via `formatProjectDate` |
| `label` | Badge on the card image (e.g. mentoring, publication) |
| `image` | Optional local asset under `src/assets/projects/` |
| `href` / `hrefLabel` | Optional link (image is not clickable) |
| `order` | Sort key for the gallery |

Add a project — create a markdown file:

```yaml
---
title: Example project
summary: Short value for others in under fifteen words
date: 2026-04-10
dateEnd: 2026-04-12
label: mentoring
image: ../../assets/projects/example.jpg
href: https://example.com
hrefLabel: Link
order: 3
---
```

### Timeline

Array in `rtikhonov.com/src/pages/index.astro`. Newest first.  
Date field uses only: `YYYY` | `YYYY-MM` | `YYYY-MM-DD`.

## Design guidelines

- **Tokens:** `--bg`, `--fg`, `--muted`, `--border`, `--accent`, `--accent-fg` (orange accent; light/dark via `prefers-color-scheme`)
- **Layout:** system fonts, centered `main` max-width `38rem`; full-bleed scrollers with `width: 100vw; margin-left/right: calc(50% - 50vw)` — do not add `max-width: 100%` on full-bleed sections
- **Gallery cards:** fluid width on all viewports (`min(20rem, viewport − pads − peek)`); date → title → summary → link; translucent filled label over the image
- **Images:** host locally, keep uncropped; show full image on a blurred self-backdrop; no CDN hotlinks
- **Icons:** [Tabler Icons](https://tabler.io/icons) (MIT), muted gray (`--muted`), left of the link text
- **Do not:** add Tailwind, invent a second palette, use purple/AI-slop styling, or add project detail pages unless asked

## Crawling / AI

`robots.txt` allows search and AI crawlers for the site. Opt-outs:

- **Portrait** (`/_astro/roman*`): `Disallow` for AI bots + `X-Robots-Tag: noai, noimageai` via `_headers`
- **Contact** (LinkedIn / Telegram): omitted from `/llms.txt`; links are obfuscated in HTML (`data-nosnippet` on nav, `rel=nofollow`, href revealed only after user interaction)

Short LLM summary: `/llms.txt`. These are machine-readable preferences — not a hard technical lock.
## Where else to look

- [README.md](README.md) — install, build, deploy commands
- [AGENTS.md](AGENTS.md) — agent workflow and public-repo security
- [.cursor/rules/](.cursor/rules/) — machine-attached details (gallery, UI, deploy)
