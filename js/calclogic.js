//Query selectors
const numberDisplay = document.querySelector(".number-display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".operator");

//variables

let numbers = ["",""];
let answer = 0;
let operator= "";
let n = 0;

//event listeners
clear.addEventListener("click", clearData);
equals.addEventListener("click", operate);
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", selectNumber);
}
for (let y = 0; y < functionButtons.length; y++) {
    functionButtons[y].addEventListener("click", selectOperation);
}

//functions

function selectNumber() {
    if (n == 0) {

    numbers[0] = numbers[0] + this.textContent;
    numberDisplay.innerHTML = numbers[0];
    console.log(numbers[0]);
    }
    else if (n == 1) {
        numbers[1] = numbers[1] + this.textContent;
        numberDisplay.innerHTML = numbers[0] + operator + numbers[1];
    } 
}

function selectOperation() {

    if (numbers[0] != "" && numbers[1] != "" && operator != "" ) {
        operate();
    }

     if (this.textContent == `+`) {
        
        operator = `+`;
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "÷") {
       
        operator = "÷";
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "*") {
        
        operator = "*";
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "-") {
    
        operator = "-";
        n = 1;
        console.log(operator);
    }
}

function operate() {
    
   switch (operator) {
        case `+`:
            return plus(numbers[0],numbers[1]);
        case `-`:
            return minus(numbers[0],numbers[1]);
        case `*`:
            return multiply(numbers[0],numbers[1]);
        case `÷`:
            return divide(numbers[0],numbers[1]);
   }
}

function plus(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a+b;
    console.log("answer: " + answer)
        if (Number.isInteger(answer)) {
             answer;
             numbers[0] = answer;
             numbers[1] = "";
        }
        else {
             answer.toPrecision(3);
             numbers[0] = answer;
             numbers[1] = "";
        }
        
           numberDisplay.innerHTML = answer;
           console.log(answer);
}

function minus(a,b) {
    a= parseFloat(a);
    b = parseFloat(b);
    answer = a-b;
        if (Number.isInteger(answer)) {
            answer;
            numbers[0] = answer;
            numbers[1] = "";
        }
        else {
            answer.toPrecision(3);
            numbers[0] = answer;
            numbers[1] = "";
        }
        numberDisplay.innerHTML = answer;
}

function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a*b;
        if (Number.isInteger(answer)) {
            answer;
            numbers[0] = answer;
            numbers[1] = "";
        }
        else {
            answer.toPrecision(3);
            numbers[0] = answer;
            numbers[1] = "";
        }
        numberDisplay.innerHTML = answer;
}

function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a/b;

        if (a/b == Infinity) {
            answer = "error, self destruct initialised";
        }

        if (Number.isInteger(answer)) {
           answer;
           numbers[0] = answer;
           numbers[1] = "";
        }
        else {
            parseFloat(answer).toFixed(2);
            numbers[0] = answer;
            numbers[1] = "";
        }
        numberDisplay.innerHTML = answer;
}

function clearData() {
    firstNumber = true;
    operator = "";
    numberDisplay.innerHTML = "0";
    numbers = ["",""];
    n = 0;
}

