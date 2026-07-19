# Interactions

## Gallery cards

On mouse move, gallery cards tilt in 3D following cursor position (`perspective` on the container, `rotateX`/`rotateY` up to ~6°, `translateY(-5px)` lift, `scale(1.015)`), with the drop shadow offset shifting to match the tilt direction (`rgba(0,0,0,0.4)`, blur ~22px). Resets smoothly on `mouseleave`. No effect on touch/no-hover devices.

## Portrait

Same 3D mouse-tracking tilt (rotate up to ~6°, lift 5px, scale 1.015) applied to the circular profile photo — no shadow/glow on it, tilt only.

## Constraints

- Enable only when `(hover: hover)` and `(pointer: fine)`
- Skip when `prefers-reduced-motion: reduce`
- No squash/squish "jelly" animations
- No colored glow/bloom shadows
