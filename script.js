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

    // create container for each character
    const leonardIconDiv = document.createElement('div');
    const howardIconDiv = document.createElement('div');
    const rajIconDiv = document.createElement('div');

    // add id and classes for each character
    leonardIconDiv.id = 'leonard-div';
    leonardIconDiv.classList.add('character-div');
    leonardIconDiv.classList.add('fade-in');
    leonardIconDiv.classList.add('hide-character-screen');

    howardIconDiv.id = 'howard-div';
    howardIconDiv.classList.add('character-div');
    howardIconDiv.classList.add('fade-in');
    howardIconDiv.classList.add('hide-character-screen');

    rajIconDiv.id = 'raj-div';
    rajIconDiv.classList.add('character-div');
    rajIconDiv.classList.add('fade-in');
    rajIconDiv.classList.add('hide-character-screen');

    // add individual containers to the main container
    charactersContainer.appendChild(leonardIconDiv);
    charactersContainer.appendChild(howardIconDiv);
    charactersContainer.appendChild(rajIconDiv);

    // add images of characters
    const leonardIcon = document.createElement('img');
    const howardIcon = document.createElement('img');
    const rajIcon = document.createElement('img');

    leonardIcon.src = 'images/leonardicon.png';
    leonardIcon.classList.add('character');
    leonardIcon.classList.add('fade-in');
    leonardIconDiv.appendChild(leonardIcon);

    howardIcon.src = 'images/howardicon.png';
    howardIcon.classList.add('character');
    howardIcon.classList.add('fade-in');
    howardIconDiv.appendChild(howardIcon);

    rajIcon.src = 'images/rajicon.png';
    rajIcon.classList.add('character');
    rajIcon.classList.add('fade-in');
    rajIconDiv.appendChild(rajIcon);
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

    // action when either of the characters are chosen by the player
    const leonardIconDiv = document.querySelector('#leonard-div');
    const howardIconDiv = document.querySelector('#howard-div');
    const rajIconDiv = document.querySelector('#raj-div');
    const characterText = document.querySelector('#character-text');
    const charactersContainer = document.querySelector('#characters-container');

    leonardIconDiv.addEventListener('click', () => {
        characterText.remove();
        charactersContainer.remove();
        const leonardChosen = document.createElement('div');
        leonardChosen.id = 'leonard-chosen-text';
        leonardChosen.textContent = "I'm invoking the 'I Win' clause of the Roommate Agreement.";
        leonardChosen.classList.add('fade-in');
        screen.appendChild(leonardChosen);
        setTimeout(() => {
            leonardChosen.classList.add('fade-out');
            setTimeout(() => {
                leonardChosen.remove();
            }, 500);
        }, 5000);
    });

    howardIconDiv.addEventListener('click', () => {
        characterText.remove();
        charactersContainer.remove();
        const howardChosen = document.createElement('div');
        howardChosen.id = 'howard-chosen-text';
        howardChosen.textContent = "Time to show Sheldon what a Master's degree can do.";
        howardChosen.classList.add('fade-in');
        screen.appendChild(howardChosen);
        setTimeout(() => {
            howardChosen.classList.add('fade-out');
            setTimeout(() => {
                howardChosen.remove();
            }, 500);
        }, 5000);
    });

    rajIconDiv.addEventListener('click', () => {
        characterText.remove();
        charactersContainer.remove();
        const rajChosen = document.createElement('div');
        rajChosen.id = 'raj-chosen-text';
        rajChosen.textContent = "Let's do this! For Cinnamon!";
        rajChosen.classList.add('fade-in');
        screen.appendChild(rajChosen);
        setTimeout(() => {
            rajChosen.classList.add('fade-out');
            setTimeout(() => {
                rajChosen.remove();
            }, 500);
        }, 5000);
    });

}); 

