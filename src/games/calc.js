import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;

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

const game = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  let oper = Math.floor(Math.random() * 3);
  // мне кажется лаконичнее одной строкой с тернарным оператором,
  // но eslint ругается поэтому сделал через if else
  // oper = (oper === 0) ? oper = '+' : oper === 1 ? oper = '-' : oper === 2 ? oper = '*' :
  // oper = null;
  if (oper === 0) {
    oper = '+';
  } else if (oper === 1) {
    oper = '-';
  }
  oper = '*';
  console.log(`Question: ${num1} ${oper} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  const correctAnswer = operand(num1, num2, oper);
  answer = Number(answer);
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

const calc = () => {
  console.log('What is the result of the expression?');
  game();
};
export default calc;
