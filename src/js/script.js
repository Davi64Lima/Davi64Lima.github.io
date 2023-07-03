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

/* INTERCAMBIO*/
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popupInter = document.getElementById("popupInter");

openBtn.addEventListener("click", function () {
  popupInter.showModal();
});

closeBtn.addEventListener("click", function () {
  popupInter.close();
});

/* PROFICE*/
const opBtn = document.getElementById("opBtn");
const clBtn = document.getElementById("clBtn");
const popupDialog = document.getElementById("popupProfici");

opBtn.addEventListener("click", function () {
  popupDialog.showModal();
});

clBtn.addEventListener("click", function () {
  popupDialog.close();
});

/* RU*/
const opBton = document.getElementById("opBton");
const clBton = document.getElementById("clBton");
const popupRu = document.getElementById("popupRu");

opBton.addEventListener("click", function () {
  popupRu.showModal();
});

clBton.addEventListener("click", function () {
  popupRu.close();
});
/*PROAE*/
const opBt = document.getElementById("opBt");
const clsBoton = document.getElementById("clsBoton");
const popupProae = document.getElementById("popupProae");

opBt.addEventListener("click", function () {
  popupProae.showModal();
});

clsBoton.addEventListener("click", function () {
  popupProae.close();
});
/*Saude*/
const abrir = document.getElementById("abrir");
const  fechar =document.getElementById("fechar");
const Sd= document.getElementById("Sd");

abrir.addEventListener("click", function(){
  Sd.showModal();
})
fechar.addEventListener("click", function(){
Sd.close();
})
