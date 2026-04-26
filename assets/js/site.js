/* ============================================================
   KINAWA ENERGY — Site JavaScript
   Aerra-inspired design system
   ============================================================ */


const siteMeta = {
  phone: "+254 719 279 551",
  email: "info@kinawaenergy.com",
  address: "Nairobi, Kenya",
  supportHours: "Monday – Friday, 8:00 AM – 6:00 PM EAT"
};

const navItems = [
  { href: "/deliverables/", label: "Deliverables" },
  { href: "/courses/",      label: "Training" },
  { href: "/about/",        label: "About" },
  { href: "/portfolio/",    label: "Portfolio" },
  { href: "/blog/",         label: "Blog" },
  { href: "/toolkit/",      label: "Toolkit" }
];

/* ── Path helpers ──────────────────────────────────────────── */
/* Read the dynamically-set <base href> so the site works whether deployed
   at a domain root (Netlify) or in a subdirectory (GitHub Pages /Kinawa-Site/). */
const SITE_BASE = (function () {
  try {
    const baseEl = document.querySelector("base");
    if (baseEl && baseEl.href) {
      const u = new URL(baseEl.href);
      let p = u.pathname;
      if (!p.endsWith("/")) p += "/";
      return p;
    }
  } catch (e) {}
  return "/";
})();

function normalizePath(path) {
  if (!path) return SITE_BASE;
  let v = String(path).replace(/index\.html$/, "");
  if (!v.startsWith("/")) v = SITE_BASE + v.replace(/^\.?\/?/, "");
  return v.endsWith("/") ? v : `${v}/`;
}

function isCurrentPath(link, current) {
  const l = normalizePath(link);
  const c = normalizePath(current);
  if (l === SITE_BASE) return c === SITE_BASE;
  return c === l || c.startsWith(l);
}

