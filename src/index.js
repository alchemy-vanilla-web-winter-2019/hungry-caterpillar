
const garbages = ['apple', 'kiwi', 'pear', 'grape', 'raspberry'];
const garbageNode = document.getElementById('garbage-buttons');
const caterNode = document.getElementById('caterpillar');

for(let index = 0; index < garbages.length; index++) {
    let garbage = garbages[index];
    
    const button = document.createElement('button');
    garbageNode.appendChild(button);
    button.textContent = garbage;
    button.classList.add(garbage, 'garbage-buttons');
    
    button.addEventListener('click', function(){
        const garbageSpan = document.createElement('span');
        caterNode.appendChild(garbageSpan);
        garbageSpan.classList.add(garbage, 'garbage-span');
        caterNode.appendChild(garbageSpan);
    });
}