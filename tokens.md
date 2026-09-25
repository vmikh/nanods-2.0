# Tokens

The second level: **roles**. Tokens take raw values from [grid.md](grid.md) and [palette.md](palette.md) and give them a meaning: "radius of a control", "secondary text", "level 1 background". Components use tokens only.

## Theory

### Three levels
```
grid + palette      raw values:  --space-12, --gray-800, --gray-50
      ↓
tokens              roles:       --radius-md, --bg-2, --text-secondary, --bg-accent
      ↓
components          .btn { background: var(--bg-2); border-radius: var(--radius-md); }
```
- Component CSS references tokens, plus `--space-*` for spacing. Never `--gray-*` or a hex.
- A token is named by its role, not its look: `--text-secondary`, not `--text-gray`. Themes remap colour tokens; components stay untouched.
- If no token fits, the design is off. Pick the nearest token; add a new one only for a genuinely new role, and always map it to the palette or grid.

### Groups, in order
1. Radius
2. Size
3. Colour: background, text, icon, line, effects

Type tokens are in [typography.md](typography.md), motion tokens in [motion.md](motion.md).

---

## Radius
- The bigger the container, the bigger the radius: bar 2, small control 6, control 10, card 14, media 20, island 24.
- A child never has a larger radius than its parent.
- All radii are grid steps.

| token | value | use |
|---|---|---|
| `--radius-xs` | 2 | meter bars, inline link focus |
| `--radius-sm` | 6 | small controls (28), badges, kbd, focus ring |
| `--radius-md` | 10 | controls: buttons, inputs, segments, list rows, menu items |
| `--radius-lg` | 14 | cards, menus |
| `--radius-xl` | 20 | images and video inside an island |
| `--radius-island` | 24 | islands, modals |
| `--radius-full` | 999px | chips, avatars, pills |

## Size
Fixed sizes with a role. All on the grid.

| token | value | use |
|---|---|---|
| `--size-control-sm` | 28 | small buttons, inputs, segments |
| `--size-control` | 36 | **default** control, menu item |
| `--size-control-lg` | 40 | the main action of a page or modal |
| `--size-row` | 44 | list row, scroll fade height |
| `--size-chip` | 24 | chip |
| `--size-badge` | 20 | badge, kbd line |
| `--size-bar` | 8 | meter |
| `--size-icon-sm` / `--size-icon` / `--size-icon-lg` | 14 / 16 / 24 | icons in meta, in controls, in empty states |
| `--size-check` | 14 | checkbox |
| `--size-field` | 160 | control width in a `.field` |
| `--size-menu` | 232 | menu width |
| `--size-sidebar` | 340 | sidebar island |
| `--size-modal` | 720 | maximum modal width |
| `--gutter` | 8 | gap between islands and grid columns |
| `--island-pad` | 16 / 20 / 24 | island padding: below 900, from 900, from 1440 |

Controls side by side share one height. Never mix 28 and 36 in a row.

## Colour
Colour tokens have **two values, one per theme**. Components never know which theme is on: they read `--bg-2`, and the theme decides what `--bg-2` is. How themes are switched is in [themes.md](themes.md).

### Background: levels
The interface is layers of surfaces. Hierarchy comes from tone, never from borders.

```
--bg-0        canvas, the gaps between islands
└ --bg-1      island, modal
  ├ --bg-2    card, button, input, chip, selected row        hover: --bg-3
  └ --bg-float  menu, popover (+ --shadow-float)
    └ --bg-2    hovered menu item
```

- **Dark theme:** each level is one step lighter than the one below. The canvas is the darkest, islands are a step up, controls another step up.
- **Light theme:** islands are white on a light grey canvas; controls and cards are a grey tint one step darker than the island; menus are white and rely on the shadow.
- In both themes a level differs from its neighbour by one small step. Never skip levels, never put `--bg-1` on `--bg-2`.

