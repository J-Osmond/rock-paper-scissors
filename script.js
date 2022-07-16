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
    playerSelection = prompt('Rock,Paper, Scissors?').toLowerCase;

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('lose')
        return 'You Lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('win')
        return 'You Win!';
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log('draw');
        return 'Draw!';
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('lose')
        return 'You Lose!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('win')
        return 'You Win!';
    } else if ((playerSelection == 'paper' && computerSelection == 'paper')){
        console.log('draw');
        return 'Draw!'
    }

    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('lose')
        return 'You Lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('win')
        return 'You Win!';
    } else {
        console.log('draw');
        return 'Draw!'
        
    };
};

function game() {
    for (let games = 0; games < 5; games++) {
        playRound()
        
    }
};