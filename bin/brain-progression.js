#!/usr/bin/env node
import welcome, { generateProgression, startGame } from '../src/cli.js';

const game = (name) => {
  startGame(() => {
    const { progression, missingNumber } = generateProgression();
    return {
      question: `${progression.join(' ')}`,
      answer: missingNumber,
    };
  }, name);
};

game(welcome('What number is missing in the progression?'));
