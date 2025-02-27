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

    if (userAnswer !== missingNumber) {
      console.log(`'${userAnswer}' is wrong answer ;(. correct was '${missingNumber}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    } 

    counter += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
