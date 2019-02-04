const meatButtonSSNode = document.getElementById('meat-buttons');

// const colors = [
//     'tomato',
//     'indianred',
//     'pink',
//     'palevioletred',
//     'plum'
// ]; 

const meats = [
    'brain', 
    'chicken', 
    'sausage', 
    'shrimp', 
    'steak'
];


const imgSrc = [ 
    '../assets/brain.png',
    '../assets/chicken.png',
    '../assets/shrimp.jpg',
    '../assets/sausage.jpg',
    '../assets/steak.png',
    '../assets/Zmaggot-head.png/'
];

const canvasNode = document.getElementById('canvas');
const wiggleNode = document.getElementById('wiggle-button');


// creates the buttons to feed the worm
for(let index = 0; index < meats.length; index++) {
    let meat = meats[index];
    const meatButtonNode = document.createElement('button');
    //create array of images
    const imgNode = document.createElement('img');
    imgNode.src = imgSrc[index];
    
    meatButtonNode.textContent = meat;
    meatButtonNode.value = meat;
    meatButtonNode.classList.add('meat-button');
   
    meatButtonNode.addEventListener('click', function() {
        const bodyLength = document.querySelectorAll('.body-length').length;
        if(bodyLength < 5) {
            paint(meat);
        }
        
    });

    meatButtonNode.appendChild(imgNode);
    meatButtonSSNode.appendChild(meatButtonNode);
        
     
} 
// creates the body segments when feeding the worm
function paint(meat) {
    const bodyLength = document.createElement('span');
    bodyLength.classList.add('body-length', meat);


    bodyLength.classList.add(meat);
    bodyLength.classList.add('body-length', meat); 
    canvasNode.appendChild(bodyLength);
    

}
// creates the the buttons to wiggle the worm
for(let index = 0; index < meats.length; index++) {
    
    let meat = meats[index];
    

    const wiggleNodeButton = document.createElement('button');
    wiggleNodeButton.textContent = meat;
    wiggleNodeButton.value = meat;
    wiggleNodeButton.classList.add(meat, 'wiggle-button');//

    wiggleNodeButton.addEventListener('click', function() {
        wiggle(meat);
    
    });
    
    wiggleNode.appendChild(wiggleNodeButton);
    
}
// function to wiggle the worm
function wiggle(meat) {
    const selector = '.body-length.' + meat;// it was a goddamn'.'!!!
    const bodySegment = document.querySelectorAll(selector);
    console.log(bodySegment);
  
    const allBodySegments = document.querySelectorAll('.body-length');

    for(let index = 0; index < allBodySegments.length; index++) {
        allBodySegments[index].classList.remove('dance-segment');
    }

    for(let index = 0; index < bodySegment.length; index++) {
        bodySegment[index].classList.add('dance-segment');
    }

    
    
}














    
    




