const burgerBtn = document.getElementById("burger-btn");
const nav = document.getElementById("nav-ul");

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

function scrollFunction() {
  const navbar = document.getElementById('nav');
  const scroll = window.scrollY;
  if (scroll < 100) {
    navbar.classList.remove('bg-color');
    burgerBtn.classList.remove('burger-btn-white');
  } else {
    navbar.classList.add('bg-color');
    burgerBtn.classList.add('burger-btn-white');
  }
}
window.addEventListener('scroll', scrollFunction);

const slider = document.querySelector('.items');
const slides = document.querySelectorAll('.item');
const button = document.querySelectorAll('.button');

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1));

const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].classList.remove('prev');
    slides[i].classList.remove('next');
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slides[current].classList.add('active');
  slides[prev].classList.add('prev');
  slides[next].classList.add('next');
};

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
