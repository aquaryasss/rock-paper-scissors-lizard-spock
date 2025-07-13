const characters = {
    leonard: {
        name: 'Leonard',
        iconSrc: 'images/leonardicon.png',
        quote: "I'm invoking the 'I Win' clause of the Roommate Agreement."
    },

    howard: {
        name: 'howard',
        iconSrc: 'images/howardicon.png',
        quote: "Time to show Sheldon what a Master's degree can do."
    },

    raj: {
        name: 'Raj',
        iconSrc: 'images/rajicon.png',
        quote: "Let's do this! For Cinnamon."
    }
};

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
        characterDiv.addEventListener('click', handleCharacterSelection);
    }
}

function handleCharacterSelection(event) {
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
        }, 500);
    }, 5000);
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

