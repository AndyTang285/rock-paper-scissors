humanScore = 0;
computerScore = 0;

playGame();

if (humanScore > computerScore) {
    console.log("Congrats for beating the game!");
} else if (humanScore < computerScore) {
    console.log("Sorry, you lost to the computer :c");
} else {
    console.log("Game is tied!");
}


function getComputerChoice(){

    randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else if (randNum === 2) {
        return "scissor";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissor?");
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper")) {

            console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;

        }
    else if (humanChoice === computerChoice) {
        console.log("Tie!");

    } else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }

}

function playGame() {
    
    for (let i  = 0; i < 5; ++i) {
        
        playRound(getHumanChoice(), getComputerChoice());

    }
}

