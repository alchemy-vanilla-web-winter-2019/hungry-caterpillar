const mealButtons = document.getElementById('meal-buttons');
const danceButtons = document.getElementById('dance-buttons');
const scales = document.getElementById('scales');
const reset = document.getElementById('reset');

const meals = ['chicken', 'pig', 'cow', 'youth', 'warrior'];
const mealImage = ['assets/chicken.png', 'assets/pig.png', 'assets/cow.png', 'assets/child.png', 'assets/warrior.png'];


function makeScale(meal) {
    const scale = document.createElement('span');
    scale.classList.add('scale', meal);
    scales.appendChild(scale);
}
function makeDance(meal) {
    const selected = '.scale.' + meal;
    const scales = document.querySelectorAll(selected);
    const allScales = document.querySelectorAll('.scale');

    for(let i = 0; i < allScales.length; i++) {
        const scale = allScales[i];
        scale.classList.remove('dance');
    }
    for(let i = 0; i < scales.length; i++) {
        const scale = scales[i];
        scale.classList.add('dance');
    }
}

for(let i = 0; i < meals.length; i++) {
    const meal = meals[i];   
    const mealButton = document.createElement('button');
    
    mealButton.value = meal;
    mealButton.innerHTML = '<img src=' + mealImage[i] + '>';
    mealButton.classList.add('meal-button', meal);
    
    mealButtons.appendChild(mealButton);

    mealButton.addEventListener('click', function() {
        makeScale(meal);
    });
}

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

reset.addEventListener('click', function() {
    location.reload();
});