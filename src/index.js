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
        console.log(fruitNode);
    });

    fruitButtonsNode.appendChild(fruitNode);

}