| token | dark | light | use |
|---|---|---|---|
| `--bg-well` | gray-1000 | gray-1000 | video and media wells (dark in both themes) |
| `--bg-0` | gray-950 | gray-75 | page canvas |
| `--bg-1` | gray-925 | gray-0 | islands, modals |
| `--bg-2` | gray-800 | gray-50 | cards, controls, chips, badges, meter track, selected row |
| `--bg-3` | gray-750 | gray-75 | hover of anything on `--bg-2` |
| `--bg-float` | gray-850 | gray-0 | menus, popovers, select options |
| `--bg-ghost-hover` | gray-900 | gray-25 | hover of transparent items on `--bg-1` (list rows) |
| `--bg-inverse` | gray-50 | gray-900 | selection in a group: selected segment, selected chip |
| `--bg-inverse-hover` | gray-0 | gray-1000 | hover of the above |
| `--bg-accent` | gray-50 | gray-900 | the main action: primary button, meter fill, checkbox, `.badge-accent` |
| `--bg-accent-hover` | gray-0 | gray-1000 | hover of the above |
| `--bg-accent-soft` | gray-50 at 14 % | gray-900 at 8 % | `.chip-accent`, disabled primary button |
| `--bg-neutral` | gray-400 | gray-400 | secondary fill for meters and dots |
| `--bg-scrim` | gray-950 at 84 % | gray-950 at 32 % | behind modals |
| `--bg-scrim-media` | gray-1000 at 60 % | same | over images and video |
| `--bg-glass` / `--bg-glass-hover` | gray-50 at 22 % / 16 % | same | controls floating over media |
| `--bg-glass-dark` | gray-950 at 55 % | same | captions over media |

- `--bg-2` is shared by cards and controls. A card holds content (text, meters, lists), not form controls; forms go straight on the island.
- Transparent items (list rows, ghost tabs) take `--bg-ghost-hover` on hover and `--bg-2` when selected.
- Media tokens (well, scrim over media, glass) are the same in both themes: they sit on images and video, not on the interface.

### Text
| token | dark | light | use |
|---|---|---|---|
| `--text-primary` | gray-50 | gray-950 | headings, body, active items, labels |
| `--text-secondary` | gray-300 | gray-600 | descriptions, resting list rows and menu items, unselected segments |
| `--text-tertiary` | gray-400 | gray-500 | badges, kbd |
| `--text-muted` | gray-500 | gray-500 | meta, captions, section labels, hints |
| `--text-disabled` | gray-600 | gray-300 | disabled controls |
| `--text-placeholder` | gray-300 at 42 % | gray-600 at 50 % | input placeholders |
| `--text-on-accent` | gray-950 | gray-0 | text on `--bg-accent` |
| `--text-on-inverse` | gray-950 | gray-0 | text on `--bg-inverse` |
| `--text-accent` / `--text-accent-hover` | gray-50 / gray-0 | gray-950 / gray-700 | links, `.chip-accent` |

- Two or three levels per block, not all of them. The usual set: title `--text-primary`, body `--text-secondary`, meta `--text-muted`.
- Hover and selection raise text one level: secondary becomes primary.
- No `--text-muted` or `--text-disabled` on `--bg-3`: too little contrast.

### Icon
| token | dark | light | use |
|---|---|---|---|
| `--icon-primary` | gray-50 | gray-950 | icons that carry meaning on their own, status icons |
| `--icon-secondary` | gray-400 | gray-500 | **default**: icons at rest in controls and rows |
| `--icon-muted` | gray-500 | gray-400 | icons in meta text |
| `--icon-disabled` | gray-600 | gray-300 | disabled controls |
| `--icon-on-accent` | gray-950 | gray-0 | inside the primary button |

On hover and selection an icon takes its parent's text colour (see [icons.md](icons.md)).

### Line
| token | dark | light | use |
|---|---|---|---|
| `--line-divider` | gray-900 | gray-100 | 1 px dividers, menu separators |
| `--line-strong` | gray-700 | gray-200 | dashed drop zones |
| `--line-link` | gray-700 | gray-300 | link underline at rest (on hover it takes the text colour) |
| `--line-focus` | gray-50 | gray-950 | keyboard focus ring, 2 px |
| `--line-input-focus` | gray-500 | gray-400 | inset 1 px ring of a focused input |

