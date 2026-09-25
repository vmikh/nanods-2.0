# States and motion

Short, soft, physical. Things move one tone step under the pointer and give a little when pressed.

## Theory
- **Hover changes tone** by one step (lighter in the dark theme, darker in the light theme; the tokens handle it), never size, weight or shadow.
- **Press gives a little:** `scale(.97)`, full width rows `scale(.98)`.
- **Focus is visible only from the keyboard:** a 2 px ring of the primary tone via `:focus-visible`. Inputs show focus with an inset grey ring instead.
- **Selection** in a group is the inverse fill (`--bg-inverse`), selection of a row or tab is `--bg-2`.
- **Animate only** `transform`, `opacity`, `background-color`, `color`. Never width, height, margin or anything that moves layout.
- **Nothing bounces, spins or slides in from off screen.** Menus and modals fade in with a slight `scale(.98)` → `1` on `--ease`.
- **No looping or decorative animation.** A loader is the only thing allowed to loop.
- **Respect `prefers-reduced-motion`:** drop transforms, keep short fades.
- `cursor: pointer` on everything clickable, `cursor: default` when disabled.

## States
| state | rule |
|---|---|
| hover | one tone step: `--bg-2` → `--bg-3`, transparent → `--bg-ghost-hover` (on an island) or `--bg-2` (in a menu), `--bg-accent` → `--bg-accent-hover`, text secondary → primary |
| press | `transform: scale(.97)`; list rows `scale(.98)` |
| focus, keyboard | `outline: 2px solid var(--line-focus); outline-offset: 2px` |
| focus, input | `box-shadow: inset 0 0 0 1px var(--line-input-focus)`, no outline |
| selected in a group | `--bg-inverse` + `--text-on-inverse`, weight 600 (`.seg .on`, `.chip.on`) |
| selected row or tab | `--bg-2` + `--text-primary` (`.list-row.on`, `.seg-ghost .on`) |
| disabled | `--text-disabled`, no hover, no press, `cursor: default`; primary becomes `--bg-accent-soft` with `--text-muted` |

## Timing
| token | value | use |
|---|---|---|
| `--dur-1` | .18 s | small colour changes |
| `--dur-2` | .22 s | **default**: background and colour of controls |
| `--dur-3` | .28 s | menus and popovers appearing, press release |
| `--dur-4` | .32 s | modals and scrims |
| `--dur-5` | .36 s | larger panels |
| `--ease` | cubic-bezier(.2, .8, .3, 1) | appearing and moving |
| `--ease-press` | cubic-bezier(.22, 1, .36, 1) | press and hover feedback |

## CSS
```css
:root {
  --dur-1: .18s; --dur-2: .22s; --dur-3: .28s; --dur-4: .32s; --dur-5: .36s;
  --ease: cubic-bezier(.2, .8, .3, 1);
  --ease-press: cubic-bezier(.22, 1, .36, 1);
}

button { transition: transform var(--dur-3) var(--ease-press), background-color var(--dur-2) var(--ease-press), color var(--dur-2) var(--ease-press); }
:focus-visible { outline: 2px solid var(--line-focus); outline-offset: 2px; border-radius: var(--radius-sm); }

.menu, .modal { animation: pop-in var(--dur-3) var(--ease); }
@keyframes pop-in { from { opacity: 0; transform: scale(.98); } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-property: opacity, background-color, color !important; animation: none !important; }
}
```

## Practice
```css
/* right */
.tile { background: var(--bg-2); transition: background-color var(--dur-2) var(--ease-press); }
.tile:hover { background: var(--bg-3); }
.tile:active { transform: scale(.97); }

/* wrong: grows, casts a shadow, animates layout */
.tile:hover { transform: scale(1.05); box-shadow: 0 8px 24px #000; margin-top: -4px; }
```
