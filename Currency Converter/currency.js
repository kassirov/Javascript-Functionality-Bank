const select = document.querySelectorAll(".currency");
const button = document.getElementById("button");
const number = document.getElementById("number");
const answer = document.getElementById("answer");

fetch("https://api.frankfurter.app/currencies")
  .then(data => data.json())
  .then(data => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

button.addEventListener("click", () => {
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let value = number.value;

  if (curr1 != curr2) {
    convert(curr1, curr2, value);
  } else {
    alert("Choose another currency, they're the same");
  }
});

function convert(curr1, curr2, value) {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${value}&from=${curr1}&to=${curr2}`)
    .then(val => val.json())
    .then(val => {
      console.log(Object.values(val.rates)[0]);
      answer.value = Object.values(val.rates)[0];
    });
}
