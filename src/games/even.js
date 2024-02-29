import gameLogicLaunch from '../gameLogic.js';

import { randomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const generateRound = () => {
  const question = randomNumber;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameLogicLaunch(generateRound, description);
