function computerPlay() {
  let word = ["Rock", "Paper", "Scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
var computerChoice = computerPlay();
var userChoice = "";
choice1 = userChoice;
choice2 = computerChoice;
var myScore = 0;
var computerScore = 0;
function playRound(choice1, choice2) {
  var userChoice = prompt("Rock paper or scissors?");
  if (userChoice.toLowerCase() === "Scissors".toLowerCase()) {
    if (computerChoice === "Paper") {
      ++myScore;
      return (
        "You win! Scissors beats Paper! Score " + myScore + ":" + computerScore
      );
    } else if (computerChoice === "Rock") {
      ++computerScore;
      return (
        "You lose! Rock beats Scissors! Score " + myScore + ":" + computerScore
      );
    } else {
      return (
        "It's a tie! Score Player & Computer: " + myScore + ":" + computerScore
      );
    }
  }
  if (userChoice.toLowerCase() === "Rock".toLowerCase()) {
    if (computerChoice === "Scissors") {
      ++myScore;
      return (
        "You win! Rock beats Scissors! Score " + myScore + ":" + computerScore
      );
    } else if (computerChoice === "Paper") {
      ++computerScore;
      return (
        "You lose! Paper beats Rock! Score " + myScore + ":" + computerScore
      );
    } else {
      return (
        "It's a tie! Score Player & Computer: " + myScore + ":" + computerScore
      );
    }
  }
  if (userChoice.toLowerCase() === "Paper".toLowerCase()) {
    if (computerChoice === "Rock") {
      ++myScore;
      return "You win! Paper beats Rock!" + myScore + ":" + computerScore;
    } else if (computerChoice === "Scissors") {
      ++computerScore;
      return "You lose! Scissors beats Paper!" + myScore + ":" + computerScore;
    } else {
      return (
        "It's a tie! Score Player & Computer: " + myScore + ":" + computerScore
      );
    }
  }
}
console.log(playRound(userChoice, computerChoice));
