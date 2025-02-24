#!/usr/bin/env node
import gcdGame from './games/gcdGame.js'
import { welcome } from './src/index.js'

gcdGame(welcome('Find the greatest common divisor of given numbers.'))