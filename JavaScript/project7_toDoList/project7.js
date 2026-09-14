let input = document.querySelector(".input-field");
let addBtn = document.querySelector(".add-btn");
let taskContainer = document.querySelector(".list-items");

let allTaskBtn = document.querySelector(".all-btn");
let activeTaskBtn = document.querySelector(".active-btn");
let completedTaskBtn = document.querySelector(".completed-btn");

let remainingItems = document.querySelector(".remaining-items");

let tasks = [];

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log("Loaded tasks:", tasks);
}

loadTasks();

function renderTask(taskData) {
  let task = document.createElement("div");
  task.className = "tasks";

  let tasktext = document.createElement("span");
  tasktext.className = "taskText";
  tasktext.textContent = taskData.text;
  task.append(tasktext);

  // Show completed state for saved tasks
  if (taskData.completed) {
    tasktext.classList.add("completed");
  }

  let tasksBtn = document.createElement("div");
  tasksBtn.className = "tasks-btn";
  task.append(tasksBtn);

  let completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "✓";

  let editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", () => {
    let index = tasks.indexOf(taskData);
    tasks.splice(index, 1);
    saveTasks();

    task.remove();
    updateRemainingItems();

    console.log("Tasks after delete:", tasks);
  });

  completeBtn.addEventListener("click", () => {
    taskData.completed = !taskData.completed;
    saveTasks();

    tasktext.classList.toggle("completed");

    updateRemainingItems();
  });

  editBtn.addEventListener("click", () => {
    let editedTask = prompt("Enter edited value");

    if (editedTask === null) {
      return;
    }

    if (editedTask.trim() == "") {
      return;
    }

    taskData.text = editedTask;
    saveTasks();

    tasktext.textContent = editedTask;
  });

  tasksBtn.append(completeBtn);
  tasksBtn.append(editBtn);
  tasksBtn.append(deleteBtn);

  taskContainer.append(task);
}

tasks.forEach((task) => {
  renderTask(task);
});

updateRemainingItems();

addBtn.addEventListener("click", () => {
  let taskInput = input.value;

  if (taskInput.trim() == "") {
    alert("Please enter a string");
    return;
  }

  let newTask = {
    text: taskInput,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  console.log("Input:", taskInput);
  console.log("New task:", newTask);
  console.log("Tasks array:", tasks);

  renderTask(newTask);

  input.value = "";
  updateRemainingItems();
});

allTaskBtn.addEventListener("click", () => {
  allTaskBtn.classList.add("selected");
  activeTaskBtn.classList.remove("selected");
  completedTaskBtn.classList.remove("selected");

  let allTasks = document.querySelectorAll(".tasks");

  allTasks.forEach((task) => {
    task.style.display = "";
  });
});

completedTaskBtn.addEventListener("click", () => {
  completedTaskBtn.classList.add("selected");
  allTaskBtn.classList.remove("selected");
  activeTaskBtn.classList.remove("selected");

  let allTasks = document.querySelectorAll(".tasks");

  allTasks.forEach((task) => {
    let taskText = task.firstElementChild;

    if (taskText.classList.contains("completed")) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
});

activeTaskBtn.addEventListener("click", () => {
  completedTaskBtn.classList.remove("selected");
  allTaskBtn.classList.remove("selected");
  activeTaskBtn.classList.add("selected");

  let allTasks = document.querySelectorAll(".tasks");

  allTasks.forEach((task) => {
    let taskText = task.firstElementChild;

    if (taskText.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "";
    }
  });
});

function updateRemainingItems() {
  let count = 0;

  let allTasks = document.querySelectorAll(".tasks");

  allTasks.forEach((task) => {
    let taskText = task.firstElementChild;

    if (!taskText.classList.contains("completed")) {
      count++;
    }
  });

  remainingItems.textContent = `${count} : Items Remaining`;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
