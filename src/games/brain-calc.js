#!/usr/bin/env node
import readlineSync from 'readline-sync';

const calculator = (min = 0, max = 2, minnumber = 2, maxnumber = 10) => {
  const simvoli = ['-', '+', '*'];
  let result = '0';
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const number = Math.floor((minnumber + Math.random()) * (maxnumber + 1 - minnumber));
    const number2 = Math.floor((minnumber + Math.random()) * (maxnumber + 1 - minnumber));
    const index = Math.floor((min + Math.random()) * (max + 1 - min));
    console.log(`Question: ${number} ${simvoli[index]} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (simvoli[index] === '-') {
      result = number - number2;
      i += 1;
    } else if (simvoli[index] === '+') {
      result = number + number2;
      i += 1;
    } else {
      result = number * number2;
      i += 1;
    }
    if (Number(answer) !== result) {
      console.log(`'${(answer)}' is wrong answer ;(. Correct answer was '${(result)}'.`);
      return;
    }
    console.log('Correct!');
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default calculator;
