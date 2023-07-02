const slides = document.querySelectorAll(".slide");
const navigation = document.querySelectorAll(".navigation span");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      navigation[i].classList.add("active");
    } else {
      slide.classList.remove("active");
      navigation[i].classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

navigation.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    goToSlide(index);
  });
});

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(nextSlide, 10000); // Change slide every 10 seconds
