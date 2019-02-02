const fruitsList = [
    'banana',
    'apple',
    'orange',
    'grape'
];

const fruitButtonsAll = document.getElementById('fruit-buttons');
const hippoBody = document.getElementById('hippo-body');
const transformButtonsAll = document.getElementById('transform-buttons');


for(let i = 0; i < fruitsList.length; i++) {
    let fruit = fruitsList[i];
    console.log(fruit);

    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.classList.add('fruit-button', fruit);
    fruitButton.textContent = fruit;

    fruitButton.addEventListener('click', function() {
        paint(fruit);
    });

    fruitButtonsAll.appendChild(fruitButton);
}

for(let i = 0; i < fruitsList.length; i++) {
    let fruit = fruitsList[i];
    const transformButton = document.createElement('button');
    transformButton.value = fruit;
    transformButton.classList.add('transform-button', fruit);
    transformButton.textContent = fruit;

    transformButton.addEventListener('click', function() {
        resetShape();
        circleTransform(fruit);
    });

    transformButtonsAll.appendChild(transformButton);
}

function paint(fruit) {
    const fruitPiece = document.createElement('span');
    fruitPiece.classList.add('fruit-piece', fruit);

    hippoBody.appendChild(fruitPiece);
}

function circleTransform(fruit) {
    const selector = '.fruit-piece.' + fruit;
    const fruitCircles = document.querySelectorAll(selector);

    for(let i = 0; i < fruitCircles.length; i++) {
        fruitCircles[i].classList.add('transform');
    }
}

function resetShape() {
    const fruitCircles = document.querySelectorAll('.fruit-piece');

    for(let i = 0; i < fruitCircles.length; i++) {
        fruitCircles[i].classList.remove('transform');
    }
}