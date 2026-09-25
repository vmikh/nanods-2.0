# nanods 2.0

Design system extracted from the Studio design: a dark canvas, content in rounded **islands**, no outlines, hierarchy by surface tone, one lime accent, Onest typeface, 4 px grid. Plain CSS, no build step.

```html
<link rel="stylesheet" href="nanods.css">
```
or `@import "nanods/nanods.css"` from a bundler (fonts resolve relative to `css/fonts.css`).

## Files
- `css/tokens.css` — spacing `--mp-*` (4 px grid), radii `--rd-*` (island = 24 px), motion `--dur-*` / `--ease`, palette `--c-*`, type scale `--fs-*`, control heights.
- `css/fonts.css` + `fonts/` — Onest variable 500–700, split by script.
- `css/base.css` — reset, body, focus ring, typography classes `.t-h1 … .t-label`, colour utilities.
- `css/layout.css` — `.shell` (page = islands with 8 px gutters), `.island`, `.card`, `.stack` / `.cluster` / `.row` / `.grid-*`.
- `css/components.css` — `.btn` (+ `-primary -light -ghost -soft -glass -link -dashed`, sizes `-sm -lg`, `-icon -round -block`), `.seg` segmented control, `.input` / `.select` / `.textarea` / `.field` / `.check`, `.chip` / `.badge` / `.kbd`, `.list-row`, `.menu`, `.scrim` + `.modal`, `.glassbar`, `.meter`, `.icon`.
- `icons/nanods-icons.svg` — sprite of the Studio icons; inline it once and use `<svg class="icon"><use href="#i-play"/></svg>`.
- `demo/index.html` — everything on one page.

## Palette
| token | value | use |
|---|---|---|
| `--c-bg` | #0A0B0E | page canvas |
| `--c-island` | #171A21 | islands, modals |
| `--c-surface` | #1F232C | menus, cards on islands |
| `--c-surface-2` | #232830 | soft buttons, inputs, chips |
| `--c-fg` / `-2` / `-3` / `-4` | #F2F4F7 / #A0A7B4 / #8A92A0 / #6B7280 | text levels |
| `--c-accent` | #D2FF3A | the one accent, links, primary |
| `--c-light` | #F2F4F7 | inverted (light) buttons, selected segment |
| `--c-danger` | #FF8A9B | destructive hover |

## Rules of thumb
- Surfaces, not borders. Islands on the canvas, `--c-surface-2` controls on islands, `--c-surface` popovers above.
- Press feedback is `transform: scale(.97)`; hover is one tone lighter.
- Radii: controls 10 px, cards 14 px, islands 24 px, pills full.
- Text: 13 px UI default, 12 px meta, 11 px captions, 14–15 px reading.
