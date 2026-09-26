# Components

Borderless: hierarchy comes from surface tone, not outlines. Each component below has its rules, then CSS to copy as is, then markup. The CSS uses only [tokens](tokens.md) and `--space-*` from the [grid](grid.md). States are in [motion.md](motion.md), icons in [icons.md](icons.md).

| component | classes |
|---|---|
| Button | `.btn` (secondary, default) · `.btn-primary` · `.btn-link` · `.btn-sm` 28 / default 36 / `.btn-lg` 40 · `.btn-block` · `.btn-icon` |
| Segmented | `.seg > button.on` · `.seg-sm` · `.seg-ghost` |
| Input, Select, Textarea | `.input` · `.select` · `.textarea` · `.input-sm` · `.select-sm` · `.textarea-bare` |
| Field | `.field > .label > .hint` + control · `.check` · `.range` |
| Chip, Badge, Kbd | `.chip` (`.on`, `.chip-accent`) · `.badge` (`-accent`) · `.kbd` |
| List | `.list > .list-row` (`.on`, `.title`, `.meta`) |
| Menu | `.menu > .menu-head / .menu-item / .menu-sep` |
| Modal | `.scrim > .modal > .modal-head` |
| Meter | `.meter > i` (`.meter-neutral`) |
| Audio player | `.player` (`.player-float`) · `.player-time` · `.player-rate` · `.player-error` |

Do not invent components that are not here. Compose from these, the [layout](layout.md) classes and the [text classes](typography.md).

---

## Button
Secondary `.btn` is the default. Primary `.btn-primary` (inverted fill: near white in the dark theme, near black in the light) is the one main action of a view. `.btn-link` is an inline underlined text link that behaves like a button.

- One `.btn-primary` per view, modal or form. Everything else is `.btn`.
- In a pair, secondary comes first, primary last (on the right).
- Label is a short verb in sentence case: "Save", "Create project". No trailing period.
- Icon plus label: icon before the text, 8 px gap. Icon only: `.btn-icon` (square) with `aria-label`.
- Default size is 36. 28 in dense toolbars, rows and menus; 40 for the single main action of a page or a modal.
- `.btn-block` for full width buttons in narrow islands and modals.
- A button that navigates is an `<a class="btn">`; it drops the link underline. The same goes for `.list-row` and `.menu-item`.
- A destructive action is a `.btn` whose label names it ("Delete project"), confirmed in a modal. No outlined, bordered or coloured buttons.

| size | height | padding | text | radius |
|---|---|---|---|---|
| `.btn-sm` | 28 | 10 | 13 | 6 |
| default | 36 | 12 | 14 | 10 |
| `.btn-lg` | 40 | 16 | 15 | 10 |

```css
.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--space-8); height: var(--size-control); padding: 0 var(--space-12);
  border: 0; border-radius: var(--radius-md); background: var(--bg-2); color: var(--text-primary); font-size: var(--fs-ui); font-weight: var(--fw-medium);
  cursor: pointer; white-space: nowrap; user-select: none; text-decoration: none; }
.btn:hover { background: var(--bg-3); } .btn:active { transform: scale(.97); }
.btn:disabled { color: var(--text-disabled); cursor: default; transform: none; background: var(--bg-2); }
.btn-primary { background: var(--bg-accent); color: var(--text-on-accent); font-weight: var(--fw-semibold); } .btn-primary:hover { background: var(--bg-accent-hover); }
.btn-primary:disabled { background: var(--bg-accent-soft); color: var(--text-muted); }
.btn-link { background: transparent; padding: 0; height: auto; color: var(--text-accent); border-radius: var(--radius-xs);
  text-decoration: underline; text-decoration-color: var(--line-link); text-underline-offset: var(--space-4); }
.btn-link:hover { background: transparent; color: var(--text-accent-hover); text-decoration-color: currentColor; }
.btn-sm { height: var(--size-control-sm); padding: 0 var(--space-10); font-size: var(--fs-meta); border-radius: var(--radius-sm); }
.btn-lg { height: var(--size-control-lg); padding: 0 var(--space-16); font-size: var(--fs-body); }
.btn-block { width: 100%; }
```

