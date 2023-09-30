const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1000,
  touch: false
})
// Este script no necesita modificaciones, es el mismo que proporcioné anteriormente.
document.addEventListener("DOMContentLoaded", function () {
  // Agregar funcionalidad de desplazamiento suave al hacer clic en los enlaces del menú
  const menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: "smooth" });
      });
  });
});

