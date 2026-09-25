# Themes

Two themes: **dark** (the default) and **light**. They share everything except colour: grid, radii, sizes, type and motion are the same; only the colour tokens in [tokens.md](tokens.md) change.

## Theory

### One structure, two mappings
A theme is a set of values for the colour tokens (`--bg-*`, `--text-*`, `--icon-*`, `--line-*`, `--shadow-float`). The palette stays the same, components stay the same. That is the reason tokens exist: a button reads `--bg-accent`, and the theme decides whether that is near white or near black.

### How the themes differ
| | dark | light |
|---|---|---|
| canvas | the darkest grey | a light grey |
| islands | one step lighter than the canvas | white |
| cards, controls | one step lighter than the island | a grey tint on white |
| menus | a step lighter, soft shadow | white, shadow does the separating |
| primary text | near white | near black |
| accent (primary button, focus) | near white fill, dark text | near black fill, white text |
| scrim | dark and dense | dark and light (32 %) |

The logic is the same in both: the canvas recedes, islands carry the content, the highest contrast element is the main action.

### Rules
- **Components never know about themes.** No `[data-theme="light"] .btn { … }` overrides, no palette variables, no hex. If something looks wrong in one theme, fix the token mapping, not the component.
- **Every screen works in both themes.** Check both before shipping.
- **Media is theme independent.** Video wells, scrims over media and glass controls use the same tokens in both themes, because they sit on images, not on the interface.
- **Images and illustrations** have transparent backgrounds; icons and drawn graphics use `currentColor`. Never bake a dark or light background into an asset.
- **The default follows the system:** `prefers-color-scheme` picks the theme until the user chooses one; the choice is remembered.
- **No flash of the wrong theme:** the theme is set by a tiny script in `<head>`, before the page paints.
- **Switching is instant.** Do not animate the theme change.
- **A theme can be scoped.** `data-theme` works on any element, so a part of the page can stay dark inside a light page (a video player, a code preview).

## CSS
The theme blocks are in [tokens.md](tokens.md): `:root, [data-theme="dark"]` holds the dark values, `[data-theme="light"]` the light ones and comes after it. Each block sets `color-scheme`, so native controls, scrollbars and form widgets follow the theme.

Set the theme before paint, first thing in `<head>`:
```html
<script>
  (function () {
    var saved = localStorage.getItem('theme');
    var system = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.dataset.theme = saved || system;
  })();
</script>
```

Switching:
```js
// choice: 'system' | 'light' | 'dark'
function setTheme(choice) {
  if (choice === 'system') localStorage.removeItem('theme');
  else localStorage.setItem('theme', choice);
  applyTheme();
}
function applyTheme() {
  var saved = localStorage.getItem('theme');
  var system = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = saved || system;
}
matchMedia('(prefers-color-scheme: light)').addEventListener('change', applyTheme);
```

## Practice
The theme switch is a `.seg` in settings with three options. The selected one is the user's choice, "System" when nothing is saved.
```html
<div class="field">
  <label class="label">Theme<span class="hint">System follows your device</span></label>
  <div class="seg seg-sm">
    <button class="on" aria-pressed="true" onclick="setTheme('system')">System</button>
    <button onclick="setTheme('light')">Light</button>
    <button onclick="setTheme('dark')">Dark</button>
  </div>
</div>
```

A quick toggle in a toolbar is an icon button: `sun` shows in the dark theme (switches to light), `moon` in the light theme.
```html
<button class="btn btn-icon" aria-label="Switch to light theme" onclick="setTheme('light')"><i class="icon ph-fill ph-sun"></i></button>
```

A dark area inside a light page:
```html
<section class="island" data-theme="dark">…video player…</section>
```

```css
/* wrong: the component knows about the theme */
[data-theme="light"] .card { background: #F2F4F7; }
@media (prefers-color-scheme: light) { .btn { color: black; } }

/* right: the component reads tokens, the theme block maps them */
.card { background: var(--bg-2); }
```
