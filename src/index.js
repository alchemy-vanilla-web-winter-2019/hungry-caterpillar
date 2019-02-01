const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');

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



