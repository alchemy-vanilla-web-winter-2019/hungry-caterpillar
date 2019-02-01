const caterContainer = document.getElementById('caterpillar-container');
const buttonContainer = document.getElementById('feed-button-container');

const fruits = ['plum', 'fig', 'strawberry', 'blackberry'];



for(let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    const feedButton = document.createElement('button');
    buttonContainer.appendChild(feedButton);
    feedButton.textContent = fruit;

    feedButton.addEventListener('click', function() {
        const caterBodySpan = document.createElement('span');
        caterContainer.appendChild(caterBodySpan);
        caterBodySpan.classList.add(fruit + '-span', 'create-span');


    });
}



