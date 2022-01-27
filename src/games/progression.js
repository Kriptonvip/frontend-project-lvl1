import readlineSync from 'readline-sync';
import { correct } from '../index.js';

const progressionGen = (length, diff) => {
  const arr = [];
  let num = 0;
  for (let i = 0; i <= length; i += 1) {
    num += diff;
    arr.push(num);
  }
  return arr;
};

const progression = () => {
  //  game logic start
  const length = 5 + Math.floor(Math.random() * 5);
  const diff = 1 + Math.floor(Math.random() * 5);
  const arr = progressionGen(length, diff);
  console.log('What number is missing in the progression?');
  const x = Math.floor(Math.random() * 5) + 1;
  const correctAnswer = arr[x];
  arr[x] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  let answer = readlineSync.question('Your answer: ');
  answer = Number(answer);
  // game logic end
  return correct(answer, correctAnswer);
};

export default progression;
