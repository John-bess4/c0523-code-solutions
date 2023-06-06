# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

It is the read only target property ofj the event interface that is a reference to the object onto which the event was dispatched

- What is the affect of setting an element to `display: none`?

It will hide the entirety of the element to which it is applied

- What does the `element.matches()` method take as an argument and what does it return?

it takes a selector string as it;s arguement and returns a true or false depending on if the element matches the specified selector

- How can you retrieve the value of an element's attribute?

Via the getAttribute()method

- At what steps of the solution would it be helpful to log things to the console?

After the dataView, event.target and tab code blocks in particlar but in general after every moving portion would be helpful

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?

you would have to modify the code to address each tab individually

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?

you could directly access the indiviual view elements based on their ID's

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
