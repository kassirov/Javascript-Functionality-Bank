const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    //remove active from other buttons
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //Remove other articles
    articles.forEach(function (art) {
      art.classList.remove("active");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add("active");
  }
});
