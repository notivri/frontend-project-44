import readlineSync from "readline-sync";
import { welcome, randomNumber, calculate } from "../src/index.js";

const game = (name) => {
  let counter = 0;
  const operations = ["+", "-", "*"];

  while (counter < 3) {
    const num1 = randomNumber(1, 50);
    const num2 = randomNumber(1, 50);
    const operator = operations[randomNumber(0, operations.length - 1)];
    const answer = calculate(num1, num2, operator);

    console.log(`[${counter}|3] Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) != answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${answer}.`
      );
      console.log(`Let's try again, ${name}!`);
      counter = 0;
    } else {
      console.log("Correct!");
      counter++;
    }
  }

  console.log(`Congratulations, ${name}! You win!`);
};
game(welcome())
export default game