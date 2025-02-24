#!/usr/bin/env node
import progressionGame from './games/progressionGame.js'
import { welcome } from './src/index.js'

progressionGame(welcome('Find the greatest common divisor of given numbers.'))