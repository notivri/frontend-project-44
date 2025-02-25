import readlineSync from 'readline-sync';
import { randomNumber, checkParityGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (checkParityGuess(userAnswer, number)) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
