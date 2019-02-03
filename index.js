//-------- G L O B A L -- V A R I A B L E S --------\\

const fruitArray = ['apple', 'grape', 'banana', 'orange'];
const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');


//---------------- F U N C T I O N S --------------------\\

function feed(fruit) {
    const bodyParts = document.createElement('span');
    bodyParts.classList.add('body-parts', fruit);
    bugBody.appendChild(bodyParts);
}

function dance(fruit) {
    const dancing = '.body-parts.' + fruit;
    const selectedPart = document.querySelectorAll(dancing);
    const allParts = document.querySelectorAll('.body-parts')
    for(let i = 0; i < allParts.length; i++) {
        allParts[i].classList.remove('dance');
    }
    for(let i = 0; i < selectedPart.length; i++) {
        selectedPart[i].classList.add('dance');
    }
}
    
//-------------------- L O O P S ----------------------\\

for(let i = 0; i < fruitArray.length; i++) {
    let fruit = fruitArray[i];
    const fruitButton = document.createElement('button');
    fruitButtons.appendChild(fruitButton);
    fruitButton.classList.add('fruit-button', fruit);
    fruitButton.textContent = fruit;
    fruitButton.value = fruit;
    fruitButton.addEventListener('click', function() {
        feed(fruit);
        
    });
}

for(let i = 0; i < fruitArray.length; i++) {
    let fruit = fruitArray[i];
    const danceButton = document.createElement('button');
    danceButtons.appendChild(danceButton);
    danceButton.textContent = fruit;
    danceButton.value = fruit;
    danceButton.classList.add('dance-button', fruit);
    danceButton.addEventListener('click', function(){
        dance(fruit);
    });
}