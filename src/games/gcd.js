import readlineSync from 'readline-sync';
import { correct } from '../index.js';

const gcdiv = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdiv(num2, num1 % num2);
};
// game logic start
const gcd = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  const correctAnswer = gcdiv(num1, num2);
  answer = Number(answer);
  // game logic end
  return correct(answer, correctAnswer);
};

export default gcd;
