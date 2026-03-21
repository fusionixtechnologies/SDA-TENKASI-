const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

/* AOS */
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80
  });
}


  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 3000); // 3 seconds
