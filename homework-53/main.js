"use strict"

// 1
console.log("\nПервое задание\n\n");

const users = [
    { name: 'ALex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];

users.push({ name: 'Ann', age: 19, isAdmin: false });
users[users.length] = { name: 'Jack', age: 43, isAdmin: true };

console.log(users);

// 2
console.log("\nВторое задание\n\n");

const getUsersAverageAge = users => {
    let sumAge = 0;

    users.forEach(user => {
        sumAge += user.age;
    });

    return sumAge / users.length;
};

console.log(getUsersAverageAge(users));

// 3
console.log("\nТретье задание\n\n");

const getAllAdmins = users => {
    let admins = [];

    users.forEach(user => {
        if (user.isAdmin) admins.push(user);
    });

    return admins;
};

console.log(getAllAdmins(users));

// 3
console.log("\nЧетвёртое задание\n\n");

const first = (arr, n) => {
    let newArray = new Array(n);

    if (typeof n !== 'undefined') {
    
        for (let i = 0; i < n; i++) {
            if (i >= arr.length) {
                console.error(`n не может быть больше длины массива: ${arr.length}`);
                return newArray;
            }
    
            newArray[i] = arr[i];
        }
    } else {
        newArray = [arr[0]];
    }

    return newArray;
};

console.log(first(users, 3));
console.log(first(users, 0));
console.log(first(users));
console.log(first(users, 8));