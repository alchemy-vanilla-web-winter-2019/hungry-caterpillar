const caterContainer = document.getElementById('caterpillar-container');
const buttonContainer = document.getElementById('feed-button-container');
const feedButton = document.createElement('button');

buttonContainer.appendChild(feedButton);
feedButton.textContent = 'FEED ME';

feedButton.addEventListener('click', function() {
    const caterBodySpan = document.createElement('span');
    caterContainer.appendChild(caterBodySpan);
    caterBodySpan.classList.add('green');



});
