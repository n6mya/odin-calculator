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