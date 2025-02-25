import readlineSync from 'readline-sync';
import {
  randomNumber, checkAnswer, getParity, getCorrectAnswer,
} from '../src/index.js';

const ask = () => {
  const number = randomNumber();
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, number };
};

const game = (name) => {
  let counter = 0;

  while (counter < 3) {
    const { userAnswer, number } = ask();
    const correctAnswer = getCorrectAnswer(number, getParity);

    if (checkAnswer(correctAnswer, userAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
