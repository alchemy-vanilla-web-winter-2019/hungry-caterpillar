const foods = ['pickle', 'chocolate', 'cake', 'watermelon', 'cheese', 'sausage'];

const foodButtonsNode = document.getElementById('food-buttons');
const bodyCanvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons')


for(let index = 0; index < foods.length; index++){
    let food = foods[index];
    
    const foodButtons = document.createElement('button');
    foodButtonsNode.appendChild(foodButtons);

    foodButtons.textContent = food;
    foodButtons.value = 'hodor';
    foodButtons.classList.add('food-button', food, food + '-button');

    foodButtons.addEventListener('click', function(){
        const bodySpan = document.createElement('span');
        bodyCanvasNode.appendChild(bodySpan);
        bodySpan.classList.add('body-span', food + '-span', food);
        console.log(food);
    });

}

for(let j = 0; j < foods.length; j++){
    let food = foods[j];

    const danceButtons = document.createElement('button');
    danceButtonsNode.appendChild(danceButtons);

    danceButtons.textContent = 'move ' + food;
    danceButtons.classList.add('dance-button', food);

    
}
  
