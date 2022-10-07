"strict";

const topButtton = document.querySelector(".toggle-button");
const sideBar = document.querySelector(".mobile-nav");
const background = document.querySelector(".background");
const modal = document.querySelector(".modal");
const choosePlan = document.querySelectorAll(".options__btn");

const noButton = document.querySelector(".modal__action--negative");
//THE SCRIPT NOTE
topButtton.addEventListener("click", function () {
  sideBar.style.display = "block";
  background.style.display = "block";
});
background.addEventListener("click", function () {
  modal.style.display = "none";
  sideBar.style.display = "none";
  background.style.display = "none";
});
for (i = 0; i < choosePlan.length; i++) {
  choosePlan[i].addEventListener("click", function () {
    modal.style.display = "block";
    background.style.display = "block";
  });
}
noButton.addEventListener("click", function () {
  modal.style.display = "none";
});
