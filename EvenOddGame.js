const prompt = require('prompt-sync')()
const chalk = require('chalk');


const playerOneName = prompt('player '+ chalk.red(1) +' name: ')
const playerTwoName = prompt(chalk.underline('player '+ chalk.green(2) +' name: '))


console.log(`hey ${playerOneName}`)
console.log(`hey ${playerTwoName}`)