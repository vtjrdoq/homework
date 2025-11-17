
const myData = {
    name: 'varya',
    age: 19,
    nationality: 'belarus',
    placeOfResidence: 'saint-petersburg',
    isStudent: true,
    lessonsDone: 103,
    sayHello(name) {
        return `Hello, ${name}`
    }
}

console.log(myData.sayHello('Aroken'))

// -----------------

let countOfSimpleUsers = 0

const users = [
    {
        name: 'masha',
        age: 33,
        isAdmin: true
    },
    {
        name: 'glasha',
        age: 20,
        isAdmin: false
    },
    {
        name: 'pasha',
        age: 89,
        isAdmin: false
    },
    {
        name: 'stesha',
        age: 35,
        isAdmin: false
    },
    {
        name: 'dasha',
        age: 26,
        isAdmin: true
    },
    {
        name: 'parasha',
        age: 41,
        isAdmin: false
    },
    {
        name: 'gosha',
        age: 24,
        isAdmin: true
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        countOfSimpleUsers ++
    }
}

console.log(countOfSimpleUsers)