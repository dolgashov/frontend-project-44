import { randomNumber } from '../utils.js';

import gameLogicLaunch from '../index.js';

const description = 'What is the result of the expression?';
const randomOperator = () => {
  const operators = ['*', '+', '-'];
  const operatorIndex = randomNumber(0, operators.length - 1);
  return operators[operatorIndex];
};

const caclculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '*':
      return operand1 * operand2;
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return Error('Incorrect operator');
  }
};
const generateRound = () => {
  const firstOperand = randomNumber(1, 100);
  const secondOperand = randomNumber(1, 100);
  const operator = randomOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(caclculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
};

export default () => gameLogicLaunch(generateRound, description);
