function computerPlay() {
  let word = ["Rock", "Paper", "Scissors"];
  let thing = word[Math.floor(Math.random() * word.length)];
  return thing;
}
let userChoice = prompt("Rock paper or scissors?");
let computerChoice = computerPlay();
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!"; // This is the start of winning rounds for userChoice
  } else if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      return "You win! Rock beats Scissors!";
    } else {
      return "You lose! Paper Beats Rock!";
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice === "Paper") {
      return "You win! Scissors beats Paper!";
    } else {
      return "You lose! Rock Beats Scissors!";
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      return "You win! Paper beats Rock!";
    }
  } else {
    return "You lose! Scissors beats Paper!";
  }
}
console.log(playRound(userChoice, computerChoice));
