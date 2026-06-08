# CLAUDE.md — NuToast Portfolio Project

Read this file before doing anything else in every session.

---

## Project Overview

This is a single-page portfolio case study website for a UX design project: the NuToast B2B website redesign. The audience is design hiring managers and senior designers. The goal is to communicate design thinking clearly and confidently — not to impress with animation, but to show rigorous process and strong judgment.

---

## Tech Stack

- Plain HTML + CSS + vanilla JS (no frameworks)
- Single file: `index.html`, linked to `nutoast.css`
- No build tools, no npm, no dependencies
- Must run by opening `index.html` directly in a browser

---

## Style Consistency

Before writing any CSS, read `@style.css` to understand the existing portfolio's layout patterns — spacing scale, font sizes, section structure, card styles. This NuToast page must feel like it belongs in the same portfolio.

**Do not modify `style.css` under any circumstances.** It is a global file shared across all portfolio entries.

All new styles for this project go into a new file: `nutoast.css`. Link it in `index.html` after the existing stylesheet:

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="nutoast.css">
```

If a pattern already exists in `style.css` (e.g. a card class, a section wrapper), reuse it. Only add to `nutoast.css` what is genuinely new or specific to this project.

---

## Colors (use these CSS variables, do not invent others)

```css
:root {
  --green-base: #666E13;
  --green-dark: #44490D;
  --green-darkest: #33370A;
  --pistachio: #E7EA6B;
  --pistachio-light: #F3F5B5;
  --cream: #FEFFF7;
  --beige: #FFFFF2;
  --neutral-mid: #B2B689;
  --neutral-dark: #6E6E6E;
  --text-primary: #1A1A1A;
  --text-secondary: #4A4A4A;
}
```

---

## Typography

- Headlines: `DM Sans` (Bold / SemiBold) — load from Google Fonts
- Body: `Roboto` (Regular / Medium) — load from Google Fonts
- Do not use Inter, Arial, or system fonts

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700;600&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
```

---

## Layout Rules

- Max content width: 1100px, centered
- Section padding: 80px top/bottom on desktop
- Mobile breakpoint: 768px (but mobile is lower priority — get desktop right first)
- Before/After pairs: always side-by-side on desktop, stacked on mobile

---

## Tone & Content Rules

- Every section headline states the conclusion, not the phase name
  - ✅ "Visitors were leaving before seeing what NuToast sells"
  - ❌ "Research Phase"
- Data numbers should be displayed large (use a big-number style)
- Keep body copy tight — no paragraph longer than 3 sentences
- Before/After labels: use "BEFORE" in `--neutral-dark` and "AFTER" in `--green-base`

---

## What NOT to do

- Do not add sections not listed in PROMPT.md
- Do not invent content — use only what is in PROMPT.md
- Do not use purple, blue, or generic SaaS color schemes
- Do not add a navigation bar unless explicitly asked
- Do not add footer social links or contact forms
- Do not animate anything on first pass — get structure and content right first
