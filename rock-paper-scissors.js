let humanScore = 0;
let computerScore = 0;

const bodyContainer = document.querySelector("body");

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

bodyContainer.append(btnRock, btnPaper, btnScissors);

const displayDiv = document.createElement("div");
displayDiv.setAttribute("style", "white-space: pre;");
bodyContainer.appendChild(displayDiv);
displayDiv.textContent = humanScore + " : " + computerScore;

btnRock.addEventListener("click", () => {
    playGame("rock");
});

btnPaper.addEventListener("click", () => {
    playGame("paper");
});

btnScissors.addEventListener("click", () => {
    playGame("scissors");
});

function playGame(humanChoice) {
    if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
        displayDiv.textContent = humanScore + " : " + computerScore
        if (humanScore === 5) {
            return displayDiv.textContent = humanScore + " : " + computerScore + "\r\nYou've won the game,\r\nCongratulations!!!";
        }
        if (computerScore === 5) {
            return displayDiv.textContent = humanScore + " : " + computerScore + "\r\nYou've lost.\r\nReload the page to try again."
        }

    }
}

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock"
        || humanChoice == "paper" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "scissors") {
        playRound(humanChoice, getComputerChoice());
        return;
    } else if (humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return { humanScore, computerScore };
    } else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return { computerScore, humanScore };
    }
}