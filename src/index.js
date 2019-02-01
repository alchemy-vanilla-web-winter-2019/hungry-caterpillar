
const fruits = ['apple', 'pineapple', 'pear', 'grape', 'raspberry'];
const fruitNode = document.getElementById('fruit-buttons');
const caterNode = document.getElementById('caterpillar');

for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    
    const button = document.createElement('button');
    fruitNode.appendChild(button);
    button.textContent = fruit;
    button.classList.add('fruit-button');
    

}