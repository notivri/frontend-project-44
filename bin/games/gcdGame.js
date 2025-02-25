import readlineSync from 'readline-sync';
import { randomNumber, gcd } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const num1 = randomNumber(1, 10);
    const num2 = randomNumber(1, 10);
    const answer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === answer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
