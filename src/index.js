const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const colorButtons = document.getElementById('color-buttons');
const uniKittyBody = document.getElementById('uniKitty')

//function that takes color
//creates a span element
//adds color class to that element
//appends that element to the dom parent (appendchild)

function paintUniKitty() {
    const uniKittyBody = document.createElement('span');
    
    // uniKittyBody.classList.add('color-segment', color);
    // uniKittyBody.appendChild()
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

    // iterate over each color to ...
        // create a button element - done
        // have text show up - done
        // append - done
        // assign classes - done    
        // eventListener with function to add segment
}
console.log('body span', uniKittyBody);
for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    console

    // iterate over each color to ...
        // create a button element
        // have text show up
        // append
        // assign classes
        // eventListener with function to make segment dance
}