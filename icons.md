# Icons

The system ships no icons. Use **Phosphor** ([phosphoricons.com](https://phosphoricons.com), MIT license), **Fill weight only**.

## Theory
- One set, one weight. No other Phosphor weight (thin, light, regular, bold, duotone), no other icon set, no emoji as icons, no hand drawn SVGs.
- **Sizes are grid steps:** 16 in controls, 14 in meta text and chips, 24 in empty states.
- **Colour is always `currentColor`.** At rest an icon is `--icon-secondary`; when its parent is hovered or selected, it takes the parent's text colour. On the accent fill it is `--icon-on-accent`.
- **Gap to the label** follows the component: 8 in buttons and rows, 10 in menu items, 6 in chips.
- **One icon per control.** Do not decorate every row and heading; use icons where they speed up recognition.
- **Fill icons are heavy:** keep them small and muted, the label stays the main thing.
- **Icons have no colour of their own,** only grey levels. Status is told by shape (`check-circle`, `warning`, `x-circle`) in `--icon-primary`, always next to a word.
- **Match the meaning, not the look:** `trash` for delete, `pencil-simple` for edit, `magnifying-glass` for search, `gear-six` for settings, `x` for close, `caret-down` for dropdowns, `plus` for create.
- Icon only buttons are square (28, 36 or 40) with `aria-label`. Decorative icons get `aria-hidden="true"`.

## CSS
Loading, web font (plain HTML):
```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
```

React: `@phosphor-icons/react` with `weight="fill"`, set once for the app through `<IconContext.Provider value={{ weight: 'fill' }}>`.

Inline SVG: copy the **Fill** variant from phosphoricons.com (`viewBox="0 0 256 256"`, `fill="currentColor"`).

```css
.icon { flex: none; display: inline-flex; width: var(--size-icon); height: var(--size-icon); font-size: var(--size-icon); color: var(--icon-secondary); }
.icon-sm { width: var(--size-icon-sm); height: var(--size-icon-sm); font-size: var(--size-icon-sm); }
.icon-lg { width: var(--size-icon-lg); height: var(--size-icon-lg); font-size: var(--size-icon-lg); }
:hover > .icon, .on > .icon, [aria-pressed="true"] > .icon, .btn-primary > .icon { color: inherit; }
:disabled > .icon { color: var(--icon-disabled); }
.btn-icon { width: var(--size-control); padding: 0; } .btn-sm.btn-icon { width: var(--size-control-sm); } .btn-lg.btn-icon { width: var(--size-control-lg); }
```

## Practice
```html
<button class="btn"><i class="icon ph-fill ph-plus" aria-hidden="true"></i>New project</button>
<button class="btn btn-icon" aria-label="Settings"><i class="icon ph-fill ph-gear-six"></i></button>
<button class="list-row"><i class="icon ph-fill ph-folder" aria-hidden="true"></i><span class="title">Archive</span></button>
<span class="chip"><i class="icon icon-sm ph-fill ph-tag" aria-hidden="true"></i>Design</span>
<span class="row t-meta"><i class="icon icon-sm ph-fill ph-check-circle" style="color: var(--icon-primary)" aria-hidden="true"></i>Published</span>
```

React:
```jsx
import { Plus } from '@phosphor-icons/react';

<button className="btn"><Plus className="icon" weight="fill" aria-hidden />New project</button>
```
