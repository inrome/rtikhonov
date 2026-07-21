# Changelog

Notable updates to rtikhonov.com. Newest entries come first.

## 2026-07-21 — Jump Then Filter

- The homepage is easier to scan: a short two-line bio, outlined call CTA, filterable Work gallery, and era-grouped timeline.
- The bio is two short lines. The 15-minute call is an outlined pill next to quieter LinkedIn and Telegram links — no orange fill.
- Work chips filter the gallery (All / Product / Research / Teaching) without leaving the page. The active chip is outlined too, not filled.
- The timeline opens as eras — Product first, then Academia, Undergrad, and Earlier behind a click. Open eras and open multi-entry years accent the title/year and chevron only; collapsed year overviews stay muted. Nested year-only dates use an em dash so they do not repeat the parent year.

## 2026-07-19 — Folding Time

- Busy years on the timeline now start collapsed. You see a short year overview, then click to open the full list of milestones.
- Only years with two or more entries fold this way. Quiet years stay as single rows.

## 2026-07-19 — Slow Hands

- You can now grab the projects gallery with the mouse and drag it sideways. The cursor turns into a hand over the cards.
- A short drag will not open a card link by mistake, and after you let go the gallery settles on the nearest card.
- Dragging no longer highlights card text; selection is off inside the gallery on mouse devices.

## 2026-07-19 — Fast As You Can

- “Deploy” chats take a short path: check git status, run `npm run deploy`, report URLs. No docs archaeology when the tree is clean.
- Agent shells get an explicit nvm Node PATH so npm/wrangler work without a hunt.

## 2026-07-19 — Everything in Its Right Place

- The projects gallery now covers mentoring, publications, talks, and events, each with a local image and a public link.
- Card links say what they open — “Read paper [in Russian]”, “Watch lecture [in Russian]” — instead of bare labels like “PDF”.
- The Cognitive Hackathon paper is hosted on the site (`/files/`), and its card shows the journal title page.
- ReviewLab.app joins the gallery as a product card, linking to the live site and a Loom walkthrough.
- Publication cards can list more than one artifact (papers, thesis, event site) without leaving the homepage.
- The career timeline folds in research programs and leadership projects from the portfolio notes, with sharper dates from the CV.

## 2026-07-19 — Keep It Simple

- Project cards lift a few pixels with a soft shadow on hover. The old 3D tilt is gone.
- The portrait crop zooms in so the yellow backdrop fills the circle and the halo ring disappears.
- Gallery arrows hide when every card already fits on screen.

## 2026-07-19 — Share the Night

- Shared links get real Open Graph and Twitter previews, with theme colors and a proper favicon set.
- Contact rows label LinkedIn and Telegram before their linked handles. A short “15 min call” CTA opens a Cal video slot.
- Timeline dates read as friendly labels, card shadows stay visible in dark mode, and the page uses `100dvh`.
- Docs cover SEO and social sharing. Changelog titles no longer need a fixed word count.

## 2026-07-19 — Smooth Like Butter

- Project cards track the cursor with soft interpolated motion instead of stepped CSS transitions.
- The gallery no longer traps vertical scroll on phones, and trackpads can glide past cards more freely.
- Portrait scale, links, and gallery arrows ease more gently, with clearer keyboard focus.

## 2026-07-19 — Easy Like Sunday Morning

- Hover on project cards eases in instead of popping. The tilt is lighter and the drop shadow is softer.
- The portrait sheen stays inside the circle, and the photo stays sharp on retina screens.
- Project labels keep a solid accent badge so they do not flicker while a card tilts.
- The gallery drops the scrollbar. Desktop gets prev/next arrows; phones still swipe.

## 2026-07-19 — Everything Everywhere All at Once

- Projects are easier to browse. The new gallery keeps content in Markdown and images on the site.
- The site asks AI crawlers not to train on the portrait. Clear contact URLs stay out of HTML.
- Project cards now lean into the cursor. The new portrait gets a restrained orange holographic sheen.
- Small, focused guides replace one large design file. A docs check catches broken structure before deploy.
- Deploy now checks docs, builds the site, and handles the Node 24 DNS workaround.
- The Astro app now lives in `rtikhonov.com/`, where its build and deploy setup belongs.

## 2026-07-18 — A New Hope

- The first one-pager ships with a bio, contact links, and career timeline.
- Cloudflare Workers replaces GitHub Pages for hosting and deployment.
- Repository rules keep secrets and private data out of Git.
