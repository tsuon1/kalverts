// KALVERTS HOMEPAGE - JavaScript
// Logo, favicon, mobilmeny, CTA-text, typografi och responsiv fallback.

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Inter+Tight:wght@600;700;800;900&display=swap";
document.head.appendChild(fontLink);

const typographyFix = document.createElement("style");
typographyFix.textContent = `
  :root {
    --font-heading: "Inter Tight", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-body: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body,
  p,
  nav,
  button,
  input,
  textarea,
  .ui-text,
  .btn,
  .section-label,
  .tag,
  .nav,
  .mobile-menu,
  .footer-links,
  .lead,
  .body-text,
  .hero-subtitle,
  .hero-support,
  .offer-body,
  .offer-points,
  .case-link,
  .footer-subtitle,
  .mini-card span,
  .strategy-box p {
    font-family: var(--font-body) !important;
  }

  h1,
  h2,
  h3,
  .heading,
  .headline,
  .outcome-heading,
  .strategy-box h2,
  .offer-intro,
  .offer-punchline,
  .about-statement,
  .footer-logo {
    font-family: var(--font-heading) !important;
    font-weight: 900 !important;
    letter-spacing: -0.075em;
    color: #0f0e18;
  }

  .hero h1 {
    font-size: clamp(70px, 9vw, 136px);
    line-height: 0.82;
    letter-spacing: -0.085em;
  }

  .headline {
    font-size: clamp(50px, 6vw, 88px);
    line-height: 0.84;
    letter-spacing: -0.08em;
  }

  h3,
  .card h3,
  .solution-card h3,
  .service-card h3,
  .case-card h3,
  .process-card h3 {
    font-size: clamp(28px, 2.25vw, 36px);
    line-height: 0.92;
    letter-spacing: -0.072em;
  }

  .outcome-heading {
    font-size: clamp(42px, 4.8vw, 72px);
    line-height: 0.86;
    letter-spacing: -0.078em;
  }

  .strategy-box h2 {
    font-size: clamp(36px, 3.8vw, 56px);
    line-height: 0.88;
    letter-spacing: -0.075em;
  }

  .offer-intro {
    font-size: clamp(28px, 2.6vw, 42px) !important;
    line-height: 0.96 !important;
    letter-spacing: -0.072em;
  }

  .offer-punchline,
  .about-statement {
    font-size: clamp(25px, 2.2vw, 35px) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.07em;
  }

  .lead,
  .hero-subtitle {
    line-height: 1.66;
  }

  .body-text,
  .hero-support,
  .offer-body,
  .card p,
  .solution-card p,
  .service-card p,
  .case-card p,
  .process-card p {
    line-height: 1.72;
  }

  .nav,
  .footer-links,
  .section-label,
  .btn {
    font-weight: 850 !important;
  }

  @media (max-width: 760px) {
    .hero h1 { font-size: clamp(52px, 15vw, 80px); }
    .headline { font-size: clamp(41px, 12vw, 60px); }
    .outcome-heading { font-size: clamp(37px, 11vw, 55px); }
  }

  @media (max-width: 420px) {
    .hero h1 { font-size: clamp(45px, 14.8vw, 64px); }
    .headline { font-size: clamp(36px, 11.5vw, 51px); }
    h3,
    .card h3,
    .solution-card h3,
    .service-card h3,
    .case-card h3,
    .process-card h3 { font-size: 27px; }
    .outcome-heading { font-size: clamp(33px, 11vw, 47px); }
  }
`;
document.head.appendChild(typographyFix);

