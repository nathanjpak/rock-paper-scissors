const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
let message = "";

const container = document.getElementById("container");
const results = document.getElementById("results");
const scoreObj = document.createElement("p");
const messageObj = document.createElement("p");
scoreObj.textContent = `${playerScore} - ${computerScore}`;
results.appendChild(scoreObj);
results.appendChild(messageObj);

//add click event to buttons
container.addEventListener("click", function(e) {
    if (e.target.className == "selection") {
        let choice = e.target.textContent;
        playGame(choice);
    } 
});

//function for computer

function computerPlay() {
    let num = Math.floor(Math.random()*3);
    let sel = choices[num];
    return sel;
}

function playGame(playerSelection) {
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(computerSelection);
    //if else statement where initial condition is the two sels are the same
    if (playerSelection === computerSelection) {
        tieGame(playerSelection);
    //else start a switch statement for playerSelections
    } else {
        switch(playerSelection) {
            case "Rock":
                if (computerSelection === "Scissors") {
                    winGame(computerSelection);
                } else {
                    loseGame(computerSelection);
                }
                break;
            case "Paper":
                if (computerSelection === "Rock") {
                    winGame(computerSelection);
                } else {
                    loseGame(computerSelection);
                }                
                break;
            default:
                if (computerSelection === "Paper") {
                    winGame(computerSelection);
                } else {
                    loseGame(computerSelection);
                }        
        }
    }
}

//functions for game results
function tieGame(playerSelection) {
    message = `You tied! The computer also chose ${playerSelection}`;
    messageObj.textContent = message;    
}

function winGame(computerSelection) {
    playerScore++;
    scoreObj.textContent = `${playerScore} - ${computerScore}`;
    message = `You won! The computer chose ${computerSelection}`;
    messageObj.textContent = message;
}

function loseGame(computerSelection) {
    computerScore++;
    scoreObj.textContent = `${playerScore} - ${computerScore}`;
    message = `You lost! The computer chose ${computerSelection}`;
    messageObj.textContent = message;
}

//check win condition by checking 4th letter of message


