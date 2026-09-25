# Text

Editorial policy for every string in the interface: headings, buttons, labels, hints, errors, empty states.

## Case
- **No uppercase.** No `text-transform: uppercase`, no all caps strings, no small caps. This includes section labels, badges, buttons and table headers.
- **Sentence case everywhere.** Only the first word and proper names are capitalised: "Create project", not "Create Project".
- Capitals only where a name or an abbreviation requires them: "GitHub", "API", "PDF".

## Dashes
- **No long dashes in copy.** No em dash (—) and no spaced en dash ( – ) between phrases. Use a comma, a colon or a new sentence instead.
  - "Saved — changes are live" → "Saved, changes are live" or "Saved. Changes are live."
- A short hyphen (-) only inside words: "e-mail", "кто-то".
- Numeric ranges use an en dash without spaces: "15–16 px", "9:00–18:00".

## Russian: non-breaking spaces
- Put a non-breaking space between a preposition and the word after it, so a preposition never ends a line: `в&nbsp;проекте`, `на&nbsp;странице`, `с&nbsp;нуля`.
- In HTML write `&nbsp;` or the U+00A0 character; in JS strings use ` `.

## Rules
- These apply to every string you write, including placeholder copy and demo data.
- Check generated copy before shipping: search it for `—`, ` – ` and uppercase words.
