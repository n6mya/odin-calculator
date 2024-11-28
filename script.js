let add = (num_1, num_2) => num_1 + num_2;
let subtract = (num_1, num_2) => num_1 - num_2;
let multiply = (num_1, num_2) => num_1 * num_2;
let divide = (num_1, num_2) => num_1 / num_2;

let number_1 = 0;
let number_2 = 0;
let operator = '';

function operate(number_1, number_2, operator){
    if (operator == "+") return add(number_1, number_2);
    if (operator == "-") return subtract(number_1, number_2);
    if (operator == "*") return multiply(number_1, number_2);
    if (operator == "/") return divide(number_1, number_2);
}

const numOne = document.querySelector('.1');
const numTwo = document.querySelector('.2');
const numThree = document.querySelector('.3');
const numFour = document.querySelector('.4');
const numFive = document.querySelector('.5');
const numSix = document.querySelector('.6');
const numSeven = document.querySelector('.7');
const numEight = document.querySelector('.8');
const numNine = document.querySelector('.9');
const numZero = document.querySelector('.0');


let display = document.querySelector('.numberdisplay');
