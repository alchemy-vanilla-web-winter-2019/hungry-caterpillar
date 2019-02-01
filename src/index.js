// create array
const fruits = ['strawberry', 'orange', 'banana', 'pear', 'blueberry', 'grape'];

// connecting to feed me section
const fruitButtons = document.getElementById('fruit-buttons');

// for loop
for(let i = 0; i < fruits.length; i++) {
    // create variable for each fruit
    const fruit = fruits[i];

    // iterate over each fruit to ...
        // create a button
    const fruitButton = document.createElement('fruit-button');

        // assign classes
        // have text show up
    fruitButton.textContent = fruit;
    console.log('fruit text', fruitButton);
        
    
    
        // 
}

