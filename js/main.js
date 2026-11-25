"use strict";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) document.documentElement.classList.add("js");

function loadIconFonts() {
  const fontStylesheet = document.createElement("link");
  fontStylesheet.rel = "stylesheet";
  fontStylesheet.href = "css/icon-fonts.css";
  fontStylesheet.onload = () => {
    const families = [
      [".fa-solid", '900 16px "AJIEEB FA Solid"'],
      [".fa-regular", '400 16px "AJIEEB FA Regular"'],
      [".fa-brands", '400 16px "AJIEEB FA Brands"']
    ];
    const requests = families
      .filter(([selector]) => document.querySelector(selector))
      .map(([, font]) => document.fonts.load(font));

    Promise.all(requests).then(() => {
      document.documentElement.classList.remove("icons-pending");
      document.documentElement.classList.add("icons-ready");
    }).catch(() => {
      document.documentElement.classList.remove("icons-pending");
    });
  };
  fontStylesheet.onerror = () => document.documentElement.classList.remove("icons-pending");
  document.head.append(fontStylesheet);
}

window.addEventListener("load", () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadIconFonts, { timeout: 1500 });
  } else {
    window.setTimeout(loadIconFonts, 500);
  }
}, { once: true });

function loadTawkChat() {
  if (window.Tawk_API) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const chatScript = document.createElement("script");
  chatScript.async = true;
  chatScript.src = "https://embed.tawk.to/6afc63a231f8653cc3bb52ac/1k89nr5u0";
  chatScript.charset = "UTF-8";
  chatScript.setAttribute("crossorigin", "*");
  document.head.append(chatScript);
}

window.addEventListener("load", () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadTawkChat, { timeout: 5000 });
  } else {
    window.setTimeout(loadTawkChat, 2500);
  }
}, { once: true });

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
    primaryNav.classList.toggle("is-open", !isOpen);
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-bars" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      primaryNav.classList.remove("is-open");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

// Google Maps hanya ditambahkan ke website klien bila alamat publik diberikan.
