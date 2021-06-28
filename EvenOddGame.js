const prompt = require('prompt-sync')()
const chalk = require('chalk');

console.log(chalk.rgb(100,200,100)('Ahalan'));

console.log();

const playerOneName = prompt('player '+ chalk.red(1) +' name: ')
const playerTwoName = prompt(chalk.underline('player '+ chalk.green(2) +' name: '))


console.log(chalk.bgGreen(`hey ${playerOneName}`))
console.log(`hey ${playerTwoName}`)