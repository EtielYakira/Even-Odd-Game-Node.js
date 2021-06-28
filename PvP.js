const randomNumberBetween = require('./randomNumber')

module.exports = function PvP(game) {
    let pointsToWin = Math.ceil(game.bestOf/2)
    while (true) {
        const currentRandomNumber = game.randomNumberForGame() 
        let playerOneNumber = game.players.length === 1 ? 0 : randomNumberBetween(game.players.length-1)
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
            game.winner = playerOne
    
            break
        }else if(playerTwo.score === pointsToWin){
            game.winner = playerTwo
            break
        }
    }
    let scoreTable = game.players.sort((player1,player2) => player2.score - player1.score).reduce((acc,player,index) => {acc[index+1]=player; return acc},{})
    console.table(scoreTable)
    console.log(`WINNER IS ${game.winner} 🏆🏆🏆`);
        
}