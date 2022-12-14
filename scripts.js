function add(a, b) {
    display.textContent = a + b;
};

function subtract(a, b) {
    display.textContent = a - b;
};

function multiply(a, b) {
    display.textContent = a * b;
};

function divide(a, b) {
    if (b == 0) {
        display.textContent = 'ERROR';
    } else {
        display.textContent = a / b;
    };
};

function operate(operator, a, b) {
    if (operator === 'add') {
        add(a, b);
    } else if (operator === 'subtract') {
        subtract(a, b);
    } else if (operator === 'multiply') {
        multiply(a, b);
    } else if (operator === 'divide') {
        divide(a, b);
    }

    firstNumber = (+display.textContent);
};

let firstNumber = 0;
let secondNumber = 0;
let operator = null;

const display = document.querySelector('#display');

function displayNumber(input) {
    display.textContent += ''; 
    display.textContent += input;
    if (firstNumber == 0) {
        firstNumber = (+display.textContent);
    } else {
        secondNumber = (+display.textContent);
    }
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayNumber(number.textContent);
    })
})

const operations = document.querySelectorAll('.operations');

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        display.textContent = '';
        if (firstNumber && secondNumber) {
            operate(operator, firstNumber, secondNumber);
            display.textContent = '';
        }
        operator = operation.id;
    })
})

const equals = document.querySelector('.calculate');

equals.addEventListener('click', () => {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    operate(operator, firstNumber, secondNumber);
})

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
})