# Grid

Base unit **4 px**. Every margin, padding, gap and size is a multiple of 4. Halves (2, 6, 10, 14) are allowed only for the tight insides of controls: chip gap, badge padding, small control padding.

## Spacing scale
| token | px | typical use |
|---|---|---|
| `--mp-05` | 2 | gap between list rows, between card title and subtitle |
| `--mp-1` | 4 | tight stacks (`.stack-1`), gap between ghost segments |
| `--mp-15` | 6 | menu padding, chip icon gap, badge and kbd side padding, field vertical padding |
| `--mp-2` | 8 | **default gap**: stacks, clusters, rows, button icon gap, gutter between islands |
| `--mp-25` | 10 | side padding of small controls, list rows, menu items |
| `--mp-3` | 12 | side padding of controls, gap between blocks in a section, card head to content, divider margin |
| `--mp-35` | 14 | rarely, inside controls |
| `--mp-4` | 16 | card padding, island padding on small screens, large button side padding, space above a section label |
| `--mp-5` | 20 | island padding on medium screens |
| `--mp-6` | 24 | island padding on large screens, scrim padding, gap between side by side blocks |
| `--mp-8` | 32 | select right padding (room for the arrow), spacing between large page sections |
| `--mp-10` … `--mp-20` | 40 to 80 | empty states, landing style vertical rhythm |

### Choosing a gap
- Things that belong together: 2 to 4.
- Items in a group (buttons, fields, rows): 8.
- Blocks inside a section: 12.
- Sections inside an island: 16 above the section label, 12 between label and content.
- Island edge to content: `--island-pad` (16 / 20 / 24), never less.
- Between islands: `--gutter` (8), always.

Inner spacing is always smaller than outer spacing: the gap inside a group is less than the gap between groups.

## Fixed sizes
| element | size |
|---|---|
| small control (`.btn-sm`, `.input-sm`, `.seg-sm`) | 28 high |
| control (`.btn`, `.input`, `.select`, `.seg`, `.menu-item`) | 36 high |
| large control (`.btn-lg`) | 40 high |
| list row | 44 high |
| chip | 24 high |
| badge, kbd | 20 high |
| meter | 8 high |
| checkbox | 14 × 14 |
| icon | 16 in controls, 14 in meta text |
| segment | at least 40 wide |
| field control | 160 wide |
| textarea | at least 72 high |
| menu | 232 wide |
| sidebar island | 340 wide |
| modal | `min(720px, 100%)` wide |

Controls side by side share a height. Never mix 28 and 36 in one row.

## Radii
| token | px | use |
|---|---|---|
| `--rd-line` | 2 | meters, link button focus |
| `--rd-1` | 6 | small controls, badges, kbd, focus ring |
| `--rd-2` | 10 | controls: buttons, inputs, segments, list rows, menu items |
| `--rd-3` | 14 | cards, menus |
| `--rd-4` | 18 | large media inside an island |
| `--rd-island` | 24 | islands, modals |
| `--rd-full` | 999 | chips, avatars, pills |

The bigger the container, the bigger the radius. A child never has a larger radius than its parent.

## Breakpoints
| range | `--island-pad` |
|---|---|
| below 900 px | 16 |
| 900 to 1439 px | 20 |
| 1440 px and up | 24 |

Use these two breakpoints (900, 1440) for any other responsive change too. Do not introduce new ones.

## Columns
`.grid-2` and `.grid-3` split space into equal columns with the 8 px gutter, the same as the gap between islands. Use them for side by side islands or cards.
