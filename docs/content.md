# Content

## Projects

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

## Timeline

Array in `rtikhonov.com/src/pages/index.astro`. Newest first.  
Date field uses only: `YYYY` | `YYYY-MM` | `YYYY-MM-DD`.  
Display via `formatTimelineDate` (for example `2026-04` → `Apr 2026`); keep the raw ISO string in data and on `<time datetime>`.
