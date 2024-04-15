import inquirer from "inquirer";
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
clear();
console.log(chalk.hex('#FF7F11')(figlet.textSync('Welcome', { horizontalLayout: 'full' })));
console.log(chalk.hex('#FFFDD0').bold("\n\t\t to Currency Converter\n"));
const currency = {
    USD: 1, //Base currency
    EUR: 0.91, //European Euro
    GBP: 0.76, //British Pound
    INR: 74.57, // Indian Rupee
    PKR: 280, //Pakistani Rupee
    JYP: 151, // Japanes Yen
    CAD: 1.3, //Canadian Dollar
    KRW: 1351, //Korean Won
};
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency:",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JYP', 'CAD', 'KRW']
    },
    {
        name: 'to',
        message: "Enter to Currency:",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JYP', 'CAD', 'KRW']
    },
    {
        name: 'amount',
        message: 'Enter your amount:',
        type: 'number',
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
//Formula of conversion
let baseAmount = amount / fromAmount; //USD based currency
let convertedAmount = baseAmount * toAmount;
console.log(chalk.hex('#FF7F11').bold(`\n | Your Converted Amount is: ${convertedAmount} | \n`));
console.log(chalk.hex('#FF7F11').bold(" \n Thankyou! \n "));
