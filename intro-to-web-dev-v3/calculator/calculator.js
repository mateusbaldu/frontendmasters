const nums = document.querySelectorAll('.num');
const display = document.querySelector('.calculator-display');
const clearBtn = document.querySelector('.clear');
const eraseBtn = document.querySelector('.erase');

const equals = document.querySelector('.equals');
const operations = document.querySelectorAll('.operation');

let currentValue = '0';
let previousValue = null;
let currentOperation = null;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return 0;
    }
    return x / y;
}

function updateDisplay() {
    display.textContent = currentValue;
}

clearBtn.addEventListener('click', () => {
    currentValue = '0';
    previousValue = null;
    currentOperation = null;
    updateDisplay();
})

eraseBtn.addEventListener('click', () => {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
});


operations.forEach(op => {
    op.addEventListener('click', () => {
        if (currentValue === '0') return;   
        currentOperation = op.textContent;
        previousValue = currentValue;
        currentValue = '0';
    }
)})

nums.forEach(num => {
    num.addEventListener('click', () => {
        if (currentValue === '0') {
            currentValue = num.textContent;
        } else {
            currentValue += num.textContent;
        }
        updateDisplay();
    });
});

function calculate() {
    const x = parseInt(previousValue);
    const y = parseInt(currentValue);
    let result;
    switch (currentOperation) {
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '÷':
            result = divide(x, y);
            break;
    }
    currentValue = result.toString();
    previousValue = null;
    currentOperation = null;
    updateDisplay();
}

equals.addEventListener('click', () => {
    calculate();
});    