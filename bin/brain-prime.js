#!/usr/bin/env node
import welcome, { randomNumber, checkPrimeGuess, startGame } from '../src/cli.js'

const game = (name) => {
  startGame(() => {
    const number = randomNumber()
    return {
      question: `${number}`,
      answer: checkPrimeGuess(number),
    }
  }, name)
}

game(welcome('Answer "yes" if given number is prime. Otherwise answer "no".'))
