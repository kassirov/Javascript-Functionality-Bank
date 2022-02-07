//Selectors
const number = document.querySelector(".number");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

let count = 0;

// Event Listeners
increase.addEventListener("click", () => {
  count++;
  updateNumber();
  color();
});

decrease.addEventListener("click", () => {
  count--;
  updateNumber();
  color();
});

reset.addEventListener("click", () => {
  location.reload();
});

//Function

function updateNumber() {
  number.innerHTML = count;
}

function color() {
  if (number.innerHTML < 0) {
    number.classList.add("negative");
  } else {
    number.classList.remove("negative");
  }
  if (number.innerHTML > 0) {
    number.classList.add("positive");
  } else {
    number.classList.remove("positive");
  }
}
