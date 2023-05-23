import { getRandomNumber } from '../getRandomNumber.js';
import runGameLogic, { roundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runGcdGame;
