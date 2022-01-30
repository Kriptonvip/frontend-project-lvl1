import readlineSync from 'readline-sync';
import userName from './cli.js';

const congrat = () => {
  console.log(`Congratulations, ${userName}!`);
};

const tryAgain = () => {
  console.error(`Let's try again, ${userName}!`);
};

const wrongAnswer = (answer, correctAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
};

const correct = (answer, correctAnswer, func, countOfTryes = 0) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (countOfTryes === 2) {
      return congrat();
    }
    console.log(countOfTryes);
    const i = countOfTryes + 1;
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
};
