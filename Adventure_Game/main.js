#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import cfonts from "cfonts";
//Intro
cfonts.say('Adventure|Game', {
    font: 'block',
    align: 'left',
    colors: ['yellow', "#f80"],
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
//Setting up types
class Player {
    name;
    HP = 100;
    constructor(name) {
        this.name = name;
    }
    hpDecrease() {
        let HP = this.HP - 25;
        this.HP = HP;
    }
    hpIncrease() {
        this.HP = 100;
    }
}
;
class Opponent {
    name;
    HP = 100;
    constructor(name) {
        this.name = name;
    }
    hpDecrease() {
        let HP = this.HP - 25;
        this.HP = HP;
    }
}
;
//Asking Name and Choosing Opponent
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please enter your name:"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    choices: ["Skeleton", "Assassin", "Zombie"],
    message: "Select your Opponent"
});
//Declaring answers in variables
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
//Looping the Game
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            choices: ["Attack", "Dirnk Posion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.hpDecrease();
                console.log(chalk.bold.red(` ${p1.name} HP is: ${p1.HP}`));
                console.log(chalk.bold.green(` ${o1.name} HP is: ${o1.HP}`));
                if (p1.HP <= 0) {
                    console.log(chalk.red.bold.italic(" \nYou Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                {
                    o1.hpDecrease();
                    console.log(chalk.bold.green(` ${p1.name} HP is: ${p1.HP}`));
                    console.log(chalk.bold.red(` ${o1.name} HP is: ${o1.HP}`));
                    if (o1.HP <= 0) {
                        console.log(chalk.green.bold.italic("\n***You Win!***"));
                        process.exit();
                    }
                }
            }
        }
        if (ask.option == "Dirnk Posion") {
            p1.hpIncrease();
            console.log(chalk.bold.italic.green(`\n You Drink Posion Your HP is: ${p1.HP}\n`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("\n You Loose, Better Luck Next Time!\n"));
            process.exit();
        }
    }
    ;
    //Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            choices: ["Attack", "Dirnk Posion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.hpDecrease();
                console.log(chalk.bold.red(` ${p1.name} HP is: ${p1.HP}`));
                console.log(chalk.bold.green(` ${o1.name} HP is: ${o1.HP}`));
                if (p1.HP <= 0) {
                    console.log(chalk.red.bold.italic(" \nYou Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                {
                    o1.hpDecrease();
                    console.log(chalk.bold.green(` ${p1.name} HP is: ${p1.HP}`));
                    console.log(chalk.bold.red(` ${o1.name} HP is: ${o1.HP}`));
                    if (o1.HP <= 0) {
                        console.log(chalk.green.bold.italic("\n***You Win!***"));
                        process.exit();
                    }
                }
            }
        }
        if (ask.option == "Dirnk Posion") {
            p1.hpIncrease();
            console.log(chalk.bold.italic.green(`\n You Drink Posion Your HP is: ${p1.HP}\n`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("\n You Loose, Better Luck Next Time!\n"));
            process.exit();
        }
    }
    ;
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            choices: ["Attack", "Dirnk Posion", "Run For Your Life.."],
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.hpDecrease();
                console.log(chalk.bold.red(` ${p1.name} HP is: ${p1.HP}`));
                console.log(chalk.bold.green(` ${o1.name} HP is: ${o1.HP}`));
                if (p1.HP <= 0) {
                    console.log(chalk.red.bold.italic(" \nYou Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                {
                    o1.hpDecrease();
                    console.log(chalk.bold.green(` ${p1.name} HP is: ${p1.HP}`));
                    console.log(chalk.bold.red(` ${o1.name} HP is: ${o1.HP}`));
                    if (o1.HP <= 0) {
                        console.log(chalk.green.bold.italic("\n***You Win!***"));
                        process.exit();
                    }
                }
            }
        }
        if (ask.option == "Dirnk Posion") {
            p1.hpIncrease();
            console.log(chalk.bold.italic.green(`\n You Drink Posion Your HP is: ${p1.HP}\n`));
        }
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("\n You Loose, Better Luck Next Time!\n"));
            process.exit();
        }
    }
} while (true);
