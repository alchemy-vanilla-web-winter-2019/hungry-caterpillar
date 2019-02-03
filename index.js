//-------- G L O B A L -- V A R I A B L E S --------\\

const fruitArray = ['apple', 'grape', 'banana', 'orange'];
const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');


//---------------- F U N C T I O N S --------------------\\

function feed(runsfruitfromloop) {
    const bodyParts = document.createElement('span');
    bodyParts.classList.add('body-parts', runsfruitfromloop);
    bugBody.appendChild(bodyParts);
}

//-- build DANCE function to make dance

    //-- combine bodyParts & dance fruit button(fruit)
    
    //-- build a for loop over the node list from qselector then add class dance
    
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