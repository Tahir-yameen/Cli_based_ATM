#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //Dollar
let myPin = 2037;
console.log(chalk.yellow("\n\t ==============================="));
console.log(chalk.yellow(`^~^~^~^~^~ Welcome To My Cli Based ATM ~^~^~^~^~^`));
console.log(chalk.yellow("\t ===============================\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: (chalk.blue.bgWhite("Please Enter Your 4 Digit Pin Number:-")),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold("\nThankyou For Providing"));
    console.log(chalk.green.bold("\t\tCorrect Pin Number..!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.blue.bgWhite("Please Select Any One Operation:- \n")),
            type: "list",
            choices: ["Check Balance", "Fast Cash", "Withdraw Cash"],
        },
    ]);
    ///console.log(`Selected Operation:- ${operationAns.operation}`);
    if (operationAns.operation === "Fast Cash") {
        let amountAns01 = await inquirer.prompt([
            {
                name: "amount01",
                message: (chalk.blue.bgWhite("Please Select Desired Withdrawal Amount:- \n")),
                type: "list",
                choices: [2000, 5000, 8000, 10000],
            },
        ]);
        myBalance -= amountAns01.amount01;
        console.log(chalk.magenta.bold("\nYour Remaining Amount Is:- " + myBalance));
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.magenta.bold.bgYellow("\nYour Current Balance Is:- " + myBalance));
    }
    if (operationAns.operation === "Withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: (chalk.blue.bgWhite("Please Enter Your Desired Withdrawal Amount:-")),
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red.bold("\nInsufficient Balance..."));
        }
        else if ((myBalance -= amountAns.amount)) {
            console.log(chalk.magenta.bold(`\nYour Remaining Amount Is:- ${myBalance}`));
        }
    }
}
else {
    console.log(chalk.red.bold("\nIncorrect Pin Number,"));
    console.log(chalk.red.bold("\t\tPlease Try Again...\n"));
}
