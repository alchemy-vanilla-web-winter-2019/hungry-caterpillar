const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const colorButtons = document.getElementById('color-buttons');
const uniKittyBody = document.getElementById('uniKitty');
const danceButtons = document.getElementById('dance-buttons');

function paintUniKitty(color) {
    const uniKittySegment = document.createElement('span');
    uniKittySegment.classList.add('segment', color);
    uniKittyBody.appendChild(uniKittySegment); 
}

function danceUniKitty(color) {
    const uniKittySegment = '.segment.' + color;
    const danceSegment = document.querySelectorAll(uniKittySegment);
    const danceSegments = document.querySelectorAll('.segment');

    for(let i = 0; i < danceSegments.length; i++) {
        danceSegments[i].classList.remove('dance');
    }
    for(let i = 0; i < danceSegment.length; i++) {
        danceSegment[i].classList.add('dance');
    }
}

for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const colorButton = document.createElement('button');
    colorButton.textContent = color;    
    colorButtons.appendChild(colorButton);
    colorButton.classList.add('color-button', color);

    colorButton.addEventListener('click', function() {
        paintUniKitty(color);
    });
}

for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const danceButton = document.createElement('button');
    danceButton.textContent = color;
    danceButtons.appendChild(danceButton);
    danceButton.classList.add('dance-button', color);

    danceButton.addEventListener('click', function() {
        danceUniKitty(color);
    });
}
