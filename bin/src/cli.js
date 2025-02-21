import readlineSync from "readline-sync";

const numberRandom = () => Math.floor(Math.random() * 100);
const getParity = (number) => (number % 2 == 0 ? true : false);

export default function () {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('You have number, write "yes" or "no"');
  startGame();
}

const checkGuess = (answer, number) => {
  return (
    (answer === "yes" && getParity(number)) ||
    (answer === "no" && !getParity(number))
  );
};

const startGame = () => {
  let counter = 0;

  while (counter < 3) {
    const number = numberRandom();
    console.log(`[${counter}|3] Number is: ${number}`);
    const answer = readlineSync.question("Is it even? ");
    if (checkGuess(answer, number)) {
      counter++;
      console.log("Correct!");
    } else {
      counter = 0;
      console.log("You're wrong! Try again");
    }
  }

  console.log("You're won! Congratulations! :)");
};
