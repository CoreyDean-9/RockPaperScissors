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
// let userInput = prompt("Please enter your choice : (Rock, Paper, or Scissors): ");

while (true) {
    let userInput = prompt("Please enter your choice : (Rock, Paper, or Scissors): ");
    //if function true break function?
    if (getHumanChoice(userInput)){
        break;
    }
}
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

//keeping track of score. humanScore, computerScore, # of rounds?
// let humanScore = 0;
// let computerScore = 0;
// let numRounds = 0;

// function playRound(getComputerChoice, getHumanChoice) {
//     switch (userInput = Rock){
//         case x = Rock:
//             console.log(confirm("There was a tie this round, SHOOT again!"));
//     }

// }
// playRound(x, userInput);