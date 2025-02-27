#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { generateProgression } from '../src/cli.js'

const game = (name) => {
  let counter = 0

  while (counter < 3) {
    const { progression, missingNumber } = generateProgression()

    console.log(`Question: ${progression.join(' ')}`)
    const userAnswer = Number(
      readlineSync.question('Your answer: '),
    )

    if (Number(userAnswer) !== missingNumber) {
      console.log(`'${userAnswer}' is wrong answer ;(. correct was '${missingNumber}'`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    counter += 1
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

game(welcome('What number is missing in the progression?'))
