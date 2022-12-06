#!/usr/bin/env node
import readlineSync from 'readline-sync';
import Game from '../index.js';
import randomNumber from '../randomNumber.js';
const length = 10
const progression = 10
const rules = 'What number is missing in the progression?';
const questionandAnswer=()=>{
  const firstNumber = randomNumber()
  const progres = randomNumber(1,progression)
  const skip = randomNumber(0,length)
  const progresia = []
  for (let i = 0; i < length; i += 1) {
    progresia.push(firstNumber + progres * i);
  }
  const answer =  progresia[skip]
  progresia[skip] = '..'
  const question =  progresia.join(' ')
  return [question,String(answer)]
};
const GameProgression = () => {
  Game(rules, questionandAnswer);
};
export default GameProgression