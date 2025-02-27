#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { randomNumber, gcd } from '../src/cli.js'

const game = (name) => {
  let counter = 0

  while (counter < 3) {
    const num1 = randomNumber(1, 10)
    const num2 = randomNumber(1, 10)
    const correctAnswer = gcd(num1, num2)

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    counter += 1
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

game(welcome('Find the greatest common divisor of given numbers.'))