No borders on cards, controls or islands. These five are the only lines in the system.

### Accent
The system has no hue, so the accent is **the highest contrast tone**: a near white fill with dark text in the dark theme, a near black fill with white text in the light theme. It points at the main thing: the primary button, focus, progress. Links are primary text with an underline.
- One primary button per view, modal or form. It has the most contrast on the screen; nothing else competes with it.
- `--bg-accent` and `--bg-inverse` share a value but not a role: accent is an action, inverse is a selection. Keep both tokens so the roles can be told apart.
- No accent filled areas: islands, cards and sections never take `--bg-accent` or `--bg-inverse`.
- Text on an accent or inverse fill is always `--text-on-accent` or `--text-on-inverse`.

### Status
There are no status colours. Success, warning and error are shown with **words and icon shapes**:
- A status is a word in a `.badge` ("Live", "Failed") or a line of text with an icon (`check-circle`, `warning`, `x-circle`).
- Errors in forms are a short sentence under the field in `--text-primary`, so they read above the muted hint.
- Destructive actions are named explicitly ("Delete project") and confirmed in a modal.

### Effects
| token | dark | light | use |
|---|---|---|---|
| `--shadow-float` | 0 12 32, gray-1000 at 40 % | 0 12 32, gray-950 at 12 % | menus and popovers only |
| `--blur-glass` | 14 px | same | backdrop of glass controls |
| `--blur-scrim` | 4 px | same | backdrop behind a modal |

No other shadows, no gradients except the island scroll fade.

## CSS
Shared tokens go on `:root`. Colour tokens go in two theme blocks; the light block must come after the dark one.

