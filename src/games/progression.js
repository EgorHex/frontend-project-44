import { getRandomNumber } from '../getRandomNumber.js';
import runGameLogic, { roundsCount } from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateArray = () => {
  const step = getRandomNumber(0, 10);
  const startNUM = getRandomNumber(1, 100);

  const resultProgression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    resultProgression.push(startNUM + i * step);
  }
  return resultProgression;
};

const generateRound = () => {
  const resultProgression = generateArray();
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runProgressionGame;
