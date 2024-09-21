document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});
