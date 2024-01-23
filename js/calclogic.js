// Query selectors
const numberDisplay = document.querySelector(".number-display");
const clear = document.querySelector("#clear");

//event listeners

clear.addEventListener("click", clearData);

//functions

function clearData() {
    numberDisplay.innerHTML = "";
}
