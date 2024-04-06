import inquirer from 'inquirer';

//Welcome Message
console.log("\n\tWelcome To \'ICodeIt\' - CLI-Number-Guessing-Game\n")

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt(
    {
        name : "userGuessNumber",
        type : "number",
        message: "Please guess a number between 1-10: ",
    });

if(answer.userGuessNumber === randomNumber)
{
    console.log("Congratualtions! you guessed right number.")
}
else
{
    console.log("You guessed wrong number.");
}
