//will randomly select rock, paper or scissors
function computerPlay() {

    let computerOptions = ['rock', 'paper','scissors'];

    let randomChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

    return randomChoice;
};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = 'rock';

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win!';
    } else {
        return 'Draw!'
    }
};

