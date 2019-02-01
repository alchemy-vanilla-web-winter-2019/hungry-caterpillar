const meals = ['chicken', 'pig', 'cow', 'youth', 'warrior'];

const mealButtons = document.getElementById('meal-buttons');
const danceButtons = document.getElementById('dance-buttons');
const scales = document.getElementById('scales');


function makeScale(meal) {
    const scale = document.createElement('span');
    scale.classList.add('scale', meal);
    scales.appendChild(scale);
}

function makeDance(meal) {
    //to make it dance, i need to:
        //access the scale
    const selected = '.scale' + meal;
    console.log(selected)
        //
}

for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];   
    const mealButton = document.createElement('button');
    
    mealButton.value = meal;
    mealButton.textContent = meal;
    mealButton.classList.add('meal-button', meal);
    mealButtons.appendChild(mealButton);

    mealButton.addEventListener('click', function() {
        console.log('clicked feed', meal);
        makeScale(meal);
    });
}

//let's make this bugger dance. First, make some buttons for dancing
for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const danceButton = document.createElement('button');

    danceButton.value = meal;
    danceButton.textContent = meal ;
    danceButton.classList.add('dance-button', meal);
    danceButtons.appendChild(danceButton);

    danceButton.addEventListener('click', function() {
        makeDance(meal);
    });

}