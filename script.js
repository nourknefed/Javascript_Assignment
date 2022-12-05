let choices = ["rock", "paper", "scissors"];
let computerscores = 0;
let playerScores = 0;
function computerplay() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// let computerSelection = computerplay();
// let playerSelect = prompt("Choose : rock, paper, scissors");

function validateUserInput(message) {
  let input = prompt(message);
  let userInput = input.trim().toLowerCase();
  let computerSelection = computerplay();

  if (userInput === "") {
    return validateUserInput("empty entry try agin!");
  }
  if (!choices.includes(userInput)) {
    return validateUserInput("Invalid input try again");
  }
  if (userInput === computerSelection) {
    return validateUserInput("No one wins, you are the same, repeat the play");
  }
  return userInput;
}

function playRound(playerSelect, computerSelection) {

  let playerSelection = playerSelect.trim().toLowerCase();
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerscores++;
    return "You Lose! Paper beats Rock";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScores++;
    return "You Win! Rock beats scissors";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerscores++;
    return "You Lose! scissors beats paper ";
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScores++;
    return "You Win! paper beats rock ";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerscores++;
    return "You Lose! rock beats scissors";
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScores++;
    return "You Win! scissors beats paper";
  }
}

function Game() {
  for (let i = 0; i < 5; i++) {

    const computerSelection = computerplay();
    const playerSelect = validateUserInput("Choose : rock, paper, scissors");

    playRound(playerSelect, computerSelection);
    console.log(playRound(playerSelect, computerSelection), i);
  }
  if (playerScores > computerscores) {
    console.log(`Gungratulation🥳! You Won!`);
  }
  else {
    console.log(` Sorry :( The computer Won!`);
  }
}

Game();