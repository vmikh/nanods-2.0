# Typography

One family: **Onest** (Latin and Cyrillic), variable, weights 500 to 700. Monospace is the system stack.

## Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@500..700&display=swap" rel="stylesheet">
```
For self-hosting, download Onest from Google Fonts and declare `font-weight: 500 700; font-display: swap`.

## Scale
| class | size / line height | weight | colour | use |
|---|---|---|---|---|
| `.t-h1` | 32 / 1.2, tracking −.01em | 600 | fg | page title, one per page |
| `.t-h2` | 24 / 1.2, tracking −.01em | 600 | fg | section title |
| `.t-h3` | 20 / 1.2 | 600 | fg | island or modal title |
| `.card-title` | 15 | 600 | fg | card title |
| `.t-lg` | 16 / 24 | 500 | fg | reading text, textarea |
| `.t-body` | 15 / 1.5 | 500 | fg or fg-2 | paragraphs, modal and menu text |
| `.t-ui` | 14 / 1.35 | 500 | fg | **default**: buttons, inputs, list rows, labels |
| `.t-meta` | 13 | 500 | fg-2 | secondary info, small buttons and inputs |
| `.t-caption` | 12 | 500 | fg-4 | captions, hints, footnotes |
| `.t-label` | 12 | 600 | fg-4 | section label above a group, sentence case |
| `.t-mono` | 13, mono | 500 | inherit | code, ids, hashes |
| badge | 11, tracking .02em | 600 | fg-3 | badges only (`--fs-xs`) |

`--fs-xl` (17 px) exists for rare emphasis in reading text.

```css
.t-h1 { font-size: var(--fs-h1); font-weight: var(--fw-semibold); line-height: var(--lh-tight); letter-spacing: -.01em; }
.t-h2 { font-size: var(--fs-h2); font-weight: var(--fw-semibold); line-height: var(--lh-tight); letter-spacing: -.01em; }
.t-h3 { font-size: var(--fs-h3); font-weight: var(--fw-semibold); line-height: var(--lh-tight); }
.t-body { font-size: var(--fs-body); line-height: var(--lh-body); }
.t-lg { font-size: var(--fs-lg); line-height: 24px; }
.t-ui { font-size: var(--fs-ui); line-height: var(--lh-ui); }
.t-meta { font-size: var(--fs-meta); color: var(--c-fg-2); }
.t-caption { font-size: var(--fs-sm); color: var(--c-fg-4); }
.t-label { font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--c-fg-4); }
.t-mono { font-family: var(--font-mono); font-size: var(--fs-meta); }
.t-num { font-variant-numeric: tabular-nums; }
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```

## Rules
- **14 px is the interface.** Anything you click or scan is 14. Go to 13 for secondary controls and meta, 12 for captions and labels. 11 is badges only.
- **15 to 16 px is for reading.** Paragraphs, modal bodies, long descriptions.
- **Weights: 500 and 600.** 500 is the body default (the font has no 400; never use it). 600 for headings, card titles, section labels, the primary button, selected segment and badges. 700 only for large display numbers.
- **Hierarchy by size, weight and colour together,** never by uppercase, underline or italics. Headings are 600 and `--c-fg`; supporting text drops to `--c-fg-2` or `--c-fg-4`.
- **Line height:** 1.2 for headings, 1.35 for UI, 1.5 for reading text. Controls with a fixed height center a single line.
- **Line length:** reading text at most `62ch`.
- **Numbers** that change or line up (counters, prices, tables, timers) get `.t-num`.
- **Long single-line labels** truncate with ellipsis (`.truncate`, list row `.title`), never wrap inside a control.
- **Section labels** (`.t-label`) sit above a group: small, muted, semibold, sentence case. Not uppercase, no letter spacing.
- **No `text-transform`** anywhere. See [text.md](text.md).
- Letter spacing only where listed: −.01em on h1/h2, .02em on badges.
