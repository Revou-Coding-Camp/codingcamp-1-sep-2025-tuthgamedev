/// Variables to store todo items
let todoList = [];

/// Function to validate input fields
function validateInput() {
  const todoInput = document.getElementById("todo-input").value;
  const todoDateInput = document.getElementById("todo-date-input").value;

  if (todoInput === "" || todoDateInput === "") {
    alert("Tolong isi ya!!");
  } else {
    addTodo(todoInput, todoDateInput);
    alert("Todo Berasil tersimpan!!");
  }
}

function addTodo(todo, dueDate) {
  // Add a new todo item to the list
  const todoItem = {
    task: todo,
    dueDate: dueDate,
    completed: false,
  };

  /// Push the new item to the todo list array
  todoList.push(todoItem);

  /// Re-render the todo list
  renderTodoList();
}

function deleteAllTodo() {
  // Clear the todo list array
  todoList = [];

  /// Re-render the todo list
  renderTodoList();
}

function filterTodo() {
  // Ambil nilai tanggal dari input filter
  const filterDate = document.getElementById("filter-date-input").value;
  // Filter todoList berdasarkan tanggal
  const filteredList = todoList.filter((item) => item.dueDate === filterDate);
  // Render hasil filter ke container
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";
  if (filteredList.length === 0) {
    todoListContainer.innerHTML =
      "<p>Tidak ada todo untuk tanggal tersebut.</p>";
  } else {
    filteredList.forEach((item) => {
      todoListContainer.innerHTML += `
                <p>${item.task} - Due: ${item.dueDate}</p>
            `;
    });
  }
}

function renderTodoList() {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = ""; // Kosongkan list

  // Tambahkan header kolom
  todoListContainer.innerHTML += `
    <li class="flex justify-between font-bold border-b pb-2 mb-2">
      <span>Tugas</span>
      <span>Jatuh Tempo</span>
    </li>
  `;

  if (todoList.length === 0) {
    todoListContainer.innerHTML += "<li>No tasks found.</li>";
  } else {
    todoList.forEach((item) => {
      todoListContainer.innerHTML += `
        <li class="border-b py-2 flex justify-between items-center">
          <span>${item.task}</span>
          <span class="text-sm text-gray-500">Due: ${item.dueDate}</span>
        </li>
      `;
    });
  }
}
