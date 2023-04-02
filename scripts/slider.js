const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const slide = slider.querySelectorAll('.slide');
const prevBtns = slider.querySelectorAll('.prev');
const nextBtns = slider.querySelectorAll('.next');
let slideWidth = slide[0].clientWidth;
let currentSlide = 0;
let startX = null;
let startY = null;

slides.style.transform = `translateX(-${(currentSlide * slideWidth)}px)`;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

slider.addEventListener('touchmove', (e) => {
  if (startX === null) {
    return;
  }
  const diffX = e.touches[0].clientX - startX;
  const diffY = e.touches[0].clientY - startY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    e.preventDefault();
    slides.style.transform = `translateX(-${currentSlide * slideWidth - diffX + (currentSlide * 102)}px)`;
  }
});

slider.addEventListener('touchend', (e) => {
  if (startX === null) {
    return;
  }
  const diffX = e.changedTouches[0].clientX - startX;
  if (Math.abs(diffX) > slideWidth / 3) {
    currentSlide += diffX > 0 ? -1 : 1;
    if (currentSlide < 0) {
      currentSlide = 0;
    } else if (currentSlide > slide.length - 1) {
      currentSlide = slide.length - 1;
    }
  }
  slides.style.transform = `translateX(-${(currentSlide * slideWidth) + (currentSlide * 102)}px)`;
  startX = null;
  startY = null;
});

prevBtns.forEach((prevBtn) => prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  slides.style.transform = `translateX(-${(currentSlide * slideWidth) + (currentSlide * 102)}px)`;
}));

nextBtns.forEach((nextBtn) => nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > slide.length - 1) {
    currentSlide = slide.length - 1;
  }
  slides.style.transform = `translateX(-${(currentSlide * slideWidth) + (currentSlide * 102)}px)`;
}));
