import { correct, yourAnswer, congrat } from '../index.js';
import randomNum from '../utils.js';

const progressionGen = (length, diff) => {
  const arr = [];
  let num = 0;
  for (let i = 0; i <= length; i += 1) {
    num += diff;
    arr.push(num);
  }
  return arr;
};

const progression = (count) => {
  if (count === 3) {
    return congrat();
  }
  //  game logic start
  const length = 5 + randomNum(5);
  const diff = 1 + randomNum(5);
  const arr = progressionGen(length, diff);
  console.log('What number is missing in the progression?');
  const x = 1 + randomNum(5);
  const correctAnswer = arr[x];
  arr[x] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  let answer = yourAnswer();
  answer = Number(answer);
  // game logic end
  return correct(answer, correctAnswer, progression, count);
};

export default progression;
