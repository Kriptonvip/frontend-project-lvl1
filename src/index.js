import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userNameAlert = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName()}!`);
};

const congrat = () => {
  console.log(`Congratulations, ${userName()}!`);
};

const tryAgain = () => {
  console.error(`Let's try again, ${userName()}!`);
};

const wrongAnswer = (answer, correctAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
};

const correct = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, correctAnswer);
  return false;
};

const game = (func) => {
  userNameAlert();
  for (let i = 0; i < 3; i += 1) {
    if (!func()) {
      return tryAgain();
    }
  }
  return congrat();
};

export {
  game,
  correct,
  userNameAlert,
};
