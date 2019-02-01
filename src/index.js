// grab parent nodes from html
// console.log after grabbing the node to make sure it actually grabs it
const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');

const colors = [
    'red',
    'blue',
    'green',
    'yellow'
];

// create button elements
// goal is to loop through array, and assign text (textContent), class (class ids), and value to the button
// append button to parent node
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButtonNode = document.createElement('button');
    colorButtonNode.textContent = color;
    colorButtonNode.value = color;
    colorButtonNode.classList.add('color-button', color);

    colorButtonNode.addEventListener('click', function() {
        paint(color);
    });
    colorButtonsNode.appendChild(colorButtonNode);
}

function paint(color) {
    const bodyColor = document.createElement('span');
    bodyColor.classList.add('color-block', color);
    
    canvasNode.appendChild(bodyColor);
}



