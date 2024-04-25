#! usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import boxen from "boxen";
import figlet from "figlet";
//Welcome
console.log(chalk.magentaBright(figlet.textSync('Word Counter')));
//Declare a constant answers and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the words:",
    },
]);
const words = answers.Sentence.trim().split(" ");
//Print the array of words to the console
console.log(chalk.cyan(words));
//Print the word count of the sentence to the console
console.log(boxen(chalk.cyan("\n" + `Your Sentence word count is: ${words.length}` + "\n"), { padding: 1, borderColor: 'magentaBright', dimBorder: true }) + "\n");
