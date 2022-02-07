const reviews = [
  {
    id: 1,
    name: "Sarah Jones",
    title: "UX Designer",
    desc: " I am very well known person and i have very imorptant things to tell people and for that reason i made a review and this is a very good review for the best reviews",
  },
  {
    id: 2,
    name: "Sam Kassirov",
    title: "Web Developer",
    desc: " I am a very good at making websites and this is the best review i could think of, just believe me ok... this is a very good review for the best reviews",
  },
  {
    id: 3,
    name: "Alex iversen",
    title: "UX/UI Developer",
    desc: "Making websites is piss easy and i am kind of a big deal, my office smells of rich mahogohny, and i have many book made a review and this is a very good review for the best reviews",
  },
  {
    id: 4,
    name: "James Parker",
    title: "Professional Wanker",
    desc: "I am a professional wanker like my review says, and i am the best that could be, i could be at the computer all day and make heaps of money like the most, the best reviews",
  },
];

// Selectors
const persona = document.getElementById("persona");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

// Set inital item
let currentItem = 0;

//Event Listner
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

right.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

left.addEventListener("click", () => {
  currentItem--;
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  persona.textContent = item.persona;
  title.textContent = item.title;
  desc.textContent = item.desc;
}
