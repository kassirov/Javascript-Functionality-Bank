const bars = document.querySelector(".bars");
const sideBar = document.querySelector(".sidebar-container");
const closeBar = document.querySelector(".close");

const bodyClass = document.querySelector("#body");

bars.addEventListener("click", () => {
  sideBar.classList.toggle("enabled");
});

closeBar.addEventListener("click", () => {
  sideBar.classList.toggle("enabled");
});

window.load(function () {
  bodyClass.removeClass("preload");
});
