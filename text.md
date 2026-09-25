# Text

Editorial policy for every string in the interface: headings, buttons, labels, hints, errors, empty states, demo data.

## Theory

### Case
- **No uppercase.** No `text-transform: uppercase`, no all caps strings, no small caps. This includes section labels, badges, buttons and table headers.
- **Sentence case everywhere.** Only the first word and proper names are capitalised: "Create project", not "Create Project".
- Capitals only where a name or an abbreviation requires them: "GitHub", "API", "PDF".

### Dashes
- **No long dashes in copy.** No em dash (—) and no spaced en dash ( – ) between phrases. Use a comma, a colon or a new sentence instead.
- A short hyphen (-) only inside words: "e-mail", "кто-то".
- Numeric ranges use an en dash without spaces: "15–16 px", "9:00–18:00".

### Russian: non-breaking spaces
- A non-breaking space between a preposition and the word after it, so a preposition never ends a line: `в&nbsp;проекте`, `на&nbsp;странице`, `с&nbsp;нуля`.

## Practice
In HTML write `&nbsp;` or the U+00A0 character; in JS strings use ` `.

```html
<!-- right -->
<h2 class="t-label">Последние проекты</h2>
<p class="t-body c-secondary">Сохранено. Изменения видны в&nbsp;проекте и&nbsp;на&nbsp;странице.</p>
<button class="btn btn-primary">Создать проект</button>

<!-- wrong -->
<h2 class="t-label" style="text-transform: uppercase">Последние Проекты</h2>
<p>Сохранено — изменения видны в проекте</p>
<button class="btn btn-primary">СОЗДАТЬ</button>
```

Before shipping, search the generated copy for `—`, ` – `, `text-transform` and words in all caps.
