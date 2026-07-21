# Features

Minimal personal one-pager.

## Page anatomy

1. **Header** — portrait, name, short two-line bio, outlined 15-minute call CTA, and quieter LinkedIn / Telegram handles (Tabler icons; contact targets decoded by JS)
2. **Work** — horizontal scroll gallery with filter chips (All / Product / Research / Teaching), backed by a content collection
3. **Timeline** — career history stored as inline data in `index.astro`, grouped into eras (Product, Academia, Undergrad, Earlier). Product starts open; the others start closed. Years with two or more entries still collapse into a short overview inside an era.

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
