const fruits = ['strawberry', 'orange', 'banana', 'pear', 'blueberry', 'grape'];
const fruitButtons = document.getElementById('fruit-buttons');

for(let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const fruitButton = document.createElement('button');
    fruitButton.textContent = fruit;    
    fruitButtons.appendChild(fruitButton);
    fruitButton.classList.add('fruit-button', fruit);

    fruitButton.addEventListener('click', function(event) {
        
    });

    // iterate over each fruit to ...
        // create a button element - done
        // have text show up - done
        // append - done
        // assign classes - done    
        // eventListener with function to add segment
}

for(let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console
    // iterate over each fruit to ...
        // create a button element
        // have text show up
        // append
        // assign classes
        // eventListener

        // function to make segment dance
}