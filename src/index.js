const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const colorButtons = document.getElementById('color-buttons');

for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const colorButton = document.createElement('button');
    colorButton.textContent = color;    
    colorButtons.appendChild(colorButton);
    colorButton.classList.add('color-button', color);

    colorButton.addEventListener('click', function(event) {
        
    });

    // iterate over each color to ...
        // create a button element - done
        // have text show up - done
        // append - done
        // assign classes - done    
        // eventListener with function to add segment
}

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