const fruitList = [
    'coconut',
    'jackfruit',
    'rambutan',
    'guava',
    'mangosteen'
];

makeButtons(fruitList, document.getElementById('fruit-field'));
makeButtons(fruitList, document.getElementById('dance-field'));

function makeButtons(list, element) {
    // Create buttoms
    for(let i = 0; i < list.length; i++) {
        const listItem = list[i];
        const button = document.createElement('button');
        button.classList.add('button', listItem);
        button.textContent = listItem;
        element.appendChild(button);

        // Place fruit image on button
        if(element.id === 'fruit-field') {
            const pic = document.createElement('img');
            pic.src = './assets/' + listItem + '.jpg';
            pic.classList.add('fruit-image');
            button.textContent = '';
            button.appendChild(pic);
        }
        
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
    // Reset Position by removing 'dance' class
    const selectAll = document.querySelectorAll('.dance');
    for(let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove('dance');
    }
    // Add 'dance' class to selected segments (Moves segments up)
    const selector = '.segment.' + fruit;
    const selectedSegments = document.querySelectorAll(selector);
    for(let i = 0; i < selectedSegments.length; i++) {
        selectedSegments[i].classList.add('dance');
    }
}