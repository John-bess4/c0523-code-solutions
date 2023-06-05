const heading = document.querySelector('h1');

function countDown() {
  if (count > 0) {
    heading.textContent = count;
    count--;
  } else {
    heading.textContent = '~Earth Beeelowwww Us ~';
    clearInterval(intervalId);
  }
}

let count = 4;

const intervalId = setInterval(function () {
  countDown(count);
}, 1000);
