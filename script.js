
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

// Add task when pressing Enter
input.addEventListener('keyup', (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // Mark as completed
    li.addEventListener('click', function(e) {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle('completed');
        }
    });

    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
}