//generating random number for computer choice
let  x = Math.floor(Math.random() *3) + 1;
console.log(x);

//converting random number into string, may not be necessary
function getComputerChoice(x) {
    switch(x){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
        break;
    }
}
console.log(getComputerChoice(x));

//human stuff
while (true) {
    let userInput = prompt("Please enter your choice : (Rock, Paper, or Scissors): ");

    function getHumanChoice(userInput) {
        
        switch (userInput.toLowerCase()) {
            case "rock":
                console.log("You chose Rock!");
                break;
            case "paper":
                console.log("You chose Paper!");
                break;
            case "scissors":
                console.log("You chose Scirrors!");
                break;
            default:
                console.log("Invalid Response. Try again!")
                break;
        }
        
    }
    console.log(getHumanChoice(userInput));
}
//keeping track of score. humanScore, computerScore, # of rounds?
let humanScore = 0;
let computerScore = 0;
let numRounds = 0;

function playRound(getComputerChoice, getHumanChoice) {
    
}