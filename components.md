# Components

Borderless: hierarchy comes from surface tone, not outlines. Copy the CSS as is; it uses only [tokens](tokens.md). States and timing are in [motion.md](motion.md), icons in [icons.md](icons.md).

| component | classes |
|---|---|
| Button | `.btn` (secondary, default) · `.btn-primary` · `.btn-link` · `.btn-sm` 28 / default 36 / `.btn-lg` 40 · `.btn-block` |
| Segmented | `.seg > button.on` · `.seg-sm` · `.seg-ghost` |
| Input, Select, Textarea | `.input` · `.select` · `.textarea` · `.input-sm` · `.select-sm` · `.textarea-bare` |
| Field | `.field > .label > .hint` + control · `.check` · `.range` |
| Chip, Badge, Kbd | `.chip` (`.on`, `.chip-accent`) · `.badge` (`-ok`, `-danger`, `-accent`) · `.kbd` |
| List | `.list > .list-row` (`.on`, `.title`, `.meta`) |
| Menu | `.menu > .menu-head / .menu-item / .menu-sep` |
| Modal | `.scrim > .modal > .modal-head` |
| Meter | `.meter > i` (`.meter-ok`, `.meter-fg`) |

Do not invent components that are not here. Compose from these, the layout classes and the text classes.

---

## Button
Secondary (`.btn`) is the default. Primary (`.btn-primary`, lime) is the one main action of a view. `.btn-link` is an inline text link that behaves like a button.

```css
.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--mp-2); height: var(--h-control); padding: 0 var(--mp-3);
  border: 0; border-radius: var(--rd-2); background: var(--c-surface-2); color: var(--c-fg); font-size: var(--fs-ui); font-weight: var(--fw-medium);
  cursor: pointer; white-space: nowrap; user-select: none; }
.btn:hover { background: var(--c-surface-3); } .btn:active { transform: scale(.97); }
.btn:disabled { color: var(--c-fg-5); cursor: default; transform: none; background: var(--c-surface-2); }
.btn-primary { background: var(--c-accent); color: var(--c-on-light); font-weight: var(--fw-semibold); } .btn-primary:hover { background: var(--c-accent-hover); }
.btn-primary:disabled { background: var(--c-accent-soft); color: var(--c-fg-4); }
.btn-link { background: transparent; padding: 0; height: auto; color: var(--c-accent); border-radius: var(--rd-line); } .btn-link:hover { background: transparent; color: var(--c-accent-hover); }
.btn-sm { height: var(--h-control-sm); padding: 0 var(--mp-25); font-size: var(--fs-meta); border-radius: var(--rd-1); }
.btn-lg { height: var(--h-control-lg); padding: 0 var(--mp-4); font-size: var(--fs-body); }
.btn-block { width: 100%; }
```

```html
<div class="cluster">
  <button class="btn">Cancel</button>
  <button class="btn btn-primary">Save</button>
</div>
```

| size | height | padding | text | radius |
|---|---|---|---|---|
| `.btn-sm` | 28 | 10 | 13 | 6 |
| default | 36 | 12 | 14 | 10 |
| `.btn-lg` | 40 | 16 | 15 | 10 |

- One `.btn-primary` per view, modal or form. Everything else is `.btn`.
- In a pair, secondary comes first, primary last (on the right).
- Label is a short verb in sentence case: "Save", "Create project". No trailing period, no uppercase.
- Icon plus label: icon 16 px before the text, 8 px gap. Icon only: make it square (`width` equal to height, `padding: 0`) and give it `aria-label`.
- Default size is 36. Use 28 in dense toolbars, list rows and menus; 40 for the single main action of a page or a modal footer.
- `.btn-block` for full width buttons in narrow islands and modals.
- No outlined, ghost bordered or danger filled buttons.

## Segmented
A choice of 2 to 5 options. Same height, radius and type as `.btn`. The selected item is a light fill that touches the edges.

```css
.seg { display: inline-flex; padding: 0; gap: 0; background: var(--c-surface-2); border-radius: var(--rd-2); overflow: hidden; }
.seg > button { height: var(--h-control); min-width: 40px; padding: 0 var(--mp-3); border: 0; border-radius: var(--rd-2); background: transparent; color: var(--c-fg-2); font-size: var(--fs-ui); font-weight: var(--fw-medium); cursor: pointer; }
.seg > button:hover { color: var(--c-fg); } .seg > button:active { transform: scale(.97); }
.seg > button.on, .seg > button[aria-pressed="true"] { background: var(--c-light); color: var(--c-on-light); font-weight: var(--fw-semibold); }
.seg-sm > button { height: var(--h-control-sm); padding: 0 var(--mp-25); font-size: var(--fs-meta); border-radius: var(--rd-1); } .seg-sm { border-radius: var(--rd-1); }
.seg-ghost { background: transparent; gap: var(--mp-1); overflow: visible; } .seg-ghost > button.on { background: var(--c-surface-2); color: var(--c-fg); }
```

