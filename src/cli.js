import readlineSync from 'readline-sync'

export default (description) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  if (description !== undefined) {
    console.log(description)
  }
  return name
}

export const randomNumber = (min = 1, max = 100) => {
  const range = max - min + 1
  return Math.floor(Math.random() * range) + min
}

export const checkParityGuess = number => (number % 2 === 0 ? 'yes' : 'no')

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      console.log('error')
      break
  }

  return undefined
}

export const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2))

export const generateProgression = () => {
  const length = randomNumber(5, 10)
  const start = randomNumber(1, 10)
  const step = randomNumber(1, 10)
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }

  const missingIndex = Math.floor(Math.random() * length)
  const missingNumber = progression[missingIndex]
  progression[missingIndex] = '..'

  return { progression, missingNumber }
}

const getPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false
  }
  return num > 1
}

export const checkPrimeGuess = number => (getPrime(number) ? 'yes' : 'no')
