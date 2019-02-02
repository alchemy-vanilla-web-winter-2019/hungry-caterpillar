const fruits = ['carrot', 'tomato', 'cucumber', 'eggplant', 'lettuce', 'broccoli'];
const fruitButtonsNode = document.getElementById('fruit-buttons');
const caterpillarNode = document.getElementById('caterpillar');
const danceButtonNode = document.getElementById('dance-button');

//create fruit buttons by looping through fruit array.

for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    const fruitButton = document.createElement('button');

    fruitButtonsNode.appendChild(fruitButton);
    fruitButton.textContent = fruit;
    fruitButton.value = fruit;
    fruitButton.classList.add('fruity-button', fruit);

    
// on button click, create a div to form the caterpillar body
    fruitButton.addEventListener('click', function() {
        const fruitDiv = document.createElement('div');
        caterpillarNode.appendChild(fruitDiv);
        fruitDiv.classList.add('fruit-div', fruit);
    });
}

//create dance button

const danceButton = document.createElement('button');
danceButtonNode.appendChild(danceButton);
danceButton.textContent = 'DANCE!';
danceButton.classList.add('dance-button');

//on dance button click, choose a random class from the array and make it dance



danceButton.addEventListener('click', function() {
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const chosenFruits = document.querySelectorAll('.fruit-div.' + randomFruit);
    const allChosenFruits = document.querySelectorAll('.fruit-div');

    //for(let index = 0; index < chosenFruits.length; index++){allChosenFruits[index].classList.remove('dance'); }

    for(let index = 0; index < chosenFruits.length; index++){
        chosenFruits[index].classList.add('dance');
        console.log(randomFruit);

    }


});





