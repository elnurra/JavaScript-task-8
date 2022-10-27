const imagesOnGalery = document.querySelectorAll(".gallery a");
const newPopup = document.querySelector(".popup");
const sliderImg = document.querySelector(".slider img");
const closeBtn = document.querySelector(".close-icon");
const newBtn = document.querySelector(".next");
const prev = document.querySelector(".prev");
const inner = document.querySelector(".inner");
let newElem;
imagesOnGalery.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("showSlider");
    let imgSource = this.getAttribute("href");
    sliderImg.setAttribute("src", imgSource);
    newPopup.style.display = "flex";
    newPopup.classList.remove("d-none");
  });
});
const next = function nextFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
};
setInterval(next, 5000);
newBtn.addEventListener("click", next);

prev.addEventListener("click", function (e) {
  arrowLeftFunction();
});
function CloseImg() {
  newPopup.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    CloseImg();
  }
});

closeBtn.addEventListener("click", function () {
  CloseImg();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    CloseImg();
  }
  console.log(e.key);
});

function arrowRightFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}
function arrowLeftFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.previousElementSibling) {
    sliderShow.previousElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.previousElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[2].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[2];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    arrowRightFunction();
  } else if (e.key === "ArrowLeft") {
    arrowLeftFunction();
  }
  console.log(e.key);
});
