const feedButtons = document.getElementById('feed-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');
const fruitArray = ['Apple', 'Pear', 'Lemon', 'Grape', 'Orange', 'Blueberry'];

function feed(fruit) {
    const section = document.createElement('span');
    bugBody.appendChild(section);
    section.classList.add('section', fruit);
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