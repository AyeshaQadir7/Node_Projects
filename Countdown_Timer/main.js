#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
import cfonts from "cfonts";
import inquirer from "inquirer";
//Into
cfonts.say('CountDown Timer', {
    font: 'grid', // define the font face
    align: 'left', // define text alignment
    colors: ['yellow', '#333'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
});
//Asking User's Input with Validation
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter the amount of Seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
// Storing the User Input
let input = res.userInput;
//Countdown Timer Function
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.redBright('\n Time is Up!'));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.green(` ${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }, 1000);
}
;
//Starting the Timer
startTime(input);
