#!/usr/bin/env node
import progressionGame from './games/progressionGame.js';
import { welcome } from './src/index.js';

progressionGame(welcome('What number is missing in the progression?'));
