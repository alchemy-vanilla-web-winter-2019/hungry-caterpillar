const test = QUnit.test;

const fruitList = [
    'coconut',
    'jackfruit',
    'rambutan',
    'guava',
    'mangosteen'
];

function makeButtons(list, element) {
    // Create buttoms
    for(let i = 0; i < list.length; i++) {
        const listItem = list[i];
        const button = document.createElement('button');
        button.classList.add('button', listItem);
        button.textContent = listItem;
        element.appendChild(button);

        
test('First fail', function(assert) {
    assert.equal(true, true);
});