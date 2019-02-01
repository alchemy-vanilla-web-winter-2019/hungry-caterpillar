const colorButtonsNode = document.getElementById('color-buttons');

const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
];

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //the color array index = color
    const colorButtonNode = document.createElement('button'); //colorButtonNode is a new variable and we created a button element that it corresponds to
    colorButtonNode.textContent = color; //need to change this to image
    colorButtonNode.value = color; //the color buttons will have a value of each color
    colorButtonNode.classList.add('color-button', color); //adding the 'color-button' and color class to the colorButtonNodes

    colorButtonNode.addEventListenter('submit', function() {
        paint(color);
    }) 
    
console.log(colorButtonNode);
}

