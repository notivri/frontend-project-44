#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { randomNumber, checkPrimeGuess } from '../src/cli.js'

const game = (name) => {
  let counter = 0

  while (counter < 3) {
    const number = randomNumber()

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = checkPrimeGuess(number)

    if (checkPrimeGuess(number) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    counter += 1
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

game(welcome('Answer "yes" if given number is prime. Otherwise answer "no".'))
