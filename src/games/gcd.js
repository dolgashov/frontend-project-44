import { randomNumber } from '../utils.js';

import gameLogicLaunch from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return greatestCommonDivisor(num2 % num1, num1);
};

const generateRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const correctAnswer = String(greatestCommonDivisor(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};
export default () => gameLogicLaunch(generateRound, description);
