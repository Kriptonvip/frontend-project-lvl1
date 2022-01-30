import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// тут из-за инициализации переменной, запускается функция приветствия и задаётся userName
// я догадываюсь что это не правильно, или так можно делать?
const userName = welcome();

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
