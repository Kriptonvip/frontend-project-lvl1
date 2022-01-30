import { correct, yourAnswer, congrat } from '../index.js';
import randomNum from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const prime = (count) => {
  if (count === 3) {
    return congrat();
  }
  //  game logic start
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = randomNum(21);
  console.log(`Question: ${num}`);
  const answer = yourAnswer();
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  //  game logic end
  return correct(answer, correctAnswer, prime, count);
};

export default prime;
