//declare const array with rock paper and scissors
const choices = ["rock", "paper", "scissors"]

//function for computer

function computerPlay() {
    let num = Math.floor(Math.random()*3);
    let sel = choices[num];
    return sel;
}

function playGame(playerSelection, computerSelection) {
    //lowercase playerSelection to "normalize"
    playerSelection = playerSelection.toLowerCase();
    //if else statement where initial condition is the two sels are the same
    if (playerSelection === computerSelection) {
        let message = `Tied! The computer also chose ${playerSelection}.`;
        return message;
    //else start a switch statement for playerSelections
    } else {
        switch(playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    let message = `You won The computer chose ${computerSelection}.`;
                    return message;
                } else {
                    let message = `You lost! The computer chose ${computerSelection}`;
                    return message;
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    let message = `You won The computer chose ${computerSelection}.`;
                    return message;
                } else {
                    let message = `You lost! The computer chose ${computerSelection}`;
                    return message;
                }                
                break;
            default:
                if (computerSelection === "paper") {
                    let message = `You won The computer chose ${computerSelection}.`;
                    return message;
                } else {
                    let message = `You lost! The computer chose ${computerSelection}`;
                    return message;
                }        
        }
    }
}

