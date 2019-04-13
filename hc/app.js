// This is the app.js file

var userScore = 0;
var computerScore = 0;
var batsmanScore = 0;
var batsman = 'player';
var target = null;
var winCounter = 0;
var loseCounter = 0;
var firstBatting = 'player';

// Caching References (For efficency purposes)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_h3 = document.querySelector(".result > h3");
const result_p = document.querySelector(".result > p");
const win_counter_message_p = document.querySelector(".choices > p");

const one_div = document.getElementById("1");
const two_div = document.getElementById("2");
const three_div = document.getElementById("3");
const four_div = document.getElementById("4");
const five_div = document.getElementById("5");
const six_div = document.getElementById("6");

function getComputerChoice() {
    const choices = ['1', '2', '3', '4', '5', '6'];
    const randomNumber = Math.floor(Math.random() * 6);
    return choices[randomNumber];
}

function coinToss() {

}

function checkDuckOut() {

    if (batsmanScore === 0) {
        return 'duck'
    } else {
        return 'goose'
    }
}

function disableButtons() {

    one_div.style.visibility = "hidden";
    one_div.style.opacity = '0';
    one_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    two_div.style.visibility = "hidden";
    two_div.style.opacity = '0';
    two_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    three_div.style.visibility = "hidden";
    three_div.style.opacity = '0';
    three_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    four_div.style.visibility = "hidden";
    four_div.style.opacity = '0';
    four_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    five_div.style.visibility = "hidden";
    five_div.style.opacity = '0';
    five_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    six_div.style.visibility = "hidden";
    six_div.style.opacity = '0';
    six_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";
}

function enableButtons() {
    one_div.style.visibility = "visible";
    one_div.style.opacity = '1';
    one_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    two_div.style.visibility = "visible";
    two_div.style.opacity = '1';
    two_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    three_div.style.visibility = "visible";
    three_div.style.opacity = '1';
    three_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    four_div.style.visibility = "visible";
    four_div.style.opacity = '1';
    four_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    five_div.style.visibility = "visible";
    five_div.style.opacity = '1';
    five_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

    six_div.style.visibility = "visible";
    six_div.style.opacity = '1';
    six_div.style.transition = "visibility 0.3s linear,opacity 0.3s linear";

}

function gameReset() {
    userScore = 0;
    computerScore = 0;
    batsmanScore = 0;
    batsman = 'player';
    target = null;
    firstBatting = 'player';

    disableButtons();
    showHideCountdown();


    setTimeout(function () {
        userScore_span.innerHTML = 0;
        showHideCountdown()
    }, 3000);
    setTimeout(function () {
        computerScore_span.innerHTML = 0;
        result_h3.innerHTML = "Good Luck!";
        result_p.innerHTML = "New Match Started.";
        enableButtons();
    }, 3000);

    console.log("New Match Started!");
}

function converter(choice) {
    if (choice === "1") return "Singles";
    if (choice === "2") return "Doubles";
    if (choice === "3") return "Triples!";
    if (choice === "4") return "Four!";
    if (choice === "5") return "Fiver?";
    return "Sixer!"
}

function checkForWinner(batsmanScore) {
    if (batsman === 'player' && target !== null && batsmanScore >= target) return 'playerWins';
    if (batsman === 'computer' && target !== null && batsmanScore >= target) return 'computerWins';
    return false
}

function userWins(batsmanScore) {
    console.log("USER WINS!");

    var diff = target - batsmanScore;
    if (diff < 1)
        diff = diff * -1;

    result_h3.innerHTML = "You Win. 💩";
    result_p.innerHTML = "Player won by " + diff + " runs!";

    winCounter++;

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    gameReset();

}

function computerWins(batsmanScore) {
    console.log("COMPUTER WINS!");

    var diff = target - batsmanScore;
    if (diff < 1)
        diff = diff * -1;

    result_h3.innerHTML = "You Lose! 🔥"
    result_p.innerHTML = "Computer won by " + diff + " runs!";

    loseCounter++;

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    gameReset();
}

function draw() {

    console.log("IT IS A DRAW.");

    if (batsmanScore === target-1 || (batsman === 'computer' && target === null)) {
        return 'draw';
    } else {
        return 'nope';
    }
}

