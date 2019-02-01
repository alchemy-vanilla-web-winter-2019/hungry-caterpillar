const fruitButtonNode = document.getElementById('fruit-buttons');
const canvas = document.getElementById('canvas');
const danceButtonNode = document.getElementById('dance-buttons');


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

//make fruit buttons
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
    if(countSegs < 6){
        const bodySegment = document.createElement('span');
        bodySegment.classList.add('body-segment', color);
        canvas.appendChild(bodySegment);
    }
}

//make dance buttons
for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const danceButton = document.createElement('button');
    danceButton.value = color;
    danceButton.textContent = color;
    danceButton.classList.add(color);


    danceButton.addEventListener('click', function() {
        dance(color);
    });

    danceButtonNode.appendChild(danceButton);
}

function dance(color) {
    const danceSegments = document.querySelectorAll('.body-segment.' + color);
    const allSegments = document.querySelectorAll('.body-segment');

    for(let i = 0; i < allSegments.length; i++) {
        allSegments[i].classList.remove('dance');
    }

    for(let i = 0; i < danceSegments.length; i++) {
        danceSegments[i].classList.add('dance');
    }
}