```html
<div class="seg"><button class="on" aria-pressed="true">Day</button><button>Week</button><button>Month</button></div>
<div class="seg seg-ghost"><button class="on">Overview</button><button>Activity</button></div>
```

- `.seg` switches a value or a view (filter, period, mode). Exactly one item is selected.
- `.seg-ghost` is for tabs across the top of an island: quieter, no track.
- More than 5 options: use a `.select`.

## Input, Select, Textarea
Filled `--c-surface-2`, no border. Focus is an inset 1 px ring in `--c-fg-4`.

```css
.input, .select, .textarea { width: 100%; height: var(--h-control); padding: 0 var(--mp-3); border: 0; border-radius: var(--rd-2); background: var(--c-surface-2); color: var(--c-fg); font-size: var(--fs-ui); outline: 0; }
.input:hover, .select:hover, .textarea:hover { background-color: var(--c-surface-3); }
.input:focus, .select:focus, .textarea:focus { box-shadow: inset 0 0 0 1px var(--c-fg-4); }
.input-sm, .select-sm { height: var(--h-control-sm); padding: 0 var(--mp-2); font-size: var(--fs-meta); border-radius: var(--rd-1); }
.textarea { height: auto; min-height: 72px; padding: var(--mp-25) var(--mp-3); line-height: 24px; font-size: var(--fs-lg); resize: none; }
.textarea-bare { background: transparent; padding: var(--mp-05) 0; border-radius: 0; } .textarea-bare:hover, .textarea-bare:focus { background: transparent; box-shadow: none; }
.select { appearance: none; -webkit-appearance: none; padding-right: var(--mp-8); cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238A92A0'><path d='M7.4 9.3a1 1 0 0 1 1.4 0l3.2 3.2 3.2-3.2a1 1 0 1 1 1.4 1.4l-3.9 3.9a1 1 0 0 1-1.4 0L7.4 10.7a1 1 0 0 1 0-1.4z'/></svg>");
  background-repeat: no-repeat; background-position: right var(--mp-25) center; background-size: 16px; }
.select option { background: var(--c-surface); color: var(--c-fg); }
input[type="number"].input { -moz-appearance: textfield; } input[type="number"].input::-webkit-outer-spin-button, input[type="number"].input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
```

- Inputs are full width by default; in a `.field` they are 160 px.
- Use `background-color` (not the `background` shorthand) for select hover, or the arrow disappears.
- Textarea is 16 px text on 24 px lines, for writing. `.textarea-bare` is an invisible textarea for composer style input on an island.
- Placeholder is an example or a hint, never the only label.
- Number inputs hide spinners.

## Field
A settings row: label (and optional hint) on the left, control on the right.

```css
.field { display: grid; grid-template-columns: 1fr auto; gap: var(--mp-2) var(--mp-3); align-items: center; padding: var(--mp-15) 0; }
.field > .label { font-size: var(--fs-ui); color: var(--c-fg); } .field > .label .hint { display: block; font-size: var(--fs-sm); color: var(--c-fg-4); line-height: 1.4; margin-top: 2px; font-weight: var(--fw-medium); }
.field > .input, .field > .select { width: 160px; }
.check { display: inline-flex; align-items: center; gap: var(--mp-2); cursor: pointer; font-size: var(--fs-ui); color: var(--c-fg-2); } .check input { accent-color: var(--c-accent); width: 14px; height: 14px; margin: 0; }
.range { width: 100%; accent-color: var(--c-accent); }
```

```html
<div class="stack stack-1">
  <div class="field"><label class="label">Frame rate<span class="hint">Higher is smoother</span></label><select class="select"><option>30</option><option>60</option></select></div>
  <div class="field"><label class="label">Autoplay</label><label class="check"><input type="checkbox" checked> Enabled</label></div>
</div>
```

- Fields stack with `.stack-1`, straight on the island, not inside a card.
- The hint is one short line in `--c-fg-4`.
- Checkbox and range use the native control tinted with the accent.

## Chip, Badge, Kbd
```css
.chip { display: inline-flex; align-items: center; gap: var(--mp-15); height: 24px; padding: 0 var(--mp-25); border-radius: var(--rd-full); background: var(--c-surface-2); color: var(--c-fg-2); font-size: var(--fs-meta); white-space: nowrap; }
.chip.on { background: var(--c-light); color: var(--c-on-light); } .chip-accent { background: var(--c-accent-soft); color: var(--c-accent); }
.badge { display: inline-flex; align-items: center; height: 20px; padding: 0 var(--mp-15); border-radius: var(--rd-1); background: var(--c-surface-2); color: var(--c-fg-3); font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: .02em; }
.badge-danger { color: var(--c-danger); } .badge-ok { color: var(--c-ok); } .badge-accent { background: var(--c-accent); color: var(--c-on-light); }
.kbd { display: inline-block; padding: 0 var(--mp-15); border-radius: var(--rd-1); background: var(--c-surface-2); color: var(--c-fg-3); font-family: var(--font-mono); font-size: var(--fs-sm); line-height: 20px; }
```

