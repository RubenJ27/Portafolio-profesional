const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio = document.querySelector(".img-modal-js");

/* Adding an event listener to the portfolio section. */
$portfolio.addEventListener("click", (e) => {
  //console.log(e.target.classList);
  if (e.target.classList.contains("img-btn-modal-js")) {
    // SRC
    let urlImg = e.target.attributes[0].nodeValue;
    //Add Modal
    $modalImgPortfolio.src = urlImg;
  }
});

/* Adding an event listener to the DOM. */
addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const menu_items = document.querySelector("menu_items");
      menu_items.classList.toggle("mostrar");
    });
  }
  /*Indicador de menu*/

  const secciones = document.querySelectorAll(".seccion");
  const menuItems = document.querySelectorAll(".menu_item");

  /**
   * It takes an array of entries, loops through them, and if the entry is intersecting, it finds the
   * menu item that matches the entry's id, adds the class "active" to it, and removes the class
   * "active" from all other menu items.
   * @param entries - An array of IntersectionObserverEntry objects.
   */
  const funcionObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemActual = Array.from(menuItems).find(
          (item) => item.dataset.url === entry.target.id
        );
        console.log(itemActual);
        itemActual.classList.add("active");
        for (const item of menuItems) {
          if (item != itemActual) {
            item.classList.remove("active");
          }
        }
      }
    });
  };

  /* Creating a new IntersectionObserver object. */
  const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  /* Looping through the array of sections and observing each one. */
  secciones.forEach((seccion) => observer.observe(seccion));
});
