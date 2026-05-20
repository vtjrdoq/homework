// 1

for (let i = 1; i <= 20; i++) {
    if (i % 4) {
        console.log(i);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

//  2

let num = +prompt("Введите число", 0);
let factorial = 1;

if (isNaN(num)) {
    alert("Это не число");
} else {
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    
    alert(`Факториал числа ${num} равен ${factorial}`);
}

// 3

let n;
let m;

let chess = "";

for (let i = 1; i <= 8; i++) {
    n = (i % 2) ? "##" : "  ";
    m = (i % 2) ? "  " : "##";

    for (let j = 1; j <= 8; j++) {
        if (j % 2) {
            chess += n;
        } else {
            chess += m;
        }
    }

    chess += "\n";
}

console.log(chess);