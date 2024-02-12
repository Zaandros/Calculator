//Query selectors
const numberDisplay = document.querySelector(".number-display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".operator");
const decimal = document.getElementById("decimal");
const sqrRoot = document.querySelector("#square-root");
const posNeg = document.querySelector("#pos-neg");
const addition = document.getElementById("plus");
const subtract = document.getElementById("negative");
const multiplication = document.getElementById("multiply");
const divider = document.getElementById("divide");

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
for (let y = 0; y < functionButtons.length; y++) {
    functionButtons[y].addEventListener("click", selectOperation);
}
posNeg.addEventListener("click", makePosNeg);


//misc code


/*
while (n == 0) {
    if (numbers[0] == "") {
    for (let w = 0; w < functionButtons.length; w++) {
        functionButtons[w].disabled = true;
    }
}
else {
    for (let w = 0; w < functionButtons.length; w++) {
        functionButtons[w].disabled = false;
    }
}
}*/

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
    else if (n == 1 && numbers[0] || numbers[1] != 0) {
        numbers[1] = numbers[1] * -1;
        numberDisplay.innerHTML = numbers[1];
    }
    
}

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
    if (numbers[0] == "" || numbers[1] == "") {
        equals.disabled = true;
    }
    else if (numbers[0] != "" && numbers[1] != ""){
        equals.disabled = false;
    }
}

function selectOperation() {

    if (numbers[0] != "" && numbers[1] != "" && operator != "" ) {
        operate();
    }
    if (numbers[0] == 0 && numbers[1] != "" && operator != "" ) {
        operate();
    }


     if (this.textContent == `+`) {
        decimal.disabled = false;
        operator = "+";
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "÷") {
        decimal.disabled = false;
        operator = "÷";
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "*") {
        decimal.disabled = false;
        operator = "*";
        n = 1;
        console.log(operator);
    }
    else if (this.textContent == "-") {
        decimal.disabled = false;
        operator = "-";
        n = 1;
        console.log(operator);
    }

    if (operator == "+") {
        this.classList.add("selected");
        subtract.classList.remove("selected");
        multiplication.classList.remove("selected");
        divider.classList.remove("selected");
    }
    else if (operator == "÷") {
        this.classList.add("selected");
        addition.classList.remove("selected");
        subtract.classList.remove("selected");
        multiplication.classList.remove("selected");
    }
    else if (operator == "*") {
        this.classList.add("selected");
        addition.classList.remove("selected");
        subtract.classList.remove("selected");
        divider.classList.remove("selected");
    }
    else if (operator == "-") {
        this.classList.add("selected");
        addition.classList.remove("selected");
        multiplication.classList.remove("selected");
        divider.classList.remove("selected");
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
    console.log("answer: " + answer)
        if (Number.isInteger(answer)) {
            parseFloat(answer.toPrecision(2));
             numbers[0] = answer;
             numbers[1] = "";
        }
        else {
            parseFloat(answer.toPrecision(2));
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
            parseFloat(answer.toPrecision(2));
            numbers[0] = answer;
            numbers[1] = "";
        }
        else {
            parseFloat(answer.toPrecision(2));
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
            parseFloat(answer.toPrecision(2));
            numbers[0] = answer;
            numbers[1] = "";
        }
        else {
            parseFloat(answer.toPrecision(2));
            numbers[0] = answer;
            numbers[1] = "";
        }
        numberDisplay.innerHTML = answer;
}

function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    answer = a/b;

        if (a/b == Infinity || a/b == -Infinity) {
            answer = "error, self destruct initialised";
        }

        
        if (Number.isInteger(answer)) {
            parseFloat((Math.round(answer*100)/100).toFixed(20));
           numbers[0] = answer;
           numbers[1] = "";
        }
        else {
            parseFloat((Math.round(answer*100)/100).toFixed(20));
            numbers[0] = answer;
            numbers[1] = "";
        }
        numberDisplay.innerHTML = answer;
}

function error() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].disabled = true;
    }
    for (let y = 0; y < functionButtons.length; y++) {
        functionButtons[y].disabled = true;
    }
    numberDisplay.innerHTML = "invalid equation. Please reset calculator";
}

function clearData() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].disabled = false;
    }
    for (let y = 0; y < functionButtons.length; y++) {
        functionButtons[y].disabled = false;
        functionButtons[y].classList.remove("selected");
    }
    firstNumber = true;
    decimal.disabled = false;
    equals.disabled = true;
    numbers.disabled = false;
    operator.disabled = false;
    operator = "";
    numberDisplay.innerHTML = "0";
    numbers = ["",""];
    n = 0;
}

