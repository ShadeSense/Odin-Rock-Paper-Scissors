/* Gets a number 0 - 2 and picks a random hand */
function computerPlay(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let pos = options[Math.floor(Math.random() * 3)];
    return pos;
}

/* Gets player's selection and checks if valid */
function playerSelection(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let pos = prompt("Choose: 'Rock', 'Paper', or 'Scissors'");
    pos = pos.toUpperCase();
    var valid = new Boolean(false);
    for(let i = 0; i < 3; i++){
        if(options[i] == pos){
            valid = true;
        }
    }
    const result = document.querySelector('.round-results');
    return((valid==true) ? pos : result.textContent = "Invalid selection");
}

/* Plays a round of rock, paper, scissors */
function playRound(player, computer){
    if(player == computer){
        console.log("It's a tie!");
        return 0;
    }

    let winner = "";
    let playerPow = 0;
    let computerPow = 0;
    const options = ["ROCK", "PAPER", "SCISSORS"];

    /* Determines power of computer's/player's selection */
    for(let i = 0; i < 3; i++){
        if(options[i] == player){playerPow=i;}
        if(options[i] == computer){computerPow=i}
    }

    /*  Due to exactly how rock, paper, scissors is placed in the array,
        it can usually be checked who the winner is by who has the higher number.
        The only time this does not work is if one of them is scissors and the other rock.

        If it is the latter case, even though scissors has a priority of 3, it
        will lose to rock with a priority of 1. Therefore, all that has to be
        done is by swapping the priority which ultimately declares the winner.
    */
    if((playerPow - 1) == computerPow || (computerPow - 1) == playerPow){
        winner = (playerPow < computerPow) ? computer : player;
    }
    else{
        winner = (playerPow < computerPow) ? player : computer;
    }

    if(winner == computer){
        compTotal += 1;
        const result = document.querySelector('.round-results');
        result.textContent = "You lost: " + computer + " beats " + player + "!";
    }
    else{
        playTotal += 1;
        const result = document.querySelector('.round-results');
        result.textContent = "You won: " + player + " beats " + computer + "!";
    }
}

function displayWinner(){
    round += 1;
    const display = document.querySelector('.game-result');
    if(roundCount != 5){
        display.textContent = "Round " + round + ": Computer: " + compTotal + " | Player: " + playTotal;
    }
    else{
        if(compTotal > playTotal){
            display.textContent = "Computer won with " + compTotal + " out of 5 rounds!";
        }
        else if(compTotal < playTotal){
            display.textContent = "Player won with " + playTotal + " out of 5 rounds!";
        }
        else{
            display.textContent = "Game resulted in a tie with " + compTotal + " out of 5 rounds won on both sides!";
        }
        roundCount = 0;
        playTotal = 0;
        compTotal = 0;
        round = 0;
    }
}

/* Keeps track of total rounds and winners*/
let roundCount = 0;
let playTotal = 0;
let compTotal = 0;
let round = 0;

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

btnRock.addEventListener('click', () => {
    let computer = computerPlay();
    playRound("ROCK", computer);
    roundCount += 1;
    displayWinner();
})

btnPaper.addEventListener('click', () => {
    let computer = computerPlay();
    playRound("PAPER", computer);
    roundCount += 1;
    displayWinner();
})

btnScissors.addEventListener('click', () => {
    let computer = computerPlay();
    playRound("SCISSORS", computer);
    roundCount += 1;
    displayWinner();
})