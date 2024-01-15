const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav--main-nav--links");
btn.addEventListener("click", function () {
  btn.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
