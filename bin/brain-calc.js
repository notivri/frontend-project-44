#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { randomNumber, calculate } from '../src/cli.js'

const game = (name) => {
  let counter = 0
  const operations = ['+', '-', '*']

  while (counter < 3) {
    const num1 = randomNumber(1, 10)
    const num2 = randomNumber(1, 10)
    const operator = operations[randomNumber(0, operations.length - 1)]
    const correctAnswer = calculate(num1, num2, operator)

    console.log(`Question: ${num1} ${operator} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct was: '${correctAnswer}'`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    counter += 1
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

game(welcome('What is the result of the expression?'))
