#!/usr/bin/env node
import readlineSync from 'readline-sync';
const Nod =(min = 0, max = 2, minnumber = 3, maxnumber = 10)=>{
console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0
  let result = 0
  while(i < 3){
    let number = Math.floor((minnumber + Math.random()) * (maxnumber + 1 - minnumber));
    let number2 = Math.floor((minnumber + Math.random()) * (maxnumber + 1 - minnumber));
    console.log(`Question: ${number} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    while(number != number2){
        if(number === number2){
            console.log(number)
        }
        if(number > number2){
            number = number - number2;
        }else{
            number2 = number2 - number;
        }result = number
    }
    if(Number(answer) !== result){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \n Let's try again, ${name}!`)
        return
    }
    i += 1
    console.log('Correct!')
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
export default Nod