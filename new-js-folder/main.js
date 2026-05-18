// 1

const firstName = "Варвара";
const lastName = "Лапикова";
const isStudent = true;

// 2

const age = 20;
const currentYear = 2026;
const birthYear = currentYear - age;

// 3

console.log(`Меня зовут ${lastName} ${firstName}, мне ${age} лет. Я ученица курса: ${isStudent}`);

// 4

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

// 123456789falsetrue

console.log(result);