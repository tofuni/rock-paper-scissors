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
        result = "You win! Rock beats Scissors.";
    } else if (playerSelection==="ROCK" && computerSelection==="Paper") {
        result = "You lose! Paper beats Rock.";
    } else if (playerSelection==="PAPER" && computerSelection==="Rock") {
        result = "You win! Paper beats Rock.";
    } else if (playerSelection==="PAPER" && computerSelection==="Scissors") {
        result = "You lose! Scissors beats Paper."
    } else if (playerSelection==="SCISSORS" && computerSelection==="Paper") {
        result = "You win! Scissors beats Paper."
    } else if (playerSelection==="SCISSORS" && computerSelection==="Rock") {
        result = "You lose! Rock beats Scissors."
    }    
    return result;
}

const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
const computerSelection = getComputerChoice(items);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// Create function for a 5-round game