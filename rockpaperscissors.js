//generating random number for computer choice
// let  x = Math.floor(Math.random() *3) + 1;
// console.log(x);

//converting random number into string, may not be necessary
function getComputerChoice() {
    let  x = Math.floor(Math.random() *3) + 1;
    switch(x){
        case 1://telling the function what to return
            return "rock";
        case 2: //telling the function what to return
            return "paper";
        case 3://telling the function what to return
            return "scissors";
    }
}
// console.log(getComputerChoice(x));

//human stuff
function getHumanChoice() {
    // prompting user
    let userInput = prompt("Please enter Rock, Paper, or Scissors:").toLowerCase();
    //if input is valid (RPS) return input
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log("You chose: " + userInput);
        return userInput;
    }
    else {
        //if input is not valid (not RPS) return to function
        console.log("That's literally not Rock, Paper, or Scissors...");
        return getHumanChoice();
    }
}

//keeping track of score. humanScore, computerScore, # of rounds?
let humanScore = 0;
let computerScore = 0;
let tiedScore = 0;
let numRounds = 0;

function playRound(humanChoice, computerChoice) {
    console.log('Computer Choice: ' + computerChoice );

    if (humanChoice === computerChoice) {
        console.log("This round is a tie");
        tiedScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice == "paper"))
        {
            console.log("You win this round! Nice!");
            humanScore++;
        }
        else{
            console.log("The computer wins this round!");
            computerScore++;
        }
}
function playGame() {
    for (i = 0; i < 5; i++) {
        console.log("\nRound: " + i + 1);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Your Score: " + humanScore + "\n" + "Computer Score: " + computerScore + "\n" + "Tied Rounds: " + tiedScore );
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer had bested you my friend...skill issue!");
    } else {
        console.log("A TIE, you've met your match!");
    }
}
playGame();
