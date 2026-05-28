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

const buttonDeleteElement = document.createElement("button");
buttonDeleteElement.className = "button-delete button";
buttonDeleteElement.innerHTML = "&#10006;";

todoActionsElement.appendChild(buttonCompleteElement);
todoActionsElement.appendChild(buttonDeleteElement);

todoElement.appendChild(todoTextElement);
todoElement.appendChild(todoActionsElement);



const createTodoElement = (text, id) => {
  const newTodoElement = todoElement.cloneNode(true);
  const textInNewElement = newTodoElement.querySelector(".todo-text");
  textInNewElement.textContent = text;
  newTodoElement.id = id;

  todosElement.insertAdjacentElement("beforeend", newTodoElement);
  return newTodoElement;
}

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  return createTodoElement(text, newTodo[todoKeys.id]);
}

const deleteTodoElement = id => {
  const targetTodo = document.getElementById(id);
  targetTodo.remove();
}

const handleDeleteTodo = (todos, id) => {
  deleteTodoElement(id);
  return deleteTodoById(todos, +id);
}

// я решила попробвать самой сделать функцинал, пока проверяется
// пришлость поправить некотрые функции, в частности, добавить присвоение id элементам
// так как я не знала, как их иначе связать с массивом todos

const buttonCreateElement = formElement.querySelector(".button-create");
// const listOfDeleteButtons = document.querySelectorAll(".button-delete");
// const listOfCompleteButtons = document.querySelectorAll(".button-complete");


buttonCreateElement.addEventListener('click', (event) => {
  event.preventDefault();
  const nameOfNewTodo = inputElement.value;
  inputElement.value = "";

  const newTodoElement = handleCreateTodo(todos, nameOfNewTodo);
  console.log(todos);

  // накинем на кнопки события
  // наверное, можно их вынести отдельныи функциями, чтобы не было вложенных счётчиков события, но ладно уж

  const deleteButton = newTodoElement.querySelector(".button-delete");
  const completeButton = newTodoElement.querySelector(".button-complete");

  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;
    const todo = target.closest(".todo");
    const idOfTodo = todo.getAttribute('id');

    console.log(handleDeleteTodo(todos, idOfTodo));
  });

  completeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;
    const todo = target.closest(".todo");
    const idOfTodo = todo.getAttribute('id');

    todo.classList.toggle("completed");
    console.log(completeTodoById(todos, +idOfTodo));
  });
});


// работало на уже созданных элементах, но не на создающихся

// listOfDeleteButtons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();

//     const target = event.target;
//     const todo = target.closest(".todo");
//     const idOfTodo = todo.getAttribute('id');

//     console.log(handleDeleteTodo(todos, idOfTodo));
//   });
// });

// listOfCompleteButtons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();

//     const target = event.target;
//     const todo = target.closest(".todo");
//     const idOfTodo = todo.getAttribute('id');

//     todo.classList.toggle("completed");
//     console.log(completeTodoById(todos, +idOfTodo));
//   });
// });



