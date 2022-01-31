import readlineSync from 'readline-sync';

const yourAnswer = () => readlineSync.question('Your answer: ');

const game = (gameLogic, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const maxGameCount = 3;
  gameRules();
  for (let i = 0; i < maxGameCount; i += 1) {
    const correctAnswer = gameLogic();
    const answer = yourAnswer();
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.error(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
