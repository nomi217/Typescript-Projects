#! /usr/bin/env node

import inquirer from 'inquirer';


//Welcome Message
console.log("\n\tWelcome To \'CodeWithNauman\' - CLI Simple Calculator\n")
let seperator:string = "_"

// create account on npm and deploy calculator project on npm, and then install using npx command
let answer = await inquirer.prompt([{
    name: "firstNumber",
    message: "Enter First Number : ",
    type: "number"
},
{
    name: "secondNumber",
    message: "Enter Second Number : ",
    type: "number"
},
{
    type:"list",
    name:"operator",
    message:"Enter the Operator",
    choices:["Add","Subtract","Multiple","Divide"]
}])
let result:number
switch(answer.operator){
    case "Add":
        result = answer.firstNumber + answer.secondNumber
        console.log(seperator.repeat(25))
        console.log("    Answer is : " + result)
        console.log(seperator.repeat(25))
        break;

        //Subtract
        case "Subtract":
        result = answer.firstNumber - answer.secondNumber
        console.log(seperator.repeat(25))
        console.log("    Answer is : " + result)
        console.log(seperator.repeat(25))
        break;

        //Multiple
        case "Multiple":
        result = answer.firstNumber * answer.secondNumber
        console.log(seperator.repeat(25))
        console.log("    Answer is : " + result)
        console.log(seperator.repeat(25))
        break;

        //Divide
        case "Divide":
        result = answer.firstNumber / answer.secondNumber
        console.log(seperator.repeat(25))
        console.log("    Answer is : " + result)
        console.log(seperator.repeat(25))
        break;
}
