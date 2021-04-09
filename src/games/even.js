import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;
const even = () => {
  // game logic start
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 'no';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  }
  // game logic end
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      return even();
    }
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${userName}!`);
};
export default even;
