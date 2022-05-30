
function computerPlay(){
    let choices = ["ROCK", "PAPER","SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function round(playerSelection){
    computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();

    
    if (playerSelection === computerSelection){
        results.textContent ="Tie Game";
        results.style.backgroundColor = "Grey";
        return 0;
        
    }


    if (playerSelection =="ROCK"){
        if(computerSelection =="PAPER"){
            results.textContent = "Computer Wins. Rock beats Paper";
            results.style.backgroundColor ="Red"

            
            return -1;
        }else{
            results.textContent = "Player Wins. Rock Beats Scissors";
            results.style.backgroundColor ="Green"
            return 1;
        }
    }
    else if (playerSelection=="SCISSORS"){
        if(computerSelection == "PAPER"){
            results.textContent ="Player Wins. Scissors beats Paper";
            results.style.backgroundColor ="Green"
            return 1;
        }else{
            results.textContent ="Computer Wins. Rock beats Scissors";
            results.style.backgroundColor ="Red"
            return -1;
        }
    }
    else if (playerSelection =="PAPER"){
        if (computerSelection == "ROCK"){
            results.textContent ="Player Wins. Paper beats Rock";
            results.style.backgroundColor ="Green"
            return 1;
        }else{
            results.textContent ="Computer Wins. Scissors beats Paper";
            results.style.backgroundColor ="Red"
            return -1;
        }
    }  
}

function game(winner){
    console.log(winner);
     
     if (winner == 1){
         playerScore++
         pScore.textContent = playerScore;
     }else if (winner == -1){
        computerScore++
        cScore.textContent = computerScore;
     }

     if(playerScore == 5 || computerScore == 5){
        //Stop game and call for winner
     }


}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const results = document.querySelector(".result");

const pScore= document.querySelector(".player-score");
const cScore = document.querySelector(".cpu-score");

rock.addEventListener("click",function(){
    game(round("Rock"));
});

paper.addEventListener("click",function(){
    game(round("Paper"));
});

scissors.addEventListener("click",function(){
    game(round("Scissors"));
});
