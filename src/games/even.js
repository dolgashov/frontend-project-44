import { randomNumber } from '../utils.js';

import gameLogicLaunch from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const generateRound = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameLogicLaunch(generateRound, description);