```css
:root {
  /* radius */
  --radius-xs: var(--space-2);
  --radius-sm: var(--space-6);
  --radius-md: var(--space-10);
  --radius-lg: var(--space-14);
  --radius-xl: var(--space-20);
  --radius-island: var(--space-24);
  --radius-full: 999px;

  /* size */
  --size-control-sm: var(--space-28);
  --size-control: var(--space-36);
  --size-control-lg: var(--space-40);
  --size-row: var(--space-44);
  --size-chip: var(--space-24);
  --size-badge: var(--space-20);
  --size-bar: var(--space-8);
  --size-icon-sm: var(--space-14);
  --size-icon: var(--space-16);
  --size-icon-lg: var(--space-24);
  --size-check: var(--space-14);
  --size-field: 160px;
  --size-menu: 232px;
  --size-sidebar: 340px;
  --size-modal: 720px;
  --gutter: var(--space-8);
  --island-pad: var(--space-16);

  /* effects shared by both themes */
  --blur-glass: blur(14px);
  --blur-scrim: blur(4px);
  --bg-well: var(--gray-1000);
  --bg-neutral: var(--gray-400);
  --bg-scrim-media: color-mix(in srgb, var(--gray-1000) 60%, transparent);
  --bg-glass: color-mix(in srgb, var(--gray-50) 22%, transparent);
  --bg-glass-hover: color-mix(in srgb, var(--gray-50) 16%, transparent);
  --bg-glass-dark: color-mix(in srgb, var(--gray-950) 55%, transparent);
}
@media (min-width: 900px) { :root { --island-pad: var(--space-20); } }
@media (min-width: 1440px) { :root { --island-pad: var(--space-24); } }

/* dark theme: the default */
:root, [data-theme="dark"] {
  color-scheme: dark;

  --bg-0: var(--gray-950);
  --bg-1: var(--gray-925);
  --bg-2: var(--gray-800);
  --bg-3: var(--gray-750);
  --bg-float: var(--gray-850);
  --bg-ghost-hover: var(--gray-900);
  --bg-inverse: var(--gray-50);
  --bg-inverse-hover: var(--gray-0);
  --bg-accent: var(--gray-50);
  --bg-accent-hover: var(--gray-0);
  --bg-accent-soft: color-mix(in srgb, var(--gray-50) 14%, transparent);
  --bg-scrim: color-mix(in srgb, var(--gray-950) 84%, transparent);

  --text-primary: var(--gray-50);
  --text-secondary: var(--gray-300);
  --text-tertiary: var(--gray-400);
  --text-muted: var(--gray-500);
  --text-disabled: var(--gray-600);
  --text-placeholder: color-mix(in srgb, var(--gray-300) 42%, transparent);
  --text-on-accent: var(--gray-950);
  --text-on-inverse: var(--gray-950);
  --text-accent: var(--gray-50);
  --text-accent-hover: var(--gray-0);

  --icon-primary: var(--gray-50);
  --icon-secondary: var(--gray-400);
  --icon-muted: var(--gray-500);
  --icon-disabled: var(--gray-600);
  --icon-on-accent: var(--gray-950);

  --line-divider: var(--gray-900);
  --line-strong: var(--gray-700);
  --line-link: var(--gray-700);
  --line-focus: var(--gray-50);
  --line-input-focus: var(--gray-500);

  --shadow-float: 0 var(--space-12) var(--space-32) color-mix(in srgb, var(--gray-1000) 40%, transparent);
}

/* light theme */
[data-theme="light"] {
  color-scheme: light;

  --bg-0: var(--gray-75);
  --bg-1: var(--gray-0);
  --bg-2: var(--gray-50);
  --bg-3: var(--gray-75);
  --bg-float: var(--gray-0);
  --bg-ghost-hover: var(--gray-25);
  --bg-inverse: var(--gray-900);
  --bg-inverse-hover: var(--gray-1000);
  --bg-accent: var(--gray-900);
  --bg-accent-hover: var(--gray-1000);
  --bg-accent-soft: color-mix(in srgb, var(--gray-900) 8%, transparent);
  --bg-scrim: color-mix(in srgb, var(--gray-950) 32%, transparent);

  --text-primary: var(--gray-950);
  --text-secondary: var(--gray-600);
  --text-tertiary: var(--gray-500);
  --text-muted: var(--gray-500);
  --text-disabled: var(--gray-300);
  --text-placeholder: color-mix(in srgb, var(--gray-600) 50%, transparent);
  --text-on-accent: var(--gray-0);
  --text-on-inverse: var(--gray-0);
  --text-accent: var(--gray-950);
  --text-accent-hover: var(--gray-700);

  --icon-primary: var(--gray-950);
  --icon-secondary: var(--gray-500);
  --icon-muted: var(--gray-400);
  --icon-disabled: var(--gray-300);
  --icon-on-accent: var(--gray-0);

  --line-divider: var(--gray-100);
  --line-strong: var(--gray-200);
  --line-link: var(--gray-300);
  --line-focus: var(--gray-950);
  --line-input-focus: var(--gray-400);

  --shadow-float: 0 var(--space-12) var(--space-32) color-mix(in srgb, var(--gray-950) 12%, transparent);
}

/* text colour utilities */
.c-primary { color: var(--text-primary); } .c-secondary { color: var(--text-secondary); }
.c-tertiary { color: var(--text-tertiary); } .c-muted { color: var(--text-muted); }
.c-accent { color: var(--text-accent); }
```

## Practice
```css
/* right: tokens only, spacing from the grid */
.stat { background: var(--bg-2); border-radius: var(--radius-lg); padding: var(--space-16); }
.stat-value { color: var(--text-primary); }
.stat-note { color: var(--text-muted); }

/* wrong: palette, raw values, a border */
.stat { background: var(--gray-800); border: 1px solid #3A404C; border-radius: 12px; }
```

```html
<div class="stat">
  <div class="stat-value t-h2 t-num">1 284</div>
  <div class="stat-note t-caption">Views this week</div>
</div>
```
