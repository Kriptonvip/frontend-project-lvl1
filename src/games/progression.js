import { correct, yourAnswer } from '../index.js';
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

const progression = (countOfTryes) => {
  //  game logic start
  const minLength = 5;
  const minStep = 1;
  const length = minLength + randomNum(5);
  const diff = minStep + randomNum(5);
  const arr = progressionGen(length, diff);
  console.log('What number is missing in the progression?');
  const x = minStep + randomNum(5);
  const correctAnswer = arr[x];
  arr[x] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  let answer = yourAnswer();
  answer = Number(answer);
  // game logic end
  return correct(answer, correctAnswer, progression, countOfTryes);
};

export default progression;
