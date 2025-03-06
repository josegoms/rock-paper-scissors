document.addEventListener("DOMContentLoaded", playGame);

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const guess = document.querySelector(".buttons");
    const results = document.querySelector(".results");
    guess.addEventListener("click", (event) => {
        let humanSelection = event.target.id;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        if (humanScore === 5) {
            results.textContent = "You win the game!";           
        }
        else if (computerScore == 5) {
            results.textContent = "You lose the game!";
        }
    });   

        
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                results.textContent = "It's a tie! Try again.";
            }
            else if (computerChoice == "paper") {
                computerScore++;
                results.textContent = "You lose! Rock loses to Paper.";
            }
            else if (computerChoice == "scissors") {
                humanScore++;
                results.textContent = "You win! Rock wins over Scissors.";
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                results.textContent = "You win! Paper wins over Rock.";
            }
            else if (computerChoice == "paper") {
                results.textContent = "It's a tie! Try again.";
            }
            else if (computerChoice == "scissors") {
                computerScore++;
                results.textContent = "You lose! Paper loses to Scissors.";
            }
    
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore++;
                results.textContent = "You lose! Scissors loses to Rock.";
            }
            else if (computerChoice == "paper") {
                humanScore++;
                results.textContent = "You win! Scissors wins over Paper.";
            }
            else if (computerChoice == "scissors") {
                results.textContent = "It's a tie! Try again.";
            }       
        }

        results.textContent += `Computer Score: ${computerScore} Human Score: ${humanScore}`;
    }   
}

function getComputerChoice() {
    let random = (Math.random() * 100);

    if (random <= 33) {
        return "rock";
    }
    else if (random > 33 && random <= 66) {
        return "paper";
    }
    else if (random > 66 && random <= 99) {
        return "scissors";
    }

}

