import readlineSync from 'readline-sync';
import { randomNumber, checkGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();

    console.log(`[${counter}|3] Number is: ${number}`);
    const answer = readlineSync.question('Is it even? ');

    if (checkGuess(answer.toLowerCase(), number)) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`You're wrong, ${name}! Try again`);
    }
  }

  console.log(`Congratulations, ${name}! You win`);
};

export default game;
