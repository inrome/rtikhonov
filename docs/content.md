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

Array in `rtikhonov.com/src/pages/index.astro`. Newest first.  
Date field uses only: `YYYY` | `YYYY-MM` | `YYYY-MM-DD`.  
Display via `formatTimelineDate` (for example `2026-04` → `Apr 2026`); keep the raw ISO string in data and on `<time datetime>`.

Entries group by calendar year (`YYYY` from the date string). A year with one entry stays a plain row. A year with two or more entries collapses behind a short overview from `yearOverviews` in the same file; expand shows the individual dated lines.

Cover career roles, research programs, and leadership projects. Prefer short public-facing lines. Do not duplicate the same Carnegie Mellon role and its Open Mind publication as two vague “2022/2023 research” rows — keep distinct milestones.
