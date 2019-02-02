//title the page on html-DONE

//create array of fruits
const fruits = ['apple', 'banana', 'orange'];

//DOM fruit buttons
const fruitButtonsNode = document.getElementById('fruit-buttons');

//DOM canvas
const canvasNode = document.getElementById('canvas');


//insert the head of caterpillar
const image = document.getElementById('cater-head');

//create button in js
    // const fruitButton = document.createElement('button');
    // fruitButtonsNode.appendChild(fruitButton);
    // fruitButton.textContent = ('fruit');
    // fruitButton.value = fruits;

//link button array to fruit type
for(let index = 0; index < fruits.length; index++) {
    let fruitArray = fruits[index];
    //console.log(fruitArray, 'this is working');
    
    //button array
    const fruitButton = document.createElement('button');
    fruitButtonsNode.appendChild(fruitButton);
    fruitButton.textContent = (fruitArray);
    fruitButton.value = fruitArray;
    fruitButton.classList.add('fruit-button', fruitArray);
    //console.log(fruitButton, 'what the hell?')
    fruitButton.addEventListener('click', function() {
        paint(fruitArray);
    });
}
function paint(eatFruit) {
    const fruitSpan = document.createElement('span');
    canvasNode.appendChild(fruitSpan);
    fruitSpan.classList.add(eatFruit, 'fruit-span');
}
