let operand1;
let operand2;
let operator;
let display = document.querySelector(".screen");
let button = document.querySelector(".numbers");
let buttons = button.querySelectorAll("button");
for (i = 0; i < 16; i++) {
    buttons[i].addEventListener("click", type);
}
let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {display.textContent = " ";})

function type() {
    let now = this.innerHTML;
    display.textContent = display.textContent + now;
}


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operate, num2) {
    switch (operate) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
    }
}
