//Query selectors
const numberDisplay = document.querySelector(".number-display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimal = document.getElementById("decimal");
const sqrRoot = document.querySelector("#square-root");
const posNeg = document.querySelector("#pos-neg");
const addition = document.getElementById("plus");
const subtract = document.getElementById("negative");
const multiplication = document.getElementById("multiply");
const divider = document.getElementById("divide");
const deleteBtn = document.getElementById("delete");

//variables

let numbers = ["",""];
let answer = "";
let operator= "";
let n = 0;

//event listeners
clear.addEventListener("click", clearData);
equals.addEventListener("click", operate);
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", selectNumber);
}
for (let y = 0; y < operatorButtons.length; y++) {
    operatorButtons[y].addEventListener("click", selectOperation);
}
posNeg.addEventListener("click", makePosNeg);

//misc code

disableOperator();

//functions
equals.disabled = true;
decimal.onclick = function() {
    decimal.disabled = true;
}

sqrRoot.onclick = function() {
    operate();
}

function makePosNeg() {
    if (n == 0 && numbers[0] || numbers[1] != 0) {
        numbers[0] = numbers[0] * -1;
        numberDisplay.innerHTML = numbers[0];
    }
    else if (n == 1 && numbers[1] != 0) {
        numbers[1] = numbers[1] * -1;
        numberDisplay.innerHTML = numbers[0] + operator + numbers[1];
    }
    
}

function selectNumber() {

    if (n == 0) {
        numbers[0] = numbers[0] + this.textContent;
        numberDisplay.innerHTML = numbers[0];
    }
    else {
        numbers[1] = numbers[1] + this.textContent;
        numberDisplay.innerHTML = numbers[0] + operator + numbers[1];
    } 
    if (numbers[1] == "") {
        equals.disabled = true;
    }
    else {
        equals.disabled = false;
        
    }
    if (numbers[0] != "" || numbers!= 0) {
        enableOperator();
    }
   
}

function selectOperation() {

    if (numbers[1] != "" && operator != "" ) {
        operate();
    }
    else if (numbers[0] != "" && operator == "√") {
        operate();
    }

    switch (this.textContent) {
        case `+`:
            removeSelected;
            this.classList.add("selected")
            decimal.disabled = false;
            changeNumber();
            return operator = "+";
        case `÷`:
            removeSelected;
            this.classList.add("selected")
            decimal.disabled = false;
            changeNumber();
            return operator = "÷";
        case "*":
            removeSelected;
            this.classList.add("selected")
            decimal.disabled = false;
            changeNumber();
            return operator = "*";
        case "-":
            removeSelected;
            this.classList.add("selected")
            decimal.disabled = false;
            changeNumber();
            return operator = "-";
    }

}

function operate() {
    if (numbers[0] == "." || numbers[1] == ".") {
        console.log("hi");
        
        return error();
    }
   switch (operator) {
        case `+`:
            decimal.disabled = false;
            equals.disabled = true;
            return plus(numbers[0],numbers[1]);
        case `-`:
            decimal.disabled = false;
            equals.disabled = true;
            return minus(numbers[0],numbers[1]);
        case `*`:
            decimal.disabled = false;
            equals.disabled = true;
            return multiply(numbers[0],numbers[1]);
        case `÷`:
            decimal.disabled = false;
            equals.disabled = true;
            return divide(numbers[0],numbers[1]);
        case `√`:
            decimal,disabled = false;
            equals.disabled = true;
            return square(numbers[0]);
   }
}

function square(a) {
    a = parseFloat(a);
    answer = Math.sqrt(a);
        if (Number.isInteger(answer)) {
            parseFloat(answer.toPrecision(2));
            numbers[0] = answer;
        }
        else {
            parseFloat(answer.toPrecision(2));
            numbers[0] = answer;
        }
        numberButtons.innerHTML = answer;
}

function plus(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a+b;

    displayAnswer(answer);
}

function minus(a,b) {
    a= parseFloat(a);
    b = parseFloat(b);
    answer = a-b;

    displayAnswer(answer);
}

function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a*b;
    displayAnswer(answer);
}

function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a/b;
    if (answer == Infinity || answer == -Infinity) {
        numberDisplay.innerHTML = "Self-destruct initiated"
        disable();
    }
    else {
        displayAnswer(answer);
    }
    
}

function error() {
    disable();
    numberDisplay.innerHTML = "invalid equation. Please reset calculator";
}

function clearData() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].disabled = false;
    }
    disableOperator();
    firstNumber = true;
    decimal.disabled = false;
    deleteBtn.disabled = false;
    posNeg.disabled = false;
    equals.disabled = true;
    numbers.disabled = false;
    operator.disabled = false;
    operator = "";
    numberDisplay.innerHTML = "0";
    numbers = ["",""];
    n = 0;
}

function disable() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].disabled = true;
    }
    disableOperator();
    deleteBtn.disabled = true;
    posNeg.disabled = true;
    equals.disabled = true;
}

function disableOperator() {
    for (let y = 0; y < operatorButtons.length; y++) {
        operatorButtons[y].disabled = true;
        operatorButtons[y].classList.remove("selected");
    }
    posNeg.disabled = true;
}

function removeSelected() {
    for (y = 0; y <= operatorButtons.length; y++) {
        operatorButtons[y].classList.remove("selected");
    }
}

function  enableOperator() {
    for (let y = 0; y < operatorButtons.length; y++) {
        operatorButtons[y].disabled = false;
        operatorButtons[y].classList.remove("selected");
    }
    posNeg.disabled = false;
}

function changeNumber() {
    n=1
}

function displayAnswer(answer) {
    parseFloat(answer.toPrecision(2));
    numbers[0] = answer;
    numbers[1] = "";
    numberDisplay.innerHTML = answer;
}
