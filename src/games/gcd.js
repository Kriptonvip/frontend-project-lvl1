import { correct, yourAnswer } from '../index.js';
import randomNum from '../utils.js';

const gcdiv = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdiv(num2, num1 % num2);
};
// game logic start
const gcd = (countOfTryes) => {
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  let answer = yourAnswer();
  const correctAnswer = gcdiv(num1, num2);
  answer = Number(answer);
  // game logic end
  return correct(answer, correctAnswer, gcd, countOfTryes);
};

export default gcd;
