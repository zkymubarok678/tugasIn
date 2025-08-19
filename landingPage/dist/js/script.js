// Enhanced Mobile Menu Toggle
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuNav.classList.toggle("menu-active");
  document.body.classList.toggle("no-scroll");
});

// Close menu when clicking a link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("menu-active");
    menuBar.classList.remove("fa-times");
    document.body.classList.remove("no-scroll");
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);

  // Close menu on scroll
  if (menuNav.classList.contains("menu-active")) {
    menuNav.classList.remove("menu-active");
    menuBar.classList.remove("fa-times");
    document.body.classList.remove("no-scroll");
  }
});

// Prevent scrolling when menu is open
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .no-scroll {
      overflow: hidden;
      height: 100vh;
    }
  `;
  document.head.appendChild(style);
});
