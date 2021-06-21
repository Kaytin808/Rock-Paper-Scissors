var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var results_p = document.querySelector(".results > p");
var rock_div = document.getElementById("Rock");
var paper_div = document.getElementById("Paper");
var sciss_div = document.getElementById("Scissors");
// Pushes value into userChoice on click
// randomizes rock paper scissors for computer
function computerPlay() {
  let word = ["Rock", "Paper", "Scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
computerPlay();

// goes through userChoice after clicking choice //

// onClick listen function //
function tie(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = "It's a draw! Try again!😤😤😤";
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${userChoice} beats  ${computerChoice}, you win!💪😍`;
}
function loss(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${computerChoice} beats ${userChoice}, you lost!💩💩💩`;
}
function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });

  paper_div.addEventListener("click", function () {
    game("Paper");
  });

  sciss_div.addEventListener("click", function () {
    game("Scissors");
  });
}
main();
// compare function //
function game(userChoice) {
  const computerChoice = computerPlay();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      win(userChoice, computerChoice);
      checkForWinner();
      break;
    case "ScissorsRock":
    case "PaperScissors":
    case "RockPaper":
      loss(userChoice, computerChoice);
      checkForWinner();
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      tie(userChoice, computerChoice);
      break;
  }
}
// Restart fresh new game //
function restartGame() {
  // New score //
  userScore = 0;
  computerScore = 0;
  // Show new score //
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // show blank results //
  results_p.innerHTML = "";
}
function winner() {
  results_p.innerHTML =
    'Winner winner chicken dinner!🏆🍗🏆 <button onclick="restartGame()">Play again?</button>';
  rock_div.setAttribute("disabled", 1);
  paper_div.setAttribute("disabled", 1);
  sciss_div.setAttribute("disabled", 1);
}
function loser() {
  results_p.innerHTML =
    'You lost! HUMANITY IS DOOOOOOOMED!!🔥🔥🤖🤖🤖<button onclick="restartGame()">Play again?</button>';
}
// Check to see who wins over 5 points
function checkForWinner() {
  if (userScore >= 5) {
    winner();
  } else if (computerScore >= 5) {
    loser();
  }
}
