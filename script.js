
function computerPlay(){
    let choices = ["Rock", "Paper","Scisscors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(computerPlay());