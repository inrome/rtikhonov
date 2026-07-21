# Content

## Projects

Content collection: `rtikhonov.com/src/content/projects/*.md`  
Schema: `rtikhonov.com/src/content.config.ts`

| Field | Notes |
|--------|--------|
| `title` | Required |
| `summary` | ≤15 words |
| `date` / `dateEnd` | Optional ISO dates (`YYYY-MM-DD`) for filter/sort; display via `formatProjectDate` |
| `label` | Badge on the card image (e.g. mentoring, publication, event, talk, product) |
| `image` | Local asset under `src/assets/projects/` — required for shipping a card |
| `href` / `hrefLabel` | Optional single artifact link (image is not clickable) |
| `links` | Optional list of `{ href, label }` for extra artifacts; shown after `href` |

Link `href` values accept absolute URLs or root-relative paths to files hosted under `rtikhonov.com/public/` (e.g. `/files/paper.pdf`).

### Link labels

Say what is behind each link with a verb and, when the target is not in English, a language note:

- `Read paper [in Russian]`, `Read report [in Russian]`
- `Watch lecture [in Russian]`, `Watch walkthrough video`
- `Visit site`, `See LinkedIn post`

Avoid bare labels like `PDF`, `Site`, or journal abbreviations.
| `order` | Sort key for the gallery (lower = earlier / newer) |

### Shipping rule

Ship a project card only when **both** are true:

1. A **local image** under `src/assets/projects/` (copied from notes, downloaded once from an official source, or cropped from a paper). No hotlinks. No SVG placeholders for public cards.
2. At least one **public artifact link** (`href` and/or `links`) — paper DOI/PDF, event site, report, or video.

For publication cards, prefer media in this order: study figure → journal title/abstract crop → PDF title/abstract crop.

UsabilityLab / Mobile Bank ranking stays timeline-only (no card).

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
links:
  - href: https://doi.org/10.1234/example
    label: Paper
order: 3
---
```

## Timeline

Typed array in `rtikhonov.com/src/data/timeline.ts` (imported by `index.astro`). Newest first.

| Field | Notes |
|--------|--------|
| `id` | Required stable slug (e.g. `payme-2025`) for anchors and future post links |
| `date` | Required. Only: `YYYY` \| `YYYY-MM` \| `YYYY-MM-DD` |
| `text` | Required. Short public-facing line |
| `category` | Optional: `work` \| `education` \| `research` \| `community` \| `life`. Data-only for now — no timeline filters yet |
| `marker` | Optional. Emoji (`🇺🇿`) or raw Tabler SVG string (`import … from "@tabler/icons/…svg?raw"`). Detected by `<svg` prefix |
| `href` | Optional. Absolute URL or root-relative path when a related post exists |

Display dates via `formatTimelineDate` (for example `2026-04` → `Apr 2026`); keep the raw ISO string in data and on `<time datetime>`. When `marker` is set, it renders before the text (`aria-hidden`). When `href` is set, the event text is a muted underline link.

Entries group by calendar year (`YYYY` from the date string), then into eras:

| Era | Years | Default |
|-----|-------|---------|
| Product | 2023 and later | Open |
| Academia | 2014–2022 | Closed |
| Undergrad | 2009–2013 | Closed |
| Earlier | before 2009 | Closed |

A year with one entry stays a plain row inside its era. A year with two or more entries collapses behind a short overview from `yearOverviews` in the same data file; expand shows the individual dated lines. Nested entries dated with only `YYYY` (same as the group year) display an em dash in the date column so the parent year is not repeated; keep the real ISO string on `<time datetime>`.

Cover career roles, research programs, and leadership projects. Prefer short public-facing lines. Do not duplicate the same Carnegie Mellon role and its Open Mind publication as two vague “2022/2023 research” rows — keep distinct milestones.

Blog or note pages are a later step: add a post collection when the first long-form piece ships, then set `href` on the matching timeline entry.

### Work filter chips

Gallery chips group card `label` values:

| Chip | Labels |
|------|--------|
| Product | `product`, `mentoring` |
| Research | `publication`, `research` |
| Teaching | `talk`, `event` |
