#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

while (true) {
  console.log(chalk.bold.magentaBright(" \n \t \t Welcome to Currency Converter"));

  console.log(chalk.bold.blueBright(" \n \t ===================================================="));

  const currencies: any = {
    USD: 1, // Base Currency
    EUR: 0.93,
    CAD: 1.37,
    GBP: 0.8,
    AUD: 1.53,
    INR: 83.35,
    JPY: 155.65,
    PKR: 278,
    AED: 3.67,
    SAR: 3.75,
    KWD: 0.31,
  };

  let userInput = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      choices: [
        "USD",
        "EUR",
        "CAD",
        "GBP",
        "AUD",
        "INR",
        "JPY",
        "PKR",
        "AED",
        "SAR",
        "KWD",
      ],
      message: " \t Select a currency to convert from: ",
    },
    {
      name: "to",
      type: "list",
      choices: [
        "USD",
        "EUR",
        "CAD",
        "GBP",
        "AUD",
        "INR",
        "JPY",
        "PKR",
        "AED",
        "SAR",
        "KWD",
      ],
      message: " \t Select a currency to convert to: ",
    },
    {
      name: "amount",
      type: "number",
      message: " \t Enter the amount to convert: ",
      validate: function (value) {
        if (isNaN(value) || value < 0) {
          return "Please enter a valid amount.";
        }
        return true;
      },
    },
  ]);

  let fromAmount = currencies[userInput.from];
  let toAmount = currencies[userInput.to];
  let amount = userInput.amount;
  let baseAmount = amount / fromAmount;
  let convertedAmount = baseAmount * toAmount;
  console.log(
    chalk.bold.greenBright(
      ` \t ${amount} ${userInput.from}  is equal to  ${convertedAmount.toFixed(
        2
      )} ${userInput.to} `
    )
  );
  console.log(chalk.bold.blueBright(" \n \t ===================================================="));
};

