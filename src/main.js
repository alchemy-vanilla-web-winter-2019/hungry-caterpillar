const fruitList = [
    'coconut',
    'jackfruit',
    'rambutan',
    'guava',
    'mangosteen'
];

main(fruitList, document.getElementById('fruit-field'));
main(fruitList, document.getElementById('dance-field'));

function main(list, element) {
    // Create buttoms
    for(let i = 0; i < list.length; i++) {
        const listItem = list[i];
        const button = makeButton(element, listItem);

        // Place fruit image on button
        if(element.id === 'fruit-field') {
            insertIcon(button, listItem);
        }

        // Button functionality
        button.addEventListener('click', function() {
            buttonAction(element, listItem);
        });
    }
}

function makeButton(element, listItem) {
    const button = document.createElement('button');
    button.classList.add('button', listItem);
    button.textContent = listItem;
    element.appendChild(button);
    return button;
}

function insertIcon(button, listItem) {
    const buttonIcon = document.createElement('img');
    buttonIcon.src = './assets/' + listItem + '.jpg';
    buttonIcon.classList.add('fruit-image');
    button.textContent = '';
    button.appendChild(buttonIcon);
}

function buttonAction(element, listItem) {            
    switch(element.id) {
        case 'fruit-field':
            addBody(listItem);
            break;
        case 'dance-field':
            dance(listItem);
            break;
    }
}

// Add body segment on caterpillar
function addBody(fruit) {
    const segment = document.createElement('span');
    segment.classList.add('segment', fruit);
    document.getElementById('caterpillar-body').appendChild(segment);
}

function dance(fruit) {
    reset();
    move(fruit);
}

// Reset Position by removing 'dance' class from all segments
function reset() {
    const allSegments = document.querySelectorAll('.dance');
    for(let i = 0; i < allSegments.length; i++) {
        allSegments[i].classList.remove('dance');
    }
}

// Add 'dance' class to selected segments to move them up
function move(fruit) {
    const selector = '.segment.' + fruit;
    const selectedSegments = document.querySelectorAll(selector);
    for(let i = 0; i < selectedSegments.length; i++) {
        selectedSegments[i].classList.add('dance');
    }
}