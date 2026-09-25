# Palette

Dark only. Hierarchy comes from surface tone, not from borders or shadows. One accent: lime.

## Surfaces, darkest to lightest
| token | value | use |
|---|---|---|
| `--c-bg-deep` | #06070A | video wells, the deepest wells |
| `--c-bg` | #0A0B0E | page canvas, the gaps between islands |
| `--c-island` | #171A21 | islands, modals |
| `--c-hover` | #181B22 | ghost hover on an island (list rows) |
| `--c-surface` | #1F232C | menus, popovers |
| `--c-surface-2` | #232830 | cards on islands, secondary buttons, inputs, selects, chips, badges, kbd, selected list row, meter track |
| `--c-surface-3` | #2A2F39 | hover of anything on `--c-surface-2` |
| `--c-line` | #1A1E26 | 1 px hairline dividers |
| `--c-line-2` | #3A404C | dashed drop zones, the only stronger outline |

### Layering
```
--c-bg        canvas
└ --c-island   island or modal
  ├ --c-surface-2   card, button, input, chip (hover: --c-surface-3)
  └ --c-surface     menu or popover, with --shadow-pop
    └ --c-surface-2   hovered menu item
```
- Each layer is one step lighter than the one it sits on. Never place a surface on a lighter surface.
- A card is `--c-surface-2`, the same tone as inputs and buttons. So a card holds content (text, meters, lists), not form controls: put forms straight on the island with `.field` rows.
- Ghost elements (list rows, ghost segments) are transparent at rest and turn `--c-hover` on hover, `--c-surface-2` when selected.

## Text
| token | value | use |
|---|---|---|
| `--c-fg` | #F2F4F7 | primary text, headings, active items |
| `--c-fg-2` | #A0A7B4 | secondary text, descriptions, resting list rows and menu items, unselected segments |
| `--c-fg-3` | #8A92A0 | icons at rest, badge text, kbd |
| `--c-fg-4` | #6B7280 | muted: meta, captions, section labels, hints, card subtitles |
| `--c-fg-5` | #4B515C | disabled text |
| `--c-on-light` | #0A0B0E | text on `--c-accent` and `--c-light` fills |

Placeholders are `rgba(160, 167, 180, .42)`.

- Two or three text levels per block, not all five. Title `--c-fg`, body `--c-fg-2`, meta `--c-fg-4` is the usual set.
- Hover and selection raise text one level: `--c-fg-2` becomes `--c-fg`.
- Never put `--c-fg-4` or `--c-fg-5` text on `--c-surface-3`: too little contrast.

## Accent
| token | value | use |
|---|---|---|
| `--c-accent` | #D2FF3A | primary button, links, focus ring, meter fill, checkbox and range, `.badge-accent` |
| `--c-accent-hover` | #E4FF7A | hover of the above |
| `--c-accent-soft` | lime at 14 % | `.chip-accent` background, disabled primary button |

- One accent, used for pointing. It marks the main action and interactive text, nothing else.
- One `.btn-primary` per view, per modal, per form.
- No accent backgrounds on islands, cards or sections. No accent headings. No accent icons for decoration.
- Text on a lime fill is always `--c-on-light`.

## Light (inverted) fill
`--c-light` #F2F4F7 with `--c-on-light` text marks **selection** in a group: the selected segment in `.seg`, the selected `.chip.on`. It is not a button style. Hover: `--c-light-hover` #FFFFFF.

## Status
| token | value | use |
|---|---|---|
| `--c-ok` | #4CC9A4 | success: `.badge-ok`, `.meter-ok`, `.c-ok` text |
| `--c-warn` | #D9B04A | warning text `.c-warn` |
| `--c-danger` | #FF8A9B | destructive or error: `.badge-danger`, `.c-danger` text |

- Status colours go on text, small badges and meter fills. Never as large backgrounds.
- Status is never shown by colour alone: pair it with a word or an icon.
- Destructive buttons stay `.btn` (secondary) with `--c-danger` text; the confirmation is a modal.

## Glass and overlay
| token | value | use |
|---|---|---|
| `--c-scrim` | rgba(10, 11, 14, .84) | modal scrim, with `backdrop-filter: blur(4px)` |
| `--c-scrim-strong` | rgba(6, 7, 10, .6) | overlays over media |
| `--c-glass` / `--c-glass-hover` | light at 22 % / 16 % | controls floating over media |
| `--c-glass-dark` | dark at 55 % | captions and chips over media |
| `--shadow-pop` | 0 12px 32px rgba(0,0,0,.4) | menus and popovers only |
| `--blur` | blur(14px) | backdrop of glass controls |

Glass is only for things floating over images and video. On islands, use solid surfaces.

## Utility classes
```css
.c-fg { color: var(--c-fg); } .c-fg-2 { color: var(--c-fg-2); } .c-fg-3 { color: var(--c-fg-3); } .c-fg-4 { color: var(--c-fg-4); }
.c-accent { color: var(--c-accent); } .c-danger { color: var(--c-danger); } .c-ok { color: var(--c-ok); } .c-warn { color: var(--c-warn); }
```
