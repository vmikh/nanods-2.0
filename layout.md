# Layout

The page is a canvas. Content lives in rounded **islands** separated by 8 px gutters. Inside islands, content is grouped into sections and, when needed, cards.

## Theory
- **Nothing sits on the canvas.** Every piece of content is inside an island.
- **Islands never nest.** Inside an island, group with spacing, section labels, cards and dividers.
- **The shell fills the viewport;** islands scroll inside, the page does not.
- **Scrollbars are hidden.** A scrolling island dissolves content at its edges with `.island-fade`.
- **Island padding adapts:** 16 below 900 px, 20 from 900, 24 from 1440 (`--island-pad`). Content never touches the island edge.
- **Cards hold content** (stats, previews, meters, short lists), not form controls: a card has the same tone as inputs, so controls on it disappear. Forms go straight on the island.
- **Cards never nest.** Prefer spacing and a `.t-label` over a card when the group needs no visible boundary.
- **One `.t-h1` per page.** Sections are introduced by `.t-label`, not by headings of growing size.
- Islands and cards have no border, no shadow, no background image.

## CSS

### Page base
```css
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }   /* color-scheme is set by the theme blocks in tokens.md */
body { margin: 0; background: var(--bg-0); color: var(--text-primary); font: var(--fw-medium) var(--fs-ui) / var(--lh-ui) var(--font); -webkit-font-smoothing: antialiased; }
body, [data-theme] { color: var(--text-primary); }   /* scoped themes recolour their text */
a { color: var(--text-accent); text-decoration: underline; text-decoration-color: var(--line-link); text-underline-offset: var(--space-4); }
a:hover { color: var(--text-accent-hover); text-decoration-color: currentColor; }
button, input, select, textarea { font: inherit; color: inherit; }
img, svg, video, canvas { display: block; max-width: 100%; }
h1, h2, h3, h4, p { margin: 0; }
::-webkit-scrollbar { width: 0; height: 0; }
input::placeholder, textarea::placeholder { color: var(--text-placeholder); }
[hidden] { display: none !important; }
```

### Shell
```css
.shell { display: flex; gap: var(--gutter); height: 100vh; height: 100dvh; padding: var(--gutter); }
.shell > * { min-width: 0; min-height: 0; }
.shell-main { flex: 1; display: flex; flex-direction: column; gap: var(--gutter); }
.shell-side { width: var(--size-sidebar); flex: none; display: flex; flex-direction: column; gap: var(--gutter); }
```

### Island
```css
.island { background: var(--bg-1); border-radius: var(--radius-island); position: relative; min-width: 0; min-height: 0; overflow: hidden; }
.island-pad { padding: var(--island-pad); }   /* adaptive: 16 / 20 / 24 */
.island-pad-s { padding: var(--space-16); } .island-pad-m { padding: var(--space-20); } .island-pad-l { padding: var(--space-24); }
.island-head { display: flex; align-items: center; gap: var(--space-8); padding: var(--island-pad) var(--island-pad) 0; }
.island-scroll { height: 100%; overflow: auto; }
.island-fill { flex: 1; }
.island-fade::before, .island-fade::after { content: ''; position: absolute; left: 0; right: 0; height: var(--size-row); pointer-events: none; z-index: 1; }
.island-fade::before { top: 0; background: linear-gradient(to bottom, var(--bg-1) 10%, transparent); }
.island-fade::after { bottom: 0; background: linear-gradient(to top, var(--bg-1) 10%, transparent); }
```

### Card
```css
.card { background: var(--bg-2); border-radius: var(--radius-lg); padding: var(--space-16); }
.card-head { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-12); }   /* title and subtitle tight, content further */
.card-title { font-size: var(--fs-body); font-weight: var(--fw-semibold); }
.card-sub { font-size: var(--fs-meta); color: var(--text-muted); }
.divider { border: 0; border-top: 1px solid var(--line-divider); margin: var(--space-12) 0; }
```

### Flow utilities
```css
.stack { display: flex; flex-direction: column; gap: var(--space-8); } .stack-1 { gap: var(--space-4); } .stack-3 { gap: var(--space-12); } .stack-4 { gap: var(--space-16); }
.cluster { display: flex; align-items: center; gap: var(--space-8); flex-wrap: wrap; } .cluster-1 { gap: var(--space-4); } .cluster-3 { gap: var(--space-12); }
.row { display: flex; align-items: center; gap: var(--space-8); } .grow { flex: 1; min-width: 0; } .spacer { flex: 1; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--gutter); } .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gutter); }
.center { display: flex; align-items: center; justify-content: center; }
```

| class | what |
|---|---|
| `.island-pad` | adaptive padding; `-s`, `-m`, `-l` pin 16, 20, 24 for islands that are always small or large |
| `.island-head` | title row with island padding: a `.t-h3` or `.t-label`, `.spacer`, actions |
| `.island-scroll` + `.island-fade` | scrolling content that dissolves at the edges |
| `.stack` | vertical, 8 gap (`-1` 4, `-3` 12, `-4` 16) |
| `.cluster` | horizontal, wraps, 8 gap: button groups, chips |
| `.row` | horizontal, no wrap: a title with actions |
| `.grow` | takes the remaining width and can shrink (for truncating text) |
| `.spacer` | pushes what follows to the far end |
| `.grid-2`, `.grid-3` | equal columns with the 8 px gutter |
| `.center` | centers one thing: empty states, loaders |

## Practice

### App shell
```html
<div class="shell">
  <aside class="island island-pad shell-side">…navigation list…</aside>
  <main class="shell-main">
    <section class="island island-fill island-fade">
      <div class="island-scroll island-pad">…content…</div>
    </section>
  </main>
</div>
```

### Section rhythm inside an island
The island is a `.stack-3` (12 gap). Each `.t-label` gets an extra 16 on top, so sections stand apart while a label stays close to its content.
```html
<section class="island island-pad stack-3">
  <h1 class="t-h1">Settings</h1>
  <p class="t-body c-secondary" style="max-width: 62ch">Short description.</p>

  <h2 class="t-label" style="margin-top: var(--space-16)">Account</h2>
  <div class="stack stack-1">…fields…</div>
</section>
```

### Card
```html
<div class="card">
  <div class="card-head"><div class="card-title">Storage</div><div class="card-sub">62% used</div></div>
  <div class="meter"><i style="width: 62%"></i></div>
</div>
```

### Recipes
- **App:** `.shell` with a `.shell-side` navigation island (a `.list`) and a `.shell-main` content island.
- **Settings:** one island, `.t-label` sections, `.field` rows straight on the island, one `.btn-primary` at the end.
- **Dashboard:** `.shell-main` with a `.grid-2` or `.grid-3` of islands, or one island with a grid of cards.
- **Detail view:** island with `.island-head` (title, `.spacer`, actions) above scrolling content with `.island-fade`.
- **Dialog:** `.scrim > .modal` (see [components.md](components.md)).
