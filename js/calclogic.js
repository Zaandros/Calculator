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

//variables

let number = {
    
};

let numberOne;
let numberTwo;
let numberThree;
let answer = 0;
let plusSet = false;
let negativeSet = false;
let multiplySet = false;
let divideSet = false;
let firstNumber = true;
let secondNumber = false;

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

function selectOne()  {
    numberOne = "1";
    numberDisplay.innerHTML = numberOne;
}

function selectTwo() {
    numberTwo = "2";
    numberDisplay.innerHTML = numberTwo;
}

function selectThree() {
    numberThree = numberOne + numberTwo
    numberDisplay.innerHTML = numberThree;
}

function setPlus() {
    plusSet = true;
    negativeSet = false;
    divideSet = false;
    multiplySet = false;

    if (firstNumber == true) {
        
        firstNumber == false;
        secondNumber == true;
    }
    else if (firstNumber == false) {
     
        firstNumber == true;
        secondNumber == false;
        
    }
    console.log("first " + firstNumber);
        console.log("second " + secondNumber);
} 

function setNegative() {
    plusSet = false;
    negativeSet = true;
    divideSet = false;
    multiplySet = false;
}

function clearData() {
    numberDisplay.innerHTML = "";
    numberOne = 0;
    numberTwo = 0;
}

function equationAnswer(a, b = 0) {

    a = numberOne;
    b = numberTwo;

    if (plusSet == true) {
        answer = (parseFloat(a) + parseFloat(b));
    }
    else if (negativeSet == true) {
        answer = (parseFloat(a) - parseFloat(b));
    } 
    else if (divideSet == true) {
        answer = (parseFloat(a) / parseFloat(b));
    }
    else if (multiplySet == true) {
        answer = (parseFloat(a) * parseFloat(b));
    }
   
    numberDisplay.innerHTML = answer
}

function setMultiply() {
    plusSet = false;
    negativeSet = false;
    divideSet = false;
    multiplySet = true;
}

function setDivide() {
    plusSet = false;
    negativeSet = false;
    divideSet = true;
    multiplySet = false;
}