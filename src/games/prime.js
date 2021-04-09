import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;
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
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      return prime();
    }
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${userName}!`);
};

export default prime;
