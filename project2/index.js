let var1 = 6;
let var2 = 9;
let messageEl = document.getElementById("m-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function sumBoth(var1, var2) {
  let sum = var1 + var2;
  return sum;
}

//console.log(sumBoth());

function startgame() {
  let sum = sumBoth(var1, var2);
  if (sum < 21) {
    messageEl.textContent = "want to draw a new card?";
    sumEl.textContent = "Sum: " + sumBoth(var1, var2);
    cardEl.textContent = "cards: " + var1 + " " + var2;
  } else if (sum === 20) {
    messageEl.textContent = "you've won !!!";
    sumEl.textContent = "Sum: " + sumBoth(var1, var2);
    cardEl.textContent = "cards: " + var1 + " " + var2;
  } else {
    messageEl.textContent = "you have lost";
    sumEl.textContent = "Sum: " + sumBoth(var1, var2);
    cardEl.textContent = "cards: " + var1 + " " + var2;
  }
}
