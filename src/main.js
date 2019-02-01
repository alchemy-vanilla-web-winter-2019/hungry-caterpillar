const fruitButtonNode = document.getElementById('fruit-buttons');
const canvas = document.getElementById('canvas');


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
        growCaterpillar(color);
    });

    fruitButtonNode.appendChild(fruitButton);
}

function growCaterpillar(color) {
    const countSegs = document.querySelectorAll('.body-segment').length;
    console.log(countSegs);
    if(countSegs < 6){
        const bodySegment = document.createElement('span');
        bodySegment.classList.add('body-segment', color);
        canvas.appendChild(bodySegment);
    }
}