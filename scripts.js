humanScore = 0;
computerScore = 0;

const display = document.createElement("div");
display.style.background = "black";
display.style.padding = "30px";
display.style.width = "300px";
display.style.margin = "auto";
display.style.marginTop = "100px";
display.style.borderRadius = "20px";
const title = document.createElement("h1");
title.textContent = "Play Rock, Paper, Scissors!";
title.style.fontFamily = "sans-serif";
title.style.color = "white";
display.appendChild(title);


const gameResult = document.createElement("div");

const screen = document.querySelector("body");
screen.appendChild(display);
screen.appendChild(gameResult);

playGame();



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
    
    const roundResultText = document.createElement("h3");
    roundResultText.style.color = "white";
    roundResultText.style.fontFamily = "sans-serif";
    display.appendChild(roundResultText);
    
    
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper")) {
            humanScore++;
            roundResultText.innerHTML = "You win, " + humanChoice + " beats " + computerChoice + "!<br>"
                                        + "Your Score: " + humanScore + "<br>"
                                        + "Opponent Score: " + computerScore;

        }
    else if (humanChoice === computerChoice) {
        roundResultText.innerHTML = "Tie!<br>"
                                    + "Your Score: " + humanScore + "<br>"
                                    + "Opponent Score: " + computerScore;


    } else {
        computerScore++;
        roundResultText.innerHTML = "You lose, " + computerChoice + " beats " + humanChoice + "!<br>"
                                    + "Your Score: " + humanScore + "<br>"
                                    + "Opponent Score: " + computerScore;

        
    }

    if (computerScore === 5) {
        roundResultText.textContent = "Sorry, you lost the :c";
        disableButtons();
        
    } else if (humanScore === 5) {
        roundResultText.textContent = "Congratulations, you won the game!";
        disableButtons();
    }


}

function playGame() {

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorBtn.textContent = "Scissor";

    rockBtn.style.marginRight = "10px";
    paperBtn.style.marginRight = "10px";
    scissorBtn.style.marginRight = "10px";
    rockBtn.style.borderRadius = "5px";
    rockBtn.style.padding = "3px 20px";
    rockBtn.style.background = "#24a0ed";
    rockBtn.style.color = "white";
    rockBtn.style.border = 0; 
    paperBtn.style.borderRadius = "5px";
    paperBtn.style.padding = "3px 20px";
    paperBtn.style.background = "#24a0ed";
    paperBtn.style.color = "white";
    paperBtn.style.border = 0; 
    scissorBtn.style.borderRadius = "5px";
    scissorBtn.style.padding = "3px 20px";
    scissorBtn.style.background = "#24a0ed";
    scissorBtn.style.color = "white";
    scissorBtn.style.border = 0; 


    display.appendChild(rockBtn);
    display.appendChild(paperBtn);
    display.appendChild(scissorBtn);

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorBtn.addEventListener("click", () => playRound("scissor", getComputerChoice()));
    
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
        button.style.background = "#cccccc";
    });
}