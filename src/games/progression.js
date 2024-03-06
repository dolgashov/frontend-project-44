import { randomNumber } from '../utils.js';

import gameLogicLaunch from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateRound = () => {
  const step = randomNumber(1, 100);
  const resultProgression = [];
  const start = randomNumber(1, 1000);
  for (let i = 1; i <= progressionLength; i += 1) {
    resultProgression.push(start + i * step);
  }
  const hiddenIndex = randomNumber(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

export default () => gameLogicLaunch(generateRound, description);