```html
<div class="cluster">
  <button class="btn">Cancel</button>
  <button class="btn btn-primary">Save</button>
</div>
<p class="t-ui c-secondary">Read the <button class="btn btn-link">full guide</button> first.</p>
```

## Segmented
A choice of 2 to 5 options. Same height, radius and type as `.btn`; the selected item is the inverse fill touching the edges.

- `.seg` switches a value or a view (filter, period, mode). Exactly one item is selected.
- `.seg-ghost` is for tabs at the top of an island: quieter, no track.
- More than 5 options: use a `.select`. Ghost tabs may run longer; put them in a container with `overflow-x: auto`, labels never wrap.

```css
.seg { display: inline-flex; padding: 0; gap: 0; background: var(--bg-2); border-radius: var(--radius-md); overflow: hidden; }
.seg > button { height: var(--size-control); min-width: var(--space-40); padding: 0 var(--space-12); border: 0; border-radius: var(--radius-md); background: transparent; color: var(--text-secondary); font-size: var(--fs-ui); font-weight: var(--fw-medium); white-space: nowrap; cursor: pointer; }
.seg > button:hover { color: var(--text-primary); } .seg > button:active { transform: scale(.97); }
.seg > button.on, .seg > button[aria-pressed="true"] { background: var(--bg-inverse); color: var(--text-on-inverse); font-weight: var(--fw-semibold); }
.seg-sm { border-radius: var(--radius-sm); }
.seg-sm > button { height: var(--size-control-sm); padding: 0 var(--space-10); font-size: var(--fs-meta); border-radius: var(--radius-sm); }
.seg-ghost { background: transparent; gap: var(--space-4); overflow: visible; }
.seg-ghost > button.on, .seg-ghost > button[aria-pressed="true"] { background: var(--bg-2); color: var(--text-primary); }
```

```html
<div class="seg"><button class="on" aria-pressed="true">Day</button><button>Week</button><button>Month</button></div>
<div class="seg seg-ghost"><button class="on" aria-pressed="true">Overview</button><button>Activity</button></div>
```

## Input, Select, Textarea
Filled `--bg-2`, no border. Focus is an inset 1 px ring.

- Full width by default; 160 px inside a `.field`.
- Placeholder is an example or a hint, never the only label.
- Textarea is 16 px text on 24 px lines, for writing. `.textarea-bare` is an invisible textarea for composer style input on an island.
- Select hover changes `background-color`, not the `background` shorthand, or the arrow disappears.
- Number inputs hide spinners.

```css
.input, .select, .textarea { width: 100%; height: var(--size-control); padding: 0 var(--space-12); border: 0; border-radius: var(--radius-md); background-color: var(--bg-2); color: var(--text-primary); font-size: var(--fs-ui); outline: 0; }
.input:hover, .select:hover, .textarea:hover { background-color: var(--bg-3); }
.input:focus, .select:focus, .textarea:focus { box-shadow: inset 0 0 0 1px var(--line-input-focus); }
.input-sm, .select-sm { height: var(--size-control-sm); padding: 0 var(--space-8); font-size: var(--fs-meta); border-radius: var(--radius-sm); }
.textarea { height: auto; min-height: calc(var(--size-control) * 2); padding: var(--space-10) var(--space-12); line-height: var(--lh-read); font-size: var(--fs-lg); resize: none; }
.textarea-bare { background-color: transparent; padding: var(--space-2) 0; border-radius: 0; } .textarea-bare:hover, .textarea-bare:focus { background-color: transparent; box-shadow: none; }
.select { appearance: none; -webkit-appearance: none; padding-right: var(--space-32); cursor: pointer;
  /* arrow fill = --icon-secondary (gray-400); data URIs cannot read variables */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238A92A0'><path d='M7.4 9.3a1 1 0 0 1 1.4 0l3.2 3.2 3.2-3.2a1 1 0 1 1 1.4 1.4l-3.9 3.9a1 1 0 0 1-1.4 0L7.4 10.7a1 1 0 0 1 0-1.4z'/></svg>");
  background-repeat: no-repeat; background-position: right var(--space-10) center; background-size: var(--size-icon); }
.select option { background: var(--bg-float); color: var(--text-primary); }
input[type="number"].input { -moz-appearance: textfield; }
input[type="number"].input::-webkit-outer-spin-button, input[type="number"].input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
```

