let btn = document.querySelector(".burger");
btn.addEventListener("click", function () {
  console.log("gfg");
  btn.classList.toggle("active");
});

const carouselSlide = document.querySelector("#photos-container");
const carouselImages = document.querySelectorAll("#photos-container img");
const prevBTN = document.querySelector("#PrevButton");
const nextBTN = document.querySelector("#NextButton");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;

nextBTN.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out ";
  counter++;
  carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

prevBTN.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out ";
  counter--;
  carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === `lastClone`) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }
  if (carouselImages[counter].id === `firstClone`) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }
});