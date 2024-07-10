function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }

    function getHumanChoice() {
        return prompt("Enter your choice: (rock, paper or scissors): ").toLowerCase();
    }

    function playRound(computerChoice, humanChoice) {
        let winOrLose = "";
        if (computerChoice === humanChoice) {
            return "Both players chose " + computerChoice;
        }
        else if (computerChoice === "rock") {
            if (humanChoice === "paper") {
                winOrLose = "win";
            }
            else {
                winOrLose = "lose";

            }
        }
        else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                winOrLose = "lose";
            }
            else {
                winOrLose = "win";
            }
        }
        else {
            if (humanChoice === "rock") {
                winOrLose = "win";
            }
            else {
                winOrLose = "lose";
            }
        }
        
        if (winOrLose === "win") {
            humanScore++;
            return humanChoice + " beats " + computerChoice;
        }
        else {
            computerScore++;
            return computerChoice + " beats " + humanChoice;

        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getHumanChoice()));
        console.log("Computer: " + computerScore + ", Player: " + humanScore);
    }

    if (computerScore > humanScore) {
        console.log("Computer Won");
    }
    else if (humanScore > computerScore) {
        console.log("You Won");
    }
    else {
        console.log("Game Tied");
    }
}

playGame();