import { getRandomNumber } from '../getRandomNumber.js';
import runGameLogic, { roundsCount } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runEvenGame;
