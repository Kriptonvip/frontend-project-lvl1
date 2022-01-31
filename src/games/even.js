import game from '../index.js';
import randomNum from '../utils.js';

const gameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no"');

const even = () => {
  const num = randomNum(100);
  console.log(`Question: ${num}`);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return correctAnswer;
};

const gameStart = () => game(even, gameRules);

export default gameStart;
