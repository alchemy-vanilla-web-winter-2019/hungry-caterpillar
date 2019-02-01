const fruitArray = ['apple', 'banana', 'cherry', 'grape'];
const fruitButtons = document.getElementById('fruit-buttons');
const danceButtons = document.getElementById('dance-buttons');
const bugBody = document.getElementById('bug-body');


function clickFruit(fruit) {
    const segment = document.createElement('span');
    segment.classList.add('segment');
    segment.classList.add(fruit);
    bugBody.appendChild(segment);
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
        button.addEventListener('click', function() {clickFunction(fruit)});
    }
}

createButtons(fruitButtons, clickFruit, 'fruit-buttons');
createButtons(danceButtons, clickDance, 'dance-buttons');