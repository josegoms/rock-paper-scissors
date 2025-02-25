playGame();
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        function playRound(humanChoice, computerChoice) {
            if (humanChoice == "rock") {
                if (computerChoice == "rock") {
                    console.log("It's a tie! Try again.");
                }
                else if (computerChoice == "paper") {
                    computerScore++;
                    console.log("You lose! Rock loses to Paper.");
                }
                else if (computerChoice == "scissors") {
                    humanScore++;
                    console.log("You win! Rock wins over Scissors.");
                }
            }
            else if (humanChoice == "paper") {
                if (computerChoice == "rock") {
                    humanScore++;
                    console.log("You win! Paper wins over Rock.");
                }
                else if (computerChoice == "paper") {
                    console.log("It's a tie! Try again.");
                }
                else if (computerChoice == "scissors") {
                    computerScore++;
                    console.log("You lose! Paper loses to Scissors.");
                }
        
            }
            else if (humanChoice == "scissors") {
                if (computerChoice == "rock") {
                    computerScore++;
                    console.log("You lose! Scissors loses to Rock.");
                }
                else if (computerChoice == "paper") {
                    humanScore++;
                    console.log("You win! Scissors wins over Paper.");
                }
                else if (computerChoice == "scissors") {
                    console.log("It's a tie! Try again.");
                }       
            }
        }
    }

    if (humanScore > computerScore) {
        console.log("You win! This dumb machine had no chance against you.");
    }
    else if (computerScore > humanScore) {
        console.log("You lose! Seriously? You lost to this slow writing machine?");
    }
    else if (computerScore == humanScore) {
        console.log("It's a tie! I know you can do it better; You've got this.");
    }
    console.log(`Computer Score: ${computerScore}
        Human Score: ${humanScore}`);
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

function getHumanChoice() {
    let guess = prompt("Your turn to play rock-paper-scissors: Choose one");
    return guess.toLowerCase();
}