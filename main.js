const fruitList = [
    'coconut',
    'jackfruit',
    'rambutan',
    'guava',
    'mangosteen'
];

const fruitField = document.getElementById('fruit-field');
makeButtons(fruitList, fruitField);

const danceField = document.getElementById('dance-field');
makeButtons(fruitList, danceField);

function makeButtons(list, element) {
    // Create buttoms
    for(let i = 0; i < list.length; i++) {
        const listItem = list[i];
        const button = document.createElement('button');
        button.classList.add('button', listItem);
        button.textContent = listItem;
        element.appendChild(button);

        // Button functionality
        button.addEventListener('click', function() {
            switch(element.id) {
                case 'fruit-field':
                    addBody(listItem);
                    break;
                case 'dance-field':
                    dance(listItem);
                    break;
            }
        });
    }
}

function addBody(fruit) {
    const segment = document.createElement('span');
    segment.classList.add('segment', fruit);
    document.getElementById('caterpillar-body').appendChild(segment);
}

function dance(fruit) {
    // Reset Position
    const selectAll = document.querySelectorAll('.dance');
    for(let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove('dance');
    }
    // Add 'dance' class to selected segments
    const selector = '.segment.' + fruit;
    const selectedSegments = document.querySelectorAll(selector);
    for(let i = 0; i < selectedSegments.length; i++) {
        selectedSegments[i].classList.add('dance');
    }
}