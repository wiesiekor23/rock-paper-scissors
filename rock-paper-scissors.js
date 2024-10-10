let humanScore = 0;
let computerScore = 0;


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
    choice = prompt("Type 'rock', 'paper' or 'scissors'");
    return choice;
}

//console.log(getHumanChoice());

function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "rock" 
        || humanChoice.toLowerCase() == "paper" && computerChoice == "paper" 
        || humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors") {
            return "Draw!!!";
        } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors" 
            || humanChoice.toLowerCase() == "paper" && computerChoice == "rock" 
            || humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
                humanScore++;
                return "You've won!";
            }else {
                computerScore++;
                return "You lose!";
            }
        }

        let human = getHumanChoice();
        let computer = getComputerChoice();

    let roundResult = playRound(human, computer);
    console.log(roundResult);
    console.log(humanScore);
    console.log(computerScore);
