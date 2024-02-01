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
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const functionButtons = document.querySelectorAll(".function-buttons");

//variables

let number = {
    numberOne: "",
    numberTwo: "",
    answer: 0,
};

let currentOperation
let numberThree;
let plusSet = false;
let negativeSet = false;
let multiplySet = false;
let divideSet = false;
let firstNumber = true;

//event listeners
plus.addEventListener("click", setPlus);
negative.addEventListener("click", setNegative);
clear.addEventListener("click", clearData);
equals.addEventListener("click", equationAnswer);
multiply.addEventListener("click", setMultiply);
divide.addEventListener("click", setDivide);
one.addEventListener("click", selectOne);
two.addEventListener("click", selectTwo);
three.addEventListener("click", selectThree);
four.addEventListener("click", selectFour);
five.addEventListener("click", selectFive);
six.addEventListener("click", selectSix);
seven.addEventListener("click", selectSeven);
eight.addEventListener("click", selectEight);
nine.addEventListener("click", selectNine);
zero.addEventListener("click", selectZero);


//functions

/*functionButtons.forEach((button) => 
    button.addEventListener("click", () => setOperation(button.textContent))
);*/

function selectOne()  {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 1;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 1;
        numberDisplay.innerHTML = number["numberTwo"];
    }

    console.log(firstNumber);
    
}

function selectTwo() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 2;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 2;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectThree() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 3;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 3;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectFour() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 4;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 4;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectFive() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 5;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 5;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectSix() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 6;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 6;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectSeven() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 7;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 7;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectEight() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 8;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 8;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectNine() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 9;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 9;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

function selectZero() {
    if (firstNumber == true) {
        number["numberOne"] = number["numberOne"] + 0;
        numberDisplay.innerHTML = number["numberOne"];
    }
    else if (firstNumber == false) {
        number["numberTwo"] = number["numberTwo"] + 0;
        numberDisplay.innerHTML = number["numberTwo"];
    }
}

/*function setOperation(operator) {
    
    currentOperation = operator;
    return currentOperation;
    
}*/

function setPlus(a, b = 0) {
    


    a = number["numberOne"];
    b = number["numberTwo"];

    plusSet = true;
    negativeSet = false;
    divideSet = false;
    multiplySet = false;
    firstNumber = false;

    if (number["numberOne"] != "" && number["numberTwo"] != "") {
        number["numberOne"] = (parseFloat(a) + parseFloat(b));
        numberDisplay.innerHTML = number["numberOne"];
        number["numberTwo"] = "";
        firstNumber = false
    }
    
} 

function setNegative(a, b = 0) {

    a = number["numberOne"];
    b = number["numberTwo"];

    plusSet = false;
    negativeSet = true;
    divideSet = false;
    multiplySet = false;
    firstNumber = false;

    if (number["numberOne"] != "" && number["numberTwo"] != "") {
        number["numberOne"] = (parseFloat(a) - parseFloat(b));
        numberDisplay.innerHTML = number["numberOne"];
        number["numberTwo"] = "";
        firstNumber = false
    }
   
}

function setMultiply(a, b = 0) {

    a = number["numberOne"];
    b = number["numberTwo"];
    
    plusSet = false;
    negativeSet = false;
    divideSet = false;
    multiplySet = true;
    firstNumber = false;

    if (number["numberOne"] != "" && number["numberTwo"] != "") {
        number["numberOne"] = (parseFloat(a) * parseFloat(b));
        numberDisplay.innerHTML = number["numberOne"];
        number["numberTwo"] = "";
        firstNumber = false
    }
    
}

function setDivide(a, b = 0) {

    a = number["numberOne"];
    b = number["numberTwo"];

    plusSet = false;
    negativeSet = false;
    divideSet = true;
    multiplySet = false;
    firstNumber = false;

    if (number["numberOne"] != "" && number["numberTwo"] != "") {
        number["numberOne"] = (parseFloat(a) / parseFloat(b));
        numberDisplay.innerHTML = number["numberOne"];
        number["numberTwo"] = "";
        firstNumber = false
    }
    
}


function clearData() {
    firstNumber = true;
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

