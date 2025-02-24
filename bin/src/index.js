import readlineSync from "readline-sync";

export const welcome = (description) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(description);
  return name;
};

export const getParity = (number) => number % 2 === 0;

export const checkGuess = (answer, number) =>
  (answer === "yes" && getParity(number)) ||
  (answer === "no" && !getParity(number));

export const randomNumber = (min = 1, max = 100) =>
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

export const gcd = (num1, num2) => (num2 == 0 ? num1 : gcd(num2, num1 % num2));

export const generateProgression = () => {
  const length = randomNumber(5, 10);
  const start = randomNumber(1, 10);
  const step = randomNumber(1, 10);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }

  const missingIndex = Math.floor(Math.random() * length);
  const missingNumber = progression[missingIndex];
  progression[missingIndex] = "...";

  return { progression, missingNumber };
};
