// KALVERTS HOMEPAGE - JavaScript
// Mobilmeny + reveal fallback + extra responsiv CSS ner till 320px.

const responsiveFix = document.createElement("style");
responsiveFix.textContent = `
  @media (max-width: 420px) {
    .container { width: min(100% - 24px, var(--max)); }
    .site-header .container { width: min(100% - 20px, var(--max)); }
    .header-inner { padding: 12px 0; }
    .logo { font-size: 16px; }
    .mobile-menu-button { padding: 9px 11px; font-size: 16px; }

    .hero { padding: 112px 0 56px; }
    .hero-grid { gap: 32px; }
    .hero h1 { font-size: clamp(44px, 15vw, 58px); line-height: .9; letter-spacing: -.055em; }
    .headline { font-size: clamp(34px, 12vw, 46px); line-height: .95; letter-spacing: -.045em; }
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
document.head.appendChild(responsiveFix);

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

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  revealElements.forEach((element) => observer.observe(element));
}
