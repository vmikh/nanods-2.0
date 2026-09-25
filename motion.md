# States and motion

Short, soft, physical. Things get one tone lighter under the pointer and give a little when pressed.

## Tokens
| token | value | use |
|---|---|---|
| `--dur-1` | .18 s | small colour changes |
| `--dur-2` | .22 s | **default**: background and colour of controls |
| `--dur-3` | .28 s | popovers and menus appearing |
| `--dur-4` | .32 s | modals and scrims |
| `--dur-5` | .36 s | larger panels |
| `--ease` | cubic-bezier(.2, .8, .3, 1) | appearing and moving |
| `--ease-press` | cubic-bezier(.22, 1, .36, 1) | press and hover feedback |

Every button already transitions through the base layer ([tokens.md](tokens.md)):
```css
button { transition: transform .26s var(--ease-press), background-color var(--dur-2) var(--ease-press), color var(--dur-2) var(--ease-press), filter var(--dur-2); }
```

## States
| state | rule |
|---|---|
| hover | one tone lighter: `--c-surface-2` → `--c-surface-3`, transparent → `--c-hover` (on an island) or `--c-surface-2` (in a menu), accent → `--c-accent-hover`, text `--c-fg-2` → `--c-fg` |
| press | `transform: scale(.97)`; full width list rows `scale(.98)` |
| focus (keyboard) | `outline: 2px solid var(--c-accent); outline-offset: 2px` via `:focus-visible` |
| focus (inputs) | `box-shadow: inset 0 0 0 1px var(--c-fg-4)`, no outline |
| selected in a group | light fill `--c-light` + `--c-on-light` text, weight 600 (`.seg`, `.chip.on`) |
| selected row or tab | `--c-surface-2` fill + `--c-fg` text (`.list-row.on`, `.seg-ghost .on`) |
| disabled | text `--c-fg-5`, no hover, no press, `cursor: default`; primary becomes `--c-accent-soft` with `--c-fg-4` text |

## Rules
- Animate only `transform`, `opacity`, `background-color`, `color`. Never width, height, margin or layout.
- Hover changes tone, never size, weight or shadow.
- Nothing bounces, spins or slides in from off screen. Menus and modals fade in (opacity plus a slight `scale(.98)` → `1`), using `--ease`.
- No looping or decorative animation. A loader is the only thing allowed to loop.
- Respect `prefers-reduced-motion: reduce`: drop transforms, keep short fades.
- `cursor: pointer` on everything clickable; `cursor: default` when disabled.
