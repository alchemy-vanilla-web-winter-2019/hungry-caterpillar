const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const transformNode = document.getElementById('transform-buttons');

const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
];

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //the color array index = color
    const colorButtonNode = document.createElement('button'); //colorButtonNode is a new variable and we created a button element that it corresponds to
    colorButtonNode.textContent = color; //need to change this to image
    colorButtonNode.value = color; //the color buttons will have a value of each color
    colorButtonNode.classList.add('color-button', color); //adding the 'color-button' and color class to the colorButtonNodes

    colorButtonNode.addEventListener('submit', function() {
        paint(color);
    }); 
    
    console.log(colorButtonNode);
    colorButtonsNode.appendChild(colorButtonNode);
}

function paint(color) {
    const bodySegment = document.createElement('span');
    bodySegment.classList.add('body-segment', color);
    canvasNode.appendChild(bodySegment);
}

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //the color array index = color
    const transformButtonNode = document.createElement('button'); //transormNode is a new variable and we created a button element that it corresponds to
    transformButtonNode.textContent = color; //need to change this to image
    transformButtonNode.value = color; //the color buttons will have a value of each color
    transformButtonNode.classList.add('transform-button', color); //adding the 'color-button' and color class to the colorButtonNodes
                    
    transformButtonNode.addEventListener('submit', function() {
        dance(color);
    });                   
    console.log(transformNode);
    transformNode.appendChild(transformButtonNode);
}


