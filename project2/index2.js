let hello = ["hello", " welcome ", "to ", "my site."];
let greeting = document.getElementById("hello");
let diceValue = document.getElementById("rollDice");
function sayHello() {
  for (let i = 0; i < hello.length; i += 1) {
    greeting.textContent += hello[i] + "*";
  }
}
function rollDice() {
  //returns a random number in the range 1-6
  let number = math.floor(math.random() * 7);
  // diceValue.textContent = number;
  console.log(number);
  return number;
}
