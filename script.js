// KALVERTS HOMEPAGE - JavaScript
// Logo, favicon, mobilmeny, CTA-text, font, färger, kontaktformulär och tracking placeholders.

/* =========================================================
   TRACKING PLACEHOLDERS
   =========================================================
   Lägg in riktiga ID:n när de finns:
   - Google Tag Manager: GTM-XXXXXXX
   - Google Analytics 4: G-XXXXXXXXXX
   - Leadfeeder / Dealfront: lägg script via GTM eller här
   - Hotjar: HOTJAR_ID

   Rekommenderat: lägg GA4, Leadfeeder och Hotjar via Google Tag Manager.
*/
window.dataLayer = window.dataLayer || [];
window.kalvertsTracking = {
  gtmId: "GTM-XXXXXXX",
  ga4Id: "G-XXXXXXXXXX",
  leadfeeder: "LEADFEEDER_PLACEHOLDER",
  hotjarId: "HOTJAR_ID"
};

const colorFix = document.createElement("style");
colorFix.textContent = `
  :root {
    --bg: #FAF7F2;
    --dark: #0B1F3A;
    --purple: #132B50;
    --text-soft: #233954;
    --text-muted: #6B7280;
    --green: #F6C453;
    --orange: #F97316;
    --blue: #DCE8F7;
    --pink: #FFE4D5;
    --light-pink: #F2EEE7;
    --white: #FFFFFF;
    --border: rgba(11, 31, 58, 0.12);
  }

  body {
    background:
      radial-gradient(circle at 8% 8%, rgba(246,196,83,.18), transparent 26rem),
      radial-gradient(circle at 92% 12%, rgba(249,115,22,.10), transparent 25rem),
      var(--bg) !important;
    color: var(--dark) !important;
  }

  .site-header {
    background: rgba(250, 247, 242, 0.86) !important;
    border-bottom-color: rgba(11, 31, 58, 0.10) !important;
  }

  .btn-primary,
  .number-badge,
  .hero-card-outer,
  .graphic-line,
  .energy-shell,
  .cta-box { background: var(--dark) !important; }
  .btn-primary:hover { background: var(--purple) !important; }
  .strategy-box,
  .offer-green,
  .service-card.green,
  .final-cta { background: var(--green) !important; }
  .mini-card.orange,
  .btn-orange,
  .service-card.orange,
  .case-visual.orange,
  .dot-orange { background: var(--orange) !important; }
  .service-card.blue,
  .case-visual.blue,
  .dot-blue { background: var(--blue) !important; }
  .service-card.pink,
  .case-visual.pink,
  .about-pink { background: var(--pink) !important; }
  .mini-card.dark,
  .offer-dark { background: var(--purple) !important; }
  .dot-green { background: var(--green) !important; }
  .process-number { color: #6FA3E8 !important; }
  .blob-green { background: rgba(246, 196, 83, 0.48) !important; }
  .blob-blue { background: rgba(220, 232, 247, 0.75) !important; }
  .blob-pink,
  .energy-blob-pink { background: rgba(249, 115, 22, 0.22) !important; }
  .energy-blob-green { background: rgba(246, 196, 83, 0.18) !important; }
`;
document.head.appendChild(colorFix);

const siteFix = document.createElement("style");
siteFix.textContent = `
  *, body, h1, h2, h3, p, nav, a, button, input, textarea, label, select,
  .logo, .nav, .btn, .section-label, .headline, .lead, .body-text,
  .hero-subtitle, .hero-support, .strategy-box h2, .offer-intro,
  .offer-punchline, .about-statement, .footer-logo, .footer-links, .tag {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  }

  .logo { display: inline-flex; align-items: center; width: 135px; height: auto; }
  .logo img { display: block; width: 135px; height: auto; }
  .reveal { opacity: 1 !important; transform: none !important; }

  .contact-form { display: grid; gap: 14px; margin-top: 24px; }
  .contact-field { display: grid; gap: 7px; }
  .contact-field label {
    color: rgba(255,255,255,.78);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .contact-field input,
  .contact-field textarea {
    width: 100%;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 18px;
    background: rgba(255,255,255,.10);
    color: #fff;
    font-size: 15px;
    line-height: 1.45;
    outline: none;
    padding: 15px 16px;
  }
  .contact-field input::placeholder,
  .contact-field textarea::placeholder { color: rgba(255,255,255,.45); }
  .contact-field input:focus,
  .contact-field textarea:focus {
    border-color: rgba(246,196,83,.85);
    box-shadow: 0 0 0 3px rgba(246,196,83,.18);
  }
  .contact-form-note { color: rgba(255,255,255,.62); font-size: 13px; line-height: 1.5; }
  .contact-submit { width: 100%; margin-top: 4px; border: 0; }

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

function updateProblemCards() {
  const section = document.querySelector("#hemsidor");
  const cards = section?.querySelectorAll(".cards-3 .card");
  if (!cards || cards.length < 3) return;

  const updated = [
    { title: "Tydligt budskap", body: "Kunden förstår snabbt vad ni gör och varför det spelar roll." },
    { title: "Starkt första intryck", body: "Hemsidan speglar kvaliteten i företaget från första klicket." },
    { title: "Tydlig vision", body: "Besökaren ser vart ni är på väg och vad nästa steg är." }
  ];

  cards.forEach((card, index) => {
    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");
    if (heading) heading.textContent = updated[index].title;
    if (paragraph) paragraph.textContent = updated[index].body;
  });
}
updateProblemCards();

function createContactForm() {
  const box = document.querySelector("#kontakt .cta-box");
  if (!box) return;

  const recipient = "adrian@kalverts.se";

  box.innerHTML = `
    <h3>Kontakta oss</h3>
    <p>Fyll i formuläret så skapas ett mejl direkt till oss.</p>
    <form class="contact-form" id="contactForm" data-form="kalverts-contact">
      <div class="contact-field">
        <label for="contactName">Namn</label>
        <input id="contactName" name="name" type="text" autocomplete="name" placeholder="Ditt namn" required />
      </div>
      <div class="contact-field">
        <label for="contactEmail">Mejl</label>
        <input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="din@mejl.se" required />
      </div>
      <div class="contact-field">
        <label for="contactCompany">Företag</label>
        <input id="contactCompany" name="company" type="text" autocomplete="organization" placeholder="Företagsnamn" />
      </div>
      <div class="contact-field">
        <label for="contactMessage">Meddelande</label>
        <textarea id="contactMessage" name="message" rows="5" placeholder="Berätta kort vad ni behöver hjälp med" required></textarea>
      </div>
      <p class="contact-form-note">Formuläret öppnar din mejlklient och skickas till ${recipient}.</p>
      <button class="btn btn-white contact-submit" type="submit">Skicka förfrågan →</button>
    </form>
  `;

  const form = document.querySelector("#contactForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("message") || "").trim();

    window.dataLayer.push({ event: "contact_form_submit", form_name: "kalverts_contact", company: company || undefined });

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { event_category: "contact", event_label: "kalverts_contact_form" });
    }

    const subject = encodeURIComponent("Ny förfrågan från Kalverts.se");
    const body = encodeURIComponent(`Namn: ${name}\nMejl: ${email}\nFöretag: ${company || "Ej angivet"}\n\nMeddelande:\n${message}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
createContactForm();

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
