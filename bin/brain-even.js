#!/usr/bin/env node
import welcome, { randomNumber, checkParityGuess, startGame } from '../src/cli.js'

const game = (name) => {
  startGame(() => {
    const number = randomNumber()
    return {
      question: number,
      answer: checkParityGuess(number),
    }
  }, name)
}

game(welcome('Answer "yes" if the number is even, otherwise answer "no"'))
