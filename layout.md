# Layout

The page is a dark canvas. Content lives in rounded **islands** separated by 8 px gutters. Inside islands, content is grouped into sections and, when needed, cards.

## Shell
The app frame: a full height row of islands with an 8 px gutter on every side and between them.

```css
.shell { display: flex; gap: var(--gutter); height: 100vh; height: 100dvh; padding: var(--gutter); }
.shell > * { min-width: 0; min-height: 0; }
.shell-main { flex: 1; display: flex; flex-direction: column; gap: var(--gutter); }
.shell-side { width: 340px; flex: none; display: flex; flex-direction: column; gap: var(--gutter); }
```

```html
<div class="shell">
  <aside class="island island-pad shell-side">…navigation…</aside>
  <main class="shell-main">
    <section class="island island-pad island-fill island-scroll">…content…</section>
  </main>
</div>
```

- The shell fills the viewport; islands scroll inside, the page does not.
- `.shell-main` and `.shell-side` can hold several islands stacked with the same 8 px gutter.

## Island
```css
.island { background: var(--c-island); border-radius: var(--rd-island); position: relative; min-width: 0; min-height: 0; overflow: hidden; }
.island-pad { padding: var(--island-pad); }   /* adaptive: 16 / 20 / 24 */
.island-pad-s { padding: var(--mp-4); } .island-pad-m { padding: var(--mp-5); } .island-pad-l { padding: var(--mp-6); }
.island-head { display: flex; align-items: center; gap: var(--mp-2); padding: var(--island-pad) var(--island-pad) 0; }
.island-scroll { height: 100%; overflow: auto; }
.island-fill { flex: 1; }
.island-fade::before, .island-fade::after { content: ''; position: absolute; left: 0; right: 0; height: var(--h-row); pointer-events: none; z-index: 1; }
.island-fade::before { top: 0; background: linear-gradient(to bottom, var(--c-island) 10%, rgba(23, 26, 33, 0)); }
.island-fade::after { bottom: 0; background: linear-gradient(to top, var(--c-island) 10%, rgba(23, 26, 33, 0)); }
```

- Use `.island-pad` (adaptive 16 / 20 / 24) by default. Pin a size with `-s`, `-m`, `-l` only when the island is always small or always large.
- `.island-head` is a title row with the same padding; put a `.t-h3` or `.t-label` and actions (`.spacer` between them) inside.
- A scrolling island gets `.island-fade` so content dissolves at the edges instead of being cut. Scrollbars are hidden.
- Islands never nest. Inside an island, group with sections, cards and dividers.
- An island has no border, no shadow, no background image.

## Card
A group inside an island.

```css
.card { background: var(--c-surface-2); border-radius: var(--rd-3); padding: var(--mp-4); }
.card-head { display: flex; flex-direction: column; gap: var(--mp-05); margin-bottom: var(--mp-3); }
.card-title { font-size: var(--fs-body); font-weight: var(--fw-semibold); } .card-sub { font-size: var(--fs-meta); color: var(--c-fg-4); }
.divider { border: 0; border-top: 1px solid var(--c-line); margin: var(--mp-3) 0; }
```

```html
<div class="card">
  <div class="card-head"><div class="card-title">Storage</div><div class="card-sub">62% used</div></div>
  <div class="meter"><i style="width: 62%"></i></div>
</div>
```

- Title and subtitle sit tight (2 px), content sits further away (12 px).
- Cards are for content: stats, previews, meters, short lists. Not for form controls, which share the card tone and disappear.
- Cards never nest.
- Prefer spacing and a `.t-label` over a card when the group needs no visual boundary.

## Flow utilities
```css
.stack { display: flex; flex-direction: column; gap: var(--mp-2); } .stack-1 { gap: var(--mp-1); } .stack-3 { gap: var(--mp-3); } .stack-4 { gap: var(--mp-4); }
.cluster { display: flex; align-items: center; gap: var(--mp-2); flex-wrap: wrap; } .cluster-1 { gap: var(--mp-1); } .cluster-3 { gap: var(--mp-3); }
.row { display: flex; align-items: center; gap: var(--mp-2); } .grow { flex: 1; min-width: 0; } .spacer { flex: 1; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--gutter); } .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gutter); }
.center { display: flex; align-items: center; justify-content: center; }
```

| class | what |
|---|---|
| `.stack` | vertical, 8 gap (`-1` 4, `-3` 12, `-4` 16) |
| `.cluster` | horizontal, wraps, 8 gap: button groups, chips |
| `.row` | horizontal, no wrap: a title with actions |
| `.grow` | takes the remaining width and can shrink (for truncating text) |
| `.spacer` | pushes what follows to the far end |
| `.grid-2`, `.grid-3` | equal columns with the 8 px gutter |
| `.center` | centers one thing: empty states, loaders |

## Section rhythm inside an island
```html
<section class="island island-pad stack-3">
  <h1 class="t-h1">Settings</h1>
  <p class="t-body c-fg-2" style="max-width: 62ch">Short description.</p>

  <h2 class="t-label" style="margin-top: var(--mp-4)">Account</h2>
  <div class="stack stack-1">…fields…</div>
</section>
```
- The island is a `.stack-3` (12 gap). Each `.t-label` gets an extra 16 on top, so sections are clearly apart while a label stays close to its content.
- One `.t-h1` per page. Section labels are `.t-label`, not headings of growing size.

## Recipes
- **App:** `.shell` with a `.shell-side` navigation island (a `.list`) and a `.shell-main` content island.
- **Settings:** one island, `.t-label` sections, `.field` rows straight on the island, one `.btn-primary` at the end.
- **Dashboard:** `.shell-main` with a `.grid-2` or `.grid-3` of islands, or one island with a grid of cards.
- **Detail view:** island with `.island-head` (title, `.spacer`, actions) above scrolling content with `.island-fade`.
- **Dialog:** `.scrim > .modal` (see [components.md](components.md)).
