"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};



const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");


const createTodoElement = (text, id) => {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = id;

  todoElement.innerHTML = `
  <div class="todo-text">${text}</div>
  <div class="todo-actions">
    <button class="button-complete button">&#10004;</button>
    <button class="button-delete button">&#10006;</button>
  </div>
  `;

  return todoElement;
}

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  const newTodoElement = createTodoElement(newTodo[todoKeys.text], newTodo[todoKeys.id]);

  todosElement.insertAdjacentElement("afterbegin", newTodoElement);
  return newTodoElement;
}

// 


formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameOfNewTodo = inputElement.value.trim();
  inputElement.value = "";
  if (nameOfNewTodo == "") return;

  const newTodoElement = handleCreateTodo(todos, nameOfNewTodo);
  console.log(todos);
});

todosElement.addEventListener('click', (event) => {
  const target = event.target;
  const todo = target.closest(".todo");
  if (!todo) return;
  const idOfTodo = todo.dataset.id;

  if (target.classList.contains("button-complete")) {
    console.log(completeTodoById(todos, +idOfTodo));
    todo.classList.toggle("completed");
  } else if (target.classList.contains("button-delete")) {
    console.log(deleteTodoById(todos, +idOfTodo));
    todo.remove();
  }
});