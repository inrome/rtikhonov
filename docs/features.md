# Features

Minimal personal one-pager.

## Page anatomy

1. **Site nav** — Home and Inspiration when `INSPIRATION_ENABLED` is on; hidden when the flag is off
2. **Header** — portrait, name, short two-line bio, outlined 15-minute call CTA, and quieter LinkedIn / Telegram handles (Tabler icons; contact targets decoded by JS)
3. **Work** — horizontal scroll gallery with filter chips (All / Product / Research / Teaching), backed by a content collection
4. **Inspiration** — notes and ideas (off by default). Toggle `INSPIRATION_ENABLED` in `src/consts.ts`. When on: the homepage lists posts; `/inspiration/` is the full index; each note has its own page; RSS lives at `/inspiration/rss.xml`. When off: no nav, no homepage block, and the routes redirect or 404.
5. **Timeline** — career history stored in `src/data/timeline.ts`, grouped into eras (Product, Academia, Undergrad, Earlier). Product starts open; the others start closed. Years with two or more entries still collapse into a short overview inside an era. Entries can carry an optional marker (emoji or icon) and a link to a related post.
6. **Site banner** — a fixed bar at the bottom for short notices. The current notice says the site is a work in progress until 7 September and shows a live countdown. Visitors can close it. Edit `src/lib/announcements.ts` to change the text.

## Feature summary

- **System themes** — Follows the device’s light or dark preference.
- **Sharp local media** — Loads optimized project images without cutting off faces or details.
- **Project gallery** — Uses the full screen width, supports swipe, and adds arrow controls on desktop.
- **Work filters** — Chips narrow the gallery by theme. Product covers `product` and `mentoring` cards; Research covers `publication` and `research`; Teaching covers `talk` and `event`.
- **Card hover** — Lifts the card a few pixels with a soft neutral shadow on fine-pointer hover.
- **Holographic portrait** — Sweeps a restrained orange sheen across the profile photo on hover.
- **Markdown projects** — Keeps project content easy to update without adding detail pages. Cards can list more than one artifact link.
- **Private contacts** — Shows useful handles while keeping clear contact targets out of static HTML.
- **Video call** — Opens a relaxed 15-minute video call from an outlined “15 min call” pill (same style as Work chips).
- **Link previews** — Gives shared pages a clear title, description, portrait, theme color, and proper icons.
- **Era timeline** — Product / Academia / Undergrad / Earlier eras open and close with native `<details>`. Busy years inside an era still fold the same way.
- **Inspiration notes** — Markdown posts with optional source links. Gated by `INSPIRATION_ENABLED`. YouTube sources render a privacy-friendly embed. Drafts show in local preview and stay out of production and RSS.
- **Bottom banner** — Pins a work-in-progress notice above the page, with a countdown to 7 September and a close button.
