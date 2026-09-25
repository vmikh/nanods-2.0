# Icons

The system ships no icons. Use **Phosphor** ([phosphoricons.com](https://phosphoricons.com), MIT license), **Fill weight only**. No other icon set, no other Phosphor weight (thin, light, regular, bold, duotone), no emoji as icons, no hand drawn SVGs.

## Loading
Web font (plain HTML):
```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">

<i class="ph-fill ph-plus" aria-hidden="true"></i>
```

React:
```jsx
import { Plus } from '@phosphor-icons/react';

<Plus size={16} weight="fill" aria-hidden />
```
Set `weight="fill"` once through `IconContext.Provider value={{ weight: 'fill' }}` at the app root.

Inline SVG: copy the **Fill** variant from phosphoricons.com. It is a `viewBox="0 0 256 256"` path with `fill="currentColor"`.

Find names on phosphoricons.com. Use the icon that matches the meaning, not a look-alike: `trash` for delete, `pencil-simple` for edit, `magnifying-glass` for search, `gear-six` for settings, `x` for close, `caret-down` for dropdowns.

## Specs
| where | size |
|---|---|
| inside controls: buttons, inputs, list rows, menu items, segments | 16 px |
| in meta text, chips, badges | 14 px |
| empty states, large spots | 24 px, at most 32 |

- Web font icons are sized with `font-size`, SVG and React with `width`/`height` or `size`.
- Colour is always `currentColor`: the icon takes the text colour of its parent.
- At rest icons are `--c-fg-3`; on hover they inherit the parent's hover colour. Inside `.btn-primary` they are `--c-on-light`, inside `.seg .on` and `.chip.on` they are `--c-on-light` too.
- Gap between icon and label follows the component: 8 in buttons and list rows, 10 in menu items, 6 in chips.
- Icon only buttons are square (28, 36 or 40, `padding: 0`) with `aria-label`. Decorative icons get `aria-hidden="true"`.
- One icon per control. Do not decorate every row and heading with icons; use them where they speed up recognition.
- Never colour an icon with the accent just to make it pop. Status icons take the status colour (`.c-ok`, `.c-warn`, `.c-danger`) and always sit next to a word.
- Fill icons are heavy: keep them small and muted, so labels stay the main thing.

```html
<button class="btn"><i class="ph-fill ph-plus" style="font-size: 16px" aria-hidden="true"></i>New project</button>
<button class="btn" style="width: 36px; padding: 0" aria-label="Settings"><i class="ph-fill ph-gear-six" style="font-size: 16px"></i></button>
```
