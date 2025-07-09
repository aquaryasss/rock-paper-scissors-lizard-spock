const startButton = document.querySelector('#start-button');
const hideMainMenu = document.querySelectorAll('.hide-main-menu');
startButton.addEventListener('click', () => {
    hideMainMenu.forEach(element =>{
        element.classList.add('hidden');
    });
}); 
