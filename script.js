var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var results_div = document.querySelector(".results");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var sciss_div = document.getElementById("scissors");
// Pushes value into userChoice on click
// randomizes rock paper scissors for computer
function computerPlay() {
  let word = ["rock", "paper", "scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
computerPlay();

// goes through userChoice after clicking choice //

// onClick listen function //
function tie() {
  console.log("tie");
}
function win() {
  console.log("win");
}
function loss() {
  console.log("loss");
}
function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  sciss_div.addEventListener("click", function () {
    game("scissors");
  });
}
main();
// compare function //
function game(userChoice) {
  const computerChoice = computerPlay();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      userScore++;
      console.log("Computer: " + computerScore, "User: " + userScore);
      console.log("USER WINS");
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      computerScore++;
      console.log("Computer: " + computerScore, "User: " + userScore);
      console.log("USER LOSES!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("Computer: " + computerScore, "User: " + userScore);
      console.log("TIE");
      break;
  }
}
