# Tokens

Paste this block into every project as is. Components use only these variables: no raw hex, px or ms. Meaning of each colour is in [palette.md](palette.md), spacing usage in [grid.md](grid.md), type usage in [typography.md](typography.md).

## Naming
| prefix | what | example |
|---|---|---|
| `--mp-N` | spacing, N × 4 px (`05` = 2 px, `15` = 6 px, `25` = 10 px, `35` = 14 px) | `--mp-3` = 12 px |
| `--rd-*` | radius | `--rd-2` = 10 px |
| `--dur-*`, `--ease*` | motion | `--dur-2` = .22 s |
| `--c-*` | colour | `--c-surface-2` |
| `--fs-*`, `--lh-*`, `--fw-*` | font size, line height, weight | `--fs-ui` = 14 px |
| `--h-*` | fixed heights of controls and rows | `--h-control` = 36 px |

## `:root`
```css
:root {
  /* spacing (4px grid; --mp-N = N × 4px, halves allowed) */
  --mp-05: 2px; --mp-1: 4px; --mp-15: 6px; --mp-2: 8px; --mp-25: 10px; --mp-3: 12px; --mp-35: 14px;
  --mp-4: 16px; --mp-5: 20px; --mp-6: 24px; --mp-8: 32px; --mp-10: 40px; --mp-12: 48px; --mp-16: 64px; --mp-20: 80px;

  /* radii */
  --rd-line: 2px; --rd-1: 6px; --rd-2: 10px; --rd-3: 14px; --rd-4: 18px; --rd-island: 24px; --rd-full: 999px;

  /* motion */
  --dur-1: .18s; --dur-2: .22s; --dur-3: .28s; --dur-4: .32s; --dur-5: .36s;
  --ease: cubic-bezier(.2, .8, .3, 1);
  --ease-press: cubic-bezier(.22, 1, .36, 1);

  /* palette · surfaces (darkest → lightest) */
  --c-bg: #0A0B0E;          /* page background, gaps between islands */
  --c-bg-deep: #06070A;     /* video wells, deepest wells */
  --c-island: #171A21;      /* content islands, modals */
  --c-surface: #1F232C;     /* menus, popovers */
  --c-surface-2: #232830;   /* cards on an island, secondary buttons, inputs, chips */
  --c-surface-3: #2A2F39;   /* hover of surface-2 */
  --c-hover: #181B22;       /* ghost hover on an island */
  --c-line: #1A1E26;        /* hairline dividers */
  --c-line-2: #3A404C;      /* dashed drop zones */

  /* palette · text */
  --c-fg: #F2F4F7;          /* primary */
  --c-fg-2: #A0A7B4;        /* secondary */
  --c-fg-3: #8A92A0;        /* tertiary, icons */
  --c-fg-4: #6B7280;        /* muted: meta, captions, labels */
  --c-fg-5: #4B515C;        /* disabled */
  --c-on-light: #0A0B0E;    /* text on light and accent fills */

  /* palette · accent + states */
  --c-accent: #D2FF3A;      /* lime, the one accent */
  --c-accent-hover: #E4FF7A;
  --c-accent-soft: rgba(210, 255, 58, .14);
  --c-light: #F2F4F7;       /* light (inverted) fill: selected segment, selected chip */
  --c-light-hover: #FFFFFF;
  --c-danger: #FF8A9B;
  --c-ok: #4CC9A4;
  --c-warn: #D9B04A;

  /* palette · glass */
  --c-scrim: rgba(10, 11, 14, .84);
  --c-scrim-strong: rgba(6, 7, 10, .6);
  --c-glass: rgba(242, 244, 247, .22);
  --c-glass-hover: rgba(242, 244, 247, .16);
  --c-glass-dark: rgba(10, 11, 14, .55);
  --shadow-pop: 0 12px 32px rgba(0, 0, 0, .4);
  --blur: blur(14px);

  /* typography */
  --font: 'Onest', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-mono: ui-monospace, Menlo, Consolas, monospace;
  --fs-xs: 11px; --fs-sm: 12px; --fs-meta: 13px; --fs-ui: 14px; --fs-body: 15px; --fs-lg: 16px; --fs-xl: 17px;
  --fs-h3: 20px; --fs-h2: 24px; --fs-h1: 32px;
  --lh-tight: 1.2; --lh-ui: 1.35; --lh-body: 1.5;
  --fw-medium: 500; --fw-semibold: 600; --fw-bold: 700;

  /* controls */
  --h-control: 36px; --h-control-lg: 40px; --h-control-sm: 28px; --h-row: 44px;
  --gutter: var(--mp-2);        /* gap between islands */
  --island-pad: var(--mp-4);    /* 16 on small screens, 20 on medium, 24 on large */
}
@media (min-width: 900px) { :root { --island-pad: var(--mp-5); } }
@media (min-width: 1440px) { :root { --island-pad: var(--mp-6); } }
```

## Base layer
Goes right after the tokens. Font loading is in [typography.md](typography.md).

```css
*, *::before, *::after { box-sizing: border-box; }
html { color-scheme: dark; -webkit-text-size-adjust: 100%; }
body { margin: 0; background: var(--c-bg); color: var(--c-fg); font: var(--fw-medium) var(--fs-ui) / var(--lh-ui) var(--font); -webkit-font-smoothing: antialiased; }
a { color: var(--c-accent); text-decoration: none; } a:hover { color: var(--c-accent-hover); }
button, input, select, textarea { font: inherit; color: inherit; }
button { transition: transform .26s var(--ease-press), background-color var(--dur-2) var(--ease-press), color var(--dur-2) var(--ease-press), filter var(--dur-2); }
img, svg, video, canvas { display: block; max-width: 100%; }
h1, h2, h3, h4, p { margin: 0; }
::-webkit-scrollbar { width: 0; height: 0; }
textarea::placeholder, input::placeholder { color: rgba(160, 167, 180, .42); }
:focus-visible { outline: 2px solid var(--c-accent); outline-offset: 2px; border-radius: var(--rd-1); }
[hidden] { display: none !important; }
```

## Rules
- Only `var(--…)`. A literal colour or size in component code is a bug. The exceptions are the fixed sizes listed in [grid.md](grid.md) (chip 24, badge 20, meter 8, menu 232, sidebar 340 and so on), which you copy from [components.md](components.md) verbatim.
- Do not add new tokens for one-off cases. Pick the nearest existing one.
- Do not override tokens per page. The system has one theme: dark.
- Scrollbars are hidden globally. Signal scrollable content with `.island-fade` ([layout.md](layout.md)), not with a visible bar.
