import readlineSync from 'readline-sync';
import { welcome, userNameAlert, userName } from './cli.js';

// не совсем понимаю почему эти две функции запускаются, и что их вызывает
welcome();
userNameAlert();

const congrat = () => {
  console.log(`Congratulations, ${userName}!`);
};

const tryAgain = () => {
  console.error(`Let's try again, ${userName}!`);
};

const wrongAnswer = (answer, correctAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
};
// мне не нравится это решение, но другого я не нашёл
// есть вариант все эти функции экспортировать и вызывать в исполняемых фаилах игр,
// но это ещё хуже мне кажется, если можно все написать в одном месте то лучше не дублировать код.
const correct = (answer, correctAnswer, func, count = 0) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    const i = count + 1;
    func(i);
    return true;
  }
  wrongAnswer(answer, correctAnswer);
  return tryAgain();
};
const yourAnswer = () => readlineSync.question('Your answer: ');

export {
  correct,
  yourAnswer,
  congrat,
};
