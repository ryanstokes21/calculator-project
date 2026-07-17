let operand1;
let operand2;
let operator;

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

function operate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      add(operand1, operand2);
      break;
    case '-':
      subtract(operand1, operand2);
      break;
    case 'x':
      multiply(operand1, operand2);
      break;
    case '÷':
      multiply(operand1, operand2);
      break;
    default:
      return NaN;
  }
}
