const feedButtons = document.getElementById('feed-buttons');
const fruitArray = ['Apple', 'Pear', 'Lemon', 'Grape', 'Orange', 'Blueberry'];

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.textContent = fruit;
    feedButtons.appendChild(fruitButton);
    fruitButton.classList.add('fruit-button', fruit);

}