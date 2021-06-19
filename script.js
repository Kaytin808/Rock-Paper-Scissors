document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;

function user() {
  var userChoice = this.id;
  console.log("User: " + userChoice);

  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer: " + computerChoice);
  console.log(compare(userChoice, computerChoice));

  // Start game //
  function compare(choice1, choice2) {
    // Check for tie
    if (choice1 === choice2) {
      return "It's a tie!";
    }
    // check for scissors
    if (choice1 === "scissors") {
      if (choice2 === "paper") {
        return "You win! Scissors beats paper!";
      } else {
        return "You lose! Rock wins";
      }
    } // check for paper
    if (choice1 === "paper") {
      if (choice2 === "rock") {
        return "You win! Paper beats rock!";
      } else {
        return "You lose! Scissors beats paper!";
      }
    } // check for rock
    if (choice1 === "rock") {
      if (choice2 === "scissors") {
        return "You win! Rock beats Scissors!";
      } else {
        return "You lose! Paper beats rock!";
      }
    }
  }
}
