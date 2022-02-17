window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //Stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("enabled");
  console.log(key);
});

function removeTransition(e) {
  this.classList.remove("enabled");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
