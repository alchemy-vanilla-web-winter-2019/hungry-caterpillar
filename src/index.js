const caterContainer = document.getElementById('caterpillar-container');
const buttonContainer = document.getElementById('feed-button-container');
const danceButtonContainer = document.getElementById('dance-button-container');

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


const danceButton = document.createElement('button');
danceButtonContainer.appendChild(danceButton);
danceButton.textContent = 'dance!!';



danceButton.addEventListener('click', function() {
    const spanArray = document.querySelectorAll('.create-span');

    for(let index = 0; index < spanArray.length; index += 2) {
        spanArray[index].classList.add('make-dance');
        setTimeout(function() {
            spanArray[index].classList.remove('make-dance');

        }, 1000);
    }

});





