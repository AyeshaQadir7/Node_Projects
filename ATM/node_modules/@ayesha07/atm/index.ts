#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPin = 1234;

let Answers = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin:",
            type: "number",
        }
    ]
);

if (Answers.pin === myPin) {
    console.log("Correct Pin");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option:",
                type: "list",
                choices: ["Withdraw", "Fast Cash", "Check Balance"]
            }
        ]
    );
    console.log(operationAns);

    //WITHDRAW
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount:",
                    type: "number",
                }
            ]
        );
        if (amountAns.amount > myBalance) {
            console.log("Insufficent Balance!");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`\n\t---------------------------------\n\tyour remaining balance is: ${myBalance}\n\t---------------------------------\n\t`);
        }
    };

    //CHECK BALANCE
    if (operationAns.operation === "Check Balance") {
        console.log(`\n\t-----------------------\n\tCurrent Balance: ${myBalance} \n\t-----------------------\n\t`);
    };

    //FAST CASH
    if (operationAns.operation === "Fast Cash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                message: "Select an amount:",
                type: "list",
                choices: ["500", "1000", "3000", "5000", "8000"],
            }
        ]);
        if (myBalance -= cash.options) {
            console.log(`\n\t-------------------------------\n\tyour remaining balance is: ${myBalance}\n\t-------------------------------
            \n\t`);
        }
    }
} else {
    console.log("Incorrect Pin!");
}


