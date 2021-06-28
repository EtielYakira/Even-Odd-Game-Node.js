const randomNumberBetween = require('./randomNumber')
const prompt = require('prompt-sync')()
const chalk = require('chalk');
const ProgressBar = require('progress');
const { table } = require('console');
const PvP = require('./PvP')

const progressBar = new ProgressBar(':bar :percent', {
    total:20,
    complete:'■',
    incomplete:'▢'
})
const bossLoadingBar = new ProgressBar(':bar :percent', {
    total:20,
    complete:'■',
    incomplete:'▢'
})

function Player(name){
    this.name = name
    this.score = 0

    this.toString = () => this.name
}

function Game(players,bestOf){
    this.round = 0
    this.players = players || []
    this.bestOf = bestOf || 5
    this.randomNumberForGame = () => randomNumberBetween(13,-5)
}

    const game =new Game()
// const game ={
//     round:0,
//     players:[],
//     bestOf:5,
//     randomNumberForGame:() => randomNumberBetween(13,-5)
// }

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
                PvP(game)
                console.log(`LOADING BOSS FIGHT`)
                const bossLoading = setInterval(() =>{
                    bossLoadingBar.tick();
                    if (bossLoadingBar.complete) {
                        clearInterval(bossLoading)
                        console.log(`${game.winner} ARE YOU READY FOR THE BOSS FIGHT???`)
                        setTimeout(() =>{
                            PvP(new Game([game.winner,new Player('BOSS')]));
                        },1000)
                    }
                },50)

                },2000)
            
        }
    }, 100);




