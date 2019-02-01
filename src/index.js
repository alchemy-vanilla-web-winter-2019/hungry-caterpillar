const feedButtons = document.getElementById('feed-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');
const clearButtonSection = document.getElementById('clear-button-section');
const fruitArray = ['Apple', 'Pear', 'Lemon', 'Grape', 'Orange', 'Blueberry'];

function feed(fruit) {
    const section = document.createElement('span');
    bugBody.appendChild(section);
    section.classList.add('section', fruit);
}

function clearFun() {
    const fedFruit = document.querySelectorAll('.section');
    fedFruit.forEach(function(element) {
        element.remove();
    });
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
    fruitButton.classList.add('fruit-button', fruit);
    feedButtons.appendChild(fruitButton);

    fruitButton.addEventListener('click', function() {
        feed(fruit);
    });
}

const clear = 'Clear';
const clearButton = document.createElement('button');
clearButton.value = clear;
clearButton.textContent = clear;
clearButton.classList.add(clear);
clearButtonSection.appendChild(clearButton);

clearButton.addEventListener('click', function() {
    clearFun();
});

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const danceButton = document.createElement('button');
    danceButton.value = fruit;
    danceButton.textContent = fruit;
    danceButton.classList.add('dance-button', fruit);
    danceButtons.appendChild(danceButton);

    danceButton.addEventListener('click', function() {
        dance(fruit);
    });
}