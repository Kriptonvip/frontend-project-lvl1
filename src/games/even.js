import { correct, yourAnswer } from '../index.js';
import randomNum from '../utils.js';

const even = (count) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const num = randomNum(100);
  console.log(`Question: ${num}`);
  const answer = yourAnswer();
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return correct(answer, correctAnswer, even, count);
};
export default even;
