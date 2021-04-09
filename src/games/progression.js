import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;
const progressionGen = (length, diff) => {
  const arr = [];
  let num = 0;
  for (let i = 0; i <= length; i += 1) {
    num += diff;
    arr.push(num);
  }
  return arr;
};

const game = () => {
  // game logic
  const length = 5 + Math.floor(Math.random() * 5);
  const diff = 1 + Math.floor(Math.random() * 5);
  const arr = progressionGen(length, diff);
  console.log('What number is missing in the progression?');
  const x = Math.floor(Math.random() * 5) + 1;
  const correctAnswer = arr[x];
  arr[x] = '. .';
  console.log(arr.join(' '));
  let answer = readlineSync.question('Your answer: ');
  answer = Number(answer);
  // game logic
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      return game();
    }
    return console.log(`Congratulations ${userName}!`);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${userName}!`);
};

const progression = () => {
  console.log('What is the result of the expression?');
  game();
};
export default progression;
