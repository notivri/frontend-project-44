import readlineSync from 'readline-sync';
import { randomNumber, checkParityGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();

    console.log(`[${counter}|3] Number is: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (checkParityGuess(answer.toLowerCase(), number)) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
