const todoForm = document.querySelector(".todo");
const todoInput = todoForm.querySelector("input");
const ul = document.querySelector(".todo-list");

let todos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  ul.removeChild(li);
  const cleanToDos = todos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  todos = cleanToDos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.id = newId;
  ul.appendChild(li);
  const todoObj = {
    text: text,
    id: newId
  };
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const curVal = todoInput.value;
  addTodo(curVal);
  todoInput.value = "";
}

function loadTodo() {
  const localTodos = localStorage.getItem("todos");
  if (localTodos !== null) {
    const jsonTodo = JSON.parse(localTodos);
    jsonTodo.forEach(function (todo) {
      addTodo(todo.text);
    })
  }
}

function init() {
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();