function batsmanOut(userChoice, batsmanScore) {

    console.log("Batsman Out.");

    const userChoice_div = document.getElementById(userChoice);

    userChoice_div.classList.add('red-glow');

    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 500);

    if (draw() === 'draw') {
        result_h3.innerHTML = "Draw!"
        result_p.innerHTML = "No points awarded for this match.";
        gameReset();
    } else {
        if (target !== null && batsman === 'player') {

            if (checkForWinner(batsmanScore) === 'playerWins') {
                userWins(batsmanScore);
            } else {
                computerWins(batsmanScore);
            }
        } else if (target !== null && batsman === 'computer') {

            if (checkForWinner(batsmanScore) === 'computerWins') {
                computerWins(batsmanScore);
            } else {
                userWins(batsmanScore);
            }
        } else {
            target = batsmanScore + 1;

            batsmanScore = 0;

            var duckOut = checkDuckOut();

            if (batsman === 'player') {
                batsman = 'computer'
                bowler = 'player'
                console.log("Computer is now batting.");
            } else {
                batsman = 'player'
                bowler = 'computer'
                console.log("Player is now batting.");
            }

            if (duckOut == 'duck') {
                result_h3.innerHTML = "🦆 OUT!"
                result_p.innerHTML = batsman + " needs 1 run to win!";
            } else {
                result_h3.innerHTML = "Howazzat!"
                result_p.innerHTML = batsman + " needs " + target + " runs to win!";
            }
            console.log(batsman + " needs " + target + " to win.");
        }
    }
}

function scoreRuns(userChoice, computerChoice) {
    
    firstBatting = 'player';

    if (batsman === 'player') {
        userScore += parseInt(userChoice);
        result_h3.innerHTML = converter(userChoice);
        result_p.innerHTML = "";
        if (parseInt(userChoice) === 4 || parseInt(userChoice) === 6) {
            const userChoice_div = document.getElementById(userChoice);
            userChoice_div.classList.add('green-glow');
            setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 500);
        }

        batsmanScore = userScore;
        userScore_span.innerHTML = userScore;
        console.log("Player Score: " + userScore);
        //console.log("Batsman Score: " + batsmanScore);
        if (checkForWinner(batsmanScore) === 'playerWins') {
            userWins(batsmanScore);
        }
    } else {
        computerScore += parseInt(computerChoice);
        result_h3.innerHTML = converter(computerChoice);
        result_p.innerHTML = "";
        batsmanScore = computerScore;
        computerScore_span.innerHTML = computerScore;
        console.log("Computer Score: " + computerScore);
        //console.log("Batsman Score: " + batsmanScore);
        if (checkForWinner(batsmanScore) === 'computerWins') {
            computerWins(batsmanScore);
        }
    }
}

function getWinner(userChoice, computerChoice, batsmanScore) {

    switch (userChoice + "-" + computerChoice) {

        case "1-1":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
        case "1-2":
        case "1-3":
        case "1-4":
        case "1-5":
        case "1-6":
            scoreRuns(userChoice, computerChoice);
            break;

        case "2-1":
            scoreRuns(userChoice, computerChoice);
            break;
        case "2-2":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
        case "2-3":
        case "2-4":
        case "2-5":
        case "2-6":
            scoreRuns(userChoice, computerChoice);
            break;

        case "3-1":
        case "3-2":
            scoreRuns(userChoice, computerChoice);
            break;
        case "3-3":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
        case "3-4":
        case "3-5":
        case "3-6":
            scoreRuns(userChoice, computerChoice);
            break;

        case "4-1":
        case "4-2":
        case "4-3":
            scoreRuns(userChoice, computerChoice);
            break;
        case "4-4":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
        case "4-5":
        case "4-6":
            scoreRuns(userChoice, computerChoice);
            break;

        case "5-1":
        case "5-2":
        case "5-3":
        case "5-4":
            scoreRuns(userChoice, computerChoice);
            break;
        case "5-5":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
        case "5-6":
            scoreRuns(userChoice, computerChoice);
            break;

        case "6-1":
        case "6-2":
        case "6-3":
        case "6-4":
        case "6-5":
            scoreRuns(userChoice, computerChoice);
            break;
        case "6-6":
            batsmanOut(userChoice, batsmanScore);
            batsmanScore = 0;
            break;
    }
}

function hcGame(userChoice) {

    const computerChoice = getComputerChoice();

    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    getWinner(userChoice, computerChoice, batsmanScore);

}

function countdownTimer() {
    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 3;

    countdownNumberEl.textContent = countdown;

    setInterval(function () {
        countdown = --countdown <= 0 ? 3 : countdown;

        countdownNumberEl.textContent = countdown;
    }, 1000);
}

function showHideCountdown() {
    var x = document.getElementById("countdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function main() {

    showHideCountdown();

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    setTimeout(function () { result_p.innerHTML = "Player is Batting first" }, 1000);

    one_div.addEventListener('click', function () {
        //console.log("One was clicked!");
        hcGame("1");
    })

    two_div.addEventListener('click', function () {
        //console.log("Two was clicked!");
        hcGame("2");
    })

    three_div.addEventListener('click', function () {
        //console.log("Three was clicked!");
        hcGame("3");
    })

    four_div.addEventListener('click', function () {
        //console.log("Four was clicked!");
        hcGame("4");
    })

    five_div.addEventListener('click', function () {
        //console.log("Five was clicked!");
        hcGame("5");
    })

    six_div.addEventListener('click', function () {
        //console.log("Six was clicked!");
        hcGame("6");
    })
}

main();