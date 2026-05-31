/* ============================================================
   PORTFOLIO SCRIPT - Data Rendering, Effects, and Form
============================================================ */

const pageType = document.body.dataset.page || "home";
let pageInitialized = false;

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setHtml(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}

function iconMarkup(type) {
  const icons = {
    email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.12-6.12A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.25a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92z"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    location: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    grid: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    cloud: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"><path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-10 5 5 0 1 0-9.78 2.1A4 4 0 0 0 3 15z"/></svg>',
    dashboard: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"><path d="M3 13h8V3H3zm10 8h8V11h-8zM3 21h8v-6H3zm10-10h8V3h-8z"/></svg>'
  };

  return icons[type] || icons.email;
}

function renderBrand() {
  const logos = document.querySelectorAll("[data-brand-logo]");
  logos.forEach((logo) => {
    const accentClass = logo.classList.contains("loader-logo") ? ' class="dot"' : "";
    logo.innerHTML = `${portfolioData.brand.logo}<span${accentClass}>${portfolioData.brand.accent}</span>`;
  });

  document.title = pageType === "contact" ? portfolioData.meta.contactTitle : portfolioData.meta.homeTitle;
}

function renderNavigation() {
  const navLinks = document.getElementById("navLinks");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!navLinks || !mobileMenu) return;

  const navItems = portfolioData.navigation
    .map((item) => `<li><a href="${pageType === "contact" ? `index.html${item.href}` : item.href}">${item.label}</a></li>`)
    .join("");
  const mobileItems = portfolioData.navigation
    .map((item) => `<a href="${pageType === "contact" ? `index.html${item.href}` : item.href}">${item.label}</a>`)
    .join("");
  const contactLink = pageType === "contact"
    ? '<li><a href="contact.html" class="nav-cta active-link">Contact Me</a></li>'
    : '<li><a href="contact.html" class="nav-cta">Contact Me</a></li>';
  const mobileContact = '<a href="contact.html">Contact Me</a>';

  navLinks.innerHTML = navItems + contactLink;
  mobileMenu.innerHTML = mobileItems + mobileContact;
}

