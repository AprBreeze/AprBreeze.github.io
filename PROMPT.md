# PROMPT.md — NuToast Portfolio: Full Build Instructions

Read CLAUDE.md first. Then follow this document exactly.

---

## Your Task

Build a single-page portfolio case study in a new file: `nutoast.html`.
Link `style.css` first, then `nutoast.css` for any new styles.
Follow the HTML structure and class patterns from `@ux-project-template.html` exactly — reuse its layout, class names, and component patterns. Do not invent a new structure.

On first pass: get structure, content, layout, and image placeholders right.
Do not add scroll animations or transitions yet.

---

## HTML Structure to Follow

The template uses these structural patterns — replicate them:

```html
<!-- Full-width image banner at top -->
<div class="image-container">
  <img src="..." class="full-width-img" style="border-radius: 0px;">
</div>

<!-- Page title -->
<section class="portfolio-header">
  <h1>...</h1>
  <p>...</p>
</section>

<!-- All content inside .case-study-container -->
<div class="case-study-container">

  <!-- Project meta row -->
  <div class="project-info">
    <div class="info-item"><span class="info-label">...</span>...</div>
  </div>

  <!-- Two-column section: 25% label | 75% content -->
  <section class="horizontal-section">
    <div class="content-wrapper" style="max-width: 25%;">
      <h2 class="section-title-2">Section Title</h2>
    </div>
    <div style="flex: 1; margin-left: 2rem;">
      <!-- content here -->
    </div>
  </section>

</div>

<!-- Full-width phase divider (accent color background) -->
<div class="case-study-container" style="background-color: [COLOR]; max-width: 100%; padding: 30px;">
  <div class="case-study-container" style="padding: 0;">
    <section style="text-align: center; margin: 60px 0;">
      <h1 class="section-title-2" style="color: white;">Phase Title</h1>
    </section>
  </div>
</div>

<!-- Dark background section -->
<div style="background-color: #000000; max-width: 100%; padding: 30px;">
  <div class="case-study-container">
    <!-- content with white text -->
  </div>
</div>
```

