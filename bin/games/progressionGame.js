import readlineSync from 'readline-sync';
import { generateProgression } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const { progression, missingNumber } = generateProgression();
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(
      readlineSync.question('Your answer: '),
    );

    if (userAnswer === missingNumber) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. correct was ${missingNumber}`);
      break
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