function renderHomePage() {
  if (pageType !== "home") return;

  setText("heroBadge", portfolioData.hero.availability);
  setText("heroIntro", portfolioData.hero.intro);
  setText("heroName", portfolioData.hero.name);
  setText("heroDesc", portfolioData.hero.description);
  setText("heroCardTitle", portfolioData.brand.fileLabel);

  setHtml(
    "heroActions",
    [
      `<a href="${portfolioData.hero.primaryCta.href}" class="btn-primary">${portfolioData.hero.primaryCta.label} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>`,
      `<a href="${portfolioData.hero.secondaryCta.href}" class="btn-ghost"${portfolioData.hero.secondaryCta.download ? " download" : ""}>${portfolioData.hero.secondaryCta.label}</a>`
    ].join("")
  );

  setHtml(
    "heroStats",
    portfolioData.hero.stats
      .map((stat, index) => `
        <div class="stat"><span class="stat-n">${stat.value}</span><span class="stat-l">${stat.label}</span></div>
        ${index < portfolioData.hero.stats.length - 1 ? '<div class="stat-div"></div>' : ""}
      `)
      .join("")
  );

  setHtml(
    "heroCode",
    portfolioData.hero.codeLines
      .map((line) => `<div class="code-line ${line.indent}">${line.content}</div>`)
      .join("")
  );

  setHtml(
    "heroCodeTags",
    portfolioData.hero.codeTags.map((tag) => `<span class="hc-tag">${tag}</span>`).join("")
  );

  setText("aboutLabel", portfolioData.about.sectionLabel);
  setHtml("aboutTitle", portfolioData.about.title);
  setHtml(
    "aboutParagraphs",
    portfolioData.about.paragraphs.map((paragraph) => `<p class="about-text">${paragraph}</p>`).join("")
  );
  setHtml(
    "aboutChips",
    portfolioData.about.chips.map((chip) => `<div class="chip">${chip}</div>`).join("")
  );
  setText("aboutPhotoLabel", portfolioData.about.photoLabel);
  setHtml("aboutBadgeOne", `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>${portfolioData.about.badges[0]}`);
  setHtml("aboutBadgeTwo", `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>${portfolioData.about.badges[1]}`);

  setText("skillsLabel", portfolioData.skills.sectionLabel);
  setHtml("skillsTitle", `My <span class="gradient-text">Tech Stack</span>`);
  setText("skillsSubtitle", portfolioData.skills.subtitle);
  setHtml(
    "skillsGrid",
    portfolioData.skills.categories
      .map(
        (category) => `
          <div class="skill-cat">
            <div class="skill-cat-title"><span class="cat-icon">${category.icon}</span> ${category.title}</div>
            <div class="skill-items">
              ${category.items
                .map(
                  (item) => `
                    <div class="skill-item">
                      <div class="si-top"><span>${item.name}</span><span class="si-pct">${item.level}%</span></div>
                      <div class="si-bar"><div class="si-fill" data-pct="${item.level}"></div></div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        `
      )
      .join("")
  );
  setHtml(
    "techPills",
    portfolioData.skills.pills.map((pill) => `<div class="tech-pill">${pill}</div>`).join("")
  );

  setText("projectsLabel", portfolioData.projects.sectionLabel);
  setHtml("projectsTitle", `Featured <span class="gradient-text">Projects</span>`);
  setText("projectsSubtitle", portfolioData.projects.subtitle);
  setHtml(
    "projectsGrid",
    portfolioData.projects.items
      .map(
        (project) => `
          <div class="proj-card${project.featured ? " featured" : ""}">
            <div class="proj-img">
              <div class="proj-img-inner">${iconMarkup(project.icon)}</div>
              <div class="proj-overlay">
                <a href="${project.liveUrl}" class="proj-link-btn"${project.liveUrl.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>Live Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                <a href="${project.githubUrl}" class="proj-link-btn"${project.githubUrl.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>GitHub <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
              </div>
            </div>
            <div class="proj-info">
              ${project.badge ? `<div class="proj-badge">${project.badge}</div>` : ""}
              <h3 class="proj-title">${project.title}</h3>
              <p class="proj-desc">${project.description}</p>
              <div class="proj-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            </div>
          </div>
        `
      )
      .join("")
  );

  setText("experienceLabel", portfolioData.experience.sectionLabel);
  setHtml("experienceTitle", `Experience & <span class="gradient-text">Education</span>`);
  setHtml(
    "timeline",
    portfolioData.experience.items
      .map(
        (item) => `
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-card">
              <div class="tl-date">${item.date}</div>
              <h3 class="tl-title">${item.title}</h3>
              <div class="tl-company">${item.company} • ${item.meta}</div>
              <p class="tl-desc">${item.description}</p>
              <div class="tl-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            </div>
          </div>
        `
      )
      .join("")
  );

  setText("ctaTitle", portfolioData.cta.title);
  setText("ctaDesc", portfolioData.cta.description);
  const ctaButton = document.getElementById("ctaButton");
  if (ctaButton) {
    ctaButton.href = portfolioData.cta.button.href;
    ctaButton.innerHTML = `${portfolioData.cta.button.label} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  }
}

function renderContactPage() {
  if (pageType !== "contact") return;

  setText("contactLabel", portfolioData.contact.sectionLabel);
  setHtml("contactTitle", `Let's <span class="gradient-text">Connect</span>`);
  setText("contactSubtitle", portfolioData.contact.subtitle);
  setHtml("contactInfoTitle", `Let's build something <span class="gradient-text">together</span>`);
  setText("contactInfoSubtitle", portfolioData.contact.infoSubtitle);
  setText("contactAvailability", portfolioData.contact.availability);
  setText("successTitle", portfolioData.contact.successTitle);
  setText("successMessage", portfolioData.contact.successMessage);

  setHtml(
    "contactMethods",
    portfolioData.contact.methods
      .map((method) => {
        const wrapperTag = method.href ? "a" : "div";
        const hrefAttr = method.href ? ` href="${method.href}"${method.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}` : "";
        const extraClass = method.href ? "" : " no-link";
        return `
          <${wrapperTag}${hrefAttr} class="contact-method${extraClass}">
            <div class="cm-icon">${iconMarkup(method.type)}</div>
            <div>
              <div class="cm-label">${method.label}</div>
              <div class="cm-value">${method.value}</div>
            </div>
          </${wrapperTag}>
        `;
      })
      .join("")
  );

  setHtml(
    "type",
    portfolioData.contact.inquiryOptions
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("")
  );
}

function renderFooter() {
  setHtml(
    "footerLinks",
    portfolioData.footer.links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")
  );
  setHtml(
    "footerSocial",
    portfolioData.footer.socials
      .map(
        (social) => `
          <a href="${social.href}" aria-label="${social.label}" class="social-icon"${social.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>
            ${iconMarkup(social.type)}
          </a>
        `
      )
      .join("")
  );
  setText("footerCopyright", portfolioData.footer.copyright);
}

function renderSiteContent() {
  renderBrand();
  renderNavigation();
  renderHomePage();
  renderContactPage();
  renderFooter();
}

function safeRenderSiteContent() {
  if (typeof portfolioData === "undefined") {
    throw new Error("portfolioData is not available. Make sure data.js is loaded before script.js.");
  }

  renderSiteContent();
}

function revealSite() {
  const loaderEl = document.getElementById("loader");
  const siteEl = document.getElementById("site");

  if (siteEl) {
    siteEl.classList.remove("hidden");
    siteEl.classList.add("visible");
  }

  if (!loaderEl) {
    initPage();
    return;
  }

  loaderEl.classList.add("slide-out");
  setTimeout(() => {
    loaderEl.style.display = "none";
    initPage();
  }, 700);
}

try {
  safeRenderSiteContent();
} catch (error) {
  console.error("Portfolio render failed:", error);
}

// ── LOADER ──────────────────────────────────────────────────
const loader = document.getElementById("loader");
const site = document.getElementById("site");
const loaderBar = document.getElementById("loaderBar");
const loaderPct = document.getElementById("loaderPercent");

if (loader && loaderBar && loaderPct) {
  let progress = 0;
  let completed = false;
  const messages = [
    "Loading assets...",
    "Building interface...",
    "Almost there...",
    "Finalizing..."
  ];
  const loaderText = document.querySelector(".loader-text");

  const finishLoading = () => {
    if (completed) return;
    completed = true;
    clearInterval(interval);

    loaderBar.style.width = "100%";
    loaderPct.textContent = "100%";
    if (loaderText) loaderText.textContent = "Welcome!";

    setTimeout(() => {
      revealSite();
    }, 300);
  };

  const interval = setInterval(() => {
    try {
      if (progress < 30) progress += Math.random() * 6 + 3;
      else if (progress < 70) progress += Math.random() * 3 + 1;
      else if (progress < 95) progress += Math.random() * 4 + 2;

      if (progress >= 100) {
        progress = 100;
        finishLoading();
        return;
      }

      loaderBar.style.width = `${progress}%`;
      loaderPct.textContent = `${Math.floor(progress)}%`;

      const msgIndex = Math.floor((progress / 100) * messages.length);
      if (loaderText && messages[msgIndex]) {
        loaderText.textContent = messages[Math.min(msgIndex, messages.length - 1)];
      }
    } catch (error) {
      console.error("Loader failed:", error);
      finishLoading();
    }
  }, 80);

  setTimeout(() => {
    finishLoading();
  }, 3500);
}

if (!loader) {
  initPage();
}

function initPage() {
  if (pageInitialized) return;
  pageInitialized = true;
  initNavbar();
  initReveal();
  initTyped();
  initSkillBars();
  initBurger();
  initContactForm();
}

function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (pageType !== "home") return;

  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove("active-nav"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active-nav");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
}

function initBurger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    const spans = burger.querySelectorAll("span");
    if (menu.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans.forEach((span) => {
        span.style.transform = "";
        span.style.opacity = "";
      });
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.querySelectorAll("span").forEach((span) => {
        span.style.transform = "";
        span.style.opacity = "";
      });
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal-up, .reveal-right, .tl-card, .proj-card, .skill-cat, .about-card-wrap");
  if (!els.length) return;

  document.querySelectorAll(".tl-card").forEach((el) => el.classList.add("reveal-up"));
  document.querySelectorAll(".proj-card").forEach((el) => el.classList.add("reveal-up"));
  document.querySelectorAll(".skill-cat").forEach((el) => el.classList.add("reveal-up"));
  document.querySelectorAll(".about-card-wrap").forEach((el) => el.classList.add("reveal-right"));
  document.querySelectorAll(".contact-method").forEach((el, index) => {
    el.classList.add("reveal-up");
    el.style.setProperty("--d", `${index * 0.1}s`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal-up, .reveal-right").forEach((el) => observer.observe(el));
}

function initTyped() {
  const el = document.getElementById("typed");
  if (!el || !portfolioData.hero.typedPhrases.length) return;

  const phrases = portfolioData.hero.typedPhrases;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const speed = { type: 90, delete: 45, pause: 1800 };

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex += 1;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, speed.pause);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? speed.delete : speed.type);
  }

  tick();
}

function initSkillBars() {
  const bars = document.querySelectorAll(".si-fill");
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pct = entry.target.getAttribute("data-pct");
        setTimeout(() => {
          entry.target.style.width = `${pct}%`;
        }, 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach((bar) => observer.observe(bar));
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const btnIcon = document.getElementById("btnIcon");
    const btnLoader = document.getElementById("btnLoader");

    btn.disabled = true;
    btnText.textContent = "Sending...";
    if (btnIcon) btnIcon.style.display = "none";
    if (btnLoader) btnLoader.style.display = "inline-block";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    form.style.display = "none";
    success.style.display = "block";
    success.style.animation = "fadeIn 0.5s ease";
  });

  ["name", "email", "message"].forEach((id) => {
    const field = document.getElementById(id);
    if (field) field.addEventListener("input", () => clearError(id));
  });
}

function validateForm() {
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  clearError("name");
  clearError("email");
  clearError("message");

  if (name && name.value.trim().length < 2) {
    showError("name", "nameErr", "Please enter your name");
    valid = false;
  }

  if (email) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
      showError("email", "emailErr", "Please enter a valid email");
      valid = false;
    }
  }

  if (message && message.value.trim().length < 10) {
    showError("message", "messageErr", "Message should be at least 10 characters");
    valid = false;
  }

  return valid;
}

function showError(fieldId, errId, msg) {
  const field = document.getElementById(fieldId);
  const err = document.getElementById(errId);
  if (field) field.classList.add("error");
  if (err) err.textContent = msg;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const errEl = document.getElementById(`${fieldId}Err`);
  if (field) field.classList.remove("error");
  if (errEl) errEl.textContent = "";
}

function resetForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const btn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const btnIcon = document.getElementById("btnIcon");
  const btnLoader = document.getElementById("btnLoader");

  if (form) {
    form.reset();
    form.style.display = "flex";
  }
  if (success) success.style.display = "none";
  if (btn) btn.disabled = false;
  if (btnText) btnText.textContent = "Send Message";
  if (btnIcon) btnIcon.style.display = "inline";
  if (btnLoader) btnLoader.style.display = "none";
}

window.resetForm = resetForm;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
  });
});

const glow = document.createElement("div");
glow.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9998;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.3s ease, top 0.3s ease;
  left: -999px; top: -999px;
`;
document.body.appendChild(glow);

document.addEventListener("mousemove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
