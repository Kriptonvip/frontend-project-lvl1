import readlineSync from 'readline-sync';

const userNameAlert = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${userName} !`);
};

export default userNameAlert;
