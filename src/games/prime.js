import readlineSync from 'readline-sync';
import { correct } from '../index.js';

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
const prime = () => {
  //  game logic start
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = Math.floor(Math.random() * 21);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 'no';
  if (isPrime(num)) {
    correctAnswer = 'yes';
  }
  //  game logic end
  return correct(answer, correctAnswer);
};

export default prime;
