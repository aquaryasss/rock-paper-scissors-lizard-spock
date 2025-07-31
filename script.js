const characters = {
    leonard: {
        name: 'Leonard',
        iconSrc: 'images/leonardicon.png',
        quote: "I'm invoking the 'I Win' clause of the Roommate Agreement."
    },

    howard: {
        name: 'Howard',
        iconSrc: 'images/howardicon.png',
        quote: "Time to show Sheldon what a Master's degree can do."
    },

    raj: {
        name: 'Raj',
        iconSrc: 'images/rajicon.png',
        quote: "Let's do this! For Cinnamon."
    }
};

const gameChoices = {
    rock: 'fa-hand-rock',
    paper: 'fa-hand-paper',
    scissors: 'fa-hand-scissors',
    lizard: 'fa-hand-lizard',
    spock: 'fa-hand-spock'
}

let playerCharacter = null;

function showSheldonIntro() { // show the player will go againt sheldon (computer)
    return new Promise(resolve => {
        // show text
        const sheldonText = document.createElement('div');
        sheldonText.id = 'sheldon-text';
        sheldonText.textContent = 'You will go against Sheldon.';
        sheldonText.classList.add('fade-in');
        screen.appendChild(sheldonText);
        setTimeout(() => {
            sheldonText.classList.add('fade-out');
            setTimeout(() => {
                sheldonText.remove();
            }, 500);
        }, 4000);

        // show sheldon icon
        const sheldonIconDiv = document.createElement('div');
        sheldonIconDiv.id = 'sheldon-div';
        sheldonIconDiv.classList.add('fade-in');
        screen.appendChild(sheldonIconDiv);
        setTimeout(() => {
            sheldonIconDiv.classList.add('fade-out');
            setTimeout(() => {
                sheldonIconDiv.remove();
                resolve();
            }, 500);
        }, 4000);
        const sheldonIcon = document.createElement('img');
        sheldonIcon.src = 'images/sheldonicon.png';
        sheldonIcon.classList.add('character');
        sheldonIcon.classList.add('fade-in');
        sheldonIconDiv.appendChild(sheldonIcon);
        setTimeout(() => {
            sheldonIcon.classList.add('fade-out');
            setTimeout(() => {
                sheldonIcon.remove();
            }, 500);
        }, 4000);
    });
}

function showSelectScreen() { // show character options for player
    // show text
    const characterText = document.createElement('div');
    characterText.id = 'character-text';
    characterText.textContent = 'Select a character.';
    characterText.classList.add('fade-in');
    characterText.classList.add('hide-character-screen');
    screen.appendChild(characterText);

    // create main container for three characters
    const charactersContainer = document.createElement('div');
    charactersContainer.id = 'characters-container';
    screen.appendChild(charactersContainer);

    // create the characters
    for(const element in characters){ // loop through each character in the above database object
        const characterData = characters[element];
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character-div', 'fade-in');
        characterDiv.dataset.character = element;
        const characterIcon = document.createElement('img');
        characterIcon.src = characterData.iconSrc;
        characterIcon.classList.add('character');
        characterDiv.appendChild(characterIcon);
        charactersContainer.appendChild(characterDiv);
        characterDiv.addEventListener('click', async (event) => {
            await handleCharacterSelection(event);
            startGame();
        })
    }
}

function handleCharacterSelection(event) {
    return new Promise(resolve => {
        const chosenCharacter = event.currentTarget.dataset.character;
        playerCharacter = characters[chosenCharacter]; // store player's chosen character

        // remove select screen
        document.querySelector('#character-text').remove();
        document.querySelector('#characters-container').remove();

        // display chosen character's text
        const chosenText = document.createElement('div');
        chosenText.id = `${chosenCharacter}-chosen-text`;
        chosenText.textContent = playerCharacter.quote;
        chosenText.classList.add('fade-in');
        screen.appendChild(chosenText);
        setTimeout(() => {
            chosenText.classList.add('fade-out');
            setTimeout(() => {
                chosenText.remove();
                resolve();
            }, 500);
        }, 5000);
    });
}

