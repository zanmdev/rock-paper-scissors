
let playerScore =0;
let computerScore =0;

function computerPlay(){
    let choices = ["ROCK", "PAPER","SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        console.log("Tie Game");
        return;
    }


    if (playerSelection =="ROCK"){
        if(computerSelection =="PAPER"){
            console.log("Computer Wins. Rock beats Paper");
        }else{
            console.log("Player Wins. Rock Beats Scissors");
        }
    }
    else if (playerSelection=="SCISSORS"){
        if(computerSelection == "PAPER"){
            console.log("Player Wins. Scissors beats Paper");
        }else{
            console.log("Comp Wins. Rock beats Scissors");
        }
    }
    else if (playerSelection =="PAPER"){
        if (computerSelection == "ROCK"){
            console.log("Player Wins. Paper beats Rock");
        }else{
            console.log("Comp Wins. Scissors beats Paper");
        }
    }

}