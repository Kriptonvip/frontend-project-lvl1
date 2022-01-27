import readlineSync from 'readline-sync';
import { correct } from '../index.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 'no';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  }
  return correct(answer, correctAnswer);
};
export default even;
