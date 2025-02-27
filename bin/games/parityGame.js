import readlineSync from 'readline-sync';
import { randomNumber, checkParityGuess } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const number = randomNumber();

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (checkParityGuess(number) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    counter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
