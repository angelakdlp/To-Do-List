function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    //adds a task when you press the button
    //alert pops up telling you to enter a task

    var taskContainer = document.getElementById("tasksContainer");

    var taskElement = document.createElement("div");
    taskElement.className = "task";
    //creates a div when pressing the addTask button

    var taskTextElement = document.createElement("div");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;

    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskElement.remove();
    };
    //Creates a delete button to delete the task

    var finishButton = document.createElement("button");
    finishButton.className = "finish-button";
    finishButton.textContent = "Finish";
    finishButton.onclick = function() {
        taskTextElement.style.textDecoration = "line-through";
    };
    //Creates a finished button to finish the task using a strikethrough

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(finishButton);

    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(buttonContainer);

    taskContainer.appendChild(taskElement);

    taskInput.value = "";
}
