const slides = document.querySelectorAll(".slides img");
let idx = 0;
let intervalId = null;

function initializeSlider() {
  if (slides.length > 0) {
    slides[idx].classList.add("display");
    intervalId = setInterval(nextSlide, 1000);
  }
}

function showSlide(idx) {
  if (idx < 0) {
    idx = slides.length - 1;
  } else if (idx > slides.length) {
    idx = 0;
  }
  slides.forEach((slide) => {
    slides.classList.remove("display");
  });
  slides[idx].classList.add("display")
}

function nextSlide() {
  idx++;
  showSlide(idx);
}
