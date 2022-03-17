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
    return((valid==true) ? pos : console.log("Invalid selection"));
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
        console.log("You lost: " + computer + " beats " + player + "!");
        return "computer";
    }
    else{
        console.log("You won: " + player + " beats " + computer + "!");
        return "player";
    }
}

function game(){
    let compTotal = 0;
    let playTotal = 0;

    for(let i = 0; i < 5; i++){
        let computer = computerPlay();
        let player = playerSelection();
        let round = playRound(player, computer);
        
        if(round == "computer"){
            compTotal += 1;
        }
        else if(round == "player"){
            playTotal += 1;
        }
        else{
            continue;
        }

        console.log("Round " + (i + 1) + ": Computer: " + compTotal + " | Player: " + playTotal);
    }

    if(compTotal > playTotal){
        console.log("Computer wins!");
    }
    else{
        console.log("Player wins!");
    }
}