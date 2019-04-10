// This is the app.js file

var userScore = 0;
var computerScore = 0;

// Caching References (For efficency purposes)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_h3 = document.querySelector(".result > h3");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converter(choice) {
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    return "Scissors"
}

function userWins(userChoice, computerChoice) {
    console.log("USER WINS!");

    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;

    result_h3.innerHTML = "You Win. 💩"
    result_p.innerHTML = converter(userChoice) + " beats " + converter(computerChoice);

    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 500);
}

function computerWins(userChoice, computerChoice) {
    console.log("COMPUTER WINS!");

    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    computerScore_span.innerHTML = computerScore;

    result_h3.innerHTML = "You Lose! 🔥"
    result_p.innerHTML = converter(computerChoice) + " beats " + converter(userChoice);

    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 500);
}

function draw(userChoice) {
    console.log("IT IS A DRAW.");

    const userChoice_div = document.getElementById(userChoice);

    result_h3.innerHTML = "Is that the best you can do? 😛"
    result_p.innerHTML = "We both chose " + converter(userChoice);

    userChoice_div.classList.add('gold-glow');
    setTimeout(function() { userChoice_div.classList.remove('gold-glow') }, 500);
}

function getWinner(userChoice, computerChoice) {

    switch(userChoice + "-" + computerChoice) {

        case "r-s":
        case "p-r":
        case "s-p":
            userWins(userChoice, computerChoice);
            break;

        case "s-r":
        case "r-p":
        case "p-s":
            computerWins(userChoice, computerChoice);
            break;

        case "r-r":
        case "p-p":
        case "s-s":
            draw(userChoice);
            break;
    }

}

function rpsGame(userChoice) {
    const computerChoice = getComputerChoice();

    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    getWinner(userChoice, computerChoice);

}

function main() {
    rock_div.addEventListener('click', function() {
        console.log("Rock was clicked!");
        rpsGame("r");
    })
    
    paper_div.addEventListener('click', function() {
        console.log("Paper was clicked!");
        rpsGame("p");
    })
    
    scissors_div.addEventListener('click', function() {
        console.log("Scissors was clicked!");
        rpsGame("s");
    })
}

main();