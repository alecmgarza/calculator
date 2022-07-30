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
    display.textContent = a / b;
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
};

const display = document.querySelector('#display');

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

const operations = document.querySelectorAll('.operations');

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        let firstNumber = (+display.textContent);
        console.log(firstNumber);
        display.textContent = '';
        let operator = operation.id;
        console.log(operator);
        const equals = document.querySelector('.calculate');
        equals.addEventListener('click', () => {
            let secondNumber = (+display.textContent);
            console.log(secondNumber);
            operate(operator, firstNumber, secondNumber);

        })
    })
})

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    display.textContent = '';
})