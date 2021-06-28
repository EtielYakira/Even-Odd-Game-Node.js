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

function Player(name){
    this.name = name
    this.score = 0

    this.toString = () => this.name
}

const game ={
    round:0,
    players:[],
    bestOf:5,
    randomNumberForGame:() => randomNumberBetween(13,-5)
}

let numberOfPlayers = prompt('Hey! how many Players are playing? (2-7)')
while(!(numberOfPlayers >= 2 && numberOfPlayers <= 7)){
    numberOfPlayers = prompt('Hey! how many Players are playing? (2-7)')
}

for (let player = 1; player <= numberOfPlayers; player++) {
    const playerName = prompt(chalk.red('player '+ player) +' name: ')
    let currPlayer = new Player(playerName)
    console.log(`hey ${playerName}`) 
    game.players.push(currPlayer)

}
console.log('game loading');

    const timer = setInterval(() => {
        progressBar.tick();
        if(progressBar.complete) {
            clearInterval(timer);
            
            console.log('lets Play!');
            setTimeout(() =>{
                let pointsToWin = Math.ceil(game.bestOf/2)
                while (true) {
                    const currentRandomNumber = game.randomNumberForGame() 
                    let playerOneNumber = randomNumberBetween(game.players.length-1)
                    let playerOne = game.players[playerOneNumber]
                    let playerTwo = game.players[randomNumberBetween(game.players.length-1,0,playerOneNumber)]
                    game.round++
                    console.log(`round ${game.round}`);
                    console.log(`between ${playerOne} and ${playerTwo}`);
                    console.log(`the number is: ${currentRandomNumber}`);
                    currentRandomNumber % 2 === 0 ? 
                    playerOne.score++
                    : playerTwo.score++
                    playerOne.score > playerTwo.score ? 
                    console.log(`${playerOne.name} WON !! 🎊🎊`):
                    console.log(`${playerTwo.name} WON !! 🎊🎊`)

                    console.log(playerOne.name ,'have', playerOne.score);
                    console.log(playerTwo.name ,'have', playerTwo.score);
                    if(playerOne.score === pointsToWin){
                        game.winner = playerOne.name

                        break
                    }else if(playerTwo.score === pointsToWin){
                        game.winner = playerTwo.name
                        break
                    }
                }
                let scoreTable = game.players.sort((player1,player2) => player2.score - player1.score).reduce((acc,player,index) => {acc[index+1]=player; return acc},{})
                console.table(scoreTable)
                console.log(`WINNER IS ${game.winner} 🏆🏆🏆`);
            },1000)

        }
    }, 100);




