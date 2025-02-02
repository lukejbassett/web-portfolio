// CV download function
function downloadCV() {
  window.open("./rsrc/CV Luke Bassett (23-10-23).pdf");
}

// navigation hamburger for mobile screens
const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
btn.addEventListener("click", function () {
  btn.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
