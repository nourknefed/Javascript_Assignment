let choices = ["rock", "paper", "scissors"];
let computerscores = 0;
let playerScores = 0;



function computerplay() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// let computerSelection = computerplay();
// let playerSelect = prompt("Choose : rock, paper, scissors");

function validateUserInput(computerSelection, message) {
  let userInput = prompt(message);

  if (userInput.trim().toLowerCase() === "") {
    return validateUserInput(computerSelection, "empty entry try agin!");
  }
  else if (!choices.includes(userInput.trim().toLowerCase())) {
    return validateUserInput(computerSelection, "Invalid input try again");
  }
  else if (userInput.trim().toLowerCase() === computerSelection) {
    return validateUserInput(computerSelection, "No one wins, you are the same, repeat the play");
  }

  return userInput;
}

function PlayRound(playerSelect, computerSelection) {

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
    const playerSelect = validateUserInput(computerSelection, "Choose : rock, paper, scissors");

    PlayRound(playerSelect, computerSelection);
    console.log(PlayRound(playerSelect, computerSelection), i);

  }

  if (playerScores > computerscores) {
    console.log(`Gungratulation🥳! You Won!`);
  }
  else {
    console.log(` Sorry :( The computer Won!`);
  }
}

Game();














































