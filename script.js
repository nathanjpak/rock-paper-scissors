//declare const array with rock paper and scissors
const choices = ["rock", "paper", "scissors"]

//function for computer

function computerPlay() {
    let num = Math.floor(Math.random()*3);
    let sel = choices[num];
    return sel;
}