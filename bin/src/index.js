import readlineSync from "readline-sync";

export const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('You have number, write "yes" or "no"');
  return name
}

export const getParity = (number) => number % 2 === 0;
export const checkGuess = (answer, number) =>
  (answer === "yes" && getParity(number)) ||
  (answer === "no" && !getParity(number));
export const randomNumber = (min=1, max=100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
};
