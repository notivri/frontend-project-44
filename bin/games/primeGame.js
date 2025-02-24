import readlineSync from 'readline-sync';
import { randomNumber, checkPrimeGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();
    console.log(`Number is: ${number}`);
    const userAnswer = readlineSync.question(`[${counter}|3]Your answer: `);
    if (checkPrimeGuess(userAnswer, number)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log('You`re wrong!');
      counter = 0;
    }
  }

  console.log(`Congratulations, ${name}. You win`);
};

export default game;
