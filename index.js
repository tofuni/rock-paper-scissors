// Create function for computer's play
function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

let items = ["Rock", "Paper", "Scissors"];

// Create function for single round play between player and computer
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection===computerSelection.toUpperCase()) {
        result = "Tie game!";
    } else if (playerSelection==="ROCK" && computerSelection==="Scissors") {
        playerScore++;
        result = "You win! Rock beats Scissors.";
    } else if (playerSelection==="ROCK" && computerSelection==="Paper") {
        computerScore++;
        result = "You lose! Paper beats Rock.";
    } else if (playerSelection==="PAPER" && computerSelection==="Rock") {
        playerScore++;
        result = "You win! Paper beats Rock.";
    } else if (playerSelection==="PAPER" && computerSelection==="Scissors") {
        computerScore++;
        result = "You lose! Scissors beats Paper."
    } else if (playerSelection==="SCISSORS" && computerSelection==="Paper") {
        playerScore++;
        result = "You win! Scissors beats Paper."
    } else if (playerSelection==="SCISSORS" && computerSelection==="Rock") {
        computerScore++;
        result = "You lose! Rock beats Scissors."
    }    
    return result;
}

// Create function for a 5-round game
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
        const computerSelection = getComputerChoice(items);
        console.log(`The computer chose ${computerSelection}.`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
    }
    // Determine winner, loser, or tie at end of game
    if (playerScore>computerScore) {
        return `You win this game! Your final score: ${playerScore} | Computer final score: ${computerScore}`;
    } else if (playerScore<computerScore) {
        return `You lost this game. Your final score: ${playerScore} | Computer final score: ${computerScore}`;
    } else {
        return `This game is a tie. Your final score: ${playerScore} | Computer final score: ${computerScore}`;
    }
}

console.log(game());