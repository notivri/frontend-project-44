import readlineSync from 'readline-sync';

export const welcome = (description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  return name;
};

export const getParity = (number) => number % 2 === 0;

export const checkParityGuess = (answer, number) => (answer.toLowerCase() === 'yes' && getParity(number))
  || (answer.toLowerCase() === 'no' && !getParity(number));

export function randomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * max - min + 1 + min);
}

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.log('error');
      break;
  }

  return undefined;
};

export const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

export const generateProgression = () => {
  const length = randomNumber(5, 10);
  const start = randomNumber(1, 10);
  const step = randomNumber(1, 10);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const missingIndex = Math.floor(Math.random() * length);
  const missingNumber = progression[missingIndex];
  progression[missingIndex] = '...';

  return { progression, missingNumber };
};

const getPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const checkPrimeGuess = (answer, number) => (answer.toLowerCase() === 'yes' && getPrime(number))
  || (answer.toLowerCase() === 'no' && !getPrime(number));
