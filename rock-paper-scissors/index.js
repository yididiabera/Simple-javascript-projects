const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    result = "It's a TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice == "scissors" ? "You WIN!" : "You LOSE!";
        break;
      case "scissors":
        result = computerChoice == "paper" ? "You WIN!" : "You LOSE!";
        break;
      case "paper":
        result = computerChoice == "rock" ? "You WIN!" : "You LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  //   resultDisplay.textContent = result;
  resultDisplay.classList.remove("greenText", "redText");
  if (result === "You WIN!") {
    resultDisplay.classList.toggle("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "You LOSE!") {
    resultDisplay.classList.toggle("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  resultDisplay.textContent = result;
}
