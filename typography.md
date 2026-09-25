# Typography

The system font: **SF Pro** on Apple devices, the platform UI font everywhere else (Segoe UI on Windows, Roboto on Android). Nothing to load. Monospace is the system stack too.

## Theory
- **One stack, no web fonts.** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif`. On Apple devices the system switches between SF Pro Text (small sizes) and SF Pro Display (20 px and up) by itself. Do not load Inter, Roboto or any other font from Google Fonts.
- **14 px is the interface.** Anything you click or scan is 14. Go to 13 for secondary controls and meta, 12 for captions and labels. 11 is badges only.
- **15 to 16 px is for reading.** Paragraphs, modal bodies, long descriptions, textareas.
- **Weights: 500 and 600.** 500 is the default; 400 looks thin next to the rest of the type, never use it. 600 for headings, card titles, section labels, the primary button, the selected segment and badges. 700 only for large display numbers.
- **Hierarchy by size, weight and colour together,** never by uppercase, underline or italics (underline is for links only). Headings are 600 and `--text-primary`; supporting text drops to `--text-secondary` or `--text-muted`.
- **Line height:** 1.2 for headings, 1.35 for UI, 1.5 for reading text. Controls have a fixed height from the grid and center one line.
- **Line length:** reading text at most `62ch`.
- **Numbers** that change or line up (counters, prices, tables, timers) are tabular: `.t-num`.
- **Long single-line labels** truncate with an ellipsis, never wrap inside a control.
- **Section labels** (`.t-label`) sit above a group: small, muted, semibold, sentence case. No uppercase, no letter spacing.
- **No `text-transform`** anywhere. See [text.md](text.md).
- Letter spacing only where listed: −.01em on h1 and h2, .02em on badges.
- Font sizes and line heights are the one exception to the 4 px grid ([grid.md](grid.md)).

## Scale
| class | size / line height | weight | colour | use |
|---|---|---|---|---|
| `.t-h1` | 32 / 1.2, −.01em | 600 | primary | page title, one per page |
| `.t-h2` | 24 / 1.2, −.01em | 600 | primary | section title, big numbers |
| `.t-h3` | 20 / 1.2 | 600 | primary | island or modal title |
| `.card-title` | 15 | 600 | primary | card title |
| `.t-lg` | 16 / 24 | 500 | primary | reading text, textarea |
| `.t-body` | 15 / 1.5 | 500 | primary or secondary | paragraphs, modal and menu text |
| `.t-ui` | 14 / 1.35 | 500 | primary | **default**: buttons, inputs, rows, labels |
| `.t-meta` | 13 | 500 | secondary | secondary info, small controls |
| `.t-caption` | 12 | 500 | muted | captions, hints, footnotes |
| `.t-label` | 12 | 600 | muted | section label above a group |
| `.t-mono` | 13, mono | 500 | inherit | code, ids, hashes |
| badge | 11, .02em | 600 | tertiary | badges only |

`--fs-xl` (17) is for rare emphasis in reading text.

## CSS
```css
:root {
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  --fs-xs: 11px; --fs-sm: 12px; --fs-meta: 13px; --fs-ui: 14px; --fs-body: 15px; --fs-lg: 16px; --fs-xl: 17px;
  --fs-h3: 20px; --fs-h2: 24px; --fs-h1: 32px;
  --lh-tight: 1.2; --lh-ui: 1.35; --lh-body: 1.5; --lh-read: var(--space-24);
  --fw-medium: 500; --fw-semibold: 600; --fw-bold: 700;
}

.t-h1 { font-size: var(--fs-h1); font-weight: var(--fw-semibold); line-height: var(--lh-tight); letter-spacing: -.01em; }
.t-h2 { font-size: var(--fs-h2); font-weight: var(--fw-semibold); line-height: var(--lh-tight); letter-spacing: -.01em; }
.t-h3 { font-size: var(--fs-h3); font-weight: var(--fw-semibold); line-height: var(--lh-tight); }
.t-body { font-size: var(--fs-body); line-height: var(--lh-body); }
.t-lg { font-size: var(--fs-lg); line-height: var(--lh-read); }
.t-ui { font-size: var(--fs-ui); line-height: var(--lh-ui); }
.t-meta { font-size: var(--fs-meta); color: var(--text-secondary); }
.t-caption { font-size: var(--fs-sm); color: var(--text-muted); }
.t-label { font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--text-muted); }
.t-mono { font-family: var(--font-mono); font-size: var(--fs-meta); }
.t-num { font-variant-numeric: tabular-nums; }
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```

## Practice
```html
<section class="island island-pad stack-3">
  <h1 class="t-h1">Projects</h1>
  <p class="t-body c-secondary" style="max-width: 62ch">Everything you are working on, newest first.</p>

  <h2 class="t-label" style="margin-top: var(--space-16)">This week</h2>
  <div class="row">
    <span class="t-ui grow truncate">Landing page redesign for the spring campaign</span>
    <span class="t-meta t-num">12:40</span>
  </div>
</section>
```

```css
/* wrong */
.section-title { text-transform: uppercase; letter-spacing: .08em; font-weight: 400; font-size: 11px; }
```
