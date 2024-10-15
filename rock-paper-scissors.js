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
displayDiv.textContent = humanScore + " : " + computerScore;
bodyContainer.appendChild(displayDiv);



btnRock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "rock";
    
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    displayDiv.textContent = humanScore + " : " + computerScore;
});


btnPaper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "paper";
    
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    displayDiv.textContent = humanScore + " : " + computerScore;
});

btnScissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "scissors";
    
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    displayDiv.textContent = humanScore + " : " + computerScore;
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
            return "Draw!!!";
        } else if (humanChoice == "rock" && computerChoice == "scissors"
            || humanChoice == "paper" && computerChoice == "rock"
            || humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                return {humanScore, computerScore};
            } else {
                computerScore++;
                return {computerScore, humanScore};
            }
        }
        
        humanScore;
        computerScore;
        console.log(humanScore);
        console.log(computerScore);
        
        ///console.log(getHumanChoice());
        //console.log(getComputerChoice());
        //playRound(getHumanChoice(), getComputerChoice());
        //console.log(playRound(getHumanChoice(), getComputerChoice()));
        
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
                        
                       
                       
                       