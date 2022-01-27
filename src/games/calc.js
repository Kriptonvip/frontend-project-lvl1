import readlineSync from 'readline-sync';
import { correct } from '../index.js';

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
  console.log('What is the result of the expression?');
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const index = Math.floor(Math.random() * 3);
  const oper = ['+', '-', '*'];
  console.log(`Question: ${num1} ${oper[index]} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  const correctAnswer = operand(num1, num2, oper[index]);
  answer = Number(answer);
  //  game logic end
  return correct(answer, correctAnswer);
};

export default calc;
