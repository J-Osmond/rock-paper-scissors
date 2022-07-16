let playerScore = 0;
let computerScore = 0;

//will randomly select rock, paper or scissors
function computerPlay() {

    let computerOptions = ['rock', 'paper','scissors'];

    let randomChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

    return randomChoice;
};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = prompt('Rock,Paper, Scissors?');

    if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
            console.log('lose');
            return computerScore++;
        } 
        
        else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
                playerSelection == 'paper' && computerSelection == 'rock' ||
                playerSelection == 'scissors' && computerSelection == 'paper') {
                    console.log('win');
                    return playerScore++;
                } 
                
                else {
                    return;
                };

};

function game() {
    for (let games = 0; games < 5; games++) {
        playRound()
        console.log(playerScore);
        console.log(computerScore);
    };

    if (playerScore > computerScore) {
        return 'You win!'
    } else if (playerScore < computerScore) {
        return 'You Lose!'
    } else {
        return 'Draw!'
    };
};