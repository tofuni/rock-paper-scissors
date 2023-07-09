// Set computer and player score trackers
let computerScore = 0;
let playerScore = 0;

// Target results and scores nodes 
const roundResult = document.querySelector('#round-result');
const playScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const gameResult = document.querySelector('#game-result');

// Target button nodes
const btnContainer = document.querySelector('.button-container');
const btn = document.querySelectorAll('button');


// Declare a function that represents the computer's play
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

// Initialize one round of RPS game against computer
function playRound() {
    // Get computer play
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    // If the player plays the same thing as the computer, is a tie
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
        // Remaining round result scenarios
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return "You Win! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return "You Win! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return "You Lose! Paper beats Rock.";
    }
}

// Play round of RPS with correct selection on button click
btn.forEach(elem => {
    elem.addEventListener('click', game);
})

// Play RPS game, first to 5 points
function game(e) {
    playerSelection = e.target.textContent;
    roundResult.textContent = `${playRound()}`;
    playScore.textContent = `Player: ${playerScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
    if (playerScore >= 5) {
        gameResult.textContent = `You won the game! Reload the page to play again.`;
        disableButton();
    } else if (computerScore >= 5) {
        gameResult.textContent = `You lost the game. Reload the page to play again.`;
        disableButton();
    }
}

// Disable buttons to prevent further play after game is over
function disableButton() {
    btn.forEach(elem => {
        elem.disabled = true;
    })
}