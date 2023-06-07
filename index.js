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
const computerSelection = getComputerChoice();

// Ask the player to input 'rock', 'paper', or 'scissors'
let playerInput = prompt("Input 'rock', 'paper', or 'scissors'");
let playerSelection = playerInput.toLowerCase();

// If the player inputs something else, then print 'Error! Please input rock, paper, or scissors.'
// Else initialize RPS game

// When a player inputs 'rock', 'paper', or 'scissors'
// Initialize one round of RPS game against computer
function playRound(playerSelection, computerSelection) {
    // If the player plays the same thing as the computer, then print 'It's a tie!'
    if (playerSelection === computerSelection) {
        return "It's a tie!";
        // If the player plays 'rock' and the computer plays 'scissors', then print 'You Win! Rock beats Scissors.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors.";
        // If the player plays 'scissors' and the computer plays 'paper', then print 'You Win! Scissors beats Paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper.";
        // If the player plays 'paper' and the computer plays 'rock', then print 'You Win! Paper beats Rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock.";
        // Else the computer wins, print 'You Lose! Rock beats Scissors / Scissors beats Paper / Paper beats Rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock.";
    }
}

// Initialize game of RPS game that is five rounds
// After a round of RPS is over
// If the player wins, then they earn one point
// If the player loses, then the computer earns one point
// After five rounds are over, declare winner of game