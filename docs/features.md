# Features

Minimal personal one-pager.

## Page anatomy

1. **Site nav** — Hidden while Home is the only item. Inspiration joins the nav when `INSPIRATION_ENABLED` is on.
2. **Header** — portrait, name, short two-line bio, outlined 15-minute call CTA, and quieter LinkedIn / Telegram handles (Tabler icons; contact targets decoded by JS)
3. **Work** — horizontal scroll gallery with filter chips (All / Product / Research / Teaching), backed by a content collection
4. **Inspiration** — `/inspiration/` and each note URL always work. RSS lives at `/inspiration/rss.xml`. The homepage list, nav link, and RSS `<link>` stay off unless `INSPIRATION_ENABLED` is on.
5. **Weeks** — `/weeks/` is an unlisted 80×52 life calendar. Cells color themselves from today (past, this week, future). Marked weeks can show one emoji and a short factual comment.
6. **Timeline** — career history stored in `src/data/timeline.ts`, grouped into eras (Product, Academia, Undergrad, Earlier). Product starts open; the others start closed. Years with two or more entries still collapse into a short overview inside an era. Entries can carry an optional marker (emoji or icon) and a link to a related post.
7. **Site banner** — a fixed bar at the bottom for short notices. The current notice says the site is a work in progress until 7 September and shows a live countdown. Visitors can close it. Edit `src/lib/announcements.ts` to change the text.
8. **Hello** — `/hello` prints “Hello World” so we can confirm Workers Builds published from `main`.

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
- **Inspiration notes** — Markdown posts with optional source links. Pages stay reachable by URL. `INSPIRATION_ENABLED` only controls the homepage list, nav, and the RSS `<link>` in `<head>`. YouTube sources render a privacy-friendly embed. Drafts show in local preview and stay out of production and RSS.
- **Life in weeks** — `/weeks/` paints 4,160 squares from 16 May 1992. The current week uses the site accent. Comments live in `src/lib/weeks.ts`.
- **Bottom banner** — Pins a work-in-progress notice above the page, with a countdown to 7 September and a close button.
