const fruitArray = ['apple', 'banana', 'cherry', 'grape'];
const fruitButtons = document.getElementById('fruit-buttons');
const danceButtons = document.getElementById('dance-buttons');
const bugBody = document.getElementById('bug-body');


function clickFruit(fruit) {
    const segment = document.createElement('span');
    segment.classList.add('segment');
    segment.classList.add(fruit);
    bugBody.appendChild(segment);
}

function clickDance(fruit) {
    let selector = '.dance';
    let selected = document.querySelectorAll(selector);
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.remove('dance');
    }
    selector = '.segment.' + fruit;
    selected = document.querySelectorAll(selector);
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.add('dance');
    }
}

function createButtons(parent, clickFunction, buttonClass) {
    for(let i = 0; i < fruitArray.length; i++) {
        const fruit = fruitArray[i];
        const button = document.createElement('button');

        button.textContent = fruit;
        button.value = fruit;
        button.classList.add(buttonClass, fruit);
        parent.appendChild(button);
        button.addEventListener('click', function() {clickFunction(fruit)});
    }
}

createButtons(fruitButtons, clickFruit, 'fruit-buttons');
createButtons(danceButtons, clickDance, 'dance-buttons');