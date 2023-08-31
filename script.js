// query selections for number btns and screen
const numBtn = document.querySelectorAll('.num');
const screen1 = document.querySelector('.screen1 p');
const screen2 = document.querySelector('.screen2 p');

// global variables
let firstNum = '';
let secondNum = 0;
let operator = null;
let result = '0';
let numStr = '';

screen2.textContent = result;

// function updateScreen() {
//     screen1.textContent = `${firstNum} ${operator} ${secondNum}`;
// }

// handling number buttons
numBtn.forEach(thisNum => {
    thisNum.addEventListener('click', () => {
        if (screen1.textContent === '0') {
            screen1.textContent = '';
        }
        screen1.textContent += thisNum.textContent;
        numStr += thisNum.textContent;
        if (operator === null) {
            firstNum = numStr;
        }
        else {
            secondNum = numStr;
            calculate();
        }
    })
})


// handling operation buttons
optBtn = document.querySelectorAll('.opt');
optBtn.forEach(thisOpt => {
    thisOpt.addEventListener('click', () => {
        optName = thisOpt.id;
        operator = optName;
        screen1.textContent += operator;
        numStr = '';
    })
})

function calculate() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum); 
    console.log(num1);
    console.log(num2);
    switch(operator) {
        case '+':
            result = num1 + num2;
            screen2.textContent = result;
            break;
        case '-':
            result = num1 - num2;
            screen2.textContent = result;
            break;
        case '*':
            result = num1 * num2;
            screen2.textContent = result;
            break;
        case '/':
            result = num1 / num2;
            screen2.textContent = result;
            break;
    }
}

