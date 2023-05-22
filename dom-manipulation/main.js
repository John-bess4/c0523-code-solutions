let clickCounter = 0;
const hotButton = document.querySelector('.hot-button');

const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', () => {
  clickCounter++;

  clickCount.textContent = clickCounter;

  if (clickCounter < 4) {
    hotButton.className = 'hot-button is cold';
  } else if (clickCounter < 7) {
    hotButton.className = 'hot-button is cool ';
  } else if (clickCounter < 10) {
    hotButton.className = 'hot-button is tepid';
  } else if (clickCounter < 13) {
    hotButton.className = 'hot-button is warm';
  } else if (clickCounter < 16) {
    hotButton.className = 'hot-button is hot';
  } else if (clickCounter > 16) {
    hotButton.className = 'hot-button has gone nuclear';
  }
});
