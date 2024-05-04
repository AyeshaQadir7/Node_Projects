#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
//Intro
console.log('  -------------------------');
console.log(chalk.hex('#F75526').bold("  STUDENT MANGEMENT SYSTEM"));
console.log('  -------------------------\n');
//Generating 5 digit unique studentID
const randomNumber = Math.floor(10000 + Math.random() * 6000);
console.log(chalk.hex('#018391').italic(`Your Student ID is: ${randomNumber}`));
//Generating Random Numbers for Balance
let myBalance = Math.floor(10000 + Math.random() * 1000);
//Enrolling Students in the given Courses
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a valid name";
        },
    },
    {
        name: "courses",
        message: "Select the Course:",
        type: "list",
        choices: [
            "Web Development",
            "App Development",
            "Graphic Designing",
            "3D Animation",
            "Digital Marketing",
        ],
    },
]);
//Setting up Fees According to the Course
const courseFee = {
    "Web Development": 3000,
    "App Development": 3000,
    "Graphic Designing": 1500,
    "3D Animation": 2000,
    "Digital Marketing": 1500,
};
console.log(`  Course Fee: ${courseFee[answer.courses]}`);
//View Balance
console.log(chalk.hex('#018391').bold(`  Your Balance is: ${myBalance}`));
//Selecting Payment Method & Paying Course Fee:
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select a Payment Method:",
        choices: ["Bank Transfer", "Jazz Cash", "Easy Paisa"],
    },
    {
        name: "amount",
        type: "number",
        message: "Transfer Course Fee:",
    },
]);
if (paymentMethod.amount == courseFee[answer.courses]) {
    console.log('  \n  --------------------------------------------------------------------');
    console.log(chalk.hex('#F75526').bold(`  Congratulations you have successfully enrolled in ${answer.courses}`));
    console.log('  --------------------------------------------------------------------');
}
else {
    console.log(chalk.red("Enter Correct Amount"));
}
//View Status
let answer1 = await inquirer.prompt([
    {
        name: "options",
        message: "What you want to do next",
        type: "list",
        choices: ["View Status", "Exit"],
    },
]);
if (answer1.options === "View Status") {
    console.log('\n  -------------------------');
    console.log(chalk.hex('#F75526').bold("\t  Status"));
    console.log('  -------------------------');
    console.log(chalk.hex('#018391').bold(`  Student ID: ${randomNumber}`));
    console.log(chalk.hex('#018391').bold(`  Student Name: ${answer.student}`));
    console.log(chalk.hex('#018391').bold(`  Course: ${answer.courses}`));
    console.log(chalk.hex('#018391').bold(`  Course Fee Paid: ${paymentMethod.amount}`));
    console.log(chalk.hex('#018391').bold(`  Your Remaining Balance: ${(myBalance -= paymentMethod.amount)}`));
    console.log('  -------------------------');
}
else {
    console.log(chalk.hex('#F75526').bold("Exiting"));
}
