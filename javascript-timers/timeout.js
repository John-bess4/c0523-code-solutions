const heading = document.querySelector('h1');

function myMessage() {
  heading.textContent = 'hello there';
}

setTimeout(myMessage, 2000);
