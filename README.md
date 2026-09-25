# nanods 2.0

A dark island UI: the page is a canvas, content lives in rounded **islands**, no outlines, hierarchy by surface tone, one accent, Onest typeface, 4 px grid, 14 px UI text. Plain CSS, no build step.

```html
<link rel="stylesheet" href="nanods.css">
```
or `@import "nanods/nanods.css"` from a bundler (fonts resolve relative to `css/fonts.css`).

## Files
- `css/tokens.css` — spacing `--mp-*` (4 px grid), radii `--rd-*` (island = 24 px), motion `--dur-*` / `--ease`, palette `--c-*`, type scale `--fs-*`, control heights, `--island-pad`.
- `css/fonts.css` + `fonts/` — Onest variable 500–700, split by script.
- `css/base.css` — reset, body, focus ring, typography classes `.t-h1 … .t-label`, colour utilities.
- `css/layout.css` — `.shell` (islands with 8 px gutters), `.island` + `.island-pad`, `.card` (+ `.card-head > .card-title / .card-sub`), `.stack` / `.cluster` / `.row` / `.grid-*`.
- `css/components.css` — Button, Segmented, Input / Select / Textarea / Field / Check, Chip / Badge / Kbd, List row, Menu, Scrim + Modal, Meter.
- `demo/index.html` — everything on one page. `scripts/shot.mjs` screenshots a URL with headless Chrome.

## Components
| component | classes |
|---|---|
| Button | `.btn` (secondary, default) · `.btn-primary` · `.btn-link` (inline text link) · sizes `.btn-sm` 28 / default 36 / `.btn-lg` 40 · `.btn-block` |
| Segmented | `.seg > button.on` (same height, radius and type as `.btn`; selected item touches the edges) · `.seg-sm` · `.seg-ghost` |
| Input / Select / Textarea | `.input` · `.select` · `.textarea` · `-sm` sizes · `.field > .label > .hint` · `.check` · `.range` |
| Chip / Badge / Kbd | `.chip` (`.on`, `.chip-accent`) · `.badge` (`-ok -danger -accent`) · `.kbd` |
| List row | `.list > .list-row` (`.on`, `.title`, `.meta`) |
| Menu | `.menu > .menu-head / .menu-item / .menu-sep` |
| Modal | `.scrim > .modal > .modal-head` |
| Meter | `.meter > i` (`.meter-ok`, `.meter-fg`) |

## Islands
`.island` is the content container (background `--c-island`, radius 24). Inner padding is adaptive through `--island-pad`: **16 px** on small screens, **20 px** from 900 px, **24 px** from 1440 px. Use `.island-pad` for the adaptive value or `.island-pad-s / -m / -l` to pin one.

## Palette
| token | value | use |
|---|---|---|
| `--c-bg` | #0A0B0E | page canvas |
| `--c-island` | #171A21 | islands, modals |
| `--c-surface` | #1F232C | menus, popovers |
| `--c-surface-2` | #232830 | cards on islands, inputs, secondary buttons, chips |
| `--c-fg` / `-2` / `-3` / `-4` | #F2F4F7 / #A0A7B4 / #8A92A0 / #6B7280 | text levels |
| `--c-accent` | #D2FF3A | the one accent: primary button, links |
| `--c-light` | #F2F4F7 | selected segment |
| `--c-danger` | #FF8A9B | destructive states |

## Icons
The system ships no icons. Use **Lucide** (`lucide.dev`, ISC): 24 px grid, 1.5–2 px stroke, `currentColor`; render at 16 px inside controls and 14 px in meta text, coloured `--c-fg-3` at rest and inheriting on hover.

## Text rules
- No uppercase unless it is genuinely needed. Section labels in the UI are the one allowed place (`.t-label`); headings, buttons and body text stay in sentence case.
- No long dashes in copy. Use a comma, a colon or a new sentence instead; a short hyphen only inside words.
- In Russian, a non-breaking space between a preposition and the word after it (`в проекте`, `на странице`, `с нуля`), so a preposition never ends a line.

## Rules of thumb
- Surfaces, not borders. Islands on the canvas, `--c-surface-2` controls on islands, `--c-surface` popovers above.
- Press feedback is `transform: scale(.97)`; hover is one tone lighter.
- Radii: controls 10 px, cards 14 px, islands 24 px, pills full.
- Text: 14 px UI default, 13 px meta, 12 px captions, 15–16 px reading.