const siteFix = document.createElement("style");
siteFix.textContent = `
  .logo { display: inline-flex; align-items: center; width: 135px; height: auto; }
  .logo img { display: block; width: 135px; height: auto; }
  .reveal { opacity: 1 !important; transform: none !important; }
  .outcome-heading {
    margin: 58px 0 10px;
    font-family: var(--font-heading, "Inter Tight", "Inter", sans-serif);
    font-size: clamp(34px, 4vw, 58px);
    line-height: .95;
    letter-spacing: -.035em;
    color: var(--color-primary, #0B1F3A);
  }
  .outcome-heading + .cards-3 { margin-top: 26px; }

  @media (max-width: 420px) {
    .container { width: min(100% - 24px, var(--max)); }
    .site-header .container { width: min(100% - 20px, var(--max)); }
    .header-inner { padding: 12px 0; }
    .logo { width: 112px; }
    .logo img { width: 112px; }
    .mobile-menu-button { padding: 9px 11px; font-size: 16px; }
    .hero { padding: 112px 0 56px; }
    .hero-grid { gap: 32px; }
    .hero h1 { font-size: clamp(44px, 15vw, 58px); line-height: .9; letter-spacing: -.055em; }
    .headline { font-size: clamp(34px, 12vw, 46px); line-height: .95; letter-spacing: -.045em; }
    .outcome-heading { margin-top: 36px; font-size: clamp(31px, 11vw, 44px); }
    .hero-subtitle { margin-top: 22px; font-size: 17px; line-height: 1.55; }
    .hero-support, .body-text { font-size: 15px; line-height: 1.65; }
    .lead { font-size: 16px; line-height: 1.65; }
    .section-label { font-size: 9px; letter-spacing: .12em; padding: 7px 10px; max-width: 100%; }
    .section { padding: 44px 0; }
    .two-column, .solution-grid, .offer-grid, .process-grid, .cta-grid { gap: 24px; }
    .cards-3, .cards-4 { gap: 14px; margin-top: 28px; }
    .hero-card-outer { padding: 10px; border-radius: 24px; transform: rotate(1deg); }
    .hero-card { padding: 14px; border-radius: 18px; }
    .strategy-box { padding: 18px; border-radius: 18px; }
    .strategy-box p { font-size: 10px; letter-spacing: .12em; }
    .strategy-box h2 { font-size: 26px; }
    .mini-grid { gap: 10px; }
    .mini-card { padding: 14px; border-radius: 16px; }
    .mini-card strong { font-size: 24px; }
    .mini-card span { margin-top: 20px; font-size: 12px; }
    .punchline-card { padding: 14px; font-size: 14px; border-radius: 16px; }
    .card, .solution-card, .service-card, .process-card, .case-content, .cta-box { padding: 20px; }
    .card, .solution-card, .service-card, .process-card, .case-card, .cta-box { border-radius: 24px; }
    .solution-shell, .offer-green, .offer-dark, .energy-shell, .about-white, .about-pink, .final-cta { padding: 24px; border-radius: 28px; }
    h3, .card h3, .solution-card h3, .service-card h3, .case-card h3, .process-card h3 { font-size: 22px; }
    .number-badge { width: 40px; height: 40px; margin-bottom: 28px; }
    .graphic-line { width: 40px; height: 10px; margin-bottom: 24px; }
    .offer-intro, .offer-dark .offer-intro { font-size: 19px; }
    .offer-body, .offer-dark .offer-body { font-size: 15px; }
    .offer-punchline { font-size: 17px; padding: 16px; }
    .service-card { min-height: 220px; }
    .process-number { font-size: 30px; }
    .case-visual { height: 140px; padding: 16px; }
    .tags { gap: 8px; margin-top: 28px; }
    .tag { font-size: 12px; padding: 9px 12px; }
    .about-pink p { font-size: 16px; }
    .about-statement { font-size: 24px !important; }
    .footer-inner { padding: 22px; border-radius: 24px; }
    .footer-links { gap: 10px; font-size: 9px; letter-spacing: .12em; }
  }

  @media (max-width: 340px) {
    .container { width: min(100% - 20px, var(--max)); }
    .hero h1 { font-size: 42px; }
    .headline { font-size: 33px; }
    .hero-subtitle { font-size: 16px; }
    .btn { padding: 12px 16px; font-size: 12px; }
    .section-label { font-size: 8px; letter-spacing: .1em; }
    .strategy-box h2 { font-size: 24px; }
    .mini-card { padding: 12px; }
    .mini-card span { font-size: 11px; }
    .solution-shell, .offer-green, .offer-dark, .energy-shell, .about-white, .about-pink, .final-cta { padding: 20px; }
  }
`;
document.head.appendChild(siteFix);

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = "assets/favicon.svg";
document.head.appendChild(favicon);

const appleIcon = document.createElement("link");
appleIcon.rel = "apple-touch-icon";
appleIcon.href = "assets/favicon.svg";
document.head.appendChild(appleIcon);

const logo = document.querySelector(".logo");
if (logo) {
  logo.innerHTML = '<img src="assets/kalverts-logo.svg" alt="Kalverts" />';
  logo.setAttribute("aria-label", "Kalverts");
}

function normalizeConsultationButtons() {
  document.querySelectorAll("a.btn").forEach((button) => {
    const text = button.textContent.trim();
    if (
      text === "Boka samtal" ||
      text === "Boka ett första samtal →" ||
      text === "Boka din hemsida →" ||
      text === "Boka konsultation →"
    ) {
      button.textContent = text.includes("→") ? "Boka konsultation →" : "Boka konsultation";
    }
  });
}
normalizeConsultationButtons();

function updateOutcomeCards() {
  const section = document.querySelector("#hemsidor");
  if (!section) return;

  const cardsGrid = section.querySelector(".cards-3");
  if (!cardsGrid) return;

  if (!section.querySelector(".outcome-heading")) {
    const heading = document.createElement("h2");
    heading.className = "outcome-heading";
    heading.textContent = "Vi ser till att du får...";
    cardsGrid.parentNode.insertBefore(heading, cardsGrid);
  }

  const cards = cardsGrid.querySelectorAll(".card");
  const updated = [
    {
      title: "Tydligt budskap",
      body: "Kunden förstår snabbt vad ni gör och varför det spelar roll."
    },
    {
      title: "Starkt första intryck",
      body: "Hemsidan speglar kvaliteten i företaget från första klicket."
    },
    {
      title: "Tydlig vision",
      body: "Besökaren ser vart ni är på väg och vad nästa steg är."
    }
  ];

  cards.forEach((card, index) => {
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (updated[index]) {
      if (h3) h3.textContent = updated[index].title;
      if (p) p.textContent = updated[index].body;
    }
  });
}
updateOutcomeCards();

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll("#mobileMenu a");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((element) => element.classList.add("is-visible"));
