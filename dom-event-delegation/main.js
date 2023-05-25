const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('Event Target:', event.target);
  console.log('Tag Name:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('Task List Item:', $taskListItem);
    $taskListItem.remove();
  }
});
