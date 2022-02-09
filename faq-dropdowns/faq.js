const btns = document.querySelectorAll(".question-btn");
const box = document.querySelector(".box");
const showText = document.querySelectorAll(".show-text");
const minus = document.querySelectorAll("#minus");
const plus = document.querySelectorAll("#plus");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.parentElement.parentElement);
    const question = e.currentTarget.parentElement.parentElement;

    showText.classList.toggle("enable");

    // console.log(currentTarget);

    // question.classList.toggle("show-text");
  });
});

// showText.style.display = "block";
// minus.style.display = "block";
// plus.style.display = "none";

// plus.addEventListener("click", () => {
//   console.log("clicked");
//   showText.style.display = "block";
//   minus.style.display = "block";
//   plus.style.display = "none";
//   //   box.classList.toggle("enabled");
// });

// minus.addEventListener("click", () => {
//   console.log("clicked minus");
//   showText.style.display = "none";
//   minus.style.display = "none";
//   plus.style.display = "block";
// });
