import readlineSync from 'readline-sync';

// использовал свойство инициализации переменной перед экспортом
// не думаю что это правильно, но порядок вызова приветствия соблюден
// правда само приветствие вызывается скрыто и переменная userName экспортирована.
const welcomeAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const userName = welcomeAndGetName();

export default userName;

// был такой вариант
// не мог понять как инициализировать переменную userName, после вызова приветствия,
// и не запуская каждый раз readlineSync.question при обращении к ней,
// и чтобы её можно было экспортировать

// Вариант ниже работает но eslint ругается на let, и выглядит странно,
// а если объявлять const, то потом её не переопределишь. Вобщем нужна подсказка.
// let userName = '';
// const userNameCreate = () => {
//   userName = readlineSync.question('May I have your name? ');
// };
// const welcome = () => console.log('Welcome to the Brain Games!');

// const userNameAlert = () => {
//   userNameCreate();
//   console.log(`Hello, ${userName}!`);
// };
