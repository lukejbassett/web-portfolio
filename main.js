// CV download function
function downloadCV() {
  window.open("./rsrc/lukebcv.pdf");
}

// navigation hamburger for mobile screens
const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
btn.addEventListener("click", function () {
  btn.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

// to top button
const topButton = document.querySelector(".toTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    topButton.style.opacity = "1";
  } else {
    topButton.style.display = "none";
    topButton.style.opacity = "0";
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
