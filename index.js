//-------- G L O B A L -- V A R I A B L E S --------\\

//---- 1. create fruit array
const fruitArray = ['apple', 'grape', 'banana', 'orange'];
const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');






//---------------- F U N C T I O N S --------------------\\


function feed(runsfruitfromloop) {
    console.log(runsfruitfromloop);
    const bodyParts = document.createElement('span');
    bodyParts.classList.add('body-parts', runsfruitfromloop);
    bugBody.appendChild(bodyParts);
    console.log(bodyParts);
}


    
    
//-------------------- L O O P S ----------------------\\


//---- 2.for loop to build out buttons from Array using index
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
    
    
    
    
    
