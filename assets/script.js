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

const bannerImg = document.querySelector(".banner-img");
console.log(bannerImg);

const bannerPara = document.querySelector("#banner p");
console.log(bannerPara);

const arrowRight = document.querySelector(".arrow_right");
console.log(arrowRight);

const arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);

const divRonds = document.querySelector(".dots");
console.log(divRonds);

let rond;

let index = 0;

function createSpanDot() {
  for (let index = 0; index < slides.length; index++) {
    const spanDot = document.createElement("span");
    spanDot.classList.add("dot");
    divRonds.appendChild(spanDot);
  }
}
createSpanDot();

function upGradeSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bannerPara.innerHTML = slides[index].tagLine;

  const dotSpan = document.querySelectorAll(".dots span");
  console.log(dotSpan);

  for (rond of dotSpan) {
    rond.classList.remove("dot_selected");

    dotSpan[index].classList.add("dot_selected");
  }
}
upGradeSlide();

arrowRight.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  upGradeSlide();
});

arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  upGradeSlide();
});
