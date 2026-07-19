# Interactions

## Gallery cards

On mouse move, gallery cards tilt in 3D following cursor position (`perspective` on the container, `rotateX`/`rotateY` up to ~6°, `translateY(-5px)` lift, `scale(1.015)`), with the drop shadow offset shifting to match the tilt direction (`rgba(0,0,0,0.4)`, blur ~22px). Resets smoothly on `mouseleave`. No effect on touch/no-hover devices.

## Portrait

The circular profile photo uses a holographic hover sheen, not 3D tilt. On hover, a diagonal streak (`::before`, white plus a touch of `--accent`, `soft-light` blend) sweeps down across the photo once (~700ms) while the frame scales to `1.05`. The effect is CSS-only: no cursor tracking, no glow shadow. No effect on touch/no-hover devices.

## Constraints

- Enable only when `(hover: hover)` and `(pointer: fine)`
- Skip when `prefers-reduced-motion: reduce`
- No squash/squish "jelly" animations
- No colored glow/bloom shadows anywhere
- Gallery cards keep a neutral drop shadow only
