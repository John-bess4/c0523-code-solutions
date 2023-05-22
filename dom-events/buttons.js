function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log(event.target);
}

const clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered:');
  console.log('event:', event);
  console.log(event.target);
}
const hoverMouse = document.querySelector('.hover-button');
hoverMouse.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log(event.target);
}

const dblclick = document.querySelector('.double-click-button');
dblclick.addEventListener('dblclick', handleDoubleClick);
