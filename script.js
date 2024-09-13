//sets the counter to zero
let count = 0;
//selects the element with the id value and classes accordingly
const value = document.querySelector("#value");
const decreaseButton = document.querySelector(".decrease-button");
const increaseButton = document.querySelector(".increase-button");
const resetButton = document.querySelector(".reset-button");
//When the decrease button is clicked the function called decreaseFunction is called
function decreaseFunction() {
  count--;
  updateCounter();
}
decreaseButton.addEventListener("click", decreaseFunction);

function increaseFunction() {
  count++;
  updateCounter();
}
increaseButton.addEventListener("click", increaseFunction);

function resetFunction() {
  count = 0;
  updateCounter();
}
resetButton.addEventListener("click", resetFunction);

//sets the text inside the span element with the id #value to the value of count.
function updateCounter() {
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}
