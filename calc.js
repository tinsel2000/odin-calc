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
function rounding(result1) { return Math.round(result1 * 100000) / 100000};

function operate(number1, number2, operator1) {
    switch(operator1){
        case '+':
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
};

// Create calculator display and buttons


const nums = /\d|\./;
const ops = /^(\+|-|\*|\/|%|\^|\(|\))$/;
const sum = /=/;

const setButtonContent = "789/456*123-0.=+";
const setBigButtonContent = ['CE', 'AC']
const basicButtons = document.querySelector(".basicButtons");


function makeButtons(b) {
    for (let i = 0; i < b.length; i++) {
        const button = document.createElement("button")
        button.setAttribute("id", b[i])
        button.classList.add("button-19")
        if (ops.test(b[i])) {
            button.classList.add("button-op")
        };
        button.textContent = b[i]
        basicButtons.appendChild(button)
    };
};

makeButtons(setButtonContent);
makeButtons(setBigButtonContent);

//  Calculator functions frontend

function resetCalc(){
num1 = '';
num2 = '';
op1 = '';
dec1 = 0;
};

let num1 = '';
let num2 = '';
let op1 = '';
let dec1 = 0;
let inf = 2/0;


function pointsq1(event) {
    if (!event.target.type) {return}
    console.log(event.target.classList);
    const pressedButton = event.target.textContent
    //    let strtest = typeof pressedButton;
    //    console.log(strtest);
    console.log(pressedButton);

    if (nums.test(pressedButton)) {
        if (pressedButton === '.' && dec1 === 1){return};
        results.textContent += pressedButton;
        num2 += pressedButton;
        if (pressedButton === '.') { dec1 = 1 };
    }
    else if (ops.test(pressedButton)) {
        results.textContent += pressedButton;
        dec1 = 0;
        if (!op1 && !Number.isNaN(num2)) {
            op1 = pressedButton;
            num1 = num2;
            console.log("num1:", num1);
            num2 = '';
        }
        else {
            num2 += pressedButton
        }
    }
    else if (sum.test(pressedButton)) {
        console.log("num1:", num1, "num2:", num2, "op1:", op1, "result1:", result1);
        if ( num1 || num1 === 0 ) {
            result1 = rounding(operate(parseFloat(num1), parseFloat(num2), op1));
        } 
        if ( Number.isNaN(result1) || result1 === 1/0 ) {
            results.textContent = 'Error, deleting reality'
            return
        }
        else {
            results.textContent = result1
            resetCalc();
            num2 = result1;
        };
    }
    else if (pressedButton === "AC") {
        results.textContent = '';
        resetCalc()
    }
    else if (pressedButton === "CE") {
        results.textContent = results.textContent.slice(0, -1);
    };
};

const buttons = document.querySelector(".basicButtons");
buttons.addEventListener("click", pointsq1)
  
const results = document.getElementById('results');