// This is the app.js file

var userScore = 0;
var computerScore = 0;
var batsmanScore = 0;
var batsman = null;
var target = null;
var winCounter = 0;
var loseCounter = 0;
var firstBatting = null;

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

const heads_div = document.getElementById("heads");
const tails_div = document.getElementById("tails");

const bat_div = document.getElementById("bat");
const bowl_div = document.getElementById("bowl");

function getComputerChoice() {
    const choices = ['1', '2', '3', '4', '5', '6'];
    const randomNumber = Math.floor(Math.random() * 6);
    return choices[randomNumber];
}

function coinToss() {

    const choices = ["heads", "tails"];
    const randomNumber = Math.floor(Math.random() * 2);

    return choices[randomNumber];
}

function getComputerTossChoice() {
    const choices = ["bat", "bowl"];
    const randomNumber = Math.floor(Math.random() * 2);

    return choices[randomNumber];
}

function showWinnerOptions() {

    bat_div.style.display = "inline-block";
    bowl_div.style.display = "inline-block";
}

function showGameOptions() {

    one_div.style.display = "inline-block";
    two_div.style.display = "inline-block";
    three_div.style.display = "inline-block";
    four_div.style.display = "inline-block";
    five_div.style.display = "inline-block";
    six_div.style.display = "inline-block";

}

function hideGameOptions() {

    one_div.style.display = "none";
    two_div.style.display = "none";
    three_div.style.display = "none";
    four_div.style.display = "none";
    five_div.style.display = "none";
    six_div.style.display = "none";

}

function hideWinnerOptions() {

    bat_div.style.display = "none";
    bowl_div.style.display = "none";

}

function hideTossOptions() {

    heads_div.style.display = "none";
    tails_div.style.display = "none";
}

function showTossOptions() {

    heads_div.style.display = "inline-block";
    tails_div.style.display = "inline-block";
}

function tossManager(userCoin) {

    var toss = coinToss();

    if (userCoin === "bat") {

        hideWinnerOptions();
        showGameOptions();

        batsman = 'player';
        firstBatting = 'player';

        result_h3.innerHTML = "Player 1 chose to bat.";
        result_p.innerHTML = "You're going down!";

    } else if (userCoin === "bowl") {

        hideWinnerOptions();
        showGameOptions();

        batsman = 'computer';
        firstBatting = 'computer';

        result_h3.innerHTML = "Player 1 chose to bowl.";
        result_p.innerHTML = "You're going down!";

    } else if (toss === userCoin) {
        result_h3.innerHTML = "Player 1 has won the toss!";
        result_p.innerHTML = "Bowl or Bat?";

        hideTossOptions();
        showWinnerOptions();

    } else {

        var compChoice = getComputerTossChoice();
        result_h3.innerHTML = "Computer won the toss!";
        result_p.innerHTML = "Computer chooses to " + compChoice + " first!";
        
        if (compChoice === 'bat') {
            batsman = 'computer';
            firstBatting = 'computer';
        } else {
            batsman = 'player';
            firstBatting = 'player';
        }

        hideTossOptions();
        showGameOptions();
    }
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
    batsman = null;
    target = null;
    firstBatting = null;

    disableButtons();
    setTimeout(function() {hideGameOptions();}, 400);
    showHideCountdown();

    setTimeout(function () {
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
    }, 5000);

    setTimeout(function () {
        enableButtons();
        showHideCountdown();
        showTossOptions();
        result_h3.innerHTML = "Good Job on that match.";
        result_p.innerHTML = "Now pick a side.";
    }, 5000);

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

function checkForWinner() {
    if (batsman === 'player' && target !== null && batsmanScore >= target) return 'playerWins';
    if (batsman === 'computer' && target !== null && batsmanScore >= target) return 'computerWins';
    return false
}

function userWins() {
    console.log("USER WINS!");

    var diff = target - batsmanScore;
    console.log("DIFF IS: " + diff)
    console.log("TARG IS: " + target)
    console.log("BATS IS: " + batsmanScore)
    if (diff < 1) {
        diff = diff * -1;
    }

    if (diff === 0) {
        diff = 1;
    }

    result_h3.innerHTML = "You Win. 💩";

    if (diff === 1) {
        result_p.innerHTML = "Player won by " + diff + " run!";
    } else {
        result_p.innerHTML = "Player won by " + diff + " runs!";
    }


    winCounter++;

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    gameReset();

}

function computerWins() {
    console.log("COMPUTER WINS!");

    var diff = target - batsmanScore;
    console.log("DIFF IS: " + diff)
    console.log("TARG IS: " + target)
    console.log("BATS IS: " + batsmanScore)
    if (diff < 1) {
        diff = diff * -1;
    }

    if (diff === 0) {
        diff = 1;
    }


    result_h3.innerHTML = "You Lose! 🔥"
    if (diff === 1) {
        result_p.innerHTML = "Computer won by " + diff + " run!";
    } else {
        result_p.innerHTML = "Computer won by " + diff + " runs!";
    }

    loseCounter++;

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    gameReset();
}

function draw() {

    if (target !== null && (batsmanScore === target - 1) && (firstBatting !== batsman)) {
        console.log("TARGET FROM DRAW IS: " + target)
        console.log("BATSCORE FROM DRAW IS: " + batsmanScore)
        console.log("IT IS A DRAW.");
        return 'draw';
    } else {
        return 'nope';
    }
}

function batsmanOut(userChoice) {

    console.log("Batsman Out.");

    var duckOut = checkDuckOut();

    if (draw() === 'draw') {
        result_h3.innerHTML = "Draw!"
        result_p.innerHTML = "No points awarded for this match.";
        gameReset();
    } else {
        if (target !== null && batsman === 'player') {

            const userChoice_div = document.getElementById(userChoice);
            userChoice_div.classList.add('red-glow');
            setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 500);

            if (checkForWinner() === 'playerWins') {
                userWins();
            } else {
                computerWins();
            }
        } else if (target !== null && batsman === 'computer') {

            const userChoice_div = document.getElementById(userChoice);
            userChoice_div.classList.add('green-glow');
            setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 500);

            if (checkForWinner() === 'computerWins') {
                computerWins();
            } else {
                userWins();
            }
        } else {
            target = batsmanScore + 1;

            batsmanScore = 0;

            if (batsman === 'player') {

                const userChoice_div = document.getElementById(userChoice);
                userChoice_div.classList.add('red-glow');
                setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 500);
                batsman = 'computer'

                console.log("Computer is now batting.");
            } else {

                const userChoice_div = document.getElementById(userChoice);
                userChoice_div.classList.add('green-glow');
                setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 500);
                batsman = 'player'

                console.log("Player is now batting.");
            }

            if (duckOut == 'duck') {
                result_h3.innerHTML = "🦆 OUT!"
                result_p.innerHTML = batsman + " needs 1 run to win!";
            } else {
                result_h3.innerHTML = "Howazzat!"
                result_p.innerHTML = "Target: " + target;
            }
            console.log(batsman + " needs " + target + " to win.");
        }
    }
}

