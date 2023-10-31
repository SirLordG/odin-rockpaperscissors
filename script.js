function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return roundWinner = "It's a Draw!";
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return roundWinner = "You Win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return roundWinner = "You Win! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return roundWinner = "You Win! Scissors beats Paper!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return roundLoser = "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return roundLoser = "You Lose! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return roundLoser = "You Lose! Rock beats Scissors!";
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("");

console.log(playRound(playerSelection, computerSelection));
