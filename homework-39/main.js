// 1
console.log("\nПервое задание\n\n");

const person = {
    name: "Варвара",
    age: 19,
    isStudent: true,
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 2
console.log("\nВторое задание\n\n");

const emptyObj = {};

const isEmpty = obj => {
    let n = 0;
    for (key in obj) {
        n++;
    }
    return (n === 0);
}

console.log(isEmpty(person));
console.log(isEmpty(emptyObj));

// 3
console.log("\nТретье задание\n\n");

const task = {
    title: "Химическая реакция водорода и серы",
    description: "Проверить, взаимодействуют ли элементы между собой",
    isCompleted: true,
};

const bonusTask = {
    exersise: "Написать формулу взаимодействия элементов",
};

const cloneAndModify = (obj, modification) => {
    const cloneObject = { ...obj, ...modification};
    return cloneObject;
}

const difficultTask = cloneAndModify(task, bonusTask);

for (const key in difficultTask) {
    console.log(`${key}: ${difficultTask[key]}`);
}

// 4
console.log("\nЧетвёртое задание\n\n");

const object = {
    name: "Проверка выполнения функции",
    function1: function() {
        console.log("Первый метод выполнен");
    },
    isMakeSense: false,
    randomNumber: 65,
    function2: function() {
        console.log("Второй метод выполнен");
    },
    function3: function() {
        console.log("И все методы выполнены");
    },
    spffspk: "dcdcdc"
};

const callAllMethods = obj => {
    for (key in obj) {
        if (typeof obj[key] == "function") {
            obj[key]();
        }
    }
}

callAllMethods(object);