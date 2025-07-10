function showSheldonIntro() {
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

}


const screen = document.querySelector('#screen');
const startButton = document.querySelector('#start-button');
const hideMainMenu = document.querySelectorAll('.hide-main-menu');
startButton.addEventListener('click', () => {
    hideMainMenu.forEach(element =>{
        element.classList.add('hidden');
    });
    showSheldonIntro();
}); 


