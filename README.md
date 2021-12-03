## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
  drawing in notebook
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
    1.three divs for cup images containers
      2.two cup images, one standard, one revealing ball
    3.three divs for "guess" buttons
    4. Three spans for total guesses, correct guesses, and incorrect guesses.

1) **For each HTML element ask: Why do I need this?** 
    1. to have containers to display the images
      2. to show the user the cups, and reveal the winning cup
    3. for the user to make a guess
    4. To display how many total games there have been, and how many guesses have been correct and incorrect.

1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
    1. Add images to the three containers
      2. Replace one image source when the correct event listener is clicked
    3. Add event listeners to each of the three buttons
    4. Mutate the text content of the DOM elements that correspond to the spans

1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
    -user clicks on one of the three "guess" buttons
    -correct guess number changes
    -incorrect guess number changes
    -total guess number changes

1) **Think about how to validate each of your features according to a Definition of Done**
  -console.log each of the DOM elements and event listeners as I go

1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
  -The event listeners and number increments depend on the DOM elements, so I will start by adding elements to HTML and then pulling them to the DOM

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
