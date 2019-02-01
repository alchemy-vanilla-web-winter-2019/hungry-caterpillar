const feedButtons = document.getElementById('feed-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');
const fruitArray = ['Apple', 'Pear', 'Lemon', 'Grape', 'Orange', 'Blueberry'];

function feed(fruit) {
    const section = document.createElement('span');
    bugBody.appendChild(section);
    section.classList.add('section', fruit);
}

function dance(fruit) {
    const dancing = document.querySelectorAll('.dance');
    dancing.forEach(function(element) {
        element.classList.remove('dance');
    });
    
    const section = '.section.' + fruit;
    const selected = document.querySelectorAll(section);
    selected.forEach(function(element) {
        element.classList.add('dance');
    });
}

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.textContent = fruit;
    feedButtons.appendChild(fruitButton);
    fruitButton.classList.add('fruit-button', fruit);

    fruitButton.addEventListener('click', function() {
        feed(fruit);
    });
}

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const danceButton = document.createElement('button');
    danceButton.value = fruit;
    danceButton.textContent = fruit;
    danceButtons.appendChild(danceButton);
    danceButton.classList.add('dance-button', fruit);

    danceButton.addEventListener('click', function() {
        dance(fruit);
    });
}