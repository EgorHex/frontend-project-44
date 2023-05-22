import readlineSync from 'readline-sync';

export const roundsCount = 3;

const runGameLogic = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Les's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameLogic;
