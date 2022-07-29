function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a, b);
};

const display = document.querySelector('#display');
let displayValue = display.textContent;

function displayNumber(input) {
    display.textContent += ''; 
    display.textContent += input;
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayNumber(number.textContent);
    })
})

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    display.textContent = '';
})