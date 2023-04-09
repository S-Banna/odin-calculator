let operand1;
let operand2;
let operator;
let display = document.querySelector(".operand");
let display2 = document.querySelector(".operand2");
let display3 = document.querySelector(".operator");
let button = document.querySelector(".numbers");
let buttons = button.querySelectorAll("button");
for (i = 0; i < 16; i++) {
    buttons[i].addEventListener("click", type);
}
let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {display.textContent = " "; operand1 = ""; operand2 = "", operator = ""})

function type() {
    
    if (this.innerHTML=="*" || this.innerHTML=="+" || this.innerHTML=="/" || this.innerHTML=="-") {
        operand1 = display.textContent;
        operator = this.innerHTML;
        display3.textContent = this.innerHTML;
        display2.textContent = display.textContent;
        display.textContent = "";
    }
    if (this.innerHTML == "=") {
        operand2 = display.textContent;
        display2.innerHTML = "";
        display3.innerHTML = "";
        console.log(operand2);
        display.innerHTML=(operate(operand1, operator, operand2));
        return;
    }
    let now = this.innerHTML;
    display.textContent = display.textContent + now;
    if (this.innerHTML=="*" || this.innerHTML=="+" || this.innerHTML=="/" || this.innerHTML=="-") {
        display.textContent = "";
    }
    console.log(display);
    console.log(operand1);
    console.log(operator);
}


function add(num1, num2) {
    num1 *= 1;
    num2 *= 1;
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
