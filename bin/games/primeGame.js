import readlineSync from 'readline-sync';
import { randomNumber, checkPrimeGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = checkPrimeGuess(userAnswer, number) ? 'yes' : 'no';

    if (checkPrimeGuess(userAnswer, number)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