```html
<div class="stack" style="max-width: 420px">
  <input class="input" placeholder="Project name">
  <select class="select"><option>Public</option><option>Private</option></select>
  <textarea class="textarea" placeholder="What is it about?"></textarea>
</div>
```

## Field
A settings row: label (and optional hint) on the left, control on the right.

- Fields stack with `.stack-1`, straight on the island, not inside a card.
- The hint is one short line in `--text-muted`.
- Checkbox and range are native controls tinted with the accent.
- An error is one short sentence under the field in `--text-primary` with a `warning-circle` icon, never a red outline.

```css
.field { display: grid; grid-template-columns: 1fr auto; gap: var(--space-8) var(--space-12); align-items: center; padding: var(--space-6) 0; }
.field > .label { font-size: var(--fs-ui); color: var(--text-primary); }
.field > .label .hint { display: block; margin-top: var(--space-2); font-size: var(--fs-sm); line-height: 1.4; color: var(--text-muted); font-weight: var(--fw-medium); }
.field > .input, .field > .select { width: var(--size-field); }
.check { display: inline-flex; align-items: center; gap: var(--space-8); cursor: pointer; font-size: var(--fs-ui); color: var(--text-secondary); }
.check input { accent-color: var(--bg-accent); width: var(--size-check); height: var(--size-check); margin: 0; }
.range { width: 100%; accent-color: var(--bg-accent); }
```

```html
<div class="stack stack-1">
  <div class="field"><label class="label">Frame rate<span class="hint">Higher is smoother</span></label><select class="select"><option>30</option><option>60</option></select></div>
  <div class="field"><label class="label">Autoplay</label><label class="check"><input type="checkbox" checked> Enabled</label></div>
</div>
```

## Chip, Badge, Kbd
- **Chip** (pill, 24): a tag or a filter. `.chip.on` is a selected filter, `.chip-accent` highlights one tag. Icons in chips are 14.
- **Badge** (rounded square, 20): a status or a count next to a title, one or two words: "Live", "Failed", "12". The word carries the status, not a colour. `.badge-accent` (inverted fill) for "new", sparingly.
- **Kbd**: a keyboard shortcut: "Esc", "⌘K".

```css
.chip { display: inline-flex; align-items: center; gap: var(--space-6); height: var(--size-chip); padding: 0 var(--space-10); border-radius: var(--radius-full); background: var(--bg-2); color: var(--text-secondary); font-size: var(--fs-meta); white-space: nowrap; }
.chip.on { background: var(--bg-inverse); color: var(--text-on-inverse); } .chip-accent { background: var(--bg-accent-soft); color: var(--text-accent); }
.badge { display: inline-flex; align-items: center; height: var(--size-badge); padding: 0 var(--space-6); border-radius: var(--radius-sm); background: var(--bg-2); color: var(--text-tertiary); font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: .02em; }
.badge-accent { background: var(--bg-accent); color: var(--text-on-accent); }
.kbd { display: inline-block; padding: 0 var(--space-6); border-radius: var(--radius-sm); background: var(--bg-2); color: var(--text-tertiary); font-family: var(--font-mono); font-size: var(--fs-sm); line-height: var(--size-badge); }
```

```html
<div class="cluster">
  <span class="chip">Design</span><span class="chip on">Selected</span><span class="chip chip-accent">Featured</span>
  <span class="badge">Draft</span><span class="badge">Live</span><span class="badge badge-accent">New</span>
  <span class="kbd">⌘K</span>
</div>
```

## List
Navigation and selectable rows: transparent at rest, filled when selected.

- Rows are 44 high, one line; the title truncates.
- Leading icon 16, trailing `.meta` for counts or dates.
- No dividers between rows: the 2 px gap and hover do the separating.
- To align a heading with row text, give the heading `padding: 0 var(--space-10)`.

