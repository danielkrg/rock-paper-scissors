var playerScore = 0;
var computerScore = 0;

function playRound(playerChoice, compChoice) {
    if (playerChoice === "rock") {
        if (compChoice === "paper") {
            return 0;
        }
        else if (compChoice === "scissors") {
            return 1;
        }
        else {
            return -1;
        }
    } 
    else if (playerChoice === "paper") {
        if (compChoice === "scissors") {
            return 0;
        }
        else if (compChoice === "rock") {
            return 1;
        }
        else {
            return -1;
        }
    }
    else if (playerChoice === "scissors") {
        if (compChoice === "rock") {
            return 0;
        }
        else if (compChoice === "paper") {
            return 1;
        }
        else {
            return -1;
        }
    }
    return null
}

function randChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors";
    }
}

function chooseRock() {
    playGame('rock');
}

function choosePaper() {
    playGame('paper');
}

function chooseScissors() {
    playGame('scissors'); 
}

function updateScore() {
    score.textContent = `${playerScore}-${computerScore}`;
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('body').style.opacity = 0
        setTimeout(function() { 
            window.location.href = "winScreen.html"
        }, 1500)
    }
    else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('body').style.opacity = 0
        setTimeout(function() { 
            window.location.href = "loseScreen.html"
        }, 1500)
    }
}

function updateText(text) {
    roundText.textContent = text;
}

function playGame(player) {
    let computer = randChoice();
    let outcome = playRound(player, computer);
    let text;
    if (outcome === 0) {
        text = `You lost! Computer played ${computer}`;
        computerScore++;
    }
    else if (outcome === 1) {
        text = `You won! Computer played ${computer}`;
        playerScore++;
    }
    else {
        text = `It's a tie Computer played ${computer}`;
    }
    updateScore();
    updateText(text);
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', chooseRock);
btnPaper.addEventListener('click', choosePaper);
btnScissors.addEventListener('click', chooseScissors);

const div = document.querySelector('#score-container');


const score = document.createElement('p');
score.classList.add('content');
score.textContent = `${playerScore}-${computerScore}`;

const roundText = document.createElement('p');
roundText.classList.add('content');

div.appendChild(score);
div.appendChild(roundText);