/* ── Header ────────────────────────────────────────────────── */
function renderHeader() {
  const host = document.querySelector("[data-site-header]");
  if (!host) return;

  const current = normalizePath(window.location.pathname);
  const isHome  = current === "/";

  const navMarkup = [
    { href: "./",              label: "Home" },
    { href: "about/",          label: "About" },
    { href: "portfolio/",      label: "Portfolio" },
    { href: "courses/",        label: "Training" },
    { href: "blog/",           label: "Blog" },
    { href: "contact/",        label: "Contact" }
  ].map(item => {
    const active = isCurrentPath(item.href, current) ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${active}><span>${item.label}</span></a>`;
  }).join("");

  host.innerHTML = `
    <div class="site-header site-header--transparent" id="site-header">
      <div class="wrap">
        <div class="site-header__inner">
          <a class="brand brand--wordmark" href="./" aria-label="Kinawa Energy — Home">
            <img class="brand__logo" src="assets/images/logo.png" alt="Kinawa Energy">
          </a>

          <nav class="nav" aria-label="Primary">
            ${navMarkup}
            <div class="nav-dropdown" data-nav-dropdown>
              <button class="nav-dropdown__toggle" type="button" aria-expanded="false" aria-haspopup="true">
                <span>Services</span> <i aria-hidden="true">▾</i>
              </button>
              <div class="nav-dropdown__panel">
                <a href="deliverables/">Deliverables</a>
                <a href="consultation/">Consultation</a>
                <a href="toolkit/">Toolkit</a>
              </div>
            </div>
          </nav>

          <div class="header-actions">
            <button class="search-trigger" type="button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M21 21l-4.35-4.35M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4z"/>
              </svg>
            </button>
            <a class="btn btn--ghost btn--header-cta" href="contact/">Get in Touch</a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="mobile-nav" data-mobile-nav>
          <a href="./">Home</a>
          <a href="about/">About</a>
          <a href="portfolio/">Portfolio</a>
          <a href="courses/">Training</a>
          <a href="blog/">Blog</a>
          <a href="contact/">Contact</a>
          <span class="mobile-nav__divider">Services</span>
          <a href="deliverables/">Deliverables</a>
          <a href="consultation/">Consultation</a>
          <a href="toolkit/">Toolkit</a>
          <a class="btn btn--primary" href="contact/" style="justify-content:center;margin-top:.5rem">Get a Free Consultation</a>
        </div>
      </div>
    </div>
  `;

  /* mobile toggle */
  const header       = host.querySelector("#site-header");
  const toggle       = host.querySelector(".menu-toggle");
  const mobileNav    = host.querySelector("[data-mobile-nav]");
  const dropdown     = host.querySelector("[data-nav-dropdown]");
  const dropToggle   = dropdown?.querySelector(".nav-dropdown__toggle");

  toggle?.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("site-header--solid", open || window.scrollY > 80);
    header.classList.toggle("site-header--transparent", !open && window.scrollY <= 80);
  });

  mobileNav?.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    })
  );

  /* services dropdown */
  if (dropdown && dropToggle) {
    const close = () => {
      dropdown.classList.remove("is-open");
      dropToggle.setAttribute("aria-expanded", "false");
    };
    dropToggle.addEventListener("click", () => {
      const will = !dropdown.classList.contains("is-open");
      dropdown.classList.toggle("is-open", will);
      dropToggle.setAttribute("aria-expanded", String(will));
    });
    document.addEventListener("click", e => { if (!dropdown.contains(e.target)) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }
}

/* ── Header transparent-to-solid on scroll ───────────────── */
/* All pages start transparent (all heroes are dark); solid after 80px scroll */
function initHeaderScroll() {
  const sync = () => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const scrolled = window.scrollY > 80;
    header.classList.toggle("site-header--transparent", !scrolled);
    header.classList.toggle("site-header--solid", scrolled);
    document.body.classList.toggle("is-scrolled", scrolled);
  };
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

/* ── Footer ────────────────────────────────────────────────── */
function renderFooter() {
  const host = document.querySelector("[data-site-footer]");
  if (!host) return;
  /* If host element is already a <footer> with content (homepage), skip */
  if (host.tagName === "FOOTER" && host.querySelector(".footer-header, .footer-columns")) return;

  host.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="site-footer__inner">

          <!-- Brand strip -->
          <div class="footer-header">
            <div class="footer-header__brand">
              <img src="assets/images/logo.png" alt="Kinawa Energy" loading="lazy" class="footer-logo footer-logo--wordmark">
              <span class="footer-header__tag">Solar Advisory &amp; Delivery &nbsp;·&nbsp; Nairobi, Kenya</span>
            </div>
            <div class="footer-header__cta">
              <a class="btn btn--primary" href="contact/">Get a Free Consultation</a>
            </div>
          </div>

          <!-- 4-column grid -->
          <div class="footer-columns footer-columns--4">

            <!-- Col 1: About -->
            <div class="footer-column footer-column--about">
              <p>Independent solar advisory and oversight for commercial, institutional, and development-led projects. Kinawa brings owner-side technical judgment — no installer conflicts, no compromised advice.</p>
              <span class="footer-tagline">Est. 2024 &nbsp;·&nbsp; Nairobi, Kenya</span>
            </div>

            <!-- Col 2: Navigate -->
            <div class="footer-column">
              <h4>Navigate</h4>
              <div class="footer-links">
                <a href="about/">About</a>
                <a href="portfolio/">Portfolio</a>
                <a href="courses/">Training</a>
                <a href="deliverables/">Deliverables</a>
                <a href="consultation/">Consultation</a>
                <a href="toolkit/">Toolkit</a>
                <a href="blog/">Blog</a>
                <a href="contact/">Contact</a>
              </div>
            </div>

            <!-- Col 3: Services -->
            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li>Feasibility &amp; Design Review</li>
                <li>Commissioning &amp; QA/QC</li>
                <li>Energy Audits</li>
                <li>Training &amp; Capacity Building</li>
                <li>O&amp;M Oversight</li>
                <li>Consultancy</li>
              </ul>
            </div>

            <!-- Col 4: Contact -->
            <div class="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:${siteMeta.phone.replace(/\s/g,"")}" style="color:rgba(255,255,255,0.6);text-decoration:none">${siteMeta.phone}</a></li>
                <li><a href="mailto:${siteMeta.email}" style="color:rgba(255,255,255,0.6);text-decoration:none">${siteMeta.email}</a></li>
                <li>${siteMeta.address}</li>
                <li style="font-size:0.8rem;color:rgba(255,255,255,0.35);line-height:1.5">${siteMeta.supportHours}</li>
              </ul>
            </div>

          </div>

          <!-- Bottom bar -->
          <div class="footer-bottom">
            <div>© ${new Date().getFullYear()} Kinawa Energy. All rights reserved.</div>
            <div class="footer-trust">EPRA T3 Certified &nbsp;·&nbsp; PMP Expertise &nbsp;·&nbsp; kinawaenergy.com &nbsp;<span style="color:var(--lime)">●</span></div>
          </div>

        </div>
      </div>
    </footer>
  `;
}

/* ── Swiper — portfolio carousel ──────────────────────────── */
function initPortfolioSwiper() {
  if (typeof Swiper === "undefined") return;
  const el = document.getElementById("portfolio-swiper");
  if (!el) return;

  const swiper = new Swiper(el, {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 3,       /* clones enough slides to fill both ends — closes the 6→1 gap */
    grabCursor: true,
    keyboard: { enabled: true },
    navigation: {
      nextEl: "#port-next",
      prevEl: "#port-prev"
    },
    breakpoints: {
      0:    { spaceBetween: 20 },
      640:  { spaceBetween: 40 },
      1024: { spaceBetween: 80 }
    }
  });

}

/* ── Splide — clients strip ───────────────────────────────── */
function initClientsCarousel() {
  if (typeof Splide === "undefined") return;
  const el = document.getElementById("clients-carousel");
  if (!el) return;

  new Splide(el, {
    type:        "loop",
    drag:        "free",
    focus:       "center",
    arrows:      false,
    pagination:  false,
    autoScroll: { speed: 1.2, pauseOnHover: true },
    perPage:     4,
    gap:         "0.75rem",
    breakpoints: {
      1024: { perPage: 3 },
      768:  { perPage: 2 },
      480:  { perPage: 1 }
    }
  }).mount(getSplideAutoScroll());
}

/* ── Splide — dual-row sector marquee ────────────────────── */
function getSplideAutoScroll() {
  const ext = window.SplideExtensionAutoScroll || window.splide?.Extensions?.AutoScroll;
  return ext ? { AutoScroll: ext } : {};
}

function initSectorMarquee() {
  if (typeof Splide === "undefined") return;
  const ext = getSplideAutoScroll();
  const base = {
    type:       "loop",
    drag:       "free",
    arrows:     false,
    pagination: false,
    autoWidth:  true,
    gap:        "0.6rem",
    clones:     12,
  };

  const r1 = document.getElementById("sectorRow1");
  const r2 = document.getElementById("sectorRow2");
  if (r1) new Splide(r1, { ...base, autoScroll: { speed: 0.9,  pauseOnHover: true } }).mount(ext);
  if (r2) new Splide(r2, { ...base, autoScroll: { speed: -0.9, pauseOnHover: true } }).mount(ext);
}

/* ── GSAP services stacking (scale zoom on scroll) ────────── */
function initServicesGSAP() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const stages = document.querySelectorAll(".service-stage");
  if (!stages.length) return;

  stages.forEach((stage, i) => {
    const scale = [0.92, 0.96, 1][i] ?? 1;
    ScrollTrigger.create({
      trigger: stage,
      start:   "top top+=80",
      end:     () => `+=${document.querySelector(".services-stack")?.offsetHeight || 800}`,
      scrub:   true,
      onUpdate: self => {
        const progress = self.progress;
        const s = scale + (1 - scale) * progress;
        gsap.set(stage, { scale: s < 1 ? s : 1, transformOrigin: "center top" });
      }
    });
  });
}

/* ── Counter animation ────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll(".counter[data-target]");
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "+";
      let current  = 0;
      const step   = Math.ceil(target / 40);
      const tick   = () => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => obs.observe(el));
}

/* ── Portfolio filters (inner portfolio page) ─────────────── */
function initPortfolioFilters() {
  const scope = document.querySelector("[data-project-filters]");
  if (!scope) return;

  const buttons = Array.from(scope.querySelectorAll("button"));
  const cards   = Array.from(document.querySelectorAll("[data-project-card]"));

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
      });
    });
  });
}

