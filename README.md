Rock, paper, scissors!

This program will use javascript
The program will randomly generate a value for rock, paper, or scissors
A user will input their choice, of rock, paper, or scissors
Winner will get a point
5 rounds will be played, player with the most points wins the game

steps:

1. Computer choice
function getComputerChoice will randomly generate and return a selection of Rock, Paper, or Scissors
2. Human choice
function getHumanChoice will return a valid choice from an input from the user
3. Computer score
computerScore will track how many rounds computer has won
4. Human score
humanScore will track how many rounds human has won
5. Single round logic
function playRound will take values of humanChoice and computerChoice as arguments
if one choice = rock and other choice = scissors, rock wins
if one choice = rock and other choice = paper, paper wins
if one choice = paper and other choice = scissors, scissors wins
if computerChoice and humanChoice are equal, tie, no one wins
6. Game end conditions
when 5 rounds are played, game will end

Pseudocode:

SET humanScore to 0
SET computerScore to 0
SET roundCount count to 0
WHILE roundCount < 5
    FOR each playRound
        SET getHumanChoice to input value
        SET getComputerChoice to random value
        IF humanChoice = rock and computerChoice = scissors
            INCREMENT humanScore
        IF humanChoice = scissors and computerChoice = rock
            INCREMENT computerScore
        IF humanChoice = rock and computerChoice = paper
            INCREMENT computerScore
        IF humanChoice = paper and computerChoice = rock
            INCREMENT humanScore
        IF humanChoice = paper and computerChoice = scissors
            INCREMENT computerScore
        IF humanChoice = scissors and computerChoice = paper
            INCREMENT humanScore
        IF computerChoice === humanChoice
            DO NOT INCREMENT humanScore or computerScore
    INCREMENT roundCount
WHEN roundCount === 5
    IF humanScore > computerScore
        PRINT "YOU WIN!!!"
    ELSE
        PRINT "COMPUTER WINS! BETTER LUCK NEXT TIME"