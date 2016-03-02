var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    document.write("<h1>The result is a tie!</h1>");
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        document.write("<h1>you win with rock</h1>");
    } else {
        document.write("<h1>paper wins</h1>");
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        document.write("<h1>you win with paper</h1>");
    } else {
        if(choice2 === "scissors") {
            document.write("<h1>scissors wins</h1>");
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        document.write("<h1>rock wins</h1>");
    } else {
        if(choice2 === "paper") {
            document.write("<h1>you win with scissors</h1>");
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
