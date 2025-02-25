import readlineSync from 'readline-sync';
import { randomNumber, calculate } from '../src/index.js';

const game = (name) => {
  let counter = 0;
  const operations = ['+', '-', '*'];

  while (counter < 3) {
    const num1 = randomNumber(1, 10);
    const num2 = randomNumber(1, 10);
    const operator = operations[randomNumber(0, operations.length - 1)];
    const answer = calculate(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct was: '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      break
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
