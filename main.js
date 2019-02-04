// Array of button names

const victims = [
    'Dentist',
    'Mushnik',
    'Audrey',
    'Seymour',
];

// Variables to get elements from HTML

const foodButtons = document.getElementById('food-buttons');
const danceButtons = document.getElementById('dance-buttons');
const audreyBody = document.getElementById('audrey-body');

// For loop for creating dinner buttons, painting stem pieces

for(let i = 0; i < victims.length; i++) {
    let victimName = victims[i];
    

    const stem = document.createElement('button');
    stem.value = victimName;
    stem.classList.add('stem', victimName);
    stem.textContent = victimName;

    
    stem.addEventListener('click', function() {
        paint(victimName);
    });
    
    foodButtons.appendChild(stem);

}

//For loop for creating dance buttons, calling transform functions

for(let i = 0; i < victims.length; i++) {
    let victimName = victims[i];
    const transformStem = document.createElement('button');
    transformStem.value = victimName;
    transformStem.classList.add('transform-button', victimName);
    transformStem.textContent = victimName;

    transformStem.addEventListener('click', function() {
        reset();
        transform(victimName);
    });

    danceButtons.appendChild(transformStem);
}

//Functions:
    // Paint

function paint(victimName) {
    const stemBlock = document.createElement('span');
    stemBlock.classList.add('stem-block', victimName);
    audreyBody.appendChild(stemBlock);
}

function transform(victimName) {
    const selector = '.stem-block.' + victimName;
    const nameBlocks = document.querySelectorAll(selector);

    for(let i = 0; i < nameBlocks.length; i++) {
        nameBlocks[i].classList.add('transform');
    }

    console.log(victimName);
}

function reset() {
    const allBlocks = document.querySelectorAll('.stem-block');
    for(let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove('transform');
    }
}

    // Transform
    // Reset