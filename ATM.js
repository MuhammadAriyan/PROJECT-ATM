#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhite(` `), chalk.bold.italic(`    ATM    `), chalk.bgWhite(` `));
let user = await inquirer.prompt([{
        type: "number",
        name: "userId",
        message: chalk.gray("ENTER YOUR ID SIR :"),
        validate(ans) {
            if (!ans) {
                return chalk.red(`USER DOESN'T EXIST!`);
            }
            return true;
        },
    },
    {
        type: "number",
        name: "pass",
        message: chalk.grey("ENTER YOUR PASSWORD :"),
        validate(ans) {
            if (!ans) {
                return chalk.red(`INVALID PASSWORD`);
            }
            return true;
        }
    }]);
let lr = await inquirer.prompt({
    type: "list",
    name: "option",
    message: chalk.green("WHAT YOU WANNA DO : "),
    choices: ["WITH·DRAW", "CHECK BANK BALANCE", "ADD CASH"]
});
if (user.pass && user.pass) {
    let bankbalance = Math.floor(Math.random() * 10000);
    if (lr.option === "CHECK BANK BALANCE") {
        console.log(chalk.yellow(`YOUR CURRENT BANK BALANCE IS RS.${bankbalance}`));
    }
    if (lr.option === "ADD CASH") {
        let added = await inquirer.prompt({
            type: "number",
            name: "ad",
            message: chalk.gray("HOW MUCH YOU AMOUNT YOU WANT TO ADD :")
        });
        console.log(chalk.green(`AMOUNT ADDED..`));
        bankbalance = bankbalance + added.ad;
        console.log(chalk.green(`TOTAL AMOUNT : ${bankbalance}`));
    }
    if (lr.option === "WITH·DRAW") {
        let r = await inquirer.prompt({
            type: "number",
            name: "withdrawAmount",
            message: chalk.grey("ENTER AMOUNT YOU WANT TO WITH-DRAW : ")
        });
        if (bankbalance < r.withdrawAmount) {
            console.log(chalk.red(`INSUFFICIENT BALANCE..YOU ONLY HAVE RS.${bankbalance}`));
        }
        else {
            bankbalance = bankbalance - r.withdrawAmount;
            console.log(chalk.yellow(`YOUR REMAINING AMOUNT IS RS.${bankbalance}`));
        }
    }
    let again = await inquirer.prompt({
        type: "list",
        name: "cnfrm",
        message: chalk.blue("DO YOU WANT TO CONTINUE?"),
        choices: ["YEAH", "NO"]
    });
    if (again.cnfrm === "YEAH") {
        while (again.cnfrm === "YEAH") {
            let an = await inquirer.prompt({
                type: "list",
                name: "optio",
                message: chalk.green("WHAT YOU WANNA DO :"),
                choices: ["WITH·DRAW", "CHECK BANK BALANCE", "ADD CASH"]
            });
            if (an.optio === "CHECK BANK BALANCE") {
                console.log(chalk.yellow(`YOUR CURRENT BANK BALANCE IS RS.${bankbalance}`));
            }
            if (an.optio === "ADD CASH") {
                let Added = await inquirer.prompt({
                    type: "number",
                    name: "adA",
                    message: chalk.gray("HOW MUCH YOU AMOUNT YOU WANT TO ADD :")
                });
                console.log(chalk.green(`AMOUNT ADDED..`));
                bankbalance = bankbalance + Added.adA;
                console.log(chalk.green(`TOTAL AMOUNT : ${bankbalance}`));
            }
            if (an.optio === "WITH·DRAW") {
                let r = await inquirer.prompt({
                    type: "number",
                    name: "withdrawAmount",
                    message: chalk.gray("ENTER AMOUNT YOU WANT TO WITH-DRAW :")
                });
                if (bankbalance < r.withdrawAmount) {
                    console.log(chalk.red(`INSUFFICIENT BALANCE..YOU ONLY HAVE RS.${bankbalance}`));
                }
                else {
                    bankbalance = bankbalance - r.withdrawAmount;
                    console.log(chalk.yellow(`YOUR REMAINING AMOUNT IS RS.${bankbalance}`));
                }
            }
            again = await inquirer.prompt({
                type: "list",
                name: "cnfrm",
                message: chalk.blue("DO YOU WANT TO CONTINUE?"),
                choices: ["YEAH", "NO"]
            });
        }
    }
}
else {
    console.log(chalk.red(`INVALID ACOUNT`));
}
