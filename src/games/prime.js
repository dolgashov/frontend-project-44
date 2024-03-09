import { randomNumber } from '../utils.js';

import gameLogicLaunch from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const question = randomNumber(1, 10);
  let correctAnswer;
  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => gameLogicLaunch(generateRound, description);
