#! usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let loop = true;

while (loop) {
    let addTask = await inquirer.prompt(
        [
            {
                name: 'todo',
                type: 'input',
                message: "What you want to add in your ToDos?"
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: "Do you want to add more",
                default: false,
            }
        ]
    );
    todos.push(addTask.todo);

    loop = addTask.addMore

    console.log(todos);
}
if (todos.length > 0) {
    console.log("Your ToDo List: \n")
    todos.forEach(todo => {
        console.log(todo)
    })
} else {
    console.log("no todos found")
}