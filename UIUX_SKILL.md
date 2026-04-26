# KINAWA ENERGY — UI/UX SKILL GUIDE
**Compiled from:** Laws of UX · Nielsen's 10 Heuristics · Refactoring UI · Anthony Hobday's Safe Rules  
**Applied to:** kinawaenergy.com — professional solar advisory static site  
**Version:** 1.0 · April 2026

---

## TABLE OF CONTENTS
1. [Psychology & UX Laws](#1-psychology--ux-laws)
2. [Typography System](#2-typography-system)
3. [Color System](#3-color-system)
4. [Spacing & Layout](#4-spacing--layout)
5. [Shadows, Borders & Depth](#5-shadows-borders--depth)
6. [Buttons & CTAs](#6-buttons--ctas)
7. [Forms & Inputs](#7-forms--inputs)
8. [Cards & Components](#8-cards--components)
9. [Animation & Motion](#9-animation--motion)
10. [Conversion Principles](#10-conversion-principles)
11. [Accessibility Standards](#11-accessibility-standards)
12. [Quick-Reference Rules (25 Safe Rules)](#12-quick-reference-25-safe-rules)
13. [Solar Consulting Specifics](#13-solar-consulting-specifics)
14. [Implementation Checklist](#14-implementation-checklist)

---

## 1. PSYCHOLOGY & UX LAWS

### Applied to Kinawa Energy

| Law | Rule | Applied On Site |
|-----|------|-----------------|
| **Aesthetic-Usability Effect** | Beautiful design is perceived as more usable — credibility is visual | Dark navy hero, lime accents, clean whitespace all signal professionalism |
| **Hick's Law** | Reduce choices → faster decisions | Nav: max 7 items; CTAs: 1 primary per section |
| **Jakob's Law** | Use conventions users already know | Logo top-left, sticky nav, hamburger mobile, footer contact |
| **Fitts's Law** | Bigger targets = easier to click | Buttons min 54px height, 15px–30px padding, generous touch zones |
| **Miller's Law** | 7±2 items in working memory | Service cards: max 6 per grid; nav: max 7 items |
| **Serial Position Effect** | Users remember first and last items best | Most important nav item first; every page ends with CTA |
| **Von Restorff Effect** | Contrast makes things memorable | Lime `#AEF977` CTAs stand out against dark navy and white |
| **Peak-End Rule** | Users remember peak moments + endings | Strong hero impression; every page ends with a CTA band |
| **Zeigarnik Effect** | Incomplete tasks are remembered | "See how we solved this →" project teasers drive portfolio clicks |
| **Goal-Gradient Effect** | Closer to goal = more motivated | Multi-step form shows "Step X of 3" to reduce drop-off |
| **Law of Proximity** | Close = related | Cards grouped by service; service details tightly spaced |
| **Law of Common Region** | Bounded areas = grouped content | Cards, panels, and frames group related information |
| **Chunking** | Group info into digestible units | Stats strip (4 metrics), service cards (3), project cards (3) |
| **Occam's Razor** | Simplest solution wins | No decorative elements; every visual serves a purpose |
| **Cognitive Load** | Minimize mental effort | Short sentences; no jargon; visual hierarchy guides the eye |

---

## 2. TYPOGRAPHY SYSTEM

### Kinawa Type Scale

```
Font families:
  Headings/UI:   Inter (200–800)
  Italic accent: Playfair Display (400–500 italic)

Size scale (rem / px):
  Display:  clamp(2.6rem, 6vw, 3.5rem)    ← H1
  Title:    clamp(2rem, 4vw, 3rem)          ← H2
  Section:  clamp(1.4rem, 2.5vw, 2.5rem)   ← H3
  Card:     clamp(1.2rem, 2vw, 2.25rem)    ← H4
  Body:     1rem (16px) / line-height 1.875
  Small:    0.875rem (14px) / line-height 1.6
  Micro:    0.72rem (11.5px) for eyebrows/labels

Letter spacing rules:
  H1–H2:    -0.04em  (tight for large impact)
  H3–H4:    -0.03em
  Body:     normal (0)
  Eyebrows: +0.18em  (wide for small caps effect)
  Buttons:  -0.04em  (tight for uppercase)
```

### Rules
- **Body minimum:** 16px always — prevents mobile zoom on focus
- **Line length:** max-width 65ch on text blocks (~600–700px)
- **Line height:** 1.875 body · 1.1 display · 1.5 captions
- **Two typefaces max:** Inter primary + Playfair Display for italic emphasis
- **Weight:** 600–700 for headings · 400 for body · 600 for emphasis
- **Letter spacing scales inversely:** bigger text = tighter; smaller text = wider
- **Never italic for emphasis** — use bold (600) instead; more legible
- **Eyebrow labels:** 0.72rem · 600 weight · +0.18em · uppercase · muted color

---

## 3. COLOR SYSTEM

### Kinawa Aerra Palette

```css
/* Primary palette */
--lime:      #AEF977;  /* Primary accent — buttons, hovers, highlights */
--lime-dk:   #8fd455;  /* Hover state for lime */
--teal:      #087589;  /* Secondary — links, teal metric cards */
--navy:      #0E2F3E;  /* Dark sections — services, stats, footer */
--dark:      #181818;  /* Near-black for text (NOT pure black) */
--body:      #626262;  /* Body text — NOT pure grey, slightly warm */
--white:     #FFFFFF;  /* Backgrounds */
--off-white: #F8F6F2;  /* Warm-tinted off-white for soft sections */
--beige:     #EBE7E0;  /* Warm beige — form backgrounds, soft sections */
--form-bg:   #F5F3EF;  /* Form input backgrounds */

/* Status */
--success:   rgba(174,249,119,0.25);  /* lime-tinted success */
--error:     rgba(178,58,58,0.12);    /* red-tinted error */
```

### Color Rules

1. **Near-black `#181818` not pure black** — eliminates harsh contrast
2. **Near-white `#F8F6F2` not pure white** — adds warmth and depth
3. **Saturated neutrals:** `--body #626262` has slight warmth (not `#666`)
4. **High contrast for CTAs:** lime `#AEF977` on navy `#0E2F3E` = 8.2:1 ratio ✓
5. **Color never alone:** errors use color + label + icon; statuses use text + color
6. **Distinct brightness:** lime (light) · teal (medium) · navy (dark) = clear hierarchy
7. **Warm palette consistency:** All neutrals tinted warm (beige undertone) — never mix warm + cool
8. **Section alternation:** white → off-white → navy → white (visual rhythm)
9. **Eyebrow labels:** `--muted #888` — de-emphasized but readable
10. **Focus states:** teal outline `rgba(8,117,137,0.5)` — visible, on-brand

---

## 4. SPACING & LAYOUT

### 8px Base System

```
Scale:  4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128
        (every measurement is a multiple of 4 or 8)

Section vertical:   clamp(4.5rem, 9vw, 9.375rem)  ← ~72px–150px
Between cards:      1.25rem (20px) or 1.5rem (24px)
Card padding:       clamp(1.4rem, 2.2vw, 2rem)      ← 22–32px
Container padding:  32–48px outer · 16–24px inner
```

### Spacing Rules

- **Outer padding ≥ inner padding:** Container edges must breathe more than internal gaps
- **Section spacing:** 96–150px between major sections on desktop
- **Card gap:** 20–24px between grid items
- **Related items:** 8–16px apart (same card/group)
- **Unrelated sections:** 64px+ apart (new topic)
- **12-column grid:** Max-width 1200px · Gutters 24px
- **Whitespace is content:** Empty space builds sophistication — don't fill every pixel
- **Measure between contrast edges:** Space = distance between dark boundaries, not arbitrary margins

### Layout Rules

- **One H1 per page** — clear hierarchy
- **Left-align body text** — right-align only for data tables
- **Grid columns:** 3-up on desktop · 2-up on tablet · 1-up on mobile
- **Sticky header:** always visible; user never has to scroll to navigate
- **Max content width:** 65ch for paragraphs; 1200px for full layouts

---

## 5. SHADOWS, BORDERS & DEPTH

### Elevation Scale

```css
/* No shadow  — flush elements (inputs, nav links) */
/* Level 1    — cards, panels */
box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.06);

/* Level 2    — dropdowns, hover cards */
box-shadow: 0 4px 8px rgba(0,0,0,0.09), 0 12px 32px rgba(0,0,0,0.08);

/* Level 3    — modals, floating panels */
box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 24px 64px rgba(0,0,0,0.12);
```

### Shadow Rules
- **Double blur relative to offset:** 4px offset = 8px blur · 8px offset = 16px blur
- **Consistent light source:** top-left 45° for all shadows
- **Dark sections skip shadows:** Use `rgba(255,255,255,0.08)` background shifts instead
- **Layered shadows = more realism:** 2 layers (contact shadow + ambient shadow)
- **Low opacity:** 6–12% max for non-focal elements; 12–18% for focal cards

### Border Rules
- **Fewer borders is better:** Use background color shifts or spacing instead of borders
- **Contrast both sides:** Border must read on both its container AND the page background
- **Light sections:** `1px solid rgba(0,0,0,0.07)` — subtle but present
- **Dark sections:** `1px solid rgba(255,255,255,0.10)` — shows on navy
- **Nested corner radius formula:** Inner radius = outer radius − gap distance
  - Example: outer card 24px · inner element gap 16px → inner element = 8px
- **No adjacent hard divides:** Never combine border + shadow + background shift simultaneously

---

## 6. BUTTONS & CTAs

### Button System

```
Primary   — lime fill  (#AEF977) · dark text · lime hover (darker)
Secondary — outline    (dark border) · hover fills lime
Ghost     — white outline · for dark/navy backgrounds
Text/Link — no border · underline hover · arrow suffix →
```

### Button Rules
- **Pill shape:** 56px border-radius — approachable, modern
- **Size:** min 54px height · padding 15px vertical 30px horizontal
- **Padding ratio:** Horizontal = 2× vertical (30px H · 15px V)
- **Font:** 15px · 600 weight · uppercase · -0.04em letter-spacing
- **One primary CTA per section** — too many dilutes hierarchy
- **States:** default · hover · active · disabled (60% opacity) · loading (spinner)
- **Touch targets:** 44×44px minimum on mobile
- **CTA copy rules:**
  - Action verb first: "Get a Free Consultation" not "Consultation Available"
  - Specific: "Schedule 30-min Call" beats "Contact Us"
  - Benefit-first: "Reduce Energy Costs →" beats "Learn More"
- **Placement:** hero · mid-page after benefit statement · end of page
- **Hover:** translateY(-2px) + box-shadow increase — tactile feedback

---

## 7. FORMS & INPUTS

### Form Design System

```
Input height:    52–56px
Input padding:   0.9rem top/bottom · 1rem left/right
Font size:       1rem (16px) — prevents mobile zoom
Border:          1px solid rgba(0,0,0,0.12)
Background:      var(--form-bg) #F5F3EF
Border-radius:   20px (--radius-md)
Focus border:    var(--teal) #087589
Focus shadow:    0 0 0 3px rgba(8,117,137,0.12)
```

### Form Rules
- **Labels above inputs** — never placeholder-as-label (disappears on focus)
- **Every input has explicit `<label>` tag** with `for` attribute
- **Required fields:** asterisk (*) + aria-required="true"
- **Inline validation:** real-time feedback as user types
- **Error messages:** plain language, next to the field, "Phone must include country code"
- **Success state:** visible confirmation message + page scroll to it
- **Honeypot field:** hidden anti-spam `<input type="text" name="bot-field" tabindex="-1">`
- **Single column** on mobile; 2-col grid on desktop for short fields
- **Textarea min-height:** 160px — enough to write a meaningful message
- **Submit button:** action-specific text, disable after first click to prevent double-submit
- **Multi-step:** Show "Step X of Y" progress; preserve data between steps

---

## 8. CARDS & COMPONENTS

### Card Hierarchy System

```
Service cards:    White background · 24px padding · 1px border · hover: translateY(-4px)
Project cards:    White · overflow: hidden (image flush to top) · hover shadow increase
Article cards:    Feature = navy dark · Story = horizontal image+text · hover: translateY(-4px)
Metric cards:     Teal fill OR lime fill · min 260px height · no box-shadow
Assurance cards:  White or navy variant · 20px border-radius · 1.4rem padding
FAQ items:        Transparent on navy · 1px white border · expand via grid-template-rows
```

### Component Rules

**Every card type is consistent:**
- Same padding within its type
- Same border-radius (20px cards · 32px panels)
- Same hover behavior (lift -4px + shadow increase)
- Same typography hierarchy (kicker → H3 → body → CTA)

**Icon badges:**
- 52×52px · 16px border-radius · lime background · dark icon
- Never use icon alone — always pair with text label

**Eyebrow labels:**
- 0.72rem · 600 weight · +0.18em letter-spacing · UPPERCASE
- Small bullet prefix (8px lime dot `::before`)
- Muted color (`#888`) — contextual, not primary attention

**Pills/Tags:**
- 32px min-height · 999px radius · 0.72rem font
- Default: dark 4% background · warm variants: lime 25% / teal 12%
- UPPERCASE · 0.08em letter-spacing

**Section headers:**
- 2-col grid: heading left (1fr) · description right (0.7fr)
- Aligned to bottom of grid for visual harmony
- Eyebrow above H2 · description in muted color

---

## 9. ANIMATION & MOTION

### Motion System

```
Micro-interactions:   150–200ms  (hover, focus, active)
UI transitions:       200–300ms  (dropdown open, mobile nav)
Content reveals:      400–600ms  (scroll-triggered fades)
Page transitions:     300ms      (cross-fade)

Easing:
  Entrances:   ease-out   cubic-bezier(0, 0, 0.2, 1)
  Exits:       ease-in    cubic-bezier(0.4, 0, 1, 1)
  Standard:    ease-in-out cubic-bezier(0.4, 0, 0.2, 1)
  Spring:      cubic-bezier(0.34, 1.56, 0.64, 1)  (slight bounce)
```

### Kinawa Motion Inventory

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Card hover | translateY(-4px) + shadow | 250ms | ease-out |
| Button hover | translateY(-2px) + glow | 180ms | ease-out |
| FAQ panel | grid-template-rows 0fr→1fr | 220ms | ease |
| Scroll reveals | opacity 0→1 + translateY 24→0 | 550ms | ease |
| Nav dropdown | opacity + translateY | 180ms | ease-out |
| Hero counter | count 0→target | 1200ms | ease-out |
| Service stacking | GSAP scale zoom on scroll | scrub | — |
| Mobile nav | slide in | 250ms | ease-out |
| Swiper slides | opacity + scale | 350ms | ease |

### Motion Rules
- **Purposeful only:** Motion guides attention or provides feedback — never decorative
- **prefers-reduced-motion:** All animations disabled when OS setting is on
- **No auto-play:** Video/GIF only on user interaction
- **Stagger siblings:** nth-child delay 80ms per card in reveal grids
- **No simultaneous multiple animations** — one thing moves at a time
- **GSAP for complex:** ScrollTrigger stacking services · Counter increments
- **CSS for simple:** Hover states · Transitions · FAQ panels

---

## 10. CONVERSION PRINCIPLES

### Kinawa Conversion Architecture

```
AWARENESS
  Blog posts → SEO traffic → Homepage
  Keywords: "solar consulting Kenya", "solar feasibility Nairobi"

CONSIDERATION
  Toolkit (ROI calculator) → Deliverables page → Portfolio
  Interactive tools with inline CTA: "Get a professional assessment"

DECISION
  Contact page → Form → 24hr response → Consultation
  CTA types: Free Consultation · Request Quote · Enroll Training
```

### CTA Strategy

**Placement rules:**
1. **Hero section:** Primary + Secondary CTA always present
2. **After every benefit statement:** "See how this works →"
3. **End of services section:** "Explore deliverables" or "Get a quote"
4. **Portfolio closing:** "Have a similar project? Talk to our team"
5. **Every blog post bottom:** "Need help with your project? →"
6. **Footer:** Full CTA band before footer links

**Copy rules:**
- "Get a Free Consultation" (value = free)
- "Schedule a Consultation" (action = schedule)
- "Request a Quote" (specificity = quote)
- "Enroll Now / Inquire About Training" (training page)
- Never: "Submit" · "Click Here" · "Learn More" (vague)

### Trust Signals

**On every page:**
- "20+ Projects" · "5+ MW" stats (credibility numbers)
- Response time: "We typically respond within 24 hours"
- Location: "Nairobi, Kenya" (local trust)

**Contact page:**
- Phone number (click-to-call on mobile)
- Email with mailto link
- Physical address
- Business hours
- What happens next (process description)

**Portfolio/About:**
- Real project images (not stock)
- Named client types with locations
- Challenge → Approach → Outcome structure
- Specific system sizes (850 kWp, 420 kWp — shows real scale)

### ROI Calculator (Toolkit)
- Input: monthly bill + target offset %
- Output: estimated system size + budget range + payback years
- **Email gate optional** before showing results
- Inline CTA: "Get a professional assessment →"

---

## 11. ACCESSIBILITY STANDARDS

### WCAG 2.1 AA Compliance Targets

| Requirement | Standard | Kinawa Implementation |
|------------|----------|----------------------|
| Body text contrast | ≥4.5:1 | `#181818` on `#fff` = 19.6:1 ✓ |
| Body text contrast | ≥4.5:1 | `#626262` on `#fff` = 5.7:1 ✓ |
| CTA contrast | ≥4.5:1 | `#181818` on `#AEF977` = 9.2:1 ✓ |
| White on navy | ≥4.5:1 | `#fff` on `#0E2F3E` = 12.3:1 ✓ |
| Focus indicators | Visible | Teal outline 3px |
| Touch targets | ≥44×44px | Buttons 54px height ✓ |
| Body font size | ≥16px | 16px / 1.875lh ✓ |
| Images | Alt text | All `<img>` have descriptive alt ✓ |

### Semantic HTML Requirements

```html
<header>   site-header (nav + logo)
<nav>      primary navigation
<main>     page content
<section>  logical content sections (with aria-label if needed)
<article>  self-contained content (project cards, blog posts)
<aside>    supplementary content
<footer>   site footer
<h1>       ONE per page (page title)
<h2>       section headings
<h3>       card/component headings
```

### Form Accessibility

```html
<!-- Every input -->
<div class="field">
  <label for="contact-email">Email address</label>
  <input id="contact-email" name="email" type="email"
         required aria-required="true"
         aria-describedby="email-error">
  <span id="email-error" class="field-error" aria-live="polite">
    Please enter a valid email address
  </span>
</div>
```

### Keyboard Navigation
- `Tab` — cycles all interactive elements in logical DOM order
- `Enter` / `Space` — activates buttons
- `Escape` — closes dropdowns, modals
- `Arrow keys` — within navigation menus
- Skip link: `<a href="#main-content" class="sr-only">Skip to main content</a>`

---

## 12. QUICK-REFERENCE: 25 SAFE RULES

These are always correct — apply without debate:

1. Use near-black `#181818` and near-white `#F8F6F2` (never pure black/white)
2. Saturate all neutrals with subtle color tints (under 5% saturation)
3. High contrast for CTAs · Low contrast for structure (shadows, borders)
4. Every design element must have a clear purpose — no decoration
5. Align optically, not mathematically (visual center ≠ geometric center)
6. Letter spacing scales inversely with text size (bigger = tighter)
7. Container borders must contrast with BOTH container AND page background
8. Align every element to something using coherent logic
9. Colors in a palette need distinct brightness levels to avoid competition
10. Keep warm palette consistently warm — never mix warm and cool neutrals
11. Use 8px base spacing scale: 8 · 16 · 24 · 32 · 40 · 48 · 64 · 80
12. Measure spacing between high-contrast edges, not arbitrary element bounds
13. Elements closer to viewer appear lighter (proximity creates depth)
14. Double the shadow blur relative to vertical offset (4px offset = 8px blur)
15. Simple background + complex foreground (never complex on complex)
16. Background → container brightness shift: max 12% dark · 7% light
17. Outer padding ≥ inner padding (container breathes more than internal gaps)
18. Body text minimum 16px · line length 60–80 characters
19. Button padding ratio: horizontal = 2× vertical (30px H · 15px V)
20. Max 2 typefaces — one personality (display) + one readability (body)
21. Nested corner radius: inner = outer − gap (30px outer − 20px gap = 10px inner)
22. Avoid adjacent hard divides (no border + shadow + bg change together)
23. Skip shadows in dark interfaces — use opacity shifts instead
24. One primary CTA per viewport / section — hierarchy collapses with multiples
25. Design for the worst case: slowest device, smallest screen, worst connection

---

## 13. SOLAR CONSULTING SPECIFICS

### Buyer Journey Content Map

| Stage | User Question | Content Type | Location |
|-------|--------------|--------------|----------|
| Awareness | "Do I need solar?" | Blog tips, FAQs | /blog |
| Interest | "What does it cost?" | ROI Toolkit | /toolkit |
| Consideration | "Can they deliver?" | Portfolio, Case Studies | /portfolio |
| Intent | "How do I get started?" | Service details | /deliverables |
| Decision | "I'm ready" | Contact form | /contact |

### Industry Credibility Checklist

- [ ] Display system sizes in kWp (shows real scale, not vague language)
- [ ] Show county/location names (local market knowledge)
- [ ] Use "Challenge → Approach → Outcome" structure for projects
- [ ] Mention EPRA, PMP, T3 credentials (specific, verifiable)
- [ ] Quantify impact: "850 kWp" · "20+ projects" · "5+ MW"
- [ ] Acknowledge donor/NGO project experience (East Africa market)
- [ ] Show borehole solar (differentiates from generic solar companies)
- [ ] Position as advisor/Owner's Engineer (not installer — key differentiator)

### Technical Content for Dual Audiences

**For executives/decision-makers:**
- Lead with ROI, payback period, risk reduction
- Keep technical detail behind "expand" or in portfolio case studies
- Emphasize independence ("not an installer — no conflicts of interest")

**For facilities managers/engineers:**
- Provide system sizing specs (kWp, kWh, kVA)
- Explain QA/QC process detail
- Include commissioning and performance testing methodology

### Solar-Specific CTAs (with conversion intent)

```
"Get a Free Consultation"   — awareness/interest stage
"Request a Site Assessment" — consideration stage
"Schedule a Feasibility Study" — intent stage
"Request a Quote"           — decision stage
"Enroll in Training"        — training audience
"Use the Solar Estimator"   — toolkit (mid-funnel)
```

---

## 14. IMPLEMENTATION CHECKLIST

### Visual Design
- [x] Near-black `#181818` / near-white `#F8F6F2` in use
- [x] 8px spacing scale applied throughout
- [x] Two typefaces: Inter + Playfair Display
- [x] Pill buttons 56px radius · 15px/30px padding
- [x] Lime `#AEF977` primary accent
- [x] Navy `#0E2F3E` dark sections (services, footer)
- [x] Teal `#087589` secondary (links, metric cards)
- [x] Consistent card border-radius (20px cards, 32px panels)
- [x] Layered shadows (2-layer ambient + contact)

### Typography
- [x] Body text 16px / 1.875 line-height
- [x] H1 clamp(2.6rem, 6vw, 3.5rem)
- [x] Letter spacing: -0.04em headings · +0.18em eyebrows
- [x] Eyebrow labels: uppercase · micro size · muted color

### Interactions
- [x] Hover: translateY(-2px) + shadow increase on buttons
- [x] Card hover: translateY(-4px) + shadow
- [x] FAQ: smooth grid-template-rows expand
- [x] Scroll reveals: IntersectionObserver with stagger
- [x] GSAP ScrollTrigger: service card stacking zoom
- [x] Swiper: portfolio center-mode carousel
- [x] Splide: clients auto-scroll strip
- [x] Counter animation on `.counter[data-target]`
- [x] prefers-reduced-motion respected in initReveals()

### Conversion
- [x] Primary CTA in hero: "Get a Free Consultation"
- [x] Secondary CTA: "View Our Projects"
- [x] CTA band on homepage (dark navy)
- [x] Nav accordion: 4 user-intent pathways
- [x] Every page has a closing CTA
- [x] Contact form: 6 fields · all required except company
- [x] Form: honeypot anti-spam field
- [x] Form: success/error status messages
- [x] Footer: CTA + full contact details

### Accessibility
- [x] Semantic HTML: `<header>` · `<nav>` · `<main>` · `<section>` · `<footer>`
- [x] All `<img>` have descriptive `alt` attributes
- [x] All form inputs have `<label>` with `for` attribute
- [x] `.sr-only` class for screen-reader-only content
- [x] Keyboard-accessible FAQ accordion (button elements)
- [x] Mobile nav toggle uses `aria-expanded`
- [x] Focus indicators: teal 3px outline on interactive elements
- [x] Color contrast: all combinations ≥4.5:1

### Performance
- [ ] Images: WebP format with JPEG fallback
- [ ] Images: `loading="lazy"` on below-fold images
- [ ] CSS: Single file, no unused rules
- [ ] JS: Deferred load for GSAP/Swiper/Splide CDN libraries
- [ ] Fonts: `font-display: swap` on Google Fonts
- [ ] Target: Lighthouse Performance ≥90 · Accessibility ≥90 · SEO ≥95

---

*This UIUX_SKILL.md is the single source of truth for all design decisions on kinawaenergy.com. Every addition, modification, or new component should be checked against these rules before implementation.*
