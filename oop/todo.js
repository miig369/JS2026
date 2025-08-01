class Todo {
    constructor() {
        this.tasks = this.loadTasks();
        this.renderTasks();
    }

    addTask(task) {
        if (task.length > 0) {
            this.tasks.push({
                text: task,
                completed: false,
                timestamp: new Date().toLocaleString()
            });
            this.saveTasks();
            this.renderTasks();
        } else {
            console.log("Task empty");
        }
    }

    editTask(index) {
        const newTask = prompt("Edit task:", this.tasks[index].text);
        if (newTask !== null && newTask.trim() !== "") {
            this.tasks[index].text = newTask;
            this.saveTasks();
            this.renderTasks();
        }
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.querySelector('.all-tasks');
        taskList.innerHTML = "";

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${task.text} <small>(${task.timestamp})</small>
                <span>
                    <button onclick="todoObj.editTask(${index})">Edit</button>
                    <button onclick="todoObj.deleteTask(${index})">Delete</button>
                </span>
            `;
            taskList.appendChild(li);
        });
    }

    saveTasks() {
        localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        const saved = localStorage.getItem('todo-tasks');
        return saved ? JSON.parse(saved) : [];
    }
}
