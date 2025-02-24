#!/usr/bin/env node
import primeGame from './games/primeGame.js';
import { welcome } from './src/index.js';

primeGame(welcome('Find the greatest common divisor of given numbers.'));
