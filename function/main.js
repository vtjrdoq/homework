
function sayHello(name) {
    return `Hello, ${name}`
}

console.log(sayHello('Carl'))

// -------------------------------

const massiveWithNumbers = [1, 5, 12, 3, 23, 7, 65, 9, 10, 0, -5, 22, 15, 4, 3]

const giveNumbersUpTen = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i])
        }
    }
}

giveNumbersUpTen(massiveWithNumbers)

// --------------------------------

function calculation(firstArg, secondArg, operand) {
    if (operand === '+') {
        return (firstArg + secondArg)
    } else if (operand === '-') {
        return (firstArg - secondArg) 
    } else if (operand === '*') {
        return (firstArg * secondArg) 
    } else if (operand === '/') {
        return (firstArg / secondArg) 
    } else {
        return 'sorry but no'
    }
}

console.log(calculation(1.3, 6, '*'))

// --------------------------------

const users = [
    {
        name: 'alex',
        age: 22,
        isAdmin: false
    },
    {
        name: 'maria',
        age: 19,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello, ${name}`)
        }
    },
    {
        name: 'kirill',
        age: 54,
        isAdmin: true
    }
]

users.push({
    name: 'lena',
    age: 107,
    isAdmin: false
})

console.log(users[0].isAdmin)
users[1].sayHello('Anya')