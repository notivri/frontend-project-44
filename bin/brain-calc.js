#!/usr/bin/env node
import calculationGame from './games/calculationGame.js'
import { welcome } from './src/index.js'

calculationGame(welcome('What is the result of the expression?'))