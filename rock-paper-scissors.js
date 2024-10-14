let humanScore = 0;
let computerScore = 0;

console.log("Man vs Machine a great Duel!")

// Random computer choice

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

// Human choice

function getHumanChoice() {
    return prompt("Type 'rock', 'paper' or 'scissors'");
}

// One round

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "rock"
        || humanChoice.toLowerCase() == "paper" && computerChoice == "paper"
        || humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors") {
        return "Draw!!!";
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"
        || humanChoice.toLowerCase() == "paper" && computerChoice == "rock"
        || humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You've won!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

// Five rounds (one round x 5)

/*function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());        
    }
    console.log("Your points:")
    console.log(humanScore);
    console.log("Machine points:")
    console.log(computerScore);
    winnerAnnouncement();
}

// self explanatory function name

function winnerAnnouncement() {
    if (humanScore > computerScore) {
        return "You've won the game!"
    } else if (humanScore < computerScore) {
        return "You've lost the game :("
    } else {
        return "Game ended with a draw. Try again."
    }

}

playGame();
console.log(winnerAnnouncement());*/

// DOM manipulation

const bodyContainer = document.querySelector("body");

const btn1 = document.createElement("button");
btn1.textContent = "Rock";
const btn2 = document.createElement("button");
btn2.textContent = "Paper";
const btn3 = document.createElement("button");
btn3.textContent = "Scissors";

bodyContainer.append(btn1, btn2, btn3);