

function computerPlay(){
    let choices = ["ROCK", "PAPER","SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        console.log("Tie Game");
        return 0;
        
    }


    if (playerSelection =="ROCK"){
        if(computerSelection =="PAPER"){
            console.log("Computer Wins. Rock beats Paper");
            return -1;
        }else{
            console.log("Player Wins. Rock Beats Scissors");
            return 1;
        }
    }
    else if (playerSelection=="SCISSORS"){
        if(computerSelection == "PAPER"){
            console.log("Player Wins. Scissors beats Paper");
            return 1;
        }else{
            console.log("Comp Wins. Rock beats Scissors");
            return -1;
        }
    }
    else if (playerSelection =="PAPER"){
        if (computerSelection == "ROCK"){
            console.log("Player Wins. Paper beats Rock");
            return 1;
        }else{
            console.log("Comp Wins. Scissors beats Paper");
            return -1;
        }
    }  
}

function game(){
    let playerScore = 0;
    let computerScore =0;

    for(let i = 0; i<5; i++){
     let playerChoice = prompt("Choose Rock, Paper or Scissors");
     let winner = round(playerChoice,computerPlay());
     
     if (winner == 1){
         
         playerScore++
     }else if (winner == -1){
        computerScore++
     }

    }
    console.log("P:" +playerScore + " | C:" + computerScore);
    if(playerScore > computerScore){
        console.log("Player Won the Game");
    }else if(playerScore < computerScore){
        console.log("Sorry, you lost the game");
    }else {
        console.log("You Tied");
    }
    
}
game();