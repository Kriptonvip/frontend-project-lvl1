import readlineSync from 'readline-sync';

// не могу понять как инициализировать переменную userName, после вызова приветствия,
// и не запуская каждый раз readlineSync.question при обращении к ней.
// Вариант ниже работает но eslint ругается на let, и выглядит странно,
// а если объявлять const, то потом её не переопределишь. Вобщем нужна подсказка.
let userName = '';
const userNameCreate = () => {
  userName = readlineSync.question('May I have your name? ');
};
const welcome = () => console.log('Welcome to the Brain Games!');

const userNameAlert = () => {
  userNameCreate();
  console.log(`Hello, ${userName}!`);
};

export {
  welcome,
  userNameAlert,
  userName,
};
