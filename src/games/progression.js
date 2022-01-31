import game from '../index.js';
import randomNum from '../utils.js';

const gameRules = () => console.log('What number is missing in the progression?');

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
  const length = randomNum(5, 5);
  const diff = randomNum(5, 1);
  const arr = progressionGen(length, diff);
  const x = randomNum(5, 1);
  let correctAnswer = arr[x];
  correctAnswer = String(correctAnswer);
  arr[x] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  // game logic end
  return correctAnswer;
};

const gameStart = () => game(progression, gameRules);

export default gameStart;
