const fruitButtonsNode = document.getElementById('fruit-buttons');
const canvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons');

const fruits = ['apple', 'kiwi', 'banana', 'cherry'];

for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    const fruitButtonNode = document.createElement('button');

    fruitButtonNode.value = fruit;
    fruitButtonNode.textContent = fruit;
    fruitButtonNode.classList.add(fruit, 'fruit-button');

    fruitButtonNode.addEventListener('click', function(){
        const countSegments = document.querySelectorAll('.body-segment').length;
        if(countSegments < 6) {
            paint(fruit);
        }
    });

    fruitButtonsNode.appendChild(fruitButtonNode);
}


function paint(fruit) {
    const bodySegment = document.createElement('span');
    bodySegment.classList.add('body-segment', fruit);

    canvasNode.appendChild(bodySegment);
}

for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    const danceButtonNode = document.createElement('button');
    danceButtonNode.textContent = fruit;
    danceButtonNode.value = fruit;
    danceButtonNode.classList.add(fruit, 'dance-button');

    danceButtonNode.addEventListener('click', function() {
        console.log(fruit);
        dance(fruit);
    });

    danceButtonsNode.appendChild(danceButtonNode);
}

function dance(fruit) {
    const selector = '.body-segment.' + fruit;
    const bodySegments = document.querySelectorAll(selector);
    const allBodySegments = document.querySelectorAll('.body-segment');

    for(let index = 0; index < allBodySegments.length; index++) {
        allBodySegments[index].classList.remove('dance-segment');

    }

    for(let index = 0; index < bodySegments.length; index++) {
        bodySegments[index].classList.add('dance-segment');
    }
}