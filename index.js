function computerPlay() {
  let word = ["Rock", "Paper", "Scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
var userChoice = prompt("Rock paper or scissors?");
var computerChoice = computerPlay();
function playRound(userChoice, computerChoice) {
  if (userChoice.toLowerCase() === "Scissors".toLowerCase()) {
    if (computerChoice === "Paper") {
      return "You win! Scissors beats Paper!";
    } else if (computerChoice === "Rock") {
      return "You lose! Rock beats Scissors!";
    } else {
      return "It's a tie!";
    }
  }
  if (userChoice.toLowerCase() === "Rock".toLowerCase()) {
    if (computerChoice === "Scissors") {
      return "You win! Rock beats Scissors";
    } else if (computerChoice === "Paper") {
      return "You lose! Paper beats Rock!";
    } else {
      return "It's a tie!";
    }
  }
  if (userChoice.toLowerCase() === "Paper".toLowerCase()) {
    if (computerChoice === "Rock") {
      return "You win! Paper beats Rock!";
    } else if (computerChoice === "Scissors") {
      return "You lose! Scissors beats Paper!";
    } else {
      return "It's a tie!";
    }
  }
}
console.log(playRound(userChoice, computerChoice));