- **Chip** (pill, 24): a tag or a filter. `.chip.on` is a selected filter. `.chip-accent` highlights one tag. Icons in chips are 14 px.
- **Badge** (rounded square, 20): a status or a count next to a title. One or two words. `.badge-accent` for "new", sparingly.
- **Kbd**: a keyboard shortcut, "Esc", "⌘K".

## List
Navigation and selectable rows. Ghost at rest, filled when selected.

```css
.list { display: flex; flex-direction: column; gap: var(--mp-05); }
.list-row { display: flex; align-items: center; gap: var(--mp-2); height: var(--h-row); padding: 0 var(--mp-25); border: 0; border-radius: var(--rd-2); background: transparent; color: var(--c-fg-2); text-align: left; cursor: pointer; width: 100%; overflow: hidden; white-space: nowrap; }
.list-row:hover { background: var(--c-hover); color: var(--c-fg); } .list-row:active { transform: scale(.98); }
.list-row.on { background: var(--c-surface-2); color: var(--c-fg); }
.list-row .title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.list-row .meta { font-size: var(--fs-meta); color: var(--c-fg-4); }
```

```html
<div class="list">
  <button class="list-row on"><span class="title">Inbox</span><span class="meta t-num">12</span></button>
  <button class="list-row"><span class="title">Archive</span></button>
</div>
```

- Rows are 44 high, single line; the title truncates.
- Leading icon 16 px, trailing `.meta` for counts or dates.
- No dividers between rows: the 2 px gap and hover do the separating.
- Inside an island with `.island-pad`, the row's own 10 px padding lines its text up with a heading given `padding: 0 var(--mp-25)`.

## Menu
A popover: the only component with a shadow.

```css
.menu { position: absolute; z-index: 5; width: 232px; padding: var(--mp-15); background: var(--c-surface); border-radius: var(--rd-3); box-shadow: var(--shadow-pop); color: var(--c-fg); font-size: var(--fs-body); display: flex; flex-direction: column; }
.menu-item { display: flex; align-items: center; gap: var(--mp-25); height: 36px; padding: 0 var(--mp-25); border: 0; border-radius: var(--rd-2); background: transparent; color: var(--c-fg-2); text-align: left; cursor: pointer; }
.menu-item:hover { background: var(--c-surface-2); color: var(--c-fg); } .menu-item:active { transform: scale(.97); }
.menu-head { padding: var(--mp-2) var(--mp-25) var(--mp-25); font-size: var(--fs-meta); color: var(--c-fg-2); }
.menu-sep { border: 0; border-top: 1px solid var(--c-line); margin: var(--mp-15) 0; }
```

```html
<div class="menu">
  <button class="menu-item">Rename</button>
  <button class="menu-item">Duplicate</button>
  <hr class="menu-sep">
  <button class="menu-item c-danger">Delete</button>
</div>
```

- Anchored to its trigger, 4 to 8 px away. Closes on outside click and Esc.
- `.menu-sep` splits groups; destructive items go last, after a separator.

## Modal
```css
.scrim { position: fixed; inset: 0; z-index: 20; background: var(--c-scrim); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; padding: var(--mp-6); }
.modal { width: min(720px, 100%); max-height: 100%; overflow: auto; background: var(--c-island); border-radius: var(--rd-island); padding: var(--island-pad); font-size: var(--fs-body); line-height: var(--lh-body); }
.modal-head { display: flex; align-items: center; justify-content: space-between; gap: var(--mp-3); margin-bottom: var(--mp-3); }
```

```html
<div class="scrim">
  <div class="modal" role="dialog" aria-modal="true" style="width: min(440px, 100%)">
    <div class="modal-head"><span class="t-h3">Delete project</span><button class="btn btn-sm">Close</button></div>
    <p class="c-fg-2">This removes the project and its files.</p>
    <div class="cluster" style="justify-content: flex-end; margin-top: var(--mp-6)">
      <button class="btn">Cancel</button><button class="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
```

- A modal is an island: same tone, radius 24, adaptive padding.
- Title is `.t-h3`, body is 15 px in `--c-fg-2`, actions at the bottom right.
- Narrow it with an inline `width` for confirmations (360 to 480); 720 is the maximum.
- Closes on Esc and scrim click.

## Meter
```css
.meter { height: 8px; border-radius: var(--rd-line); background: var(--c-surface-2); overflow: hidden; } .meter > i { display: block; height: 100%; background: var(--c-accent); border-radius: inherit; }
.meter-ok > i { background: var(--c-ok); } .meter-fg > i { background: var(--c-fg-2); }
```

- Progress or a share of a whole. Accent fill by default, `.meter-ok` when complete or healthy, `.meter-fg` for neutral data.
- Put the number next to it in `.t-meta .t-num`.
- On a card (`--c-surface-2`) the track matches the card; that is fine, the fill carries it.
