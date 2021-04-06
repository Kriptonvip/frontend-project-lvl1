import readlineSync from 'readline-sync';


const userName = () => {
    const userName = readlineSync.question('May I have your name? ');
    return console.log('Hello ' + userName + '!');
};

export { userName };