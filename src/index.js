const meatNodes = document.getElementById('meat-buttons');

const colors = [
    'black',
    'red',
    'yellow',
    'white'
]; 

const canvasNode = document.getElementById('canvas');
const wiggleNode = document.getElementById('wiggle-button');

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const meatButtonNode = document.createElement('button');
    
    meatButtonNode.textContent = color;
    meatButtonNode.value = color;
    meatButtonNode.classList.add('meat-button');
   
    meatButtonNode.addEventListener('click', function() {
        paint(color); // add const query body length?
    });

    meatNodes.appendChild(meatButtonNode);
        
    
} 

function paint(color) {
    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block', color); // missing ,color?
    canvasNode.appendChild(colorBlock);
    

}

for(let index = 0; index < colors.length; index++) {
    
    let color = colors[index];

    const wiggleNodeButton = document.createElement('button');
    wiggleNodeButton.textContent = color;
    wiggleNodeButton.value = color;
    wiggleNodeButton.classList.add(color, 'wiggle-button');

    wiggleNodeButton.addEventListener('click', function() {
        wiggle(color);
    
    });
    
    wiggleNode.appendChild(wiggleNodeButton);
    
}

function wiggle(color) {
    const selector = 'wiggle-button' + color;
    const body = document.querySelectorAll(selector);
    const allBody = document.querySelectorAll('.wiggle-button');

    for(let index = 0; index < allBody.length; index++) {
        allBody[index].classList.remove('wiggle-button');
    }

    for(let index = 0; index < body.length; index++) {
        allBody[index].classList.add('wiggle-button');
    }
    
}














    
    




