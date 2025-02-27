#!/usr/bin/env node
import welcome, { randomNumber, gcd, startGame } from '../src/cli.js'

const game = (name) => {
  startGame(() => {
    const num1 = randomNumber(1, 10)
    const num2 = randomNumber(1, 10)
    return {
      question: `${num1} ${num2}`,
      answer: gcd(num1, num2),
    }
  }, name)
}

game(welcome('Find the greatest common divisor of given numbers.'))
