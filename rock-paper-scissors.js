function getComputerChoice() {
    let choice = "";
    randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        choice = "scissors";
    } else if (randomNum === 1) {
        choice = "rock";
    } else if (randomNum === 2) {
        choice = "paper";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors? ")
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let winner = "";
        if(humanChoice === "scissors") {
            if(computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors!");
                winner = "computer";
            } else if(computerChoice === "paper") {
                console.log("You win! Scissors beats paper!");
                winner = "human";
            } else if(computerChoice === "scissors") {
                console.log("Tie!");
                winner = "neither";
            }
        }
        else if(humanChoice === "rock") {
            if(computerChoice === "rock") {
                console.log("Tie!");
                winner = "neither";
            } else if(computerChoice === "paper") {
                console.log("You lose! Paper beats Rock!");
                winner = "computer";
            } else if(computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors!");
                winner = "human";
            }
        }
        else if(humanChoice === "paper") {
            if(computerChoice === "rock") {
                console.log("You win! Paper beats Rock!");
                winner = "human";
            } else if(computerChoice === "paper") {
                console.log("Tie!");
                winner = "neither";
            } else if(computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper!");
                winner = "computer";
            }
        }
        return winner;
    }
    for(let i=0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);
        if(winner === "human") {
            humanScore++;
        } else if(winner === "computer") {
            computerScore++;
        }
    }
    console.log("Your score: " + humanScore + " | Computer score: " + computerScore);
    if(humanScore > computerScore) {
        console.log("Congratulations, you win!");
    } else if( humanScore === computerScore) {
        console.log("It was a tie!");
    } else {
        console.log("Aw, you lost...");
    }
}

playGame();