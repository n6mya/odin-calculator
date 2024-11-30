const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multip = document.querySelector('#multiply');
const divid = document.querySelector('#divide');
const equals = document.querySelector('#equals');

let add = (num_1, num_2) => num_1 + num_2;
let subtract = (num_1, num_2) => num_1 - num_2;
let multiply = (num_1, num_2) => num_1 * num_2;
let divide = (num_1, num_2) => num_1 / num_2;

let number_1 = 0;
let number_2 = 0;
let operator = '';
let tempArray_1 = [];
let tempArray_2 = [];
let results = 0;
let displayTemp = 0;

let display = document.querySelector('#numberdisplay');

function operate(number_1, number_2, operator){
    if (operator == "+") return add(number_1, number_2);
    if (operator == "-") return subtract(number_1, number_2);
    if (operator == "*") return multiply(number_1, number_2);
    if (operator == "/") return divide(number_1, number_2);
}

function sum(){
    tempArray_2 = tempArray_1.join('');
    number_2 = parseFloat(tempArray_2);
    tempArray_1 = [];
    tempArray_2 = [];
    results = parseFloat(operate(number_1, number_2, operator).toFixed(3));
    display.textContent = results;
    number_1 = results;
    operator = '';
}

function storeNumberOne(){
    tempArray_2 = tempArray_1.join('');
    number_1 = parseFloat(tempArray_2);
    tempArray_1 = [];
}

function addNumber(number){
    tempArray_1.push(number);
    console.log(tempArray_1);
    displayTemp = tempArray_1.join('');
    display.textContent = displayTemp;
}

function delNumber(){
    tempArray_1.pop();
    console.log(tempArray_1);
    displayTemp = tempArray_1.join('');
    display.textContent = displayTemp;
}

function clearAll(){
    number_1 = 0;
    number_2 = 0;
    operator = '';
    tempArray_1 = [];
    tempArray_2 = [];
    results = 0;
    displayTemp = tempArray_1.join('');
    display.textContent = displayTemp;
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
const delKey = document.querySelector('#delete');
const clearKey = document.querySelector('#clear');
const commaKey = document.querySelector('#comma');


//button click functionality
numOne.addEventListener("click", function(){addNumber(1)});
numTwo.addEventListener("click", function(){addNumber(2)});
numThree.addEventListener("click", function(){addNumber(3)});
numFour.addEventListener("click", function(){addNumber(4)});
numFive.addEventListener("click", function(){addNumber(5)});
numSix.addEventListener("click", function(){addNumber(6)});
numSeven.addEventListener("click", function(){addNumber(7)});
numEight.addEventListener("click", function(){addNumber(8)});
numNine.addEventListener("click", function(){addNumber(9)});
numZero.addEventListener("click", function(){addNumber(0)});
delKey.addEventListener("click", function(){delNumber()});
clearKey.addEventListener("click", function(){clearAll()});
commaKey.addEventListener("click", function(){
    if (!tempArray_1.includes('.')){
        addNumber('.');
    }
});

//keyboard functionality
document.addEventListener("keydown", function(e){
    switch(e.key){
        case "1":
            addNumber(1);
            break;
        case "2":
            addNumber(2);
            break;
        case "3":
            addNumber(3);
            break;
        case "4":
            addNumber(4);
            break;
        case "5":
            addNumber(5);
            break;
        case "6":
            addNumber(6);
            break;
        case "7":
            addNumber(7);
            break;
        case "8":
            addNumber(8);
            break;
        case "9":
            addNumber(9);
            break;
        case "0":
            addNumber(0);
            break;
        case "Backspace":
            delNumber();
            break;
        case ".":
            if (!tempArray_1.includes('.')){
                addNumber('.');
            };
            break;
    }
})

plus.addEventListener("click", () => {
    if (number_1 == 0){
        storeNumberOne();
        operator = '+';
    } else {
        if (number_1 != 0 && tempArray_1.length != 0){
            sum();
        }
        operator = '+';
    }
});

minus.addEventListener("click", () => {
    if (number_1 == 0){
        storeNumberOne();
        operator = '-';
    } else {
        if (number_1 != 0 && tempArray_1.length != 0){
            sum();
        }
        operator = '-';
    }
});

multip.addEventListener("click", () => {
    if (number_1 == 0){
        storeNumberOne();
        operator = '*';
    } else {
        if (number_1 != 0 && tempArray_1.length != 0){
            sum();
        }
        operator = '*';
    }
});

divid.addEventListener("click", () => {
    if (number_1 == 0){
        storeNumberOne();
        operator = '/';
    } else {
        if (number_1 != 0 && tempArray_1.length != 0){
            sum();
        }
        operator = '/';
    }
});

equals.addEventListener("click", () => {
    if (operator == "/" && parseFloat(tempArray_1.join('')) == 0){
        alert("Cannot divide by 0");
    } else {
        if (number_1 != 0 && tempArray_1.length != 0){
            sum();
        }
    }
});
