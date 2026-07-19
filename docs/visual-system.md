# Visual system

## Tokens

`--bg`, `--fg`, `--muted`, `--border`, `--accent`, `--accent-fg` (orange accent; light/dark via `prefers-color-scheme`).

## Layout

System fonts, centered `main` max-width `38rem`; full-bleed scrollers with `width: 100vw; margin-left/right: calc(50% - 50vw)` — do not add `max-width: 100%` on full-bleed sections.

## Typography

Two roles only:

- System sans (body/UI, unchanged)
- System mono (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`) for dates and labels (timeline dates, gallery card dates, project labels)

Hero name/heading gets a noticeably larger size and heavier weight than the rest of the page. No new font files or web font loading.

## Gallery cards

Fluid width on all viewports (`min(20rem, viewport − pads − peek)`); date → title → summary → link; solid filled accent label over the image; date renders in mono. Desktop shows prev/next chevrons under the scroller; the scrollbar stays hidden.

## Images

Host locally, keep uncropped; show full image on a blurred self-backdrop; no CDN hotlinks.

## Icons

[Tabler Icons](https://tabler.io/icons) (MIT), muted gray (`--muted`), left of the link text.
