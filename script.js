const keypad = document.querySelector('.keypad');
const display = document.getElementById('display');

let operand1 = '';
let operand2 = '';
let operator = '';

function add(num1, num2) {
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

function operate(op, num1, num2) {
  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
    default:
      return;
  }
}

function displayOperation() {
  display.textContent = `${operand1} ${operator} ${operand2}`;
}

keypad.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  const value = e.target.dataset.value;
  if (!button) return;

  if (value === '=') {
    if (!operand1 || !operand2 || !operator) return;
    operand1 = operate(operator, Number(operand1), Number(operand2));
    operator = '';
    operand2 = '';
    displayOperation();
  }

  if (button.classList.contains('operand')) {
    const num = value;
    if (!operator) {
      operand1 += num;
    } else {
      operand2 += num;
    }
    displayOperation();
  }

  if (button.classList.contains('operator') && button.dataset.value !== '=') {
    if (operator) {
      operand1 = operate(operator, Number(operand1), Number(operand2));
      operand2 = '';
    }

    operator = value;
    displayOperation();
  }

  if (button.classList.contains('clear')) {
    operand1 = '';
    operator = '';
    operand2 = '';
    displayOperation();
  }
});
