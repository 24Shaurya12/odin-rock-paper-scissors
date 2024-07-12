function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(event) {
    switch (event.target.id) {
        case "Rock":
            return "Rock";
        case "Paper":
            return "Paper";
        case "Scissors":
            return"Scissors";
    }
}

function playGame(event) {

    function playRound(event) {
        let winOrLose = "";
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        let humanChoice = getHumanChoice(event);

        if (computerChoice === humanChoice) {
            return "Both players chose " + computerChoice;
        }
        else if (computerChoice === "Rock") {
            if (humanChoice === "Paper") {
                winOrLose = "win";
            }
            else {
                winOrLose = "lose";

            }
        }
        else if (computerChoice === "Paper") {
            if (humanChoice === "Rock") {
                winOrLose = "lose";
            }
            else {
                winOrLose = "win";
            }
        }
        else {
            if (humanChoice === "Rock") {
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

    if (humanScore === 5 || computerScore === 5) {
        computerScore = 0;
        humanScore = 0;
        scoreMsg[1].textContent = '';
        scoreMsg[2].textContent = '';
    }

    scoreMsg[0].textContent = playRound(event);
    scoreMsg[1].textContent = (`\nComputer: ${computerScore}, Player: ${humanScore}`);
    if (computerScore === 5) {
        scoreMsg[2].textContent = "Computer Won!!";
    }
    else if (humanScore === 5) {
        scoreMsg[2].textContent = "You Won!!";
    }
}

let humanScore = 0;
let computerScore = 0;

let container = document.querySelector("#container");
let scoreMsg = document.querySelectorAll('p');

container.addEventListener("click", playGame);