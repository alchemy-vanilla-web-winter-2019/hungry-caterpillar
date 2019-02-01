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
    });

}

for(let i = 0; i < foods.length; i++){
    let food = foods[i];

    const danceButtons = document.createElement('button');
    danceButtonsNode.appendChild(danceButtons);

    danceButtons.textContent = 'move ' + food;
    danceButtons.classList.add('dance-button', food);

    danceButtons.addEventListener('click', function(){
        // first loop through food spans and remove 'dance-span' to reset.
        var danceSpanArray = document.querySelectorAll('.body-span');
        for(let l = 0; l < foods.length; l++){
            danceSpanArray[l].classList.remove('dance-span');
        }
    
        //loop through food spans and apply 'dance-span' css property.
        var danceSpan = document.querySelectorAll('.' + food + '-span');
        for(let i = 0; i < foods.length; i++){
            danceSpan[i].classList.add('dance-span');
            console.log(food + '-span');
        }
        
    });


}
  
