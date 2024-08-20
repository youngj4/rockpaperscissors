
function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

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

    function getHumanChoice() {
        let choice = prompt(`Will you choose Rock, Paper, or Scissors?`);
        return choice.toLowerCase();
    };

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === `rock` && computerChoice === `scissors`) {
            humanWins(),
                humanScore++,
                roundCount++,
                reportScore()
        };

        if (humanChoice === `scissors` && computerChoice === `rock`) {
            computerWins(),
                computerScore++,
                roundCount++,
                reportScore
        };

        if (humanChoice === `rock` && computerChoice === `paper`) {
            computerWins(),
                computerScore++,
                roundCount++,
                reportScore()
        };

        if (humanChoice === `paper` && computerChoice === `rock`) {
            humanWins(),
                humanScore++,
                roundCount++,
                reportScore()
        };

        if (humanChoice === `paper` && computerChoice === `scissors`) {
            computerWins(),
                computerScore++,
                roundCount++,
                reportScore()
        };

        if (humanChoice === `scissors` && computerChoice === `paper`) {
            humanWins(),
                humanScore++,
                roundCount++,
                reportScore()
        };

        if (computerChoice === humanChoice) {
            draw(),
                reportScore()
        };
    };

    function humanWins() {
        return console.log(`You chose "${humanSelection}". Computer chose "${computerSelection}". You win!`)
    };

    function computerWins() {
        return console.log(`You chose "${humanSelection}". Computer chose "${computerSelection}". Computer wins!`)
    };

    function draw() {
        console.log(`You chose "${humanSelection}". Computer chose "${computerSelection}". Draw! Play again!`)
    };

    function reportScore() {
        console.log(`Current scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`)
    };

    function getWinner() {
        if (humanScore > computerScore) {
            reportScore();
            console.log("YOU WIN!!!")
        }
        else if (humanScore < computerScore) {
            reportScore();
            console.log("COMPUTER WINS! BETTER LUCK NEXT TIME!")
        }
        else {
            reportScore();
            console.log("DRAW!")
        }
    };

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    umanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    umanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    umanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    getWinner();
};

playGame();

// playGame(humanSelection, computerSelection);