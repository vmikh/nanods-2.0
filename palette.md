# Palette

The first level for colour. The system is **monochrome**: one scale from white to black and nothing else. Both themes, dark and light, are built from this one scale. The palette says nothing about purpose. Roles (text, background, the main action) are assigned in [tokens.md](tokens.md), and components use only those tokens, never the palette directly.

## Theory

### One scale
There are no hues: no brand colour, no green for success, no red for errors. Everything is built from lightness alone. This keeps the interface calm and lets the few high contrast elements do all the pointing.

### Naming
`--gray-{step}`, from **0 (white) to 1000 (black)**. The number is lightness, not importance.

### Fine steps at both ends
Surfaces differ by a few units: on the dark theme near black, on the light theme near white. So both ends of the scale are dense (0, 25, 50, 75 and 850, 900, 925, 950). The middle has fewer steps: text there needs contrast, not nuance.

### Emphasis without colour
Without hues, the job of an accent goes to **contrast**:
- The element with the highest contrast against the page is the most important: the primary button is a near white fill in the dark theme and a near black fill in the light theme.
- Selection is the same inverted fill (a selected segment, a selected chip).
- Links are text of the primary tone with an underline.
- Status is carried by words and icon shapes, never by tint.

### Rules
- Opaque only. Transparency is made in tokens with `color-mix()`.
- Never add a hue, not even for one element. If something needs to stand out, give it more contrast, weight or size.
- Never use a palette variable in component CSS. If a role is missing, add a token.

## Scale
| token | hex | dark theme role | light theme role |
|---|---|---|---|
| `--gray-0` | #FFFFFF | hover of the accent fill | islands, menus |
| `--gray-25` | #F8F9FB | | ghost hover |
| `--gray-50` | #F2F4F7 | primary text, accent fill, focus ring | level 2 background |
| `--gray-75` | #EBEEF2 | | canvas, level 3 background |
| `--gray-100` | #E2E5EA | | divider |
| `--gray-200` | #C3C8D0 | | strong line |
| `--gray-300` | #A0A7B4 | secondary text | disabled, link underline |
| `--gray-400` | #8A92A0 | tertiary text, icons at rest, neutral fills | muted icons, input focus, neutral fills |
| `--gray-500` | #6B7280 | muted text | tertiary and muted text, icons at rest |
| `--gray-600` | #4B515C | disabled | secondary text |
| `--gray-700` | #3A404C | strong line, link underline | link hover |
| `--gray-750` | #2A2F39 | level 3 background | |
| `--gray-800` | #232830 | level 2 background | |
| `--gray-850` | #1F232C | floating background | |
| `--gray-900` | #1A1E26 | divider, ghost hover | accent fill, selection |
| `--gray-925` | #171A21 | level 1 background (islands) | |
| `--gray-950` | #0A0B0E | canvas | primary text, focus ring |
| `--gray-1000` | #06070A | wells, shadows | wells, hover of the accent fill |

## CSS
```css
:root {
  /* one scale: 0 white → 1000 black; fine steps at both ends */
  --gray-0: #FFFFFF;    --gray-25: #F8F9FB;   --gray-50: #F2F4F7;   --gray-75: #EBEEF2;
  --gray-100: #E2E5EA;  --gray-200: #C3C8D0;
  --gray-300: #A0A7B4;  --gray-400: #8A92A0;  --gray-500: #6B7280;  --gray-600: #4B515C;
  --gray-700: #3A404C;  --gray-750: #2A2F39;  --gray-800: #232830;  --gray-850: #1F232C;
  --gray-900: #1A1E26;  --gray-925: #171A21;  --gray-950: #0A0B0E;  --gray-1000: #06070A;
}
```

## Practice
Palette variables appear in exactly one place: the token blocks in [tokens.md](tokens.md). Even charts use tokens, so they follow the theme; they separate series by contrast level, line style and direct labels, never by hue.

```css
/* right */
.btn { background: var(--bg-2); }
.chart-series-1 { stroke: var(--text-primary); }
.chart-series-2 { stroke: var(--text-muted); stroke-dasharray: 4 4; }

/* wrong: palette in a component, raw hex, any hue */
.btn { background: var(--gray-800); }
.btn { background: #232830; }
.status-ok { color: #4CC9A4; }
```

A swatch strip for checking the scale in a browser:
```html
<div style="display: grid; grid-template-columns: repeat(18, 1fr); height: 48px; border-radius: var(--radius-md); overflow: hidden">
  <div style="background: var(--gray-0)"></div><div style="background: var(--gray-25)"></div>
  <div style="background: var(--gray-50)"></div><div style="background: var(--gray-75)"></div>
  <div style="background: var(--gray-100)"></div><div style="background: var(--gray-200)"></div>
  <div style="background: var(--gray-300)"></div><div style="background: var(--gray-400)"></div>
  <div style="background: var(--gray-500)"></div><div style="background: var(--gray-600)"></div>
  <div style="background: var(--gray-700)"></div><div style="background: var(--gray-750)"></div>
  <div style="background: var(--gray-800)"></div><div style="background: var(--gray-850)"></div>
  <div style="background: var(--gray-900)"></div><div style="background: var(--gray-925)"></div>
  <div style="background: var(--gray-950)"></div><div style="background: var(--gray-1000)"></div>
</div>
```
