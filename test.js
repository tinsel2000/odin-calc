// Calculator functions backend
function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
};

function subtract(number1, number2) {
    return number1 - number2;
};

function multiply(number1, number2) {
    return number1 * number2;
};

function divide(number1, number2) {
    return number1 / number2;
};

function operate(number1, number2, operator1) {
    console.log(number1, number2, operator1);
    switch(operator1){
        case '+':
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        default:
            console.log(number1, number2, operator1);
    }
};

// Create calculator display and buttons

const setButtonContent = "789/456*123-0.=+C";
const basicButtons = document.querySelector(".basicButtons");

for (let i = 0; i < setButtonContent.length; i++) {
    const button = document.createElement("button")
    button.setAttribute("id", setButtonContent[i])
    button.classList.add("button-19")
    button.textContent = setButtonContent[i]
    basicButtons.appendChild(button)
};

//  Calculator functions frontend

const nums = /\d|\./;
const ops = /^(\+|-|\*|\/|%|\^|\(|\))$/;
const sum = /=/;

function resetCalc(){
let num1 = '';
let num2 = '';
let op1 = '';
let decimal1 = '';
};

let num1 = '';
let num2 = '';
let op1 = '';
let decimal1 = '';
let inf = 'Infinity';


function pointsq1(event) {

    if (event.target.className !== 'button-19') {
      return
    }
    const pressedButton = event.target.textContent
    console.log(pressedButton);
    
    if (nums.test(pressedButton)) {
        if (decimal1 = 1 && pressedButton === '.') {
            return
        }
        results.textContent += pressedButton;
        num2 += pressedButton;
        if (pressedButton === '.') { decimal1 = 1}
    }
    else if (ops.test(pressedButton)) {
        if (!op1 && num2) {
            results.textContent += pressedButton;
            op1 = pressedButton;
            num1 = num2;
            num2 = '';
        }
        else {
            num2 += pressedButton
        }
    }
    else if (sum.test(pressedButton)) {
        result1 = operate(parseFloat(num1), parseFloat(num2), op1);
        if (result1 === !inf) {results.textContent = result1} 
        console.log(result1);
        resetCalc();
        num2 = result1; 
    }
    else if (pressedButton === "C") {
        results.textContent = '';
        resetCalc();
    };
};

const buttons = document.querySelector(".basicButtons");
buttons.addEventListener("click", pointsq1)
  
const results = document.getElementById('results');
