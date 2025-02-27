#!/usr/bin/env node
import welcome, { randomNumber, calculate, startGame } from '../src/cli.js'

const game = (name) => {
  const operations = ['+', '-', '*']

  startGame(() => {
    const num1 = randomNumber(1, 10)
    const num2 = randomNumber(1, 10)
    const operator = operations[randomNumber(0, operations.length - 1)]
    return {
      question: `${num1} ${operator} ${num2}`,
      answer: calculate(num1, num2, operator),
    }
  }, name)
}

game(welcome('What is the result of the expression?'))
