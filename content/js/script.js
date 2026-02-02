const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const rpsArea = document.getElementById("rpsArea");
const rpsStartDisplay = document.getElementById("rpsStartDisplay");
const rpsResult = document.getElementById("rpsResult");
const rpsPrep = document.getElementById("rpsPrep");
const rpsDescription = document.getElementById("rpsDescription");
const rpsScore = document.getElementById("rpsScore");
const rpsPlScoreText = document.getElementById("plScoreText");
const rpsComScoreText = document.getElementById("comScoreText");

const rpsStart = document.getElementById("rpsStart");
const rpsPicker = document.getElementById("rpsPicker");

const rpsYourPick = document.getElementById("rpsYourPick");
const rpsComPick = document.getElementById("rpsComPick");

const rpsYou = document.getElementById("rpsYou");
const rpsCom = document.getElementById("rpsCom");

let count = 3;
let playerChoice;
let comChoice;

let winner;
let playerScore = 0;
let comScore = 0;

startBtn.onclick = function () {
  console.log("Hello!");
  startBtn.style.display = "none";
  rpsStartDisplay.textContent = "Starting...";
  rpsResult.style.display = "none";
  rpsPrep.style.display = "flex";
  count = 3;
  countDown();
};

rockBtn.onclick = function () {
  playerChoice = "Rock";
  comRandomizeChoice();
  console.log("comChoice: " + comChoice + ". playerChoice: " + playerChoice);
  rpsStart.style.display = "flex";
  startBtn.style.display = "block";
  startBtn.textContent = "Play again";
  rpsPicker.style.display = "none";
  rpsResult.style.display = "flex";
  rpsPrep.style.display = "none";
  rpsYourPick.textContent = playerChoice;
  rpsComPick.textContent = comChoice;
  rpsWinner();
  console.log(winner);
};

paperBtn.onclick = function () {
  playerChoice = "Paper";
  comRandomizeChoice();
  console.log("comChoice: " + comChoice + ". playerChoice: " + playerChoice);
  rpsStart.style.display = "flex";
  startBtn.style.display = "block";
  startBtn.textContent = "Play again";
  rpsPicker.style.display = "none";
  rpsResult.style.display = "flex";
  rpsPrep.style.display = "none";
  rpsYourPick.textContent = playerChoice;
  rpsComPick.textContent = comChoice;
  rpsWinner();
  console.log(winner);
};

scissorsBtn.onclick = function () {
  playerChoice = "Scissors";
  comRandomizeChoice();
  rpsStart.style.display = "flex";
  startBtn.style.display = "block";
  startBtn.textContent = "Play again";
  rpsPicker.style.display = "none";
  rpsResult.style.display = "flex";
  rpsPrep.style.display = "none";
  rpsYourPick.textContent = playerChoice;
  rpsComPick.textContent = comChoice;
  rpsWinner();
  console.log(winner);
};

function countDown() {
  console.log(count);
  let countDownInterval = setInterval(function () {
    if (count <= 0) {
      rpsStartDisplay.textContent = "Choose!";
      rpsStart.style.display = "none";
      rpsPicker.style.display = "flex";
      rpsDescription.innerHTML =
        "Time to choose. <br> Pick one of the three buttons below.";
      clearInterval(countDownInterval);
    } else {
      console.log(count);
      rpsStartDisplay.textContent = count + "...";
      count -= 1;
    }
  }, 1000);
}

function comRandomizeChoice() {
  let comRandom = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(comRandom);
  if (comRandom == 1) {
    comChoice = "Rock";
  } else if (comRandom == 2) {
    comChoice = "Paper";
  } else if (comRandom == 3) {
    comChoice = "Scissors";
  }
}

function rpsWinner() {
  // Rock
  if (playerChoice == "Rock" && comChoice == "Rock") {
    winner = "tie";
  } else if (playerChoice == "Rock" && comChoice == "Paper") {
    winner = "computer";
    comScore++;
  } else if (playerChoice == "Rock" && comChoice == "Scissors") {
    winner = "player";
    playerScore++;
    // Paper
  } else if (playerChoice == "Paper" && comChoice == "Rock") {
    winner = "player";
    playerScore++;
  } else if (playerChoice == "Paper" && comChoice == "Paper") {
    winner = "tie";
  } else if (playerChoice == "Paper" && comChoice == "Scissors") {
    winner = "computer";
    comScore++;
  }
  // Paper
  else if (playerChoice == "Scissors" && comChoice == "Rock") {
    winner = "computer";
    comScore++;
  } else if (playerChoice == "Scissors" && comChoice == "Paper") {
    winner = "player";
    playerScore++;
  } else if (playerChoice == "Scissors" && comChoice == "Scissors") {
    winner = "tie";
  }
  presentWinner();
}

function presentWinner() {
  if (winner == "player") {
    rpsYou.style.background = "green";
    rpsCom.style.background = "red";
    rpsDescription.innerHTML =
      "You're the winner! <br> Good job! Press the button to play again.";
  } else if (winner == "computer") {
    rpsYou.style.background = "red";
    rpsCom.style.background = "green";
    rpsDescription.innerHTML =
      "Computer wins! <br> Press the button to play again.";
  } else if (winner == "tie") {
    rpsYou.style.background = "yellow";
    rpsCom.style.background = "yellow";
    rpsDescription.innerHTML =
      "It's a tie! <br> Press the button to play again.";
  }
  updateScore();
}

function updateScore() {
  rpsScore.style.display = "flex";
  rpsArea.style.height = "600px";

  rpsPlScoreText.innerHTML = `You: <br> ${playerScore}`;
  rpsComScoreText.innerHTML = `Com: <br> ${comScore}`;
}
