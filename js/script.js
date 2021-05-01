const $portfolio = document.querySelector(".sec-portfolio-js");

$portfolio.addEventListener("click", (e) => {
   //console.log(e.target)
   console.log(e.target.classList);
});

document.getElementById('app').innerHTML = 'Hola mundo'