```css
.list { display: flex; flex-direction: column; gap: var(--space-2); }
.list-row { display: flex; align-items: center; gap: var(--space-8); width: 100%; height: var(--size-row); padding: 0 var(--space-10); border: 0; border-radius: var(--radius-md); background: transparent; color: var(--text-secondary); text-align: left; text-decoration: none; cursor: pointer; overflow: hidden; white-space: nowrap; }
.list-row:hover { background: var(--bg-ghost-hover); color: var(--text-primary); } .list-row:active { transform: scale(.98); }
.list-row.on { background: var(--bg-2); color: var(--text-primary); }
.list-row .title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.list-row .meta { font-size: var(--fs-meta); color: var(--text-muted); }
```

```html
<div class="list">
  <button class="list-row on"><span class="title">Inbox</span><span class="meta t-num">12</span></button>
  <button class="list-row"><span class="title">Archive</span></button>
</div>
```

## Menu
A popover. The only component with a shadow.

- Anchored to its trigger, 4 to 8 px away. Closes on outside click and Esc.
- `.menu-sep` splits groups; destructive items go last, after a separator.

```css
.menu { position: absolute; z-index: 5; display: flex; flex-direction: column; width: var(--size-menu); padding: var(--space-6); background: var(--bg-float); border-radius: var(--radius-lg); box-shadow: var(--shadow-float); color: var(--text-primary); font-size: var(--fs-body); }
.menu-item { display: flex; align-items: center; gap: var(--space-10); height: var(--size-control); padding: 0 var(--space-10); border: 0; border-radius: var(--radius-md); background: transparent; color: var(--text-secondary); text-align: left; text-decoration: none; cursor: pointer; }
.menu-item:hover { background: var(--bg-2); color: var(--text-primary); } .menu-item:active { transform: scale(.97); }
.menu-head { padding: var(--space-8) var(--space-10) var(--space-10); font-size: var(--fs-meta); color: var(--text-secondary); }
.menu-sep { border: 0; border-top: 1px solid var(--line-divider); margin: var(--space-6) 0; }
```

```html
<div class="menu">
  <button class="menu-item">Rename</button>
  <button class="menu-item">Duplicate</button>
  <hr class="menu-sep">
  <button class="menu-item">Delete project</button>
</div>
```

## Modal
A modal is an island over a scrim: same tone, radius 24, adaptive padding.

- Title `.t-h3`, body 15 px in `--text-secondary`, actions at the bottom right.
- Narrow it with an inline `width` for confirmations (360 to 480); 720 is the maximum.
- Closes on Esc and scrim click.

```css
.scrim { position: fixed; inset: 0; z-index: 20; display: flex; align-items: center; justify-content: center; padding: var(--space-24); background: var(--bg-scrim); backdrop-filter: var(--blur-scrim); }
.modal { width: min(var(--size-modal), 100%); max-height: 100%; overflow: auto; background: var(--bg-1); border-radius: var(--radius-island); padding: var(--island-pad); font-size: var(--fs-body); line-height: var(--lh-body); }
.modal-head { display: flex; align-items: center; justify-content: space-between; gap: var(--space-12); margin-bottom: var(--space-12); }
```

```html
<div class="scrim">
  <div class="modal" role="dialog" aria-modal="true" style="width: min(440px, 100%)">
    <div class="modal-head"><span class="t-h3">Delete project</span><button class="btn btn-sm">Close</button></div>
    <p class="c-secondary">This removes the project and its files.</p>
    <div class="cluster" style="justify-content: flex-end; margin-top: var(--space-24)">
      <button class="btn">Cancel</button><button class="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
```

## Meter
Progress or a share of a whole.

- Accent fill by default, `.meter-neutral` (mid grey) for secondary data or a second series.
- Put the number next to it in `.t-meta .t-num`.

```css
.meter { height: var(--size-bar); border-radius: var(--radius-xs); background: var(--bg-2); overflow: hidden; }
.meter > i { display: block; height: 100%; background: var(--bg-accent); border-radius: inherit; }
.meter-neutral > i { background: var(--bg-neutral); }
```

```html
<div class="row"><div class="meter grow"><i style="width: 62%"></i></div><span class="t-meta t-num">62%</span></div>
```

## Audio player
One row for a single recording: play, seek, time, speed. Built from `.btn-icon`, `.range` and `.select-sm`.

