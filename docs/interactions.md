# Interactions

## Gallery cards

On mouse enter, gallery cards ramp into a light 3D tilt (~220ms ease-out) toward the cursor, then track with a short transition (~60ms). Max rotation is ~4°, with `translateY(-5px)` lift and `scale(1.015)`. The drop shadow offset follows the tilt (`rgba(0,0,0,0.28)`, blur ~22px). Resets smoothly on `mouseleave`. No effect on touch/no-hover devices.

## Gallery navigation

The horizontal scroller hides its scrollbar. Touch and trackpad scrolling still work. On hover-capable devices, prev/next chevron buttons sit under the scroller (aligned to the main column). Each click scrolls by one card width plus gap. Buttons disable at the start and end of the list. Touch devices keep swipe + next-card peek and do not show the arrows.

## Portrait

The circular profile photo uses a holographic hover sheen, not 3D tilt. On hover, a diagonal streak (`::before`, white plus a touch of `--accent`, `soft-light` blend) sweeps down across the photo once (~700ms) while the frame scales to `1.03`. `clip-path: circle(50%)` keeps the sheen inside the round photo. The effect is CSS-only: no cursor tracking, no glow shadow. No effect on touch/no-hover devices.

## Constraints

- Enable only when `(hover: hover)` and `(pointer: fine)`
- Skip when `prefers-reduced-motion: reduce`
- No squash/squish "jelly" animations
- No colored glow/bloom shadows anywhere
- Gallery cards keep a neutral drop shadow only
