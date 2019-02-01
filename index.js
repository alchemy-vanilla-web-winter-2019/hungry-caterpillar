const meals = ['pig', 'cow', 'youth', 'warrior'];
const mealButtons = document.getElementById('meal-buttons');

for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    
    //make the damned button
    const mealButton = document.createElement('button');
    mealButton.value = meal;
    mealButton.textContent = meal;
    mealButton.classList.add('meal-buttons', meal);
    mealButtons.appendChild(mealButton);

    mealButton.addEventListener('click', function() {
        console.log('clicked', meal);
    });
}