const meals = ['pig', 'cow', 'maiden'];

const mealButtons = document.getElementById('meal-buttons');

//loop through array 
    //make button
    //add value to the meal
    //add name to the meal
    //add classes to the buttons
    //.pig, .cow, etc
    // append the buttons to the dom in the 'buttons' section 
    //add event listener to the button

for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];                      //grabbing individual meal by index
    const mealButton = document.createElement('button');  //make the button

    mealButton.value = meal;        //add value to the button

    mealButton.textContent = meal; //add a name to thd button

    mealButton.classList.add('meal-button', meal); //add class to the button

    mealButtons.appendChild(mealButton);

    mealButton.addEventListener('click', function() {
        console.log('clicked', mealButton);
    });



}