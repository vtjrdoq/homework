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

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement


const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

// изначально я копировала 1-ый todo элемент для создания остальных, но вышло, что 1-ая задача не внесена в массив todos
// можно было бы внести его отдельно, но, вероятно, предполагается, что изнаально задач 0
// так что я вообще убрала todo из разметки

const todoElement = document.createElement("li");
todoElement.className = "todo";

const todoTextElement = document.createElement("div");
todoTextElement.className = "todo-text";
const todoActionsElement = document.createElement("div");
todoActionsElement.className = "todo-actions";

const buttonCompleteElement = document.createElement("button");
buttonCompleteElement.className = "button-complete button";
buttonCompleteElement.innerHTML = "&#10004;";

const buttoDeleteElement = document.createElement("button");
buttoDeleteElement.className = "button-delete button";
buttoDeleteElement.innerHTML = "&#10006;";

todoActionsElement.appendChild(buttonCompleteElement);
todoActionsElement.appendChild(buttoDeleteElement);

todoElement.appendChild(todoTextElement);
todoElement.appendChild(todoActionsElement);


const handleCreateTodo = (todos, text) => {
  createTodoElement(text);
  return createTodo(todos, text);
}

const createTodoElement = text => {
  const newTodoElement = todoElement.cloneNode(true);
  const textInNewElement = newTodoElement.querySelector(".todo-text");
  textInNewElement.textContent = text;

  todosElement.insertAdjacentElement("beforeend", newTodoElement);
  return newTodoElement;
}

console.log(handleCreateTodo(todos, "Задача 1"));
console.log(handleCreateTodo(todos, "Задача 2"));
console.log(handleCreateTodo(todos, "Задача 3"));
console.log(todos);

