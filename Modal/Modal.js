const openBtn = document.querySelector("#open");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const modalOn = document.querySelector(".modal-on");

// Event Listeners

openBtn.addEventListener("click", () => {
  console.log("clicked");
  modal.classList.add("modal-on");
});

closeBtn.addEventListener("click", () => {
  console.log("clicked close btn");
  modal.classList.remove("modal-on");
});
