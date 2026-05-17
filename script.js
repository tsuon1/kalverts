// KALVERTS HOMEPAGE - JavaScript
// 1. Mobilmeny
// 2. Reveal-animation vid scroll

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
    mobileMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
