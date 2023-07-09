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

// Set computer and player score trackers
let computerScore = 0;
let playerScore = 0;

// Initialize one round of RPS game against computer
function playRound() {
    // Get computer play
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    // If the player plays the same thing as the computer
    if (playerSelection.toLowerCase() === computerSelection) {
        // then print 'It's a tie!'
        return "It's a tie!";
        // If the player plays 'rock' and the computer plays 'scissors'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        // player earns a point
        ++playerScore;
        // and print 'You Win! Rock beats Scissors.'
        return "You Win! Rock beats Scissors.";
        // If the player plays 'scissors' and the computer plays 'paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        // player earns a point
        ++playerScore;
        // and print 'You Win! Scissors beats Paper.'
        return "You Win! Scissors beats Paper.";
        // If the player plays 'paper' and the computer plays 'rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        // player earns a point
        ++playerScore;
        // and print 'You Win! Paper beats Rock.'
        return "You Win! Paper beats Rock.";
        // If the computer plays 'rock' and the player plays 'scissors'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        // computer earns a point
        ++computerScore;
        // and print 'You Lose! Rock beats Scissors.'
        return "You Lose! Rock beats Scissors.";
        // If the computer plays 'rock' and the player plays 'scissors'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        // computer earns a point
        ++computerScore;
        // and print 'You Lose! Scissors beats Paper.'
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        // computer earns a point
        ++computerScore;
        // and print 'You Lose! Paper beats Rock.'
        return "You Lose! Paper beats Rock.";
    }
}

// Target results, scores, and buttons
const roundResult = document.querySelector('#round-result');
const playScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const gameResult = document.querySelector('#game-result');
const btnContainer = document.querySelector('.button-container');
const btn = document.querySelectorAll('button');

function disableButton() {
    btn.forEach(elem => {
        elem.disabled = true;
    })
}

// Play round of RPS with correct selection on button click
btnContainer.addEventListener('click', game);

function game(e) {
    playerSelection = e.target.textContent;
    roundResult.textContent = `${playRound()}`;
    playScore.textContent = `Player Score: ${playerScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    if (playerScore >= 5) {
        gameResult.textContent = `You won the game! Reload the page to play again.`;
        disableButton();
    } else if (computerScore >= 5) {
        gameResult.textContent = `You lost the game. Reload the page to play again.`;
        disableButton();
    }
}