let count = 0;
let countEL = document.getElementById("results");
function add() {
  count++;

  document.getElementById("count").innerHTML = count;
}
function sub() {
  count--;
  document.getElementById("count").innerHTML = count;
}
function save() {
  let countstr = count + " _ ";
  countEL.textContent += countstr;
  document.getElementById("count").innerHTML = 0;
  count = 0;
}
