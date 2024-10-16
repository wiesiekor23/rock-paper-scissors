let humanScore = 0;
let computerScore = 0;


console.log("Man vs Machine a great Duel!")

const bodyContainer = document.querySelector("body");

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

bodyContainer.append(btnRock, btnPaper, btnScissors);

const displayDiv = document.createElement("div");
bodyContainer.appendChild(displayDiv);
displayDiv.textContent = humanScore + " : " + computerScore;

function playGame(humanChoice) {
    if (humanScore === 5) {
        return displayDiv.textContent = "You've won the game, Congratulations!!!";
    }
    if (computerScore === 5) {
        return displayDiv.textContent = "You've lost. Reload page to try again."
    }
    if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
        displayDiv.textContent = humanScore + " : " + computerScore
        return console.log({ humanScore, computerScore });
    }
}


        btnRock.addEventListener("click", () => {

            playGame("rock");
            console.log(humanScore);
            console.log(computerScore);
        });
        
        
        btnPaper.addEventListener("click", () => {

            playGame("paper");
            console.log(humanScore);
            console.log(computerScore);
        });
        
        btnScissors.addEventListener("click", () => {

            playGame("scissors");
            console.log(humanScore);
            console.log(computerScore);
        });



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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock"
        || humanChoice == "paper" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "scissors") {
            alert("draw");
            playRound(humanChoice, getComputerChoice());
            return;
        } else if (humanChoice == "rock" && computerChoice == "scissors"
            || humanChoice == "paper" && computerChoice == "rock"
            || humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                alert("win");
                return {humanScore, computerScore};
            } else if (humanChoice == "rock" && computerChoice == "paper"
                || humanChoice == "paper" && computerChoice == "scissors"
                || humanChoice == "scissors" && computerChoice == "rock") {
                computerScore++;
                alert("loss");
                return {computerScore, humanScore};
            }
        }