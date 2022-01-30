import { correct, yourAnswer, congrat } from '../index.js';
import randomNum from '../utils.js';

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
const calc = (count) => {
  if (count === 3) {
    return congrat();
  }
  console.log('What is the result of the expression?');
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  const index = randomNum(3);
  const oper = ['+', '-', '*'];
  console.log(`Question: ${num1} ${oper[index]} ${num2}`);
  let answer = yourAnswer();
  const correctAnswer = operand(num1, num2, oper[index]);
  answer = Number(answer);
  //  game logic end
  return correct(answer, correctAnswer, calc, count);
};

export default calc;
