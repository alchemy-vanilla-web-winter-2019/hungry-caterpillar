const fruitArray = ['apple', 'banana', 'cherry', 'grape'];
const fruitButtons = document.getElementById('fruit-buttons');
const danceButtons = document.getElementById('dance-buttons');

function clickFruit() {
    console.log('fruit clicked');
}

function clickDance() {

}

function createButtons(parent, clickFunction, buttonClass) {
    for(let i = 0; i < fruitArray.length; i++) {
        const fruit = fruitArray[i];
        const button = document.createElement('button');
        button.textContent = fruit;
        button.value = fruit;
        button.classList.add(buttonClass);
        parent.appendChild(button);
        button.addEventListener('click', clickFunction);
    }
}

createButtons(fruitButtons, clickFruit, 'fruit-buttons');
createButtons(danceButtons, clickDance, 'dance-buttons');