Use `--green-base` (#666E13) as the accent color for phase dividers (replacing the blue #006AC3 from the template).

---

## Image Placeholders

Wherever an image is needed, use this placeholder pattern:

```html
<div class="image-container" style="margin: 2rem 0;">
  <div style="background-color: #E8E8E8; width: 100%; aspect-ratio: 16/9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <p style="color: #999; font-family: 'Roboto', sans-serif; font-size: 14px;">[IMAGE PLACEHOLDER: description of what goes here]</p>
  </div>
</div>
```

Replace the description with what the image should show (e.g. "NuToast homepage before/after comparison").

---

## Page Content

### Header

Full-width image banner placeholder at the very top:
- Placeholder label: `[IMAGE PLACEHOLDER: NuToast project hero banner]`
- Aspect ratio: 21/9 (wide cinematic banner)

Portfolio header:
- H1: `NuToast Website Redesign`
- Subtitle: `Turning a high-traffic B2B website into a lead conversion engine`

---

### Project Info Row

| Label | Content |
|-------|---------|
| Role | UX Researcher, UX Designer |
| Duration | 12 weeks (Jan–Mar 2026) |
| Team | 5 Designers |
| Methods | IA Audit, Stakeholder Interviews, Competitor Benchmark, High-Fidelity Design, WordPress Development, Usability Testing |

---

### Quick Summary (horizontal-section)

**Left:** `Quick Summary`

**Right:**
NuToast is a global B2B nut ingredient supplier. Despite steady website traffic, very few visitors converted into sales inquiries. We ran a full-cycle UX redesign: research, information architecture, visual design, WordPress implementation, and usability testing — all within 12 weeks.

---

## Phase Divider 1 — green background

Text: `Phase 1: Discover`

---

### The Problem (horizontal-section)

**Left:** `The Problem`

**Right:**
The site had traffic. It didn't have conversions.

Three stat blocks (display as large numbers using `barrier-item` or similar pattern from template):
- **2,413** — avg. monthly visitors
- **40%** — left without passing the homepage
- **1 in 5** — reached the contact page

Follow with:
> Despite steady traffic, NuToast's website wasn't converting visitors into leads. Procurement buyers — the primary audience — were dropping off before they could evaluate a single product or reach the contact page.

Image placeholder below stats:
- `[IMAGE PLACEHOLDER: visitor drop-off funnel diagram]`

---

### Research (horizontal-section)

**Left:** `How We Found the Root Cause`

**Right:**
Three rounds of research. Three structural problems.

> We ran an IA audit, stakeholder interviews with procurement and sales professionals (3–5 years experience), and a competitor benchmark against Callebaut, MEC3, and Master Martini.

Three finding cards (use `finding-item` + `finding-header` + `finding-title` pattern):

**Finding 01 — Product information was buried**
Product categories sat below events, a promo video, and an About section. Procurement buyers had to scroll past 5 unrelated blocks before they could evaluate what NuToast sells.

**Finding 02 — Trust signals were hidden**
Certifications and production quality info were confined to the About page — missing from the homepage and product pages where procurement actually evaluates suppliers.

**Finding 03 — The contact form gave sales nothing to work with**
The generic form collected basic contact info and a free-text message box. Sales had to follow up just to understand what the inquiry was about.

Image placeholder below findings:
- `[IMAGE PLACEHOLDER: IA audit annotated screenshots]`

---

## Phase Divider 2 — green background

Text: `Phase 2: Define & Design`

---

### Design Decisions (horizontal-section)

**Left:** `Three Problems. Three Interventions.`

**Right:**
Each decision maps directly to a validated research finding.

---

#### Intervention 01 — Make it obvious what NuToast sells

Use `finding-item` pattern with label `Objective 01`:

**Before:** Product categories placed below a promo video, events, and an About section — procurement had to scroll past 5 unrelated blocks to find them.

**After:** Product categories shown immediately below the hero. Each card links directly to a product page. Key specs surfaced in the hero of every product detail page using scannable bullet cards.

*Buyers ask "do they make what I need?" first. If the answer isn't visible in seconds, they leave.*

Image placeholder:
- `[IMAGE PLACEHOLDER: Homepage before/after — product category placement]`

---

#### Intervention 02 — Build trust where buyers actually look

Use `finding-item` pattern with label `Objective 02`:

**Before:** Certifications and factory images existed only on the About page. The homepage hero was a logo and tagline — no scale, no proof of legitimacy.

**After:** Key numbers added to the hero. Certifications shown on product listing and detail pages. Factory images expanded into a navigable carousel.

*Credibility wasn't missing — it was in the wrong place.*

Image placeholder:
- `[IMAGE PLACEHOLDER: Trust signal distribution across pages — before/after]`

---

#### Intervention 03 — Collect the right information upfront

Use `finding-item` pattern with label `Objective 03`:

**Before:** Generic form: name, email, free-text message. No structure. Sales had to follow up just to understand the inquiry.

**After:** Structured fields added: role, region, product interest (required), estimated order volume. Every submission arrives ready for sales to qualify.

*A generic form puts the qualification burden on sales. Structured fields shift that burden to the form itself.*

Image placeholder:
- `[IMAGE PLACEHOLDER: Contact form before/after comparison]`

---

## Phase Divider 3 — green background

Text: `Phase 3: Build`

---

### Implementation (horizontal-section)

**Left:** `From Figma to a Live WordPress Site`

**Right:**
We didn't stop at a prototype. The full redesign was built as a live WordPress site on a staging environment, with the complete design system implemented across all pages.

Image placeholder:
- `[IMAGE PLACEHOLDER: WordPress live site screenshots]`

**Deliverables (use barriers-grid or finding-item pattern):**
- ✅ Live WordPress build
- ✅ High-fidelity Figma prototype
- ✅ Visual design system (color, typography, components)
- ✅ Sitemap & information architecture
- ✅ Interaction & design specification
- ✅ Usability testing report
- ✅ Competitor benchmarking report
- ✅ Stakeholder interview insights

**Honest Tradeoffs (use finding-item pattern):**

1. **Hero video → static image.** Video caused loading delays. Replaced with static image for reliable performance.
2. **Multi-select filters → not in staging.** Requires a paid plugin on the main account. Design is ready; implementation follows migration.
3. **Responsive design → out of scope.** Desktop-first by agreement with the client.

---

## Phase Divider 4 — green background

Text: `Phase 4: Test`

---

### Validation (horizontal-section)

**Left:** `Key Success Metrics`

**Right:**
The redesign worked.

Two large stats (use `barrier-item` or large-number pattern):
- **100%** — task completion rate across all 5 participants
- **4.0 / 5** — average confidence rating to initiate contact

*Tested with 5 NuToast sales and marketing professionals via WordPress prototype and think-aloud protocol.*

---

### User Testing Quotes (horizontal-section)

**Left:** `What Users Said`

**Right (use quote-item + quote-text pattern):**

> "The design feels professional, but it still makes the products look good enough to eat."
> — Participant 4

> "I can see the certifications, the factory, the numbers. It all feels transparent."
> — Participant 2

> "After seeing this page, I'd feel confident reaching out. Everything I need is right here."
> — Participants 1, 3 & 5

---

## Dark background section — Impact & Reflection

**Impact:**

**Impact 1 — Product visibility**
Procurement buyers can now assess product fit within seconds of landing on the homepage — the single biggest factor in whether they stay or leave.

**Impact 2 — Credibility where it matters**
Trust signals are now distributed across the homepage, product listing, and product detail pages instead of confined to one About page.

**Impact 3 — Sales-ready inquiries**
Every contact form submission arrives with structured context — role, product interest, order volume — so sales can qualify and respond without chasing basics.

**Reflection:**

**What I'd do differently**
Recruit external procurement participants for usability testing rather than relying on sales staff as a proxy. Sales understand buyer behavior well, but direct validation with procurement would strengthen the findings.

**What this project confirmed**
Research-driven design decisions are easier to defend and easier to implement. When every change traces back to a validated finding, the rationale is already built in.

---

## Footer

Reuse the existing contact section and footer from the template as-is. Do not modify them.

---

## First Pass Checklist

Before saying you're done, verify:
- [ ] Structure matches `@ux-project-template.html` — same classes, same layout patterns
- [ ] All 4 phase dividers are present and use `--green-base` as background color
- [ ] Every section that needs an image has a visible gray placeholder with a descriptive label
- [ ] All stats and quotes match this document exactly
- [ ] No placeholder lorem ipsum text anywhere
- [ ] Colors only use variables defined in CLAUDE.md
- [ ] Fonts are DM Sans and Roboto, loaded from Google Fonts
- [ ] `nutoast.css` exists and contains only NuToast-specific styles
- [ ] `style.css` has not been modified
