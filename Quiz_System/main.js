#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import cfonts from "cfonts";
//Intro
cfonts.say('Quiz', {
    font: 'simple',
    align: 'left',
    colors: ['#0ff', 'blue', '#ff0'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node'
});
//Application Programming Interface
const apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fecthQuiz = await fetch(data);
    let res = await fecthQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    //Asking User's Name
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is Your Name?"
    });
    console.log(chalk.bgGreen("Let's Start The Quiz\n"));
    for (let i = 1; i <= 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.greenBright("Correct"));
        }
        else {
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    //Priniting the score
    console.log('\n ------------------------------------');
    console.log(` Dear ${chalk.blue.bold(name.fname)}, Your Score is ${chalk.blue.bold(score)} out of ${chalk.blue.bold('5')}`);
    console.log(' ------------------------------------');
};
startQuiz();
