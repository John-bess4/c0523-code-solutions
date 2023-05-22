# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  --To ensure out program is outputting correctly, and for possible debugging
- What is the purpose of events and event handling?
  --The purpose of evetns and event handling is to control the event and decides what should happen when the event occurs
- Are all possible parameters required to use a JavaScript method or function?
  --Not required but is recommend to have precise code
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  --addEventListener
- What is a callback function?
  --Is a function passed into another function as an arguement,which is then invoked inside the outer function to complete an action
- What object is passed into an event listener callback when the event fires?
  --The variable that tells the fucntions what to complete
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  --A property of an event object that refers to what triggered the event.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  --the extra parentheses by the handleClick.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
