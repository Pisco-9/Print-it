const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let image = document.querySelector(".banner-img");
// console.log(image);

let texte = document.querySelector("#banner p");
// console.log(texte);

let arrowRight = document.querySelector(".arrow button:nth-child(2)");
let arrowLeft = document.querySelector(".arrow button:nth-child(1)");
// console.log(arrowRight);
// console.log(arrowLeft);

let bulles = document.querySelector(".dots");
// console.log(bulles);

let index = 0;

/**Je crée une fonction qui va créer autant de <span> que d'images dans le tableau "slides".*/
function createDot() {
  /**La boucle for générera un nombre équivalent de <span> que d'images créées dans le tableau "slides".*/
  for (let index = 0; index < slides.length; index++) {
    /**En-dessous, je crée la balise <span></span>.*/
    const dot = document.createElement("span");

    /**En-dessous, j'ajoute la classe "dot" du (style.css) dans la balise <span>.*/
    dot.classList.add("dot");

    /**En-dessous, j'ajoute la balise <span> dans la balise <div> qui a la classe "dots".*/
    bulles.appendChild(dot);
  }
}
createDot(); /**ici le "createDot()" permet d'afficher la création (des <span>) dans la page internet.*/

function updateSlide() {
  image.src = "./assets/images/slideshow/" + slides[index].image;
  texte.innerHTML = slides[index].tagLine;

  const dots = document.querySelectorAll(".dot");

  for (let bulle of dots) {
    bulle.classList.remove("dot_selected");
  }

  dots[index].classList.add("dot_selected");
}

updateSlide();

arrowRight.addEventListener("click", function () {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateSlide();
  console.log(index);
});

arrowLeft.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateSlide();
  console.log(index);
});

console.log(arrowRight.length);
