const fruitButtonNode = document.getElementById('fruit-buttons');
const head = document.getElementById('head');


const colors = [
    'red',
    'blue',
    'green',
    'purple'
];

const fruitImgs = [
    '../assets/apple.png',
    '../assets/blueberry.jpg',
    '../assets/kiwi.jpeg',
    '../assets/grapes.png'
];

for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const fruitButton = document.createElement('button');
    fruitButton.value = color;

    const fruitImage = document.createElement('img');
    fruitImage.src = fruitImgs[i];
    fruitButton.appendChild(fruitImage);

    fruitButton.addEventListener('click', function() {
        growCaterpiller(color);
        console.log(color);
    });

    fruitButtonNode.appendChild(fruitButton);
}

function growCaterpillar(color) {
    const bodySegment = document.createElement('span');
    bodySegment.classList.add('body-segment', color);
}