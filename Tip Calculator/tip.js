let btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  let initialBill = document.querySelector(".initial-bill-amount").value;
  let tipPercent = document.querySelector(".tip-percentage").value;
  let tipAmount = (document.querySelector(".tip-amount").value =
    (initialBill / 100) * tipPercent);

  let billAmount = (document.querySelector(".bill-amount").value =
    parseFloat(initialBill) + parseFloat(tipAmount));
});
