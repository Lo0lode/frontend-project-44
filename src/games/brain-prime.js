#!/usr/bin/env node
import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  let result = '';

  const simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  while (i < 3) {
    const random = Math.floor(Math.random() * 50);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    result = simple.includes(random) ? 'yes' : 'no';
    console.log(result);
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \n Let's try again, ${name}!`);
      return;
    }
    i += 1;
    console.log('Correct!');
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default prime;
