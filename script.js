let add = (num_1, num_2) => num_1 + num_2;
let subtract = (num_1, num_2) => num_1 - num_2;
let multiply = (num_1, num_2) => num_1 * num_2;
let divide = (num_1, num_2) => num_1 / num_2;

function operate(number_1, number_2, operator){
    if (operator == "+") return add(number_1, number_2);
    if (operator == "-") return subtract(number_1, number_2);
    if (operator == "*") return multiply(number_1, number_2);
    if (operator == "/") return divide(number_1, number_2);
}

let number_1 = 0;
let number_2 = 0;
let operator = '';
let tempArray = [];
let results = 0;

function addNumber(number){
    tempArray.push(number);
}

const numOne = document.querySelector('#one');
const numTwo = document.querySelector('#two');
const numThree = document.querySelector('#three');
const numFour = document.querySelector('#four');
const numFive = document.querySelector('#five');
const numSix = document.querySelector('#six');
const numSeven = document.querySelector('#seven');
const numEight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const numZero = document.querySelector('#zero');

numOne.addEventListener("click", addNumber(1));
numTwo.addEventListener("click", addNumber(2));
numThree.addEventListener("click", addNumber(3));
numFour.addEventListener("click", addNumber(4));
numFive.addEventListener("click", addNumber(5));
numSix.addEventListener("click", addNumber(6));
numSeven.addEventListener("click", addNumber(7));
numEight.addEventListener("click", addNumber(8));
numNine.addEventListener("click", addNumber(9));
numZero.addEventListener("click", addNumber(0));

const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');

plus.addEventListener("click", () => {
    tempArray.join('');
    number_1 = parseInt(tempArray);
    tempArray = [];
    operator = '+';
});

equals.addEventListener("click", () => {
    tempArray.join('');
    number_2 = parseInt(tempArray);
    tempArray = [];
    results = operate(number_1, number_2, operator);
    display.textContent = results;
});

let display = document.querySelector('.numberdisplay');
