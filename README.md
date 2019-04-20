Hungry Caterpillar
===

Make the caterpillar grow by feeding it fruit, and then up a fruit dance.

[Note: feel free to change the topic. For example you could feed the hungry sarlacc 
things like Jabba's minions, Boba Fett, Hans Solo, Lando, etc.]

## Page Design

There are three main parts to the page:

1. The buttons for each kind of fruit to feed the caterpillar. 
Place an image inside your HTML button to show what it is. Give each 
button a `value` attribute with the name of the fruit. 
1. The caterpillars head and body segments. The body segments are color 
coded based on the type of fruit the caterpillar was feed. Use the fruit type 
as a CSS class so you can style appropriately
1. The buttons to make the caterpillar "dance" the corresponding body segments. Give each
of these button a `value` attribute with the name of the fruit as well.

_New T&C:_

1. **HTML Elements**: `<h2>`, `<span>`
1. **HTML Attributes**: `value="apple"`
1. **CSS Styling**: `padding`, `border-style`, `cursor`, `line-height`, `background`
1. **CSS Styling**: `display: inline-block`, `height`, `width`
1. **CSS Styling**: negative margins: `margin-left: -12px;`

## Feed the Caterpillar

On each fruit button click, add one new body segment to the caterpillar. 
You'll want to look at your statically design segments to figure out:
1. What type of element to create
1. What classes it needs

_New T&C:_

1. **DOM Traversal**: use css selector to get DOM elements via `document.querySelectorAll('.class')
1. **Control Flow:** for loop with `index`
1. **Lists:** access items by index: `list[index]`
1. **DOM Nodes**: create new elements with `.createElement('tag')`
1. **DOM Nodes**: add new element to existing element with `.appendChild(node)`
1. **App Design:** function as unit of work (`feedCaterpillar`)

## Caterpillar Dance

When each dance button is clicked:

1. Remove the `.dance` class from all the body segments
1. Add the `.dance` class to those body segments that have the matching fruit class

The `.dance` class should cause the segment to move using a CSS `transform`. You can also
add a `transition` to animate the dance move.


_New T&C:_

1. **Strings:** concatenate string to make css selector
1. **CSS Styling**: `transform`, `transition`

## Dynamic Buttons (STRETCH)

Instead of having the fruit buttons statically defined in the HTML, create them from
a list (array) of fruit names. Start with dance buttons, then try the fruit buttons (which require the creation of an `<img>` as well that needs to be appended to each
button)

_New T&C:_

1. **Lists:** array of strings
1. **Lists**: access array item by index `array[index]`
