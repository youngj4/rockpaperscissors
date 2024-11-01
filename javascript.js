const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const resultsDisplay = document.createElement("p");
const currentScores = document.createElement("p");
const gameWinner = document.createElement("p");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

let computerChoice;
let humanChoice;


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


function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === `rock` && computerChoice === `scissors`) {
        humanWins(humanChoice),
            humanScore++,
            roundCount++,
            reportScore()
    };

    if (humanChoice === `scissors` && computerChoice === `rock`) {
        computerWins(humanChoice),
            computerScore++,
            roundCount++,
            reportScore
    };

    if (humanChoice === `rock` && computerChoice === `paper`) {
        computerWins(humanChoice),
            computerScore++,
            roundCount++,
            reportScore()
    };

    if (humanChoice === `paper` && computerChoice === `rock`) {
        humanWins(humanChoice),
            humanScore++,
            roundCount++,
            reportScore()
    };

    if (humanChoice === `paper` && computerChoice === `scissors`) {
        computerWins(humanChoice),
            computerScore++,
            roundCount++,
            reportScore()
    };

    if (humanChoice === `scissors` && computerChoice === `paper`) {
        humanWins(humanChoice),
            humanScore++,
            roundCount++,
            reportScore()
    };

    if (computerChoice === humanChoice) {
        draw(humanChoice),
            reportScore()
    };
    playGame(humanScore, computerScore);
};

function playGame(humanScore, computerScore) {
    if (humanScore == 5 || computerScore == 5) {
        getWinner()
    }
};

function humanWins(humanChoice) {
    resultsDisplay.textContent = `You chose "${humanChoice}". Computer chose "${computerChoice}". You win!`;
    reportScore();
    resultsDiv.appendChild(resultsDisplay);
};

function computerWins(humanChoice) {
    resultsDisplay.textContent = `You chose "${humanChoice}". Computer chose "${computerChoice}". Computer wins!`;
    reportScore();
    resultsDiv.appendChild(resultsDisplay);
};

function draw(humanChoice) {
    resultsDisplay.textContent = `You chose "${humanChoice}". Computer chose "${computerChoice}". Draw! Play again!`;
    reportScore();
    resultsDiv.appendChild(resultsDisplay);
};

function reportScore() {
    currentScores.textContent = `Current scores: Player: ${humanScore} Computer: ${computerScore}`;
    resultsDiv.appendChild(currentScores);
};

function getWinner() {
    if (humanScore > computerScore) {
        gameWinner.textContent = `You Win!`;
        resultsDiv.appendChild(gameWinner);
    }
    else if (humanScore < computerScore) {
        gameWinner.textContent = `Computer Wins! Better luck next time!`;
        resultsDiv.appendChild(gameWinner);
    }
};

btnPaper.addEventListener("click", function () {
    playRound("paper")
});
btnRock.addEventListener("click", function () {
    playRound("rock")
});
btnScissors.addEventListener("click", function () {
    playround("scissors")
});
