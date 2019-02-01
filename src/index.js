const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const transformButtonsNode = document.getElementById('transform-buttons');

const colors = [
    'red',
    'blue',
    'green',
    'yellow'
];

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButtonNode = document.createElement('button');
    colorButtonNode.textContent = color;
    colorButtonNode.value = color;
    colorButtonNode.classList.add('color-button');

    colorButtonNode.addEventListener('click', function() {
        paint(color);
    });

    colorButtonsNode.appendChild(colorButtonNode);
}

function paint(color) {
    const bodySegment = document.createElement('span');
    bodySegment.classList.add('body-segment', color);
    
    canvasNode.appendChild(bodySegment);
}

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const transformButtonNode = document.createElement('button');
    transformButtonNode.textContent = color;
    transformButtonNode.value = color;
    transformButtonNode.classList.add('transform-button');

    transformButtonNode.addEventListener('click', function() {
        dance(color);
    });

    transformButtonsNode.appendChild(transformButtonNode);
}

function dance(color) {
    const selector = '.body-segment.' + color;
    const bodySegments = document.querySelectorAll(selector);
    const allBodySegments = document.querySelectorAll('.body-segment');

    for(let index = 0; index < allBodySegments.length; index++) {
        allBodySegments[index].classList.remove('dance-segment');
    }

    for(let index = 0; index < bodySegments.length; index++) {
        bodySegments[index].classList.add('dance-segment');
    }
}