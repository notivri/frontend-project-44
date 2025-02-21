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

const startGame = () => {
  let counter = 0;
  while (true) {
    if (counter == 3) {
      console.log("You're won! congratulations! :)");
      break;
    }

    const number = numberRandom();
    console.log(`[${counter}|3] Number is: ${number}`);
    const parityGuess = readlineSync.question("Is it even? ");
    if (
      (parityGuess == "yes" && getParity(number) == true) ||
      (parityGuess == "no" && getParity(number) == false)
    ) {
      console.log("Correct!");
      counter++;
    } else {
      console.log("No!");
      counter = 0;
    }
  }
};
