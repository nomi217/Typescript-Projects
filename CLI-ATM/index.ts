#! /usr/bin/env node

import inquirer from "inquirer";

//Welcome Message
console.log("\n\tWelcome To \'CodeWithNauman\' - CLI ATM\n");

let myBalance = 20000; //Dollar
let myPin = 9876;
let myAccount = "Saving"

let pinAnswer = await inquirer.prompt({
    name : "mypin",
    type : "number",
    message : "Enter your ATM pin"
});

if(pinAnswer.mypin === myPin)
    {
        //console.log("Correct Pin")
        let operationAns = await inquirer.prompt
        ({
            name : "operation",
            type : "list",
            message : "Plese select desire option",
            choices : ["withdraw","balance inquiry","fast cash"]
        });
    if(operationAns.operation === "withdraw")
        {
            let accountType = await inquirer.prompt
            ([{
                name : "accountType",
                type : "list",
                message : "Select the Type of Account",
                choices : ["Saving", "Current", "Default"]
            }]);
            if(accountType.accountType === myAccount)
                {
                    console.log(" -- Saving Account -- ")
                    let amountAns = await inquirer.prompt([
                        {
                          name: "amount",
                          message: "Enter your amount",
                          type: "number",
                        },
                      ]);
                    
                    if(amountAns > myBalance)
                    {
                        console.log("Insufficient balance");
                    }
                    else 
                    {
                        myBalance -= amountAns.amount;
                        console.log('Your remaining balance is ' + myBalance);
                    }
                }
            else if (accountType.accountType === "Default")
                {
                    console.log(" -- Default Option Selected -- ")
                    let amountsAns = await inquirer.prompt
                    ([{
                          name: "amount",
                          message: "Enter your amount",
                          type: "number",
                    }]);
                    if(amountsAns > myBalance)
                    {
                        console.log("Insufficient balance");
                    }
                    else 
                    {
                        myBalance -= amountsAns.amount;
                        console.log('Your remaining balance is ' + myBalance);
                    }                }
            else
            {
                console.log("Wrong Account Type Selected. Please try again!");
            }
        }
    else if(operationAns.operation === "fast cash")
        {
            let fastCash = await inquirer.prompt
            ([{
                name: "fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 20000],
            }]);
            myBalance -= fastCash.fastcash;
            console.log('You have successfully withdrawal ${fast.fastcash} \nYour remaining balance is ' + myBalance);
        }
    else if(operationAns.operation === "balance inquiry")
        {
            console.log('Your remaining balance is ' + myBalance);
        }
    }
    else
    {
        console.log("Incorrect pin code");
    }


