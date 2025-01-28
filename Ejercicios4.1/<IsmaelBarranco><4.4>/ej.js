
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}


function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function displayTasks(filter = "todas") {
    const tasks = loadTasks();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks
        .filter(task => filter === "todas" || (filter === "pendientes" && !task.completed) || (filter === "completadas" && task.completed))
        .map((task, index) => `
            <li class="${task.completed ? "completed" : ""}">
                <span>${task.text} (Prioridad: ${task.priority})</span>
                <div>
                    <button onclick="toggleTaskCompletion(${index})">${task.completed ? "Deshacer" : "Completar"}</button>
                    <button onclick="deleteTask(${index})">Eliminar</button>
                </div>
            </li>
        `)
        .join("");
}


document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const text = document.getElementById("taskInput").value;
    const priority = document.getElementById("prioritySelect").value;

    const tasks = loadTasks();
    tasks.push({ text, priority, completed: false });
    saveTasks(tasks);
    displayTasks();

    document.getElementById("taskForm").reset();
});

function toggleTaskCompletion(index) {
    const tasks = loadTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    displayTasks();
}


function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks();
}

document.getElementById("filterSelect").addEventListener("change", function () {
    displayTasks(this.value);
});


displayTasks();