/* ── Toolkit estimator ────────────────────────────────────── */
function initToolkit() {
  const form = document.querySelector("[data-tool='estimator']");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data   = new FormData(form);
    const bill   = Number(data.get("monthly_bill"))  || 0;
    const offset = Number(data.get("target_offset")) || 80;
    const size   = Math.max(3, Math.round((bill / 2500) * (offset / 100)));
    const budget = size * 120000;
    const roi    = bill > 0 ? Math.max(2, Math.min(7, Math.round((budget / (bill * 12)) * 10) / 10)) : 0;
    const results = form.querySelector("[data-tool-results]");
    if (!results) return;
    results.innerHTML = `
      <strong>Directional Estimate</strong>
      <p>Estimated system size: <strong>${size} kWp</strong></p>
      <p>Indicative budget range: <strong>KES ${Math.round(budget * 0.85).toLocaleString()} – ${Math.round(budget * 1.15).toLocaleString()}</strong></p>
      <p>Indicative simple payback: <strong>${roi} years</strong></p>
      <p class="microcopy">This is a qualification estimate, not a final engineering proposal. Use it to start a consultation or quote discussion.</p>
    `;
  });
}

/* ── Forms ────────────────────────────────────────────────── */
function initForms() {
  document.querySelectorAll("[data-netlify-form]").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const success = form.parentElement?.querySelector(".status--success");
      const error   = form.parentElement?.querySelector(".status--error");
      success?.classList.remove("is-visible");
      error?.classList.remove("is-visible");

      const payload = new URLSearchParams();
      new FormData(form).forEach((v, k) => payload.append(k, String(v)));

      try {
        const res = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload.toString()
        });
        if (!res.ok) throw new Error("Submission failed");
        form.reset();
        success?.classList.add("is-visible");
        success?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch {
        error?.classList.add("is-visible");
      }
    });
  });
}

