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

// If the player inputs something else, then print 'Error! Please input rock, paper, or scissors.'
// Else initialize RPS game

// Initialize one round of RPS game against computer
function playRound() {
    // Get computer play
    const computerSelection = getComputerChoice();
    // Ask the player to input 'rock', 'paper', or 'scissors'
    const playerSelection = prompt("Input 'rock', 'paper', or 'scissors'");
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

// Set computer and player score trackers
let computerScore = 0;
let playerScore = 0;

// Manual test to see if single round play and score counter can work multiple rounds
console.log(playRound());
console.log(computerScore);
console.log(playerScore);
console.log(playRound());
console.log(computerScore);
console.log(playerScore);
console.log(playRound());
console.log(computerScore);
console.log(playerScore);

// Initialize game of RPS game that is five rounds
// After a round of RPS is over
// If the player wins, then they earn one point
// If the player loses, then the computer earns one point
// After five rounds are over, declare winner of game