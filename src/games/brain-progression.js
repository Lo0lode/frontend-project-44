#!/usr/bin/env node
import readlineSync from 'readline-sync';
const Progresia = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  let i = 0;
  let i2 = 0;
  let final = 0;
  let result = [];
  const shadow = '..';
  while (i < 3) {
    const index = Math.floor(Math.random() * 10) + 5;
    const random = Math.floor(Math.random() * 5) + 1;
    const start = Math.floor(Math.random() * 10) + 5;
    while (i2 < index) {
      (result.push(start + (index * (i2 + 1))));
      i2 += 1;
    }
    i2 = 0;
    final = result[random];
    result[random] = shadow;
    console.log(`Question:${result.join(' ')} `);
    result = [];
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== final) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${final}'. \n Let's try again, ${name}`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default Progresia;
