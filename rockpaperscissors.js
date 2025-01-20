//generating random number for computer choice
let  x= Math.floor(Math.random() *3) + 1;
console.log(x);

//converting random number into string 
function getComputerChoice(x) {
    switch(x){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        break;
    }
}
console.log(getComputerChoice(x));
