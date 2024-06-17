document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const categoryInput = document.getElementById('category-input');
    const dueDateInput = document.getElementById('due-date-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksUl = document.getElementById('tasks');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value;
        const category = categoryInput.value;
        const dueDate = dueDateInput.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} [${category}] - ${dueDate}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        tasksUl.appendChild(li);

        taskInput.value = '';
        categoryInput.value = 'Work';
        dueDateInput.value = '';

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function() {
            tasksUl.removeChild(li);
        });
    }
});
