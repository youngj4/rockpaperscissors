// console.log("Hello world!")

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "Rock"
    }
    else if (result === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
};

function getHumanChoice () {
    let choice = prompt("Will you choose Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}