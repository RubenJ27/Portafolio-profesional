const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener('click', (e) => {
   //console.log(e.target.classList);
   if(e.target.classList.contains('img-btn-modal-js')) {
      // SRC
      let urlImg = e.target.attributes[0].nodeValue;
      //Add Modal
      $modalImgPortfolio.src = urlImg;
   }
})

addEventListener('DOMContentLoaded', () => {
   const btn_menu = document.querySelector('.btn_menu')
   if(btn_menu){
       btn_menu.addEventListener('click', () => {
           const menu_items = document.querySelector('menu_items')
           menu_items.classList.toggle('mostrar')
       })
   }
   /*Indicador de menu*/

   const secciones = document.querySelectorAll('.seccion');
   const menuItems = document.querySelectorAll('.menu_item');

   const funcionObserver = entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting){
               const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id);
               console.log(itemActual);
               itemActual.classList.add('active')
               for (const item of menuItems) {
                   if (item != itemActual){
                       item.classList.remove('active')
                   }
               }
           }
       })
   }

   const observer = new IntersectionObserver(funcionObserver, {
       root: null,
       rootMargin: '0px',
       threshold: 0.1
   })

   secciones.forEach(seccion => observer.observe(seccion))
})