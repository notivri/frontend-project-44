#!/usr/bin/env node
import primeGame from './games/primeGame.js';
import { welcome } from './src/index.js';

primeGame(welcome('Answer "yes" if given number is prime. Otherwise answer "no".'));
