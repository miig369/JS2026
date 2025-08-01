const todoObj = new Todo();

const element = document.getElementById("add-task");
const taskElement = document.getElementById("task-text");

element.addEventListener("click", () => {
    todoObj.addTask(taskElement.value);
    taskElement.value = "";
});

taskElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        todoObj.addTask(taskElement.value);
        taskElement.value = "";
    }
});