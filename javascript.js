// console.log(`Hello world!`)

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return `rock`
    }
    else if (result === 1) {
        return `paper`
    }
    else {
        return `scissors`
    }
};

function getHumanChoice () {
    let choice = prompt(`Will you choose Rock, Paper, or Scissors?`);
    return choice.toLowerCase();
};

function playRound(humanChoice, computerChoice) {
        if (humanChoice === `rock` && computerChoice === `scissors`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". You win!`),
            humanScore++,
            roundCount++
        };

        if (humanChoice === `scissors` && computerChoice === `rock`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". Computer wins!`),
            computerScore++,
            roundCount++
        };

        if (humanChoice === `rock` && computerChoice === `paper`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". Computer wins!`),
            computerScore++,
            roundCount++
        };

        if (humanChoice === `paper` && computerChoice === `rock`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". You win!`),
            humanScore++,
            roundCount++
        };

        if (humanChoice === `paper` && computerChoice === `scissors`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". Computer wins!`),
            computerScore++,
            roundCount++
        };

        if (humanChoice === `scissors` && computerChoice === `paper`) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". You win!`),
            humanScore++,
            roundCount++
        };

        if (computerChoice === humanChoice) {
            console.log(`You chose "${humanChoice}". Computer chose "${computerChoice}". Draw! Play again!`)
        };
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);