- The row holds exactly four things in this order: play, seek, time, speed. A title or a chapter picker, if needed, goes above it as one `.t-meta` line.
- Play is `.btn.btn-icon` with the Phosphor `play` or `pause` fill icon. Its `aria-label` names the action: "Play", "Pause".
- Seek is the native `.range`. It grows to fill the row and stays disabled until the duration is known.
- Time is `m:ss / m:ss` in `--text-secondary`, tabular.
- Speed is a `.select-sm` with 0.75×, 1×, 1.25×, 1.5× and 2×. Keep the pitch (`preservesPitch`).
- Use `preload="metadata"`: the duration shows at once, the file downloads only on play.
- One recording per language. Switching the language loads the other one and starts it from the beginning.
- An error is one short sentence in a small popover above the row, in `--text-primary`, with a `warning-circle` icon. Play retries. No red.
- `.player-float` is the floating version over a canvas or media: `--bg-1`, radius 14, 44 high. Like a menu, it is allowed a shadow. Set its width inline, 360 to 400.
- Speech needs little: encode mono MP3 or AAC at 64 kbps.

```css
.player { position: relative; display: flex; align-items: center; gap: var(--space-8); min-width: 0; }
.player > .range { flex: 1; min-width: var(--space-64); margin: 0 var(--space-4); }
.player-time { flex: none; font-size: var(--fs-meta); color: var(--text-secondary); font-variant-numeric: tabular-nums; white-space: nowrap; }
.player-rate { flex: none; width: var(--space-80); font-variant-numeric: tabular-nums; }
.player-float { min-height: var(--size-row); padding: var(--space-4) var(--space-12) var(--space-4) var(--space-4); background: var(--bg-1); border-radius: var(--radius-lg); box-shadow: var(--shadow-float); }
.player-error { position: absolute; right: 0; bottom: calc(100% + var(--space-8)); display: flex; align-items: center; gap: var(--space-6); padding: var(--space-8) var(--space-12); border-radius: var(--radius-md); background: var(--bg-float); box-shadow: var(--shadow-float); color: var(--text-primary); font-size: var(--fs-sm); white-space: nowrap; }
```

```html
<section class="player player-float" aria-label="Podcast" style="width: 380px">
  <audio preload="metadata" src="/audio/podcast-en.mp3"></audio>
  <button class="btn btn-icon" aria-label="Play"><i class="icon ph-fill ph-play" aria-hidden="true"></i></button>
  <input type="range" class="range" min="0" max="1" step="0.1" value="0" aria-label="Playback position" disabled>
  <span class="player-time">0:00 / 0:00</span>
  <select class="select select-sm player-rate" aria-label="Playback speed">
    <option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option>
  </select>
  <p class="player-error" role="status" hidden><i class="icon icon-sm ph-fill ph-warning-circle" aria-hidden="true"></i>Playback unavailable. Press play to retry.</p>
</section>
```

```js
const player = document.querySelector('.player'), audio = player.querySelector('audio');
const play = player.querySelector('.btn-icon'), icon = play.querySelector('.icon'), seek = player.querySelector('.range');
const time = player.querySelector('.player-time'), rate = player.querySelector('.player-rate'), error = player.querySelector('.player-error');
const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const show = () => { time.textContent = `${clock(audio.currentTime)} / ${clock(audio.duration || 0)}`; seek.value = audio.currentTime; };
play.onclick = async () => {
  if (!audio.paused) return audio.pause();
  if (!error.hidden) audio.load();
  audio.playbackRate = Number(rate.value); audio.preservesPitch = true; error.hidden = true;
  try { await audio.play(); } catch { error.hidden = false; }
};
audio.onplay = audio.onpause = () => {
  const on = !audio.paused;
  icon.classList.toggle('ph-play', !on); icon.classList.toggle('ph-pause', on); play.setAttribute('aria-label', on ? 'Pause' : 'Play');
};
audio.onloadedmetadata = () => { seek.max = audio.duration; seek.disabled = false; show(); };
audio.ontimeupdate = show;
audio.onerror = () => { error.hidden = false; };
seek.oninput = () => { audio.currentTime = Number(seek.value); show(); };
rate.onchange = () => { audio.playbackRate = Number(rate.value); };
```