function startGame(){
    const nameScoreContainer = document.createElement('div'); // main header container  
    nameScoreContainer.id = 'name-score-container';
    
    // player name and score
    const playerContainer = document.createElement('div'); 
    let playerName = document.createElement('div');
    let playerScore = document.createElement('div');
    playerContainer.classList.add('indiv-container');
    playerContainer.id = 'player-container';
    playerName.classList.add('names');
    playerName.textContent = playerCharacter.name;
    playerScore.classList.add('scores');
    playerScore.textContent = 0;
    playerContainer.appendChild(playerName);
    playerContainer.appendChild(playerScore);

    // computer name and score
    const computerContainer = document.createElement('div');
    const computerName = document.createElement('div');
    const computerScore = document.createElement('div');
    computerContainer.classList.add('indiv-container');
    computerContainer.id = 'computer-container';
    computerName.classList.add('names');
    computerName.textContent = 'Sheldon';
    computerScore.classList.add('scores');
    computerScore.textContent = 0;
    computerContainer.appendChild(computerName);
    computerContainer.appendChild(computerScore);

    nameScoreContainer.appendChild(playerContainer);
    nameScoreContainer.appendChild(computerContainer);
    screen.appendChild(nameScoreContainer);

    // game hands 
    const gameHandsContainer = document.createElement('div');
    gameHandsContainer.id = 'game-hands-container';
    const playerHand = document.createElement('i');
    playerHand.id = 'player-hand';
    playerHand.classList.add('fas', 'fa-hand-rock', 'game-hand', 'player-hand');
    const computerHand = document.createElement('i');
    computerHand.id = 'computer-hand';
    computerHand.classList.add('fas', 'fa-hand-rock', 'game-hand', 'computer-hand');

    gameHandsContainer.appendChild(playerHand);
    gameHandsContainer.appendChild(computerHand);
    screen.appendChild(gameHandsContainer);

    // player choices
    const choicesSelection = document.createElement('div');
    choicesSelection.id = 'choices-selection';
    const choicesText = document.createElement('div');
    choicesText.id = 'choices-text';
    choicesText.textContent = 'Make your choice.';
    choicesSelection.appendChild(choicesText);
    const choicesContainer = document.createElement('div');
    choicesContainer.id = 'choices-container';
    for(const choice in gameChoices){
        const icon = document.createElement('i');
        icon.classList.add('fas', gameChoices[choice], 'choice-icon');
        icon.dataset.choice = choice;
        icon.addEventListener('click', () => playRound(choice));
        choicesContainer.appendChild(icon);
    }
    choicesSelection.appendChild(choicesContainer)
    screen.appendChild(choicesSelection);
}

function getComputerChoice(){
    const choices = Object.keys(gameChoices);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    const playerHand = document.querySelector('#player-hand');
    const computerHand = document.querySelector('#computer-hand');
    const choiceIcons = document.querySelectorAll('.choice-icon');

    choiceIcons.forEach(icon => icon.classList.add('disabled'));

    playerHand.classList.add('shaking');
    computerHand.classList.add('shaking');

    playerHand.addEventListener('animationend', () => {
        playerHand.classList.remove('shaking');
        computerHand.classList.remove('shaking');
        playerHand.classList.remove('fa-hand-rock');
        computerHand.classList.remove('fa-hand-rock');
        playerHand.classList.add(gameChoices[playerChoice]);
        computerHand.classList.add(gameChoices[computerChoice]);
        console.log(`You chose ${playerChoice}. Sheldon chose ${computerChoice}`);

        setTimeout(() => {
            playerHand.classList.remove(gameChoices[playerChoice]);
            computerHand.classList.remove(gameChoices[computerChoice]);
            playerHand.classList.add('fa-hand-rock');
            computerHand.classList.add('fa-hand-rock');
            choiceIcons.forEach(icon => icon.classList.remove('disabled'));
        }, 2000);
    }, {once: true});
}

const screen = document.querySelector('#screen');
const startButton = document.querySelector('#start-button');
const hideMainMenu = document.querySelectorAll('.hide-main-menu');
startButton.addEventListener('click', async () => { // if start button is cliked, start the game
    // hide main menu 
    hideMainMenu.forEach(element =>{
        element.classList.add('hidden');
    });

    await showSheldonIntro();
    showSelectScreen();
}); 

