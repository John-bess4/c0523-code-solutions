const $body = document.body;
const $button = document.querySelector('.colorButton');

$button.addEventListener('click', function (event) {
  if ($body.className === 'white-bg') {
    $button.className = '';
    $body.className = 'colorButton';
  } else {
    $body.classList = 'white-bg';
    $button.classList = 'yellow-bg';
  }
});
