const meatNodes = document.getElementById('meat-buttons');

const colors = [
    'black',
    'red',
    'yellow',
    'white'
]; 

const canvasNode = document.getElementById('canvas');
const wiggleNode = document.getElementById('wiggle-button');
// creates the buttons to feed the worm
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const meatButtonNode = document.createElement('button');
    
    meatButtonNode.textContent = color;
    meatButtonNode.value = color;
    meatButtonNode.classList.add('meat-button');
   
    meatButtonNode.addEventListener('click', function() {
        // const bodyLength = document.querySelectorAll('dance-segment').length;
        // if(bodyLength < 6) {
        //     paint(color);
        // }
        paint(color); // add const query body length?
    });

    meatNodes.appendChild(meatButtonNode);
        
     
} 
// creates the body segments when feeding the worm
function paint(color) {
    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block', color); 
    canvasNode.appendChild(colorBlock);
    

}
// creates the the buttons to wiggle the worm
for(let index = 0; index < colors.length; index++) {
    
    let color = colors[index];

    const wiggleNodeButton = document.createElement('button');
    wiggleNodeButton.textContent = color;
    wiggleNodeButton.value = color;
    wiggleNodeButton.classList.add(color, 'wiggle-button');//

    wiggleNodeButton.addEventListener('click', function() {
        wiggle(color);
    
    });
    
    wiggleNode.appendChild(wiggleNodeButton);
    
}
// function to wiggle the worm
function wiggle(color) {
    const selector = '.' + color;
    const bodySegment = document.querySelectorAll(selector);
  
    const allBodySegments = document.querySelectorAll('.color-block');

    for(let index = 0; index < allBodySegments.length; index++) {
        allBodySegments[index].classList.remove('dance-segment');
    }

    for(let index = 0; index < bodySegment.length; index++) {
        bodySegment[index].classList.add('dance-segment');
    }

    
    
}














    
    




