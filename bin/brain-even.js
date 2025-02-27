#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { randomNumber, checkParityGuess } from '../src/cli.js'

const game = (name) => {
  let counter = 0

  while (counter < 3) {
    const number = randomNumber()

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

    if (checkParityGuess(number) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    counter += 1
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

game(welcome('Answer "yes" if the number is even, otherwise answer "no"'))
