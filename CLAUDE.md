# CLAUDE.md — Kinawa Energy Static Site

**Project:** kinawaenergy.com  
**Document Version:** 2.0  
**Date:** April 2026  
**Design Reference:** Aerra Design System (wgl-dsites.net/aerra/homepage-2/)  
**Prepared For:** UI/UX Design & System Development Team

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Company Context](#2-company-context)
3. [Site Purpose & Goals](#3-site-purpose--goals)
4. [Tech Stack & Architecture](#4-tech-stack--architecture)
5. [Design System — Aerra](#5-design-system--aerra)
6. [Site Structure & Navigation](#6-site-structure--navigation)
7. [Page-by-Page Content Specification](#7-page-by-page-content-specification)
8. [Real Portfolio Projects](#8-real-portfolio-projects)
9. [Data Flow Architecture](#9-data-flow-architecture)
10. [Conversion Logic](#10-conversion-logic)
11. [SEO & Content Strategy](#11-seo--content-strategy)
12. [Forms & Lead Capture](#12-forms--lead-capture)
13. [File Structure](#13-file-structure)
14. [Performance Requirements](#14-performance-requirements)
15. [Build & Deployment](#15-build--deployment)

---

## 1. Project Overview

**Kinawa Energy** is a conversion-driven static website for `kinawaenergy.com`. This is a **core business development platform** engineered to drive qualified leads, strengthen market positioning, and support revenue growth across consultancy, project management, project oversight, and training.

### Design Philosophy

The site uses the **Aerra design system** — a sophisticated, professional template with:
- Lime `#AEF977` primary accent against dark navy `#0E2F3E`
- Inter (headings/UI) + Playfair Display (italic accents)
- Pill-shaped buttons (56px border-radius)
- Scroll-triggered reveal animations (GSAP + IntersectionObserver)
- Swiper center-mode portfolio carousel
- Dark page heroes with editorial two-column layout
- Section alternation: white → off-white/beige → navy

**Golden Rule:** Kinawa content stays constant. Design follows Aerra patterns exactly.

---

## 2. Company Context

### About Kinawa Energy

> "Powering Communities. Training People. Designing Solutions."

- **Founded:** 2024
- **Headquarters:** Nairobi, Kenya
- **Domain:** kinawaenergy.com
- **Phone:** +254 719 279 551
- **Email:** info@kinawaenergy.com
- **Training Platform:** kinawa.elevatika.com/courses/

### Vision
To strengthen energy access and livelihoods across East Africa by building technical capacity, supporting high-quality solar project delivery, and advancing clean energy adoption through training, consulting, and implementation partnerships.

### Mission
To provide practical solar technical training, professional energy consulting, system design support, project implementation oversight, and energy audit services through strategic partnerships that deliver reliable, efficient, and sustainable energy solutions across East Africa.

### Core Services — The 4 Pillars

| # | Pillar | Summary |
|---|--------|---------|
| 1 | **Training & Capacity Building** | Entry-level to professional certification; NGO cohorts; Women-in-Energy programs |
| 2 | **Engineering & Technical Consulting** | Feasibility studies, PVSyst/Helioscope simulations, Owner's Engineer, QA/QC |
| 3 | **Project Implementation Support** | EPC partnership management; BoQ development; installation oversight |
| 4 | **Energy & Electrical Audits** | Commercial/institutional audits; solar readiness assessments; load profiling |

### Key Differentiators
- Independent advisory — not an installer, no conflicts of interest
- Leveraged structure — leads projects without heavy overhead
- Deep community impact (off-grid, hybrid, borehole, rural electrification, irrigation)
- End-to-end oversight from feasibility study to O&M coordination
- EPRA T3 and PMP expertise

### Track Record
- **20+ solar projects** overseen across Kenya
- **5+ MW** systems delivered and managed
- **44 facilities** audited (EPRA-compliant energy & electrical audits)
- **8+ counties** served across Kenya
- High client satisfaction and repeat engagements

---

## 3. Site Purpose & Goals

### Primary Business Objectives
1. Generate qualified leads for consulting, oversight, audit, and training
2. Establish Kinawa as a trusted technical authority in C&I solar, NGO/donor solar, and private projects
3. Showcase real project experience to build credibility and reduce sales friction
4. Expand training revenue through structured program listings

### KPIs (3–6 months post-launch)
- 5–10 qualified leads per week
- ≥3% website conversion rate
- 10–20% monthly organic traffic growth
- 10–20 training inquiries per month

---

## 4. Tech Stack & Architecture

```
Framework:      Static HTML/CSS/JS (no build step required)
Styling:        Custom CSS (Aerra design system) + Tailwind utilities (.tw.css)
JS Libraries:   Swiper 8.4.5 · GSAP 3.12.2 + ScrollTrigger · Splide (auto-scroll)
Forms:          Netlify Functions + Nodemailer (SMTP)
Hosting:        Netlify (netlify.toml configured, publish = ".")
Analytics:      Google Analytics 4 + Google Search Console
Email handler:  netlify/functions/contact.js
Fonts:          Google Fonts — Inter (200–800) + Playfair Display (italic)
```

### Path Convention
All asset and page paths use root-relative `/` format. **Never use subdirectory prefixes.**
- Assets: `/assets/css/site.css`, `/assets/js/site.js`, `/assets/images/`
- Pages: `/about/`, `/portfolio/`, `/contact/`, etc.
- Portfolio images: `/assets/images/portfolio/image1.jpeg` … `image61.jpeg` + `image54–61.png`

### Architecture Layers
```
ACQUISITION LAYER:    Blog · Toolkit · SEO
EVALUATION LAYER:     Deliverables · Portfolio · Training
CONVERSION LAYER:     Contact · CTAs · Enrollment
```

---

## 5. Design System — Aerra

Reference file: `UIUX_SKILL.md` (full 595-line companion guide)  
Reference source: `aerra-info/` folder (view-source HTML captures of full Aerra site)

### Color Palette
```css
--lime:      #AEF977;   /* Primary accent — buttons, hovers, highlights */
--lime-dk:   #8fd455;   /* Hover state for lime */
--teal:      #087589;   /* Secondary — links, metric cards */
--navy:      #0E2F3E;   /* Dark sections — services, stats, footer */
--dark:      #181818;   /* Near-black text (NOT pure black) */
--body:      #626262;   /* Body text */
--white:     #FFFFFF;
--off-white: #F8F6F2;   /* Warm-tinted section backgrounds */
--beige:     #EBE7E0;   /* Section backgrounds */
--form-bg:   #F5F3EF;   /* Form input backgrounds */
```

### Typography
```
Headings:  Inter 600–700, letter-spacing -0.04em
Body:      Inter 400, 16px, line-height 1.875
Italic:    Playfair Display italic (em/i elements only)
Eyebrows:  0.72rem · 600 · +0.18em letter-spacing · uppercase · #888

H1: clamp(2.6rem, 6vw, 3.5rem)
H2: clamp(2rem, 4vw, 3rem)
H3: clamp(1.4rem, 2.5vw, 2.5rem)
```

### Buttons
```
Primary:    lime fill (#AEF977) · dark text · 56px border-radius pill
Secondary:  outline dark border · lime fill on hover
Ghost:      white outline · for dark/navy backgrounds
Min-height: 54px · Padding: 15px vertical / 30px horizontal
```

### Section Background Alternation (use this pattern)
```
white → off-white (#F8F6F2) → beige (#EBE7E0) → navy (#0E2F3E) → white
```

### Card Specs
- Border-radius: 20px (cards) · 32px (panels)
- Hover: `translateY(-4px)` + shadow increase
- Shadows: 2-layer (ambient + contact shadow)

### Eyebrow Labels
```html
<span class="eyebrow">Section Label</span>
<!-- Renders: ● SECTION LABEL — 0.72rem uppercase muted grey with lime dot -->
```

### Key CSS Classes
```
.section            section padding (clamp 72–150px)
.section--white     white background
.section--soft      off-white background
.section--beige     beige background
.section--navy      navy background
.wrap               max-width 1200px centered
.wrap--wide         max-width 1830px centered
.section-head       2-col heading + description layout
.card-grid          3-col responsive card grid
.project-grid       masonry-style project cards
.editorial-hero     dark 2-col page hero with aside panels
.mini-panel         small info panel (used in hero asides)
.mini-panel--accent lime-accented mini panel
.metric             stat card (--teal / --lime / --navy variants)
.ae-about__grid     Aerra 2-col staggered image layout
.ae-services__rows  Aerra numbered service row layout
.ae-srow            individual service row (text + image)
.panel              white card panel
.panel--dark        navy card panel
.cta-band           full conversion CTA block
.assurance-card     navy section assurance mini card
.filters            filter button row (portfolio page)
.project-card       portfolio project card
.project-card--proof  card with challenge/solution/outcome story
.article-card       blog article card
.article-card--feature  large featured article card
.article-card--story    smaller story card (horizontal)
.course-card        training course card
.faq-item           FAQ accordion item
.nav-accordion      homepage site-nav shortcut links
.hero__statbar      horizontal stat strip at bottom of hero
.portfolio-carousel Swiper carousel wrapper
```

### Animations
- Scroll reveals: `.reveal` class + IntersectionObserver → `.is-visible`
- Stagger: 70ms per sibling (max 350ms), applied by `initReveals()`
- GSAP ScrollTrigger: service card stacking zoom (`.service-stage` elements)
- Swiper: portfolio center-mode carousel with prev/next nav buttons
- Counter: `.counter[data-target]` — count 0→target on viewport entry
- FAQ: `grid-template-rows 0→1fr` smooth expand
- All animations respect `prefers-reduced-motion`

---

## 6. Site Structure & Navigation

### Pages

| URL | File | Role |
|-----|------|------|
| `/` | `index.html` | Entry & direction layer |
| `/deliverables/` | `deliverables/index.html` | Solution layer |
| `/portfolio/` | `portfolio/index.html` | Validation layer |
| `/about/` | `about/index.html` | Credibility layer |
| `/courses/` | `courses/index.html` | Authority & revenue layer |
| `/blog/` | `blog/index.html` | Acquisition layer |
| `/contact/` | `contact/index.html` | Conversion layer |
| `/toolkit/` | `toolkit/index.html` | Mid-funnel (Phase 2 calculators) |
| `/consultation/` | `consultation/index.html` | Consultation request landing |
| `/quote/` | `quote/index.html` | Quote request |

### Primary Navigation (rendered by site.js)
```
[Logo]  About  Portfolio  Blog  Contact  [Services ▾]  [Get in Touch — lime CTA]
```
Services dropdown: Deliverables · Consultation · Training · Toolkit

### Header & Footer
Both rendered dynamically by `assets/js/site.js`:
- `data-site-header` → `renderHeader()`
- `data-site-footer` → `renderFooter()`

Edit `siteMeta`, `navItems`, `renderHeader()`, and `renderFooter()` in `site.js` to modify globally.

---

## 7. Page-by-Page Content Specification

### 7.1 Home Page (`/`)

Sections in order:
1. **Hero** — "Powering Communities. Delivering Results." — full-bleed dark overlay image, stat bar (20+ · 5+ MW · 24hrs · Multi-county), scroll hint arrow
2. **Sectors Strip** — horizontal chip grid: Manufacturing & C&I · Schools · Developers & EPC · NGOs · Hotels · Hospitals · County Government · Farming · Real Estate · Off-Grid Communities · Borehole & Water Pumping · Hybrid & Storage
3. **About (Aerra two-column)** — staggered image layout, company intro paragraph, Read more CTA + phone number
4. **Services (Aerra row layout)** — numbered rows 01/02/03 with text left + image right (Design & Feasibility · Oversight & QA/QC · Audits & Training)
5. **Stats + FAQ** — frosted glass section over bg image: metric cards (teal/lime/navy) left + FAQ accordion right
6. **Portfolio Carousel** — Swiper center-mode, 6 slides: Sanana Hotel · Promenade Mall · OL Pejeta · National Bakery Audit · Maasai Mara Rangers · Kenya Pipeline Feasibility
7. **Insights & Tools** — feature article card (toolkit) + 3 story cards (sizing guide · storage strategy · benefits of solar)
8. **Nav Accordion** — 4 intent-based pathway links (Validate a Project · Review Work · Train a Team · Start an Advisory Brief)
9. **CTA Band** — navy section with headline, 2 CTAs, 3 assurance cards
10. **Footer** — large "Kinawa" wordmark, CTAs, 3 columns (Navigate · Core Capabilities · Contact)

### 7.2 Deliverables Page (`/deliverables/`)

Page hero → 6 service sections in `content-flow` layout:
1. Design & Feasibility
2. Installation & Commissioning Oversight
3. Energy Audits
4. Technical Trainings
5. Operation & Maintenance Oversight
6. Consultancy

Each section: kicker number · H2 · description · `check-list--dark` · `.service-block__outcome` · CTA

### 7.3 Portfolio Page (`/portfolio/`)

- Dark editorial hero + mini-panels
- Stats strip (20+ projects · 5+ MW · 44 audited · 8+ counties)
- Filter buttons: All · Grid-Tie · Hybrid · Off-Grid · Water Pumping · Energy Audit · Feasibility · O&M
- **23 real project cards** (see Section 8 for full data)
- Capabilities summary: 6 category cards
- Navy CTA band: "Have a similar project in mind?"

### 7.4 About Page (`/about/`)

- Editorial hero: "About Kinawa Energy"
- Split grid: Company overview panel + Mission/Vision dark panel
- Approach cards (4): Independent · Data-driven · Technical expertise · Quality focus
- Team section
- Certifications (EPRA T3, PMP)
- Track record metrics
- CTA band

### 7.5 Courses/Training Page (`/courses/`)

- Editorial hero: "Solar Training Programs"
- 4 course cards: Solar 101 (KES 7,500, 4 weeks) · Hybrid Systems Design · Battery Storage · Advanced Troubleshooting
- Audience grid: Beginners · Technicians · Professionals · NGO Cohorts
- Enrollment CTA form or inquiry redirect

### 7.6 Blog Page (`/blog/`)

- Blog listing with article cards
- 3 seed posts: benefits-of-solar-energy · solar-storage · solar-system-sizing-guide
- Categories: Tips · Case Studies · Technical · News
- Every post ends with CTA to `/contact/`

### 7.7 Contact Page (`/contact/`)

- Editorial hero: "Let's Discuss Your Project"
- 3-step consultation workflow sidebar
- Full contact form (6 fields + honeypot)
- Direct contact details: phone · email · address · support hours

---

## 8. Real Portfolio Projects

All 61 images extracted from `Portofolio Draft.docx` → `/assets/images/portfolio/`

### Grid-Tie Systems (data-category="grid-tie")
| # | Project | Location | Size | Image |
|---|---------|----------|------|-------|
| 1 | Promenade Mall Solar PV System | Nyali, Mombasa | 400 kW (Phase 1) | image5.jpeg |
| 2 | Petrocity Petrol Stations Programme | Multiple Kenya sites | 10–100 kW/site · 6 sites | image8.jpeg |
| 3 | Bakeries (Mombasa) Ltd Industrial Solar | Multiple Mombasa facilities | 40–100 kW/site · 10 sites | image11.jpeg |
| 4 | Fisheries Mombasa Solar PV System | Mombasa | 50 kW | image30.jpeg |
| 5 | Multi-Site Commercial Grid-Tie Commissioning | Multiple Kenya sites | 5–30 kW | image33.jpeg |

### Hybrid Systems (data-category="hybrid")
| # | Project | Location | Size | Image |
|---|---------|----------|------|-------|
| 6 | OL Pejeta Conservancy Solar Hybrid Systems | Laikipia County | 127 kWp + 440kWh BESS (3 sites) | image13.jpeg |
| 7 | Sanana Hotel Hybrid Solar PV System ⭐ | Mombasa | 24 kW + 20kWh BESS | image39.jpeg |
| 8 | Residential & Airbnb Hybrid Solar Programme | Watamu / Diani | 5–30 kW · 10 systems | image21.jpeg |
| 9 | Mobile Digital Schools Container Hybrid | Multiple sites | 5–10 kW | image42.jpeg |

### Off-Grid Systems (data-category="off-grid")
| # | Project | Location | Size | Image |
|---|---------|----------|------|-------|
| 10 | Solio Ranch Security Mast Solarization | Solio Ranch | 13 mast sites + HQ | image17.jpeg |
| 11 | Maasai Mara Ranger Stations Electrification | Maasai Mara | 7 ranger stations | image41.jpeg |
| 12 | Wajir Girls Secondary School Electrification | Wajir County | 10 kW | image19.jpeg |
| 13 | GivePower School Electrification Programme | Kwale / Kilifi / Kajiado | 3.6–5 kW/site · 3 schools | image24.jpeg |
| 14 | Kajiado Private Residence Off-Grid System | Kajiado | 5 kW + 10kWh BESS | image43.jpeg |
| 15 | PAYGo Rural Electrification Programme | Kwale / Kilifi / Mombasa | 100–500 Wp | image26.jpeg |
| 23 | Garissa Mosque Solar Backup System | Garissa | 5 kW | image28.jpeg |

### Solar Water Pumping (data-category="water-pumping")
| # | Project | Location | Size | Image |
|---|---------|----------|------|-------|
| 16 | Ngara Apartment Borehole Solarization | Ngara, Nairobi | 3 kW + 5 kW | image44.jpeg |
| 17 | Airstrip Borehole Solarization | Oloitokток | 15 kW | image46.jpeg |
| 18 | River Tana Floating Solar Pumping System | River Tana, Garissa | Floating solar | image50.jpeg |
| 19 | Kiwanja Borehole Solarization — World Vision | Kiwanja | 7.5 kW | image52.jpeg |

### Energy Audits (data-category="audit")
| # | Project | Location | Scale | Image |
|---|---------|----------|-------|-------|
| 20 | National Bakery Network Multi-Site Audit ⭐ | Nationwide Kenya | 44 facilities · EPRA-compliant | image55.png |

### Feasibility Studies (data-category="feasibility")
| # | Project | Location | Scale | Image |
|---|---------|----------|-------|-------|
| 21 | Kenya Pipeline Company Solarization Feasibility | Kenya | 8 pipeline stations | image57.png |

### O&M / Specialized (data-category="om")
| # | Project | Location | Scale | Image |
|---|---------|----------|-------|-------|
| 22 | Mercy Corps Samburu BESS Upgrade & Troubleshooting | Samburu | 3 NGO installations restored | image23.jpeg |

⭐ = Priority feature — strongest credibility/ROI signal

---

## 9. Data Flow Architecture

### Lead Capture Flow
```
User submits form
  → Frontend HTML5 validation
    → POST /.netlify/functions/contact (x-www-form-urlencoded)
      → Nodemailer SMTP sends admin notification → info@kinawaenergy.com
      → Auto-reply sent to user email
        → Lead captured → Follow-up workflow initiated
```

### Form Handler Details
- File: `netlify/functions/contact.js`
- Dependency: `nodemailer ^6.9.7`
- Env vars: `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`
- Form types: `contact` and `quote`
- Spam protection: hidden `bot-field` honeypot input

---

## 10. Conversion Logic

Every page has at least one CTA. All paths converge at `/contact/`.

### CTA Placement Rules
- **Hero:** Primary (`Get a Free Consultation`) + Secondary (`View Our Projects`)
- **Mid-page:** After every major benefit statement
- **Footer:** Full navy CTA band before footer links
- **Blog posts:** CTA at bottom of every article
- **Portfolio page:** Closing CTA band ("Have a similar project?")
- **Services/Deliverables:** CTA after each service block

### Core Conversion Actions
| Action | Label | Destination |
|--------|-------|-------------|
| Request consultation | "Get a Free Consultation" | `/contact/` |
| Request quote | "Request a Quote" | `/contact/?type=quote` |
| Training inquiry | "Enroll Now / Inquire" | `/contact/?type=training` |
| Portfolio inquiry | "Talk to Our Team" | `/contact/` |

---

## 11. SEO & Content Strategy

### Per-Page SEO Requirements
```html
<title>               Unique · keyword-rich · under 60 chars
<meta description>    Unique · compelling · under 155 chars
<h1>                  ONE per page · includes primary keyword
<img alt>             Descriptive alt text on ALL images
<link rel="canonical"> Self-referencing canonical tag
OG tags               og:title · og:description · og:type
```

### Target Keywords
- `solar consulting Kenya`
- `solar feasibility study Nairobi`
- `commercial solar installation Kenya`
- `solar training Nairobi / EPRA certification`
- `off-grid solar East Africa`
- `solar energy audit Kenya`
- `borehole solar pump Kenya`
- `hybrid solar system Kenya`
- `solar ROI calculator Kenya`

---

## 12. Forms & Lead Capture

### Contact Form Fields
```
name          text    required
company       text    optional
email         email   required
phone         tel     required
inquiry_type  select  required  (Consultation | Quote | Energy Audit | Training | Other)
message       textarea required
bot-field     text    hidden honeypot (tabindex="-1")
form-name     hidden  value="contact"
```

### On Submit Behavior
1. Frontend validation before submission
2. `fetch('/.netlify/functions/contact', { method: 'POST' })`
3. Success: confirmation message — "Thank you! We'll be in touch within 24 hours."
4. Admin notification to info@kinawaenergy.com
5. Auto-reply confirmation to submitter

---

## 13. File Structure

```
/
├── index.html                         Homepage
├── about/index.html
├── portfolio/index.html               23 real projects with portfolio images
├── deliverables/index.html
├── contact/index.html
├── courses/index.html
├── blog/
│   ├── index.html
│   ├── benefits-of-solar-energy/index.html
│   ├── solar-storage/index.html
│   └── solar-system-sizing-guide/index.html
├── consultation/index.html
├── quote/index.html
├── toolkit/index.html                 Phase 2 calculators placeholder
├── 404.html
│
├── assets/
│   ├── css/
│   │   └── site.css                   Aerra design system (2820+ lines)
│   ├── js/
│   │   └── site.js                    Header · Footer · Swiper · GSAP · Forms
│   └── images/
│       ├── logo.png
│       ├── solar-*.jpeg / *.webp      General site images
│       └── portfolio/                 61 images from Portfolio Draft.docx
│           ├── image1.png             (3.6MB cover)
│           ├── image2.jpeg–image53.jpeg
│           └── image54.png–image61.png
│
├── netlify/
│   └── functions/
│       ├── contact.js                 Nodemailer email handler
│       └── package.json              (nodemailer ^6.9.7)
│
├── documentation/
│   ├── Kinawa Website Profile Rev 1.docx
│   ├── Portofolio Draft.docx          Source of 23 projects + 61 images
│   └── portfolio_text.txt             Extracted text from Portfolio Draft
│
├── aerra-info/                        Aerra design reference (view-source HTML)
│   ├── view-source_*_homepage-2_.html
│   ├── view-source_*_about-us_.html
│   ├── view-source_*_portfolio-grid_.html
│   ├── view-source_*_contacts_.html
│   ├── view-source_*_blog-list_.html
│   └── home.txt
│
├── CLAUDE.md                          This file — single source of truth (v2.0)
├── UIUX_SKILL.md                      Full Aerra design system guide (595 lines)
├── netlify.toml                       Build config
├── _redirects                         URL redirect rules
├── site.webmanifest
└── robots.txt
```

---

## 14. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Responsive Breakpoints
| Name | Width |
|------|-------|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |
| Wide | > 1280px |

### Accessibility Requirements
- All `<img>` have descriptive `alt` text
- Color contrast ≥ 4.5:1 (WCAG AA)
- All interactive elements keyboard-navigable
- Form inputs have explicit `<label for>` associations
- Focus indicators: teal 3px outline on all interactive elements
- Semantic HTML: `<main>` · `<nav>` · `<article>` · `<section>` · `<footer>`
- `prefers-reduced-motion` respected in all JS animations

---

## 15. Build & Deployment

### Netlify Configuration
```toml
[build]
  publish = "."
  functions = "netlify/functions"

[functions]
  node_bundler = "esbuild"
  external_node_modules = ["firebase-admin", "node-fetch", "nodemailer"]
```

### URL Redirects
```
/forum/      → /courses/       301
/dashboard/  → /contact/       301
/products/   → /deliverables/  301
/products/*  → /deliverables/  301
```

### Pre-Launch Checklist
- [ ] Verify phone number (+254 719 279 551) is active
- [ ] Verify info@kinawaenergy.com is live
- [ ] Set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD` in Netlify env vars
- [ ] Configure custom domain `kinawaenergy.com` in Netlify DNS
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Add GA4 measurement ID (`G-XXXXXXXXXX`) to all pages
- [ ] Test contact form and quote form end-to-end
- [ ] Replace any remaining stock/placeholder images with real Kinawa photos
- [ ] Run Lighthouse audit across all pages
- [ ] Verify all 23 portfolio project images load correctly

---

## Development Team Notes

1. **Path convention:** All paths use root `/`. Never use subdirectory prefixes like `/Kinawa-Site/`.
2. **Header/Footer:** Rendered globally via JS — edit `renderHeader()` / `renderFooter()` in `site.js` once for all pages.
3. **Portfolio images:** 61 images extracted from `Portofolio Draft.docx` — all in `/assets/images/portfolio/`. Image numbering is sequential per document order.
4. **Sanana Hotel** (image39.jpeg) — strongest ROI story: **77% electricity cost reduction** (KSh 200k → KSh 45k/month). Feature on homepage and in sales conversations.
5. **National Bakery Audit** (44 sites, EPRA) — strongest consulting credibility signal. Reference in Deliverables and About pages.
6. **Kenya Pipeline Feasibility** (8 national stations) — highest-profile advisory project. Use in Feasibility section and About credibility.
7. **OL Pejeta Conservancy** — conservation + large BESS prestige project. Good for institutional/NGO audience targeting.
8. **Toolkit page:** Placeholder exists at `/toolkit/`. Solar ROI calculator is Phase 2.
9. **Training enrollment:** Phase 1 = inquiry form at `/contact/?type=training`. Phase 2 = Elevatika platform integration.
10. **GA4 and Search Console** must be active from day 1 of public launch — not retrofitted post-launch.
11. **UIUX_SKILL.md** is the companion design system reference — consult for any component, animation, color, or spacing decision.
12. **aerra-info/ folder** contains full view-source HTML from the Aerra reference site — use for detailed component pattern reference.

---

*CLAUDE.md v2.0 — Updated April 2026. Reflects completed build with Aerra design system, 23 real portfolio projects, 61 extracted project images, fixed path conventions, and full documentation aligned to Kinawa Website Profile Rev 1 and Portfolio Draft.*
