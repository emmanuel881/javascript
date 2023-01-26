/*function submit() {
  console.log("Button clicked!");
}*/

const ulEl = document.getElementById("ulEl");
let myleads = [];
const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
inputEL.addEventListener("click", function clearText() {
  inputEL.value = "";
});

inputBtn.addEventListener("click", function UsingListener() {
  myleads.push(inputEL.value);
  //console.log(myleads);
  prtCoupons();
  //ulEl.textContent += myleads[myleads.length - 1];

  //ulEl.textContent = null;
}); //we are using an event listener !!
function prtCoupons() {
  /*for (let i = 0; i < myleads.length; i++) {
    ulEl.innerHTML += "<li>" + myleads[i] + "</li> ";
  }*/
  /*ulEl.innerHTML +=
    "<li><a target = '_blank' href='" +
    myleads[myleads.length - 1] +
    "'>" +
    myleads[myleads.length - 1] +
    "</a></li>";*/ //lets use template string to make thie shorter
  ulEl.innerHTML += `
  <li>
    <a target = '_blank' href='${myleads[myleads.length - 1]}'>
      ${myleads[myleads.length - 1]}
    </a>
  </li>`;
}
