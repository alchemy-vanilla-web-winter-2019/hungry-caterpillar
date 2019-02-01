const fruits = ['blueberry', 'raspberry', 'mango', 'pineapple', 'pear'];
const fruitNode = document.getElementById('fruit-buttons');
const caterpillarNode = document.getElementById('caterpillar');



for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];

    const button = document.createElement('button');
    fruitNode.appendChild(button);
    button.textContent = fruit;
    button.classList.add(fruit, 'fruit-buttons');

    button.addEventListener('click', function(){
        const fruitSpan = document.createElement('span');
        caterpillarNode.appendChild(fruitSpan);
        fruitSpan.classList.add('fruit-span', fruit); 
        caterpillarNode.appendChild(fruitSpan);

    }); 





}