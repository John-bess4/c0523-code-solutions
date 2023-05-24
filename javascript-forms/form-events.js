function handleFocus(event) {
  console.log('focus event fired.');
  console.log(event.target.name);
}
console.log('handleFocus:', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name');
}
console.log('handleBlur:', handleBlur);

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}
console.log('handleInput:', handleInput);

const $inputElements = document.querySelector('input');
const $textArea = document.querySelector('textarea');

for (let i = 0; i < $inputElements.maxLength; i++) {
  $inputElements[i].addEventListener('focus', handleFocus);
  $inputElements[i].addEventListener('blur', handleBlur);
  $inputElements[i].addEventListener('input', handleInput);
}
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('input', handleInput);
$textArea.addEventListener('blur', handleBlur);

console.log('$inputElements:', $inputElements);
console.log('$textArea:', $textArea);
