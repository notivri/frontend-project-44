import readlineSync from 'readline-sync';
import { generateProgression } from '../src/index.js';

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const { progression, missingNumber } = generateProgression();
    console.log(`Progression: ${progression.join(' ')}`);
    const userAnswer = Number(
      readlineSync.question(`[${counter}|3]Your answer: `),
    );
    if (userAnswer === missingNumber) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. correct was ${missingNumber}`);
    }
  }

  console.log(`Congratulations, ${name}! You win`);
};

export default game;
