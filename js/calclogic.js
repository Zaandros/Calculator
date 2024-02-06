//Query selectors
const numberDisplay = document.querySelector(".number-display");
const clear = document.querySelector("#clear");
const posNeg = document.querySelector("#pos-neg");
const squareRoot = document.querySelector("#square-root");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const negative = document.querySelector("#negative");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".operator");

//variables

let number = {
    numbers: ["",""],
    answer: 0,
};

let operator= "";
let numberThree;
let plusSet = false;
let negativeSet = false;
let multiplySet = false;
let divideSet = false;
let firstNumber = true;

//event listeners
clear.addEventListener("click", clearData);
equals.addEventListener("click", equationAnswer);
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", selectNumber);
}
for (let y = 0; y < functionButtons.length; y++) {
    functionButtons[y].addEventListener("click", selectOperation);
}




//functions


function selectNumber() {
    if (firstNumber == true) {
    number["numberOne"] = number["numberOne"] + this.textContent;
    numberDisplay.innerHTML = number["numberOne"];
    console.log(number["numberOne"]);
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + this.textContent;
        numberDisplay.innerHTML = number["numberOne"] + currentOperation + number["numberTwo"];
    }
    
}

function selectOperation() {

    if (this.textContent == `+`) {
        firstNumber = false;
        plusSet == true;
        currentOperation == `plus`;
        
        console.log(currentOperation);
        
    }
    else if (this.textContent == "÷") {
        firstNumber = false;
        divideSet == true;
        currentOperation = "÷";
        
    }
    else if (this.textContent == "*") {
        firstNumber = false;
        multiplySet == true;
        currentOperation = "*";
        
    }
    else if (this.textContent == "-") {
        firstNumber = false;
        negativeSet == true;
        currentOperation = "-";
       
    }
    console.log("hi");
}

function operate(operator, a, b) {
   switch (operator) {
        case `plus`:
            return plus(a,b);
        case `minus`:
            return minus(a,b);
        case `multiply`:
            return multiply(a,b);
        case `divide`:
            return divide(a,b);
   }
}

function plus(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    number["answer"] = a+b;
        if (Number.isInteger(number["answer"])) {
            return String(number["answer"]);
        }
        else {
            return String(number["answer"].toPrecision(3));
        }
}

function minus(a,b) {
    a= parseFloat(a);
    b = parseFloat(b);
    number["answer"] = a-b;
        if (Number.isInteger(number["answer"])) {
            return String(number["answer"]);
        }
        else {
            return String(number["answer"].toPrecision(3));
        }
}

function multiply(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    number["answer"] = a*b;
        if (Number.isInteger(number["answer"])) {
            return String(number["answer"]);
        }
        else {
            return String(number["answer"].toPrecision(3));
        }
}

function divide(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    number["answer"] = a/b;
        if (Number.isInteger(number["answer"])) {
            return String(number["answer"]);
        }
        else {
            return String(number["answer"].toPrecision(3));
        }
}


function clearData() {
    firstNumber = true;
    currentOperation = "";
    numberDisplay.innerHTML = "0";
    number["numberOne"] = "";
    number["numberTwo"] = "";
}

function equationAnswer(a, b = 0) {

    a = number["numberOne"];
    b = number["numberTwo"];
    firstNumber = true;

    if (plusSet == true) {
        number["answer"] = (parseFloat(a) + parseFloat(b));
    }
    else if (negativeSet == true) {
        number["answer"] = (parseFloat(a) - parseFloat(b));
    } 
    else if (divideSet == true) {
        number["answer"] = (parseFloat(a) / parseFloat(b));
    }
    else if (multiplySet == true) {
        number["answer"] = (parseFloat(a) * parseFloat(b));
    }
   
    numberDisplay.innerHTML = number["answer"];
}
