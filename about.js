const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80
  });
}