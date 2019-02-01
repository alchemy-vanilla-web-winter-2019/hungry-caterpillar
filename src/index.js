const fruitButtonsNode = document.getElementById('fruit-buttons');
const canvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons');

const fruits = [
    'apple',
    'kiwi',
    'banana',
    'cherry'
];

for(let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    const fruitNode = document.createElement('button');

    fruitNode.value = fruit;
    fruitNode.textContent = fruit;
    fruitNode.classList.add(fruit, 'fruit-button');
    fruitNode.id = fruit;

    fruitNode.addEventListener('click', function(){
        paint(fruit);
    });

    fruitButtonsNode.appendChild(fruitNode);

}

function paint(fruit) {
    const bodySegment = document.createElement('span');

    bodySegment.classList.add(fruit, 'fruit-button');

    canvasNode.appendChild(bodySegment);
    console.log(bodySegment);
}