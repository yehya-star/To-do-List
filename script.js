// script.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Reset the input field
    taskInput.value = '';
}
