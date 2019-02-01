const meals = ['chicken', 'pig', 'cow', 'youth', 'warrior'];

const mealButtons = document.getElementById('meal-buttons');
const scales = document.getElementById('scales');

function makeScale(meal) {
    const scale = document.createElement('span');
    scale.classList.add('scale', meal);
    scales.appendChild(scale);
}


for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];   
    const mealButton = document.createElement('button');
    
    mealButton.value = meal;
    mealButton.textContent = meal;
    mealButton.classList.add('meal-buttons', meal);
    mealButtons.appendChild(mealButton);

    mealButton.addEventListener('click', function() {
        console.log('clicked', meal);
        makeScale(meal);
    });
}