# Kinawa Energy — kinawaenergy.com

Static marketing & lead-capture website for **Kinawa Energy** — independent solar advisory, project oversight, energy audits, and EPRA-aligned solar PV training across Kenya and East Africa.

## Stack

| Layer | Tech |
|---|---|
| Framework | Static HTML / CSS / JS (no build step) |
| Design system | Aerra-inspired — lime `#AEF977` + navy `#0E2F3E`, Inter + Playfair Display |
| Animations | Swiper 8.4.5 · GSAP 3.12 + ScrollTrigger · Splide auto-scroll · IntersectionObserver reveals |
| Forms | Netlify Functions + Nodemailer SMTP |
| Hosting | Netlify (config in `netlify.toml`, publish root = `.`) |

## Local development

The site is fully static. Any local server works:

```bash
# Option 1: VS Code Live Server (port 5500)
# Right-click index.html → "Open with Live Server"

# Option 2: Netlify dev (loads functions at /.netlify/functions/*)
npx netlify dev

# Option 3: Plain HTTP server
npx http-server -p 3000 .
```

> **Important:** all asset paths are absolute (`/assets/...`). Opening a page directly via `file://` will not resolve them — always use a local server.

## Project structure

```
/
├── index.html               Home (hardcoded footer)
├── about/index.html         About — team, approach accordion, authority blocks
├── portfolio/index.html     23 real projects · floating stats · sticky chip filters
├── deliverables/index.html  6 services in zig-zag layout with watermarked numerals
├── consultation/index.html  4 pricing cards with Most-Chosen featured
├── courses/index.html       Solar PV Technician Programme (L1 · L2 · L3 + Bundle)
├── toolkit/index.html       Solar Cost Estimator + Qualification Pipeline
├── contact/index.html       Aerra-style two-column form + Nairobi map
├── blog/                    Index + 3 seed posts
├── quote/index.html
├── 404.html
│
├── assets/
│   ├── css/site.css         Full design system (4900+ lines)
│   ├── js/site.js           Header/footer render + Swiper + GSAP + filters
│   └── images/
│       ├── logo.png             Kinawa wordmark logo (used in header & footer)
│       ├── solar-*.jpeg|webp    Section / hero imagery
│       ├── windmill-farm.webp
│       └── portfolio/           61 project images (image1–image61)
│
├── netlify/
│   └── functions/contact.js Nodemailer-powered form handler
│
├── documentation/           Source briefs (Profile · Portfolio · Training Outline)
├── netlify.toml             Build config
├── _redirects               URL redirects
├── site.webmanifest         PWA manifest
├── CLAUDE.md                Project source-of-truth & development notes
└── UIUX_SKILL.md            Aerra design system reference
```

## Header / footer

Both are **rendered by JavaScript** into placeholder elements:
- Header: `<div data-site-header></div>` → populated by `renderHeader()` in `site.js`
- Footer: `<div data-site-footer></div>` → populated by `renderFooter()` in `site.js`

To change navigation links, brand markup, or footer columns, **edit `assets/js/site.js`** — changes propagate everywhere automatically. The homepage hardcodes its footer; `renderFooter()` skips when the host element is already a populated `<footer>`.

## Cache busting

CSS and JS includes use a manual version query (`?v=20260431`). Bump the version in every HTML file when shipping CSS/JS changes so dev servers and browsers reload fresh assets.

## Forms

Form submissions POST to `/.netlify/functions/contact` (the Nodemailer handler). Configure SMTP in Netlify dashboard env vars:

```
SMTP_HOST       smtp.example.com
SMTP_USER       info@kinawaenergy.com
SMTP_PASSWORD   *****
```

A hidden `bot-field` honeypot input traps automated submissions.

## Contact

- Phone: **+254 719 279 551**
- Email: **info@kinawaenergy.com**
- Location: Nairobi, Kenya

---

*See `CLAUDE.md` for full project context, content strategy, and development conventions.*
