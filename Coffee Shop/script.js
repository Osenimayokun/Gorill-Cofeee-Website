"use strict";

const login = document.querySelector(".login");
const modal = document.querySelector(".modal");
const btnclose = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
login.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnclose.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