/* ── FAQ accordion — exclusive: one open at a time ─────────── */
function initFaqs() {
  document.querySelectorAll("[data-faq-item]").forEach(item => {
    item.querySelector("[data-faq-button]")?.addEventListener("click", () => {
      const isAlreadyOpen = item.classList.contains("is-open");
      // Close all
      item.closest("[data-faq-group], .faq-stack, .split-bg__content")
        ?.querySelectorAll("[data-faq-item]")
        .forEach(el => {
          el.classList.remove("is-open");
          el.querySelector("[data-faq-button]")?.setAttribute("aria-expanded", "false");
        });
      // Open this one only if it wasn't already open
      if (!isAlreadyOpen) {
        item.classList.add("is-open");
        item.querySelector("[data-faq-button]")?.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ── Reveal on scroll ─────────────────────────────────────── */
function initReveals() {
  /* Only animate elements that explicitly have reveal in their HTML.
     Never add the class programmatically — that re-hides structural content. */
  const targets = Array.from(document.querySelectorAll(".reveal"));

  /* Force-show everything after 1s regardless — belt-and-suspenders */
  setTimeout(() => {
    targets.forEach(el => el.classList.add("is-visible"));
  }, 1000);

  /* Skip animation if user prefers reduced motion (CSS already shows them) */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* Stagger siblings inside grid containers */
  const GRID_PARENTS = [
    ".insight-stack", ".article-grid", ".course-grid", ".card-grid", ".project-grid"
  ].join(",");

  targets.forEach(el => {
    if (!el.style.transitionDelay) {
      const parent = el.closest(GRID_PARENTS);
      if (parent) {
        const idx = Array.from(parent.children).indexOf(el);
        if (idx > 0) el.style.transitionDelay = Math.min(idx * 70, 280) + "ms";
      }
    }
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  targets.forEach(el => obs.observe(el));
}

/* ── Parallax bands (lightweight) ─────────────────────────── */
function initParallaxBands() {
  const bands = Array.from(document.querySelectorAll("[data-parallax-band]"));
  if (!bands.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const state = new Map();
  bands.forEach(b => state.set(b, { bgCurrent: 0, bgTarget: 0, cardCurrent: 0, cardTarget: 0 }));

  const computeTargets = () => {
    const vh = window.innerHeight || 800;
    bands.forEach(band => {
      const rect = band.getBoundingClientRect();
      const s = state.get(band);
      if (!s) return;

      if (rect.bottom < 0 || rect.top > vh) {
        s.bgTarget = 0; s.cardTarget = 0;
        return;
      }

      // progress: 0 when bottom of section enters viewport, 1 when top leaves
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // background moves faster (depth illusion), card floats subtly
      s.bgTarget   = (0.5 - clamped) * 160; // bg: ±80px
      s.cardTarget = (0.5 - clamped) *  40; // card: ±20px
    });
  };

  let raf = 0;
  let dirty = true;
  let lastInput = performance.now();

  const tick = () => {
    const now = performance.now();
    const active = (now - lastInput) < 220;
    if (dirty || active) computeTargets();
    dirty = false;

    state.forEach((s, band) => {
      s.bgCurrent   += (s.bgTarget   - s.bgCurrent)   * 0.085;
      s.cardCurrent += (s.cardTarget - s.cardCurrent)  * 0.085;
      band.style.setProperty("--bg-y",    `${s.bgCurrent.toFixed(2)}px`);
      band.style.setProperty("--float-y", `${s.cardCurrent.toFixed(2)}px`);
    });

    raf = requestAnimationFrame(tick);
  };

  const onScrollOrResize = () => {
    dirty = true;
    lastInput = performance.now();
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
  tick();
}

/* ── Hero background slider (legacy / non-home pages) ──────── */
function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dots   = Array.from(slider.querySelectorAll(".slider-dots button"));
  if (!slides.length) return;

  let current = 0;
  const paint = i => {
    slides.forEach((s, si) => s.classList.toggle("is-active", si === i));
    dots.forEach((d, di) => d.classList.toggle("is-active", di === i));
  };

  dots.forEach((d, i) => d.addEventListener("click", () => { current = i; paint(i); }));
  paint(current);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => { current = (current + 1) % slides.length; paint(current); }, 5200);
  }
}

/* ── Bento Accordion — hover-expand panels ────────────────── */
function initBentoAccordion() {
  const container = document.getElementById("bento-nav");
  if (!container) return;

  const panels = Array.from(container.querySelectorAll(".bento-panel"));
  if (!panels.length) return;

  const activate = (panel) => {
    panels.forEach(p => p.classList.remove("is-active"));
    panel.classList.add("is-active");
  };

  /* Desktop: hover trigger */
  panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => activate(panel));
  });

  /* Touch fallback: tap to expand, second tap to navigate */
  panels.forEach(panel => {
    panel.addEventListener("click", (e) => {
      if (!panel.classList.contains("is-active")) {
        e.preventDefault();
        activate(panel);
      }
      /* If already active, let the default <a> navigation happen */
    });
  });
}

/* ── Boot ─────────────────────────────────────────────────── */
function safe(fn) {
  try { fn(); } catch(e) { console.warn("[kinawa]", fn.name, e); }
}

/* Script is at the end of <body> so the DOM is already parsed.
   Calling directly avoids the DOMContentLoaded-already-fired race. */
function init() {
  safe(renderHeader);
  safe(renderFooter);
  safe(initHeaderScroll);
  safe(initHeroSlider);
  safe(initPortfolioSwiper);
  safe(initClientsCarousel);
  safe(initSectorMarquee);
  safe(initServicesGSAP);
  safe(initCounters);
  safe(initPortfolioFilters);
  safe(initToolkit);
  safe(initForms);
  safe(initFaqs);
  safe(initReveals);
  safe(initParallaxBands);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
