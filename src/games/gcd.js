import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;

const gcdiv = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdiv(num2, num1 % num2);
};

const gcd = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`${num1} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  const correctAnswer = gcdiv(num1, num2);
  answer = Number(answer);
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      return gcd();
    }
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${userName}!`);
};

export default gcd;
