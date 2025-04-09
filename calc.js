function add(number1, number2) {
    return number1 + number2;
};

function subtract(number1, number2) {
    return number1 - number2;
};

function multiply(number1, number2) {
    return number1 * number2;
    console.log(number1 * number2);
};

function divide(number1, number2) {
    return number1 / number2;
};

function operate(number1, number2, operator1) {
    console.log(number1, number2, operator1);
    switch(operator1){
        case 1:
            return add(number1, number2);
        case 2:
            return subtract(number1, number2);
        case 3:
            return multiply(number1, number2);
        case 4:
            return divide(number1, number2);
        default:
            console.log(number1, number2, operator1);
    }
};

// console.log( operate(2, 4, 4) );
/*
const one = document.querySelector("#one");
const results = document.getElementById('results');
const allButtons = document.getElementsByClassName(".button")
//const one = document.getElementsByClassName(".button")

const x = document.getElementsByClassName(".basicButtons")

one.addEventListener("click", function (e) {
    results.textContent = '1';
    console.log(x.textContent);

});
*/

function pointsq1(event) {
    if (event.target.className !== 'button') {
      return
    }
    //console.log(event.currentTarget.textContent)
    //console.log(event.target.textContent)
    const pressed = event.target.textContent
    let strtest = typeof pressed;
    console.log(strtest);
    results.textContent = pressed;

    const nums = /1/g;
    const ops = /\-\+\*\//g;
    const sum = /=/g;
    if (nums.test(pressed)) {
        return 1;
        console.log("nums");
    }
    else if (pressed.matchAll(ops)) {
        return 2;
        console.log("ops");
    }
    else if (pressed.matchAll(sum)) {
        return 3
        console.log("sum");
    };
    switch(pressed){
        //cases for num or
        case 1:
            console.log(pressed)
        case 2:
        case 3:

        default:
            console.log("none");

    }
  }

  const buttons = document.querySelector(".basicButtons");
  buttons.addEventListener("click", pointsq1)