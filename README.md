# nanods 2.0

A design system written as documentation for AI. Give these files to a model before it builds any interface; they are the source of truth.

The look: a canvas with content in rounded **islands**, dark and light themes, no outlines, hierarchy by surface tone, monochrome: one grey scale from white to black, no hues, the system font (SF Pro), 4 px grid, 14 px UI text.

## How it is built
Every file explains the theory first, then gives the CSS and HTML. Values flow in three levels:

```
grid.md + palette.md     raw values     --space-12, --gray-800, --gray-50
        ↓
tokens.md                roles          --radius-md, --bg-2, --text-secondary
        ↓
components.md            UI             .btn { background: var(--bg-2); }
```

Components use tokens and `--space-*` only. Never the palette, never a raw hex or px.

## Files
Read them in this order. To assemble the stylesheet, copy the CSS blocks in the same order.

| file | what it covers |
|---|---|
| [grid.md](grid.md) | 4 px step, how the scale grows, `--space-*` |
| [palette.md](palette.md) | one grey scale from white to black, `--gray-0` … `--gray-1000` |
| [tokens.md](tokens.md) | roles: radius, size, background levels, text, icon, line, effects; dark and light values |
| [themes.md](themes.md) | dark and light themes: how they differ, switching, rules |
| [typography.md](typography.md) | system font stack (SF Pro), type scale, text classes |
| [motion.md](motion.md) | states (hover, press, focus, selected, disabled) and timing |
| [icons.md](icons.md) | Phosphor, Fill weight, sizes, colour |
| [layout.md](layout.md) | page base, shell, islands, cards, flow utilities, recipes |
| [components.md](components.md) | button, segmented, inputs, field, chip, badge, kbd, list, menu, modal, meter, audio player |
| [text.md](text.md) | editorial policy: case, dashes, non-breaking spaces |

## Core principles
1. **Canvas and islands.** The page is `--bg-0`. All content lives in islands (`--bg-1`, radius 24) separated by 8 px gutters.
2. **Surfaces, not borders.** Hierarchy comes from background levels: `--bg-0`, `--bg-1`, `--bg-2`, `--bg-3`. The only lines are 1 px dividers and the focus ring.
3. **Monochrome.** No hues at all. The highest contrast tone does the pointing: the primary button is an inverted fill, focus is a ring of the primary tone, links are underlined. One primary button per view or modal. Status is words and icon shapes, never colour.
4. **Three levels.** Grid and palette hold raw values, tokens give them roles, components use tokens.
5. **Two themes, one structure.** Dark by default, light on request or by system setting. Only colour tokens change; components never know which theme is on.
6. **Everything on the grid.** Every size is a step of 4 px, halves only below 16.
7. **Quiet type.** System font (SF Pro), 500 by default, 600 for headings and emphasis. 14 px for the interface, 15 to 16 for reading.
8. **No uppercase, no long dashes.** Sentence case everywhere. See [text.md](text.md).
9. **Flat.** No shadows except on menus, popovers and floating players, no gradients except the island scroll fade.

## Checklist before you ship
- [ ] Page is `--bg-0`, content is inside `.island` blocks, gutters are 8 px.
- [ ] No `border` except `.divider` and `.menu-sep`. No outlines except `:focus-visible`.
- [ ] No hue anywhere: every colour comes from the grey scale through tokens. At most one `.btn-primary` per view.
- [ ] Component CSS references tokens and `--space-*` only: no `--gray-*`, no hex, no raw px.
- [ ] Every size is on the 4 px grid; controls are 28, 36 or 40 high; rows are 44.
- [ ] Font is `var(--font)` (the system stack, no web fonts), weight 500 or 600. No weight 400.
- [ ] No uppercase, no `text-transform`, no em dashes in copy, non-breaking spaces after Russian prepositions.
- [ ] Icons are Phosphor Fill, 16 in controls, 14 in meta, `currentColor`.
- [ ] Checked in both themes; no theme specific overrides in component CSS.
- [ ] Hover is one tone step, press is `scale(.97)`, focus is the ring.
