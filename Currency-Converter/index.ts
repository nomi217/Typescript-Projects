#! /usr/bin/env node

import inquirer from "inquirer";

//Welcome Message
console.log("\n\tWelcome To \'CodeWithNauman\' - Currency Converter\n");


const currency:any = {
    "USD US Dollar":1, //Base Currency
    "EUR Euro":0.92,
    "GBP Pound Sterling":0.79,
    "INR Indian Rupee":83.29,
    "PAK Pakistan Rupee":277.70,
    "AED Emirati Dirham":3.67,
    "JPY Japanese Yen":151.61,
    "CNY Chinese Yuan":7.23
}

let user_answer = await inquirer.prompt
(
    [
        {
            name:"from",
            message:"Enter from Currency",
            type:"list",
            choices:["USD US Dollar","EUR Euro","GBP Pound Sterling","INR Indian Rupee","PAK Pakistan Rupee","AED Emirati Dirham","JPY Japanese Yen","CNY Chinese Yuan"]
            //choices:["USD","EUR","GBP","INR","PAK","AED","JPY","CNY"]

        },
        {
            name:"to",
            message:"Enter to Currency",
            type:"list",
            choices:["USD US Dollar","EUR Euro","GBP Pound Sterling","INR Indian Rupee","PAK Pakistan Rupee","AED Emirati Dirham","JPY Japanese Yen","CNY Chinese Yuan"]
            //choices:["USD","EUR","GBP","INR","PAK","AED","JPY","CNY"]

        },
        {
            name:"amount",
            message:"Enter your Amount: ",
            type:"number"
        }
    ]
)
let fromAmount = currency[user_answer.from] //exchange rate
let toAmount = currency[user_answer.to] //exchange rate 
let amount = user_answer.amount
let baseAmount = amount / fromAmount //USD Base amount
let convertedAmount = (baseAmount * toAmount).toFixed(2)

console.log(convertedAmount)

//console.log(fromAmount)
//console.log(toAmount)
//console.log(amount)