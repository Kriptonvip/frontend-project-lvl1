import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

let count = 0;
const quest = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  let oper = Math.floor(Math.random() * 3);
  oper === 0 ? oper = '+' : oper === 1 ? oper = '-' : oper === 2 ? oper = '*' : oper = null; 

  console.log(`Question: ${num1} ${oper} ${num2}`);
  let answer = readlineSync.question('Your answer: ');
  let correctAnswer = operand (num1, num2, oper);
  answer = Number(answer);
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      return quest();
    }
    return console.log(`Congratulations ${userName}!`);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${userName}!`);
};

const operand = (num1, num2, oper) => {
let result;
 switch(oper) {
    case '+':
      result = num1 + num2;
      break; 
    case '-':
      result =  num1 - num2;
      break;
    case '*':
      result =  num1 * num2;
      break;
    default: 'знак не определён'
 }
 return result;
};
const calc = () => {
  console.log('What is the result of the expression?');
  quest();
};
export default calc;
