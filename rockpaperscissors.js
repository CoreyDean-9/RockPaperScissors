//generating random number for computer choice
let  x = Math.floor(Math.random() *3) + 1;
console.log(x);

//converting random number into string, may not be necessary
function getComputerChoice(x) {
    switch(x){
        case 1://telling the function what to return
            return "Rock";
        case 2: //telling the function what to return
            return "Paper";
        case 3://telling the function what to return
            return "Scissors";
    }
}
console.log(getComputerChoice(x));



//human stuff
while (true) {
    let userInput = prompt("Please enter your choice : (Rock, Paper, or Scissors): ");
    //if function true break function
    if (getHumanChoice(userInput)){
        break; 
    }
}
function getHumanChoice(userInput) {
        
    switch (userInput.toLowerCase()) {
        case "rock":
            console.log("You chose Rock!")
            return "Rock";
        case "paper":
            console.log("You chose Paper!");
            return "Paper";
        case "scissors":
            console.log("You chose Scissors!");
            return "Scissors";
        default:
             console.log("Invalid Response. Try again!")
             break;
    }
}

//keeping track of score. humanScore, computerScore, # of rounds?
let humanScore = 0;
let computerScore = 0;
let numRounds = 0;

function playRound(getComputerChoice, getHumanChoice) {
    switch (getHumanChoice) {
        case getComputerChoice === "Rock":
            console.log(confirm("There was a tie this round, SHOOT again!"));
            return 
    }

}
playRound(getComputerChoice, getHumanChoice);