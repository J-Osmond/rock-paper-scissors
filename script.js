const playerSelection = 'rock';
let computerSelection = computerPlay();

//will randomly select rock, paper or scissors
function computerPlay() {
    
    let computerOptions = ['rock', 'paper', 'scissors'];

    let randomChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

    return randomChoice;
};

