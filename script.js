//will randomly select rock, paper or scissors
function computerPlay() {

    let computerOptions = ['rock', 'paper','scissors'];

    let randomChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

    return randomChoice;
};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = prompt('Rock,Paper, Scissors?');

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win!';
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Draw!';
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win!';
    } else if ((playerSelection == 'paper' && computerSelection == 'paper')){
        return 'Draw!'
    }

    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win!';
    } else {
        return 'Draw!'
    };
};

