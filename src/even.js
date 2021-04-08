import readlineSync from 'readline-sync';

const quest = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    const num = Math.floor(Math.random() * 100);
    console.log(num);
    const answer = readlineSync.question('Your answer: ');
    // console.log(`Your answer: ${answer}`);
    const correctAnswer = "yes";
    if (num % 2 === 0 && answer === "yes") {
        return  console.log('Correct!')
    } else {
        const correctAnswer = "no"
    }
    return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
    

}
const even = () => {
  
  return quest();
}
export default even;
