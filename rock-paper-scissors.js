function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 3 === 0) {
        return "rock";
    } else if (randomNumber % 3 == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

let choice;

function getHumanChoice() {
    return choice = prompt("Type 'rock', 'paper' or 'scissors'");
}

console.log(getHumanChoice());