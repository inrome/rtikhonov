# Interactions

## Gallery cards

On fine-pointer hover, gallery cards lift `3px` and cast a soft neutral drop shadow (light: `rgba(0,0,0,0.12)`; dark: `rgba(0,0,0,0.45)`, blur ~18px). The effect is plain CSS (`transform` + `box-shadow`, ~200ms ease). No 3D tilt, no cursor tracking, no scale. No effect on touch/no-hover devices. `prefers-reduced-motion: reduce` disables the lift and shadow.

## Gallery navigation

The horizontal scroller hides its scrollbar. Touch and trackpad scrolling still work. `touch-action: pan-x pan-y` keeps vertical page scroll available when a gesture starts on a card. Cards snap to the start of each item; `scroll-snap-stop: always` applies only on coarse pointers so phone swipes stop per card while desktop trackpads can move freely. On hover-capable devices, prev/next chevron buttons sit under the scroller (aligned to the main column) only when the gallery can scroll by about half a card or more. Each click scrolls by one card width plus gap. Buttons disable at the start and end of the list. When every card already fits (including tiny leftover overflow from padding math), the nav stays hidden. Touch devices keep swipe + next-card peek and do not show the arrows.

On fine pointers the scroller also supports mouse drag-to-pan. The cursor shows an open hand (`grab`) over the gallery and a closed hand (`grabbing`) while dragging. A drag starts after the mouse moves ~6px, which keeps plain clicks on card links working. Text selection is disabled inside the gallery on fine pointers — it would start during that pre-drag threshold and fight the pan. During a drag, snap turns off and link clicks are suppressed; on release the scroller glides to the nearest card and snap turns back on. Touch input keeps native swipe and is not affected. With `prefers-reduced-motion: reduce`, the settle jump is instant instead of smooth.

## Portrait

The circular profile photo uses a holographic hover sheen. The image is slightly zoomed inside the frame so the yellow backdrop fills the circle and the pink wall edge stays out of view. On hover, a diagonal streak (`::before`, white plus a touch of `--accent`, `soft-light` blend) sweeps down across the photo once (~700ms) while the frame scales to `1.03` with a soft decelerating ease (~250ms). `clip-path: circle(50%)` keeps the sheen inside the round photo. The effect is CSS-only: no cursor tracking, no glow shadow. No effect on touch/no-hover devices.

## Timeline years

The timeline splits into era blocks (`Product`, `Academia`, `Undergrad`, `Earlier`) with native `<details>` / `<summary>`. Product starts open; the others start closed. Each era summary shows a mono title and a small chevron. When an era is open, its title and chevron tint toward `--accent`.

Inside an era, years with two or more entries use a nested `<details>` / `<summary>`. Collapsed, the overview and chevron stay muted so expandable rows read quieter than leaf rows. Expanded, only the year label and chevron tint toward `--accent`; the overview stays normal foreground. Nested entries stay on the same vertical rail and date column. Year-only nested dates that would repeat the parent year show an em dash (`—`) instead. Hierarchy is hollow accent dots vs solid ones, not indentation. Summary hover tints year and overview toward `--accent`. Chevrons rotate when open (~150ms); `prefers-reduced-motion: reduce` skips that transition. No JavaScript for the folds.

## Work filters

Filter chips are plain buttons with `aria-pressed`. The active chip uses a stronger accent-tinted border and foreground text on a transparent fill. Clicking a chip hides non-matching gallery items, resets scroll to the start, and refreshes arrow disabled state. No page reload.

## Focus and micro-feedback

Contact links, project links, gallery arrows, filter chips, and collapsible timeline summaries use a short color transition (~150ms) and an accent `:focus-visible` outline. Gallery arrows also scale slightly on press (`0.95`) when motion is allowed. The call CTA and active Work chips stay outlined (no orange fill). Hovering the call pill warms its border and turns icon + label accent (no label sheen — that caused a blink on hover-out). Hovering a secondary contact row colors its icon with the accent and sweeps a one-shot diagonal sheen across the gray prefix text only (gradient clipped to the glyphs, ~700ms), echoing the portrait holo. Link underlines stay on through hover so color can transition without a flash.

## Constraints

- Enable card lift and portrait motion only when `(hover: hover)` and `(pointer: fine)`
- Skip motion when `prefers-reduced-motion: reduce`
- No squash/squish "jelly" animations
- No colored glow/bloom shadows anywhere
- Gallery cards keep a neutral drop shadow only
