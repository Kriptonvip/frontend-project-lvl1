import game from '../index.js';
import randomNum from '../utils.js';

const gameRules = () => console.log('Find the greatest common divisor of given numbers.');

const gcdiv = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdiv(num2, num1 % num2);
};
// game logic start
const gcd = () => {
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  console.log(`Question: ${num1} ${num2}`);
  let correctAnswer = gcdiv(num1, num2);
  correctAnswer = String(correctAnswer);
  // game logic end
  return correctAnswer;
};

const gameStart = () => game(gcd, gameRules);
export default gameStart;
