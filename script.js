let humanScore = 0;
let computerScore = 0;

function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const result = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if(result == 1)
        return 'Rock';
    else if(result == 2)
        return 'Paper';
    else if(result == 3)
        return "Scissors";
    else if(result == 4)
        return "Lizard";
    else if(result == 5) 
        return "Spock";
}

function getHumanChoice(){
    const choice = prompt("Please choose among Rock, Paper, Scissors, Lizard, and Spock: ");
    return choice;
}

function playRound(humanChoice, computerChoice){
    console.log("Computer chose " + computerChoice + "!");
    const insensitiveHumanChoice = humanChoice.toLowerCase();
    if(insensitiveHumanChoice == "rock")
        humanChoice = "Rock";
    else if(insensitiveHumanChoice == "paper")
        humanChoice = "Paper";
    else if(insensitiveHumanChoice == "scissors")
        humanChoice = "Scissors";
    else if(insensitiveHumanChoice == "lizard")
        humanChoice = "Lizard";
    else if(insensitiveHumanChoice == "spock")
        humanChoice = "Spock";

    console.log("You chose " + humanChoice + "!");


    if((humanChoice == "Scissors" && computerChoice == "Paper") || (humanChoice == "Scissors" && computerChoice == "Lizard") ||
        (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Spock") ||
        (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Rock" && computerChoice == "Lizard") ||
        (humanChoice == "Lizard" && computerChoice == "Spock") || (humanChoice == "Lizard" && computerChoice == "Paper") ||
        (humanChoice == "Spock" && computerChoice == "Scissors") || (humanChoice == "Spock" && computerChoice == "Rock")
    ){
        humanScore++;
        console.log('You win!');
    }

    if((computerChoice == "Scissors" && humanChoice == "Paper") || (computerChoice == "Scissors" && humanChoice == "Lizard") ||
        (computerChoice == "Paper" && humanChoice == "Rock") || (computerChoice == "Paper" && humanChoice == "Spock") ||
        (computerChoice == "Rock" && humanChoice == "Scissors") || (computerChoice == "Rock" && humanChoice == "Lizard") ||
        (computerChoice == "Lizard" && humanChoice == "Spock") || (computerChoice == "Lizard" && humanChoice == "Paper") ||
        (computerChoice == "Spock" && humanChoice == "Scissors") || (computerChoice == "Spock" && humanChoice == "Rock")
    ){
        computerScore++;
        console.log('You lose!');
    }

    if((humanChoice == "Rock" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Paper") ||
        (humanChoice == "Scissors" && computerChoice == "Scissors") || (humanChoice == "Lizard" && computerChoice == "Lizard") ||
        (humanChoice == "Spock" && computerChoice == "Spock")
    ){
        console.log("It's a tie!");
    }

}

function playGame(){
    humanScore = computerScore = 0;
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(1, 5);
        playRound(humanSelection, computerSelection);
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    console.log("Your final score: " + humanScore);
    console.log("Computer final score: " + computerScore);
}

playGame();

