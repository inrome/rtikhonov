# Interactions

## Gallery cards

On fine-pointer hover, gallery cards ease into a light 3D tilt toward the cursor. A `requestAnimationFrame` loop interpolates rotation, lift, and scale toward the pointer target, then settles back to rest on leave. Max rotation is ~4°, with `translateY(-5px)` lift and `scale(1.015)`. The drop shadow offset follows the tilt (light: `rgba(0,0,0,0.28)`; dark: `rgba(0,0,0,0.6)`, blur ~22px) without CSS transition churn. No effect on touch/no-hover devices.

## Gallery navigation

The horizontal scroller hides its scrollbar. Touch and trackpad scrolling still work. `touch-action: pan-x pan-y` keeps vertical page scroll available when a gesture starts on a card. Cards snap to the start of each item; `scroll-snap-stop: always` applies only on coarse pointers so phone swipes stop per card while desktop trackpads can move freely. On hover-capable devices, prev/next chevron buttons sit under the scroller (aligned to the main column). Each click scrolls by one card width plus gap. Buttons disable at the start and end of the list. Touch devices keep swipe + next-card peek and do not show the arrows.

## Portrait

The circular profile photo uses a holographic hover sheen, not 3D tilt. On hover, a diagonal streak (`::before`, white plus a touch of `--accent`, `soft-light` blend) sweeps down across the photo once (~700ms) while the frame scales to `1.03` with a soft decelerating ease (~250ms). `clip-path: circle(50%)` keeps the sheen inside the round photo. The effect is CSS-only: no cursor tracking, no glow shadow. No effect on touch/no-hover devices.

## Focus and micro-feedback

Contact links, project links, and gallery arrows use a short color transition (~150ms) and an accent `:focus-visible` outline. Gallery arrows also scale slightly on press (`0.95`) when motion is allowed. Hovering a contact row colors its icon with the accent and sweeps a one-shot diagonal sheen across the gray prefix text (gradient clipped to the glyphs, ~700ms), echoing the portrait holo.

## Constraints

- Enable tilt and portrait motion only when `(hover: hover)` and `(pointer: fine)`
- Skip motion when `prefers-reduced-motion: reduce`
- No squash/squish "jelly" animations
- No colored glow/bloom shadows anywhere
- Gallery cards keep a neutral drop shadow only
