const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const transformNode = document.getElementById('transform-buttons');

const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
];

const imgSrc = [
    '../assets/redfish.png',
    '../assets/pizza.png',
    '../assets/cheese.png',
    '../assets/bluefish.png',
];

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; 
    const colorButtonNode = document.createElement('button'); 
    const imgNode = document.createElement('img'); 
    imgNode.src = imgSrc[index];
    colorButtonNode.value = color;
    colorButtonNode.classList.add(color, 'color-button'); 

    colorButtonNode.addEventListener('click', function() {
        const segmentCount = document.querySelectorAll('.body-segment').length;
        if(segmentCount < 5) {
            paint(color);
        }
    }); 
    
    colorButtonsNode.appendChild(colorButtonNode);
    colorButtonNode.appendChild(imgNode);

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
    transformButtonNode.classList.add('transform-button', color);
                    
    transformButtonNode.addEventListener('click', function() {
        dance(color);
    });                   
    transformNode.appendChild(transformButtonNode);
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

