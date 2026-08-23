# rtikhonov.com

Personal website of Roman Tikhonov. Built with [Astro](https://astro.build). This repo
deploys to GitHub Pages, but **published** means the page is live on
[rtikhonov.com](https://rtikhonov.com). The public site can differ from `main`.
Inspiration is not on the live site yet (`/inspiration/` is 404).

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run check`   | Type-check pages, components, and content       |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Preview the build before you deploy             |

## Project structure

```text
src/
├── components/   # Small shared pieces (head tags, date, video embed, banner)
├── content/
│   └── inspiration/   # Blog posts as Markdown files
├── layouts/      # Page shell with nav and metadata
├── lib/          # Content queries, helpers, and site announcements
├── pages/        # Routes
├── styles/       # Global CSS
├── consts.ts     # Site title, description, nav items
└── content.config.ts  # Content collection schema
```

## Site announcements

The bottom banner is defined in `src/lib/announcements.ts`. The first item with
`enabled` not set to `false` is shown on every page, above the content. Visitors
can close it. The browser remembers that choice until you change the `id`.

```ts
{
  id: "2026-wip-until-sept-7",
  message: "This site is a work in progress. It is under development until 7 September.",
  until: "2026-09-07",
}
```

`until` is a local calendar day (`YYYY-MM-DD`). The banner adds a live
countdown and hides after that day ends.

To post a new announcement, add it at the top of the list with a new `id`. To
hide the banner, set `enabled: false` or clear the list. Set `dismissible: false`
if the close button should not appear.

## Add an Inspiration post

1. Create a Markdown file in `src/content/inspiration/`. The file name becomes the URL,
   so `language-ai-and-power.md` is served at `/inspiration/language-ai-and-power/`.
2. Fill in the frontmatter:

```yaml
---
title: "Post title"
description: "One or two sentences for the list page and RSS feed."
pubDate: 2026-08-03
# Optional:
updatedDate: 2026-08-10
sourceUrl: "https://www.youtube.com/watch?v=VIDEO_ID"
sourceTitle: "Talk or article title"
draft: true
---
Your notes in Markdown.
```

3. Write the notes below the frontmatter.

Notes on the fields:

- `sourceUrl` renders a link to the source. YouTube links also render a privacy-friendly
  embed, so strip tracking parameters such as `?si=` before you paste a link.
- `draft: true` hides the post from builds. You still see it on the dev server, marked
  as a draft.
- `npm run check` validates the frontmatter against the schema in `src/content.config.ts`.

The list page lives at `/inspiration/`, and the feed at `/inspiration/rss.xml`.
