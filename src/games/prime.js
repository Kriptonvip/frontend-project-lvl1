import game from '../index.js';
import randomNum from '../utils.js';

const gameRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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
  const num = randomNum(21);
  console.log(`Question: ${num}`);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  //  game logic end
  return correctAnswer;
};

const gameStart = () => game(prime, gameRules);

export default gameStart;
