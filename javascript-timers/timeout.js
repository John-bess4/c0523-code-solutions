const heading = document.querySelector('h1');

function myMessage() {
  heading.innerHTML = 'hello there';
}

setTimeout(myMessage, 2000);
