function computerPlay() {
  let word = ["Rock", "Paper", "Scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
var userChoice = "";
function playRound(userChoice, computerChoice) {
  var computerChoice = computerPlay();
  if (userChoice.toLowerCase() === "Scissors".toLowerCase()) {
    if (computerChoice === "Paper") {
      ++myScore;
      return "You win! Scissors beats Paper!";
    } else if (computerChoice === "Rock") {
      ++computerScore;
      return "You lose! Rock beats Scissors!";
    } else {
      return "It's a tie!";
    }
  }
  if (userChoice.toLowerCase() === "Rock".toLowerCase()) {
    if (computerChoice === "Scissors") {
      ++myScore;
      return "You win! Rock beats Scissors!";
    } else if (computerChoice === "Paper") {
      ++computerScore;
      return "You lose! Paper beats Rock!";
    } else {
      return "It's a tie!";
    }
  }
  if (userChoice.toLowerCase() === "Paper".toLowerCase()) {
    if (computerChoice === "Rock") {
      ++myScore;
      return "You win! Paper beats Rock!";
    } else if (computerChoice === "Scissors") {
      ++computerScore;
      return "You lose! Scissors beats Paper!";
    } else {
      return "It's a tie!";
    }
  }
}
var myScore = 0;
var computerScore = 0;
const computerChoice = computerPlay();
function game() {
  for (let i = 0; i < 5; ++i) {
    let userChoice = prompt("Rock paper or scissors?");
    const computerChoice = computerPlay();
    console.log(playRound(userChoice, computerChoice));
    console.log("your score = " + myScore);
    console.log("Computer's score = " + computerScore);
  }

  if (myScore > computerScore) {
    console.log("You win the game!!!!");
  } else if (computerScore > myScore) {
    console.log("Computer Wins the game!!!!!!!");
  } else {
    console.log("Tie game! Restart game!");
  }
}
game();
