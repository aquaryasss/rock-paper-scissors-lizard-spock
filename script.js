function showSheldonIntro() {
    return new Promise(resolve => {
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

function showSelectScreen() {
    const characterText = document.createElement('div');
    characterText.id = 'character-text';
    characterText.textContent = 'Select a character.';
    characterText.classList.add('fade-in');
    screen.appendChild(characterText);
}

function showCharacters() {
    const charactersContainer = document.createElement('div');
    charactersContainer.id = 'characters-container';
    screen.appendChild(charactersContainer);
    const leonardIconDiv = document.createElement('div');
    const howardIconDiv = document.createElement('div');
    const rajIconDiv = document.createElement('div');
    leonardIconDiv.classList.add('character-div');
    leonardIconDiv.classList.add('fade-in');
    howardIconDiv.classList.add('character-div');
    howardIconDiv.classList.add('fade-in');
    rajIconDiv.classList.add('character-div');
    rajIconDiv.classList.add('fade-in');
    charactersContainer.appendChild(leonardIconDiv);
    charactersContainer.appendChild(howardIconDiv);
    charactersContainer.appendChild(rajIconDiv);
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
startButton.addEventListener('click', async () => {
    hideMainMenu.forEach(element =>{
        element.classList.add('hidden');
    });
    await showSheldonIntro();
    showSelectScreen();
    showCharacters();
}); 


