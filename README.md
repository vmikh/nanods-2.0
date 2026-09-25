# nanods 2.0

A design system written as documentation for AI. Give these files to a model before it builds any interface; they are the source of truth. Every value is in [tokens.md](tokens.md), every rule is in the file for its topic.

The look: a dark canvas, content in rounded **islands**, no outlines, hierarchy by surface tone, one lime accent, Onest typeface, 4 px grid, 14 px UI text.

## Files
Read them in this order.

| file | what it covers |
|---|---|
| [tokens.md](tokens.md) | the complete `:root` block and base layer. Paste it first, use only these variables |
| [palette.md](palette.md) | colour roles, surface layering, accent and status rules |
| [typography.md](typography.md) | Onest, type scale, text classes, weights |
| [grid.md](grid.md) | 4 px grid, spacing scale, fixed sizes, breakpoints |
| [layout.md](layout.md) | shell, islands, cards, flow utilities, page recipes |
| [components.md](components.md) | button, segmented, inputs, field, chip, badge, kbd, list, menu, modal, meter |
| [motion.md](motion.md) | states (hover, press, focus, selected, disabled) and timing |
| [icons.md](icons.md) | Phosphor Fill, sizes, colour |
| [text.md](text.md) | editorial policy: case, dashes, non-breaking spaces |

## Core principles
1. **Canvas and islands.** The page background is `--c-bg`. All content lives in islands (`--c-island`, radius 24) separated by 8 px gutters. Nothing sits directly on the canvas.
2. **Surfaces, not borders.** Never outline a card, input or button. Hierarchy comes from surface tone: canvas, island, surface, surface-2. The only lines allowed are 1 px `--c-line` dividers and the focus ring.
3. **One accent.** Lime `--c-accent` points at the main thing: the primary button, links, focus, progress. One primary button per view or modal. Never use the accent for decoration, backgrounds or large fills.
4. **Tokens only.** No raw hex, px or ms in component code. If a value is missing from [tokens.md](tokens.md), the design is wrong, not the token list.
5. **4 px grid.** Every spacing and size is a multiple of 4, halves (2, 6, 10, 14) only for tight insides of controls.
6. **Quiet type.** Onest at 500 by default, 600 for headings and emphasis. 14 px is the UI size; 15 to 16 px only for reading text.
7. **No uppercase, no long dashes.** Sentence case everywhere. See [text.md](text.md).
8. **Flat.** No shadows except on popovers (`--shadow-pop`), no gradients except the scroll fade on islands.

## Checklist before you ship
- [ ] Page background is `--c-bg`, content is inside `.island` blocks, gutters are 8 px.
- [ ] No `border` on anything except `.divider` / `.menu-sep`. No outlines except `:focus-visible`.
- [ ] At most one `.btn-primary` per view. Accent appears only on primary actions, links, focus, progress, selected accents.
- [ ] Every colour, size, radius and duration is a `var(--…)` from [tokens.md](tokens.md).
- [ ] All spacing is on the 4 px grid; controls are 28, 36 or 40 px high; rows are 44.
- [ ] Font is Onest, weight 500 or 600 (700 only for rare display numbers). No weight 400.
- [ ] No uppercase text, no `text-transform`, no em dashes in copy, non-breaking spaces after Russian prepositions.
- [ ] Icons are Phosphor, Fill weight only, 16 px in controls, 14 px in meta, `currentColor`.
- [ ] Hover is one tone lighter, press is `scale(.97)`, focus is the lime ring.
