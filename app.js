const addTodo = document.querySelector(".add-todo");
const todosList = document.querySelector(".todos-list");
const hiddenLine = document.querySelector("#hidden-line");

const createTodoLi = (todo) => {
  const templateHTML = `
    <li class="todos-list-item">
    <span>${todo}</span>
    <div class="icon-group">
      <i class="fa-regular fa-square not-done"></i>
      <i class="fa-regular fa-trash-can delete"></i>
    </div>
  `;

  todosList.innerHTML += templateHTML;
};

// Add todos
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  // Show "mark as complete or delete" paragraph
  hiddenLine.classList.remove("hide");
  // Remove space characters
  const todo = addTodo.add.value.trim();
  // Prevent empty items
  if (todo.length) {
    createTodoLi(todo);
    addTodo.reset();
  }
});

// Modify todos
todosList.addEventListener("click", (e) => {
  // Delete todo item
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
  // Mark todo item as complete or incomplete
  if (e.target.classList.contains("not-done")) {
    e.target.classList.replace("fa-square", "fa-square-check");
    e.target.parentElement.previousElementSibling.classList.add("complete");
    e.target.classList.replace("not-done", "done");
  } else if (e.target.classList.contains("done")) {
    e.target.classList.replace("fa-square-check", "fa-square");
    e.target.parentElement.previousElementSibling.classList.remove("complete");
    e.target.classList.replace("done", "not-done");
  }
});
