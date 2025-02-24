import readlineSync from 'readline-sync';
import { randomNumber, gcd } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const num1 = randomNumber(1, 10);
    const num2 = randomNumber(1, 10);
    const answer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question(`[${counter}|3]Your answer: `);

    if (Number(userAnswer) === answer) {
      counter += 1;
      console.log('Correct! Good job');
    } else {
      counter = 0;
      console.log(`You're wrong. Correct was: ${answer}`);
    }
  }
  console.log(`Congratulations, ${name}! You win`);
};

export default game;
