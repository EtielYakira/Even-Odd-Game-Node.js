const randomNumberBetween = require('./randomNumber')
const prompt = require('prompt-sync')()
const chalk = require('chalk');
const ProgressBar = require('progress');
const { table } = require('console');

const progressBar = new ProgressBar(':bar :percent', {
    total:20,
    complete:'■',
    incomplete:'▢'
})




const playerOneName = prompt(chalk.red('player '+ 1) +' name: ')

console.log(`hey ${playerOneName}`)

const playerTwoName = prompt(chalk.underline(chalk.green('player '+ 2) +' name: '))
console.log(`hey ${playerTwoName}`)

console.log('game loading');

function Player(name){
    this.name = name
    this.score = 0
}

const game ={
    round:0,
    playerOne:{
        name:playerOneName,
        score:0
    },
    playerTwo:{
        name:playerTwoName,
        score:0
    },
    bestOf:5,
    randomNumberForGame:() => randomNumberBetween(13,-5)
}
    const timer = setInterval(() => {
        progressBar.tick();
        if(progressBar.complete) {
            clearInterval(timer);
            
            console.log('lets Play!');
            setTimeout(() =>{
                while (game.round < game.bestOf) {
                    let pointsToWin = Math.ceil(game.bestOf/2)
                    const currentRandomNumber = game.randomNumberForGame() 
                    game.round++
                    console.log(`round ${game.round}`);
                    console.log(`the number is: ${currentRandomNumber}`);
                    currentRandomNumber % 2 === 0 ? 
                    game.playerOne.score++
                    : game.playerTwo.score++
                    game.playerOne.score > game.playerTwo.score ? 
                    console.log(`${game.playerOne.name} WON !! 🎊🎊`):
                    console.log(`${game.playerTwo.name} WON !! 🎊🎊`)

                    console.log(game.playerOne.name ,'have', game.playerOne.score);
                    console.log(game.playerTwo.name ,'have', game.playerTwo.score);
                    if(game.playerOne.score === pointsToWin){
                        game.winner = game.playerOne.name
                        break
                    }else if(game.playerTwo.score === pointsToWin){
                        game.winner = game.playerTwo.name
                        break
                    }
                }

                console.log(`WINNER IS ${game.winner} 🏆🏆🏆`);
            },1000)

        }
    }, 100);




    // console.table([{name:'eli',score:1},{name:'bibi',score:1},{name:'ww',score:2}].sort((player1,player2) => player2.score - player1.score))