"use strict"


const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
};

let todos = [];

const errTodoNotFind = (id) => {
    return `Задачи с id ${id} нет в списке`;
}


const createTodo = (todos, text) => {
    todos.push({ [todoKeys.id]: String(todos.length + 1), [todoKeys.text]: text, [todoKeys.is_completed]: false, });
    return todos;
}

const completeTodoById = (todos, id) => {
    const todo = todos.find(todo => todo[todoKeys.id] === id);
    if (!todo) {
        console.error(errTodoNotFind(id));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
}

const deleteTodoById = (todos, id) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === id);
    if (todoIndex === -1) {
        console.error(errTodoNotFind(id));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
}

console.log(createTodo(todos, "Первая задача"));
console.log(createTodo(todos, "Вторая задача"));
console.log(createTodo(todos, "Третья задача"));


console.log(completeTodoById(todos, "2"));
console.log(completeTodoById(todos, "2"));
console.log(completeTodoById(todos, "5"));


console.log(deleteTodoById(todos, "3"));
console.log(deleteTodoById(todos, "6"));

