#! /usr/bin/env node

import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from 'chalk';
import cfonts from 'cfonts'

//Intro
cfonts.say('My Bank', {
	font: 'pallet',              // define the font face
	align: 'left',              // define text alignment
	colors: ['greenBright', 'gray'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});

//Coustomer Class
class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobileNumber: number;
  accNumber: number;

  constructor(
    fName: string,
    lName: string,
    age: number,
    gender: string,
    mob: number,
    acc: number
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.gender = gender;
    this.mobileNumber = mob;
    this.accNumber = acc;
  }
}

//Interface of Bank Account
interface BankAccount {
  accNumber: number;
  balance: number;
}

//Bank Class
class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }

  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let newAccounts = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...newAccounts, accObj];
  }
}

let myBank = new Bank();

//Create fake Customers using Faker
for (let i: number = 1; i <= 3; i++) {
  let fName = faker.person.firstName("male");
  let lName = faker.person.lastName();
  let num = parseInt(faker.phone.number());
  const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
  myBank.addCustomer(cus);
  myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 1000 * i });
};

//Bank Functionality
async function bankService(bank: Bank) {
  do {
    let service = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Select the Service",
      choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
    });

    //View Balance
    if (service.select == "View Balance") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter your Account number:",
      });
      let account = myBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.redBright.bold("\n Invalid Account Number\n "));
      }
      if (account) {
        let name = myBank.customer.find(
          (item) => item.accNumber == account.accNumber
        );
        console.log(
          `\n Dear ${chalk.greenBright(name?.firstName)} ${chalk.greenBright(name?.lastName)}, Your Account Balance is $${chalk.cyan(account.balance)}\n`
        );
      }
    }

    //Cash Withdraw
    if (service.select == "Cash Withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter your Account number:",
      });

      let account = myBank.account.find((acc) => acc.accNumber == res.num);

      if (!account) {
        console.log(chalk.redBright("\n Invalid Account Number\n "));
      }

      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          message: "Enter your Amount:",
          name: "rupee",
        });

        if (ans.rupee > account.balance) {
          console.log(chalk.redBright.bold("\n Your Balance is Insufficent\n"));
        }
        let newBalance = account.balance - ans.rupee;
        //Transaction Method
        bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        if (ans.rupee <= account?.balance) {
          console.log(chalk.greenBright(`\n Your Current Balance is $${chalk.cyan(newBalance)}\n`));
        }
      }
    }

    //Cash Deposit
    if (service.select == "Cash Deposit") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter your Account number:",
      });
      let account = myBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.redBright("\n Invalid Account Number\n "));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          message: "Enter your Amount:",
          name: "rupee",
        });

        let newBalance = account.balance + ans.rupee;
        //Transaction Method
        bank.transaction({ accNumber: account.accNumber, balance: newBalance });

        console.log(chalk.greenBright(`\n Your Current Balance is $${chalk.cyan(newBalance)}\n`));
      }
    }

    //Exit
    if (service.select == "Exit") {
      return;
    }
  } while (true);
}

bankService(myBank);
