#!/usr/bin/env node
import readlineSync from 'readline-sync';
const greeting =(min = 2,max=100)=>{
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let i = 0
    while(i < 3){
    let number = Math.floor((min + Math.random()) * (max + 1 - min))
    console.log(`Question: ${number}`)
    const answer= readlineSync.question('Your answer: ')
    let result = ''
    if(number % 2 === 0){
        i+=1
        result = 'yes'
    }else{
    i+=1
    result = 'no'
    }
    if(answer !== result){
        console.log( `'${answer}' is wrong answer ;(. Correct answer was '${result}' . \n Let's try again, ${name}!`)
        return
    }else{
        console.log('Corrent!')
    }
}
if(i === 3){
    console.log(`Congratulations, ${name}!`)
}
}
export default greeting
