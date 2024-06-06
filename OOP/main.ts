#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import cfonts from "cfonts";

cfonts.say("CLI Chat", {
  font: "pallet", // define the font face
  align: "left", // define text alignment
  colors: ["blueBright", "gray"], // define all colors
  background: "transparent", // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: "0", // define how many character can be on one line
  gradient: false, // define your two gradient colors
  independentGradient: false, // define if you want to recalculate the gradient for each new line
  transitionGradient: false, // define if this is a transition between colors directly
  env: "node", // define the environment cfonts is being executed in
});

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programStart = async (persons: Person) => {
  do {
    const ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.blueBright("who would you like to talk with ?"),
      choices: ["Yourself", "Student", "Exit"],
    });

    if (ans.select == "Exit") {
      console.log(chalk.redBright(" Exiting"));
      process.exit();
    }

    if (ans.select == "Yourself") {
      console.log(chalk.greenBright(" Hello, You're talking to Yourself!"));
      console.log(chalk.greenBright(" How are you?"));
    }

    if (ans.select == "Student") {
      const ans = await inquirer.prompt({
        name: "student",
        type: "input",
        message: chalk.blueBright("Which student do you want to talk to?"),
      });

      const student = persons.students.find((val) => val.name == ans.student);

      if (!student) {
        const name = new Student(ans.student);
        persons.addStudent(name);
        console.log(
          chalk.greenBright(
            `\n Hello i am ${name.name}, it's Nice to talk to you!\n`
          )
        );
        // console.log(persons.students);
      }

      if (student) {
        console.log(
          chalk.greenBright(`\n Hello i am ${student.name}, How are you ?\n`)
        );
        // console.log(persons.students);
      }
    }
  } while (true);
};
programStart(persons);
