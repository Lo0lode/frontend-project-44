#!/usr/bin/env node
import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const CorrectAnswer = (number1, number2) => {
  let answer = 1;
  while (number1 !== number2) {
    if (number1 === number2) {
      console.log(number1);
    }
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }answer = number1;
  }
  return answer;
};
const questionandAnswer = () => {
  const number1 = randomNumber(1);
  const number2 = randomNumber(1);
  const question = `${number1} ${number2}`;
  const answer = CorrectAnswer(number1, number2);
  return [question, String(answer)];
};
const GameGCD = () => {
  Game(rules, questionandAnswer);
};
export default GameGCD;
