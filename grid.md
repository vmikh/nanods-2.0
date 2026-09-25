# Grid

The first level of the system. One base unit, **4 px**, and every size on the page is a step of it.

## Theory

### Step 4 px
Every dimension is a multiple of 4: padding, margin, gap, width, height, radius, offset, icon size, breakpoint. The grid is not only for spacing; it governs **all sizes on the page**. A value that is not on the grid does not exist: no 15, 18, 22, 30, 50. If a layout seems to need one, round it to the nearest step.

### Small steps can be split
Below 16 px the eye notices every pixel, so halves are allowed: 2, 6, 10, 14. They are for the insides of small things: the gap in a chip, the padding of a badge, a fine radius.

### Large steps get larger
The bigger the value, the bigger the step. Nobody sees the difference between 52 and 56 between two sections, but random values make a layout feel accidental. So the scale thins out as it grows:

| range | step | values |
|---|---|---|
| 2 to 16 | 2 | 2, 4, 6, 8, 10, 12, 14, 16 |
| 16 to 48 | 4 | 20, 24, 28, 32, 36, 40, 44, 48 |
| 48 to 64 | 8 | 56, 64 |
| 64 and up | 16 or 32 | 80, 96, 128 |

Fixed widths of large blocks (sidebar 340, menu 232, modal 720) are also multiples of 4.

### Inner space is smaller than outer space
Spacing shows what belongs together. The gap inside a group is always smaller than the gap between groups.

| relation | gap |
|---|---|
| parts of one thing (title and subtitle, rows in a list) | 2 to 4 |
| items in a group (buttons, fields, chips) | 8 |
| blocks inside a section | 12 |
| sections inside an island | 16 above the section label, 12 below it |
| island edge to content | 16, 20 or 24 (`--island-pad`) |
| between islands | 8 (`--gutter`) |

### The only exceptions
- Border widths: 1 px hairlines, 2 px focus ring.
- Font sizes and line heights (see [typography.md](typography.md)). The box around text (control height, padding) is on the grid.
- Fluid widths in `%`, `fr`, `ch`.

### Breakpoints
Two, both on the grid: **900** and **1440**. Use only these for any responsive change.

## CSS
```css
:root {
  /* grid: 4 px step; step 2 below 16, step 8 from 48, step 16+ from 64 */
  --space-2: 2px;   --space-4: 4px;   --space-6: 6px;   --space-8: 8px;
  --space-10: 10px; --space-12: 12px; --space-14: 14px; --space-16: 16px;
  --space-20: 20px; --space-24: 24px; --space-28: 28px; --space-32: 32px;
  --space-36: 36px; --space-40: 40px; --space-44: 44px; --space-48: 48px;
  --space-56: 56px; --space-64: 64px;
  --space-80: 80px; --space-96: 96px; --space-128: 128px;
}
```

The name is the value in pixels, so the scale reads at a glance and a missing name means a missing step.

## Practice
Spacing in component CSS uses `--space-*` directly. Sizes with a role (control heights, radii, island padding) come from [tokens.md](tokens.md), which are built on this scale.

```css
/* right */
.toolbar { display: flex; gap: var(--space-8); padding: var(--space-12) var(--space-16); }
.empty { padding: var(--space-64) var(--space-24); }

/* wrong: off the grid, raw px */
.toolbar { gap: 7px; padding: 13px 18px; }
.empty { padding: 60px 25px; }
```

```html
<section class="island island-pad stack-3">
  <h2 class="t-label" style="margin-top: var(--space-16)">Account</h2>
  <div class="cluster">…buttons, gap 8…</div>
</section>
```
