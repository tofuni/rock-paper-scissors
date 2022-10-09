// Create function for computer's play
function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

let items = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(items));

// Create function for single round play between player and computer
// Create function for a 5-round game