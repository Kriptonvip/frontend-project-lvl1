import game from '../index.js';
import randomNum from '../utils.js';

const gameRules = () => console.log('What is the result of the expression?');

const operand = (num1, num2, oper) => {
  let result;
  switch (oper) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return result;
};
  // game logic start
const calc = () => {
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  const index = randomNum(3);
  const oper = ['+', '-', '*'];
  console.log(`Question: ${num1} ${oper[index]} ${num2}`);
  let correctAnswer = operand(num1, num2, oper[index]);
  correctAnswer = String(correctAnswer);
  //  game logic end
  return correctAnswer;
};
const gameStart = () => game(calc, gameRules);

export default gameStart;
