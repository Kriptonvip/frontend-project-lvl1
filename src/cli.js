import readlineSync from 'readline-sync';

// Вопрос можно ли использовать объявление переменной userName два раза, тут и в index.js?

// сделал много попыток задать перменную userName один раз, только в cli.js но это неработает
// и нашел указание в задании 'Файлы, которые мы добавили ранее (src/cli.js, bin/brain-games.js),
// оставьте, как есть, и не смешивайте с остальным кодом'

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default welcome;