function scoreRuns(userChoice, computerChoice) {

    if (batsman === 'player') {
        userScore += parseInt(userChoice);
        result_h3.innerHTML = converter(userChoice);

        // if (parseInt(userChoice) === 4 || parseInt(userChoice) === 6) {
        const userChoice_div = document.getElementById(userChoice);
        userChoice_div.classList.add('green-glow');
        setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 500);
        //}

        batsmanScore = userScore;
        userScore_span.innerHTML = userScore;
        console.log("Player Score: " + userScore);
        //console.log("Batsman Score: " + batsmanScore);
        if (checkForWinner() === 'playerWins') {
            userWins();
        }
    } else {
        computerScore += parseInt(computerChoice);
        result_h3.innerHTML = converter(computerChoice);

        const userChoice_div = document.getElementById(userChoice);
        userChoice_div.classList.add('red-glow');
        setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 500);

        batsmanScore = computerScore;
        computerScore_span.innerHTML = computerScore;
        console.log("Computer Score: " + computerScore);
        //console.log("Batsman Score: " + batsmanScore);
        if (checkForWinner() === 'computerWins') {
            computerWins();
        }
    }
}

function getWinner(userChoice, computerChoice) {

    switch (userChoice + "-" + computerChoice) {

        case "1-1":
            batsmanOut(userChoice);
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
            batsmanOut(userChoice);
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
            batsmanOut(userChoice);
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
            batsmanOut(userChoice);
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
            batsmanOut(userChoice);
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
            batsmanOut(userChoice);
            batsmanScore = 0;
            break;
    }
}

function hcGame(userChoice) {

    const computerChoice = getComputerChoice();

    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    getWinner(userChoice, computerChoice);

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
    hideGameOptions();
    hideWinnerOptions();
    showTossOptions();

    result_h3.innerHTML = "Ready Player One.";
    result_p.innerHTML = "Pick a side.";

    win_counter_message_p.innerHTML = " Won: " + winCounter + " &nbsp; Lost: " + loseCounter;

    //setTimeout(function () { result_p.innerHTML = "Player is Batting first" }, 1000);

    heads_div.addEventListener('click', function () {
        //console.log("Heads was chosen!")
        tossManager("heads");
    })

    tails_div.addEventListener('click', function () {
        //console.log("Tails was chosen!")
        tossManager("tails");
    })

    bat_div.addEventListener('click', function () {
        //console.log("Player chose to bat")
        tossManager("bat");
    })

    bowl_div.addEventListener('click', function () {
        //console.log("Player chose to bat")
        tossManager("bowl");
    })

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