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
  if (num2 === 0) {
    return undefined;
  }
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

function handleEquals() {
  if (!operand1 || !operand2 || !operator) return;
  operand1 = operate(operator, Number(operand1), Number(operand2));
  operator = '';
  operand2 = '';
  displayOperation();
}

function handleOperand(value) {
  if (operand1 === undefined) {
    operand1 = '';
  }
  if (!operator) {
    operand1 += value;
  } else {
    operand2 += value;
  }
}

function handleOperator(value) {
  if (!operand1) return;
  if (operator && operand2) {
    operand1 = operate(operator, Number(operand1), Number(operand2));
    operand2 = '';
  }

  operator = value;
}

function handleClear() {
  operand1 = '';
  operator = '';
  operand2 = '';
}

keypad.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  const value = e.target.dataset.value;
  if (!button) return;

  if (value === '=') {
    handleEquals();
  } else if (button.classList.contains('operand')) {
    handleOperand(value);
  } else if (
    button.classList.contains('operator') &&
    button.dataset.value !== '='
  ) {
    handleOperator(value);
  } else if (button.classList.contains('clear')) {
    handleClear();
  }

  displayOperation();
});
