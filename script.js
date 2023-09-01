// query selections for number btns and screen
const numBtn = document.querySelectorAll('.num');
const screen1 = document.querySelector('.screen1 p');
const screen2 = document.querySelector('.screen2 p');
const clickAudio = document.querySelector('.click-audio');

// global variables
let firstNum = '';
let secondNum = 0;
let operator = null;
let result = '0';
let numStr = '';
let lastNum = false;

screen2.textContent = result;

// handling number buttons
numBtn.forEach(thisNum => {
    thisNum.addEventListener('click', () => {
        clickAudio.currentTime = 0.03;
        clickAudio.play();
        screen2.style.fontSize = '55px';
        screen1.style.fontSize = '30px';
        if (screen1.textContent === '0') {
            screen1.textContent = '';
        }
        if (thisNum.textContent === '.' && numStr.includes('.')) {
            return;
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
const optBtn = document.querySelectorAll('.opt');
optBtn.forEach(thisOpt => {
    thisOpt.addEventListener('click', () => {
        clickAudio.currentTime = 0.03;
        clickAudio.play();
        screen2.style.fontSize = '55px';
        screen1.style.fontSize = '30px';
        screen2.style.fontWeight = 'normal';
        if (operator !== null) {
            firstNum = result;
        }
        optName = thisOpt.id;
        operator = optName;
        screen1.textContent += operator;
        numStr = '';
    })
})

// handling AC button
const acBtn = document.querySelector('.AC')
acBtn.addEventListener('click', () => {
    clickAudio.currentTime = 0.03;
    clickAudio.play();
    screen1.textContent = '0';
    result = '0';
    screen2.textContent = result;
    numStr = '';
    firstNum = '';
    secondNum = 0;
    operator = null;
    screen2.style.color = 'rgb(255,255,0)';
    screen2.style.fontSize = '55px';
    screen1.style.fontSize = '30px';
    screen2.style.fontWeight = 'normal';
})

// handling back button 
const backBtn = document.querySelector('.back')
backBtn.addEventListener('click', () => {
    screen2.style.fontWeight = 'normal';
    screen2.style.fontSize = '55px';
    screen1.style.fontSize = '30px';
    clickAudio.currentTime = 0.03;
    clickAudio.play();
    if (screen1.textContent.length > 0) {
        let screen1Str = screen1.textContent;
        screen1Str = screen1Str.slice(0,-1); 
        screen1.textContent = screen1Str;
        if (operator === null) {
            firstNum = firstNum.slice(0,-1);
            numStr = firstNum;
        }
        else {
            secondNum = secondNum.slice(0,-1);
            numStr = secondNum;
            calculate();
        }
    }
})

// handling equal button
const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    clickAudio.currentTime = 0.03;
    clickAudio.play();
    screen2.style.fontSize = '85px';
    screen1.style.fontSize = '25px';
    screen2.style.fontWeight = 'bold';
})

// calculation
function calculate() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum); 
    console.log(num1);
    console.log(num2);
    if (operator === '/' && num2 === 0) {
        screen2.style.color = 'red';
        result = "Error! Division by zero"
    }
    else {
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
    }
    const decimalPartLength = result.toString().split('.')[1]?.length || 0;
    if (decimalPartLength > 3) {
        result = result.toFixed(3);
    }

    screen2.textContent = result;
}

