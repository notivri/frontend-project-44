#!/usr/bin/env node
import parityGame from './games/parityGame.js'
import { welcome } from './src/index.js'

parityGame(welcome('Answer "yes" if the number is even, otherwise answer "no"'))