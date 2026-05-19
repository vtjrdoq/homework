// 1

const num = +prompt("Введите число", 0);
let parity = "";

if (isNaN(num)) {
    parity = "не число";
} else {
    if (num % 2) {
        parity = "нечётное число";
    } else {
        parity = "чётное число";
    }
}

alert(parity);

// 2

const age = +prompt("Введите возраст", 0);
let discount = "";

// if (isNaN(age)) {
//     discount = "это даже не число";
// } else if (age <= 0) {
//     discount = "серьёзно?";
// } else {
//     discount = age < 18 ? "10%" : (age <= 65 ? "20%" : "30%");
// }

// switch case

if (isNaN(age)) {
    discount = "это даже не число";
} else if (age <= 0) {
    discount = "серьёзно?";
} else {
    switch (age <= 65) {
        case true: 
            discount = "20%";
            if (age >= 18) {
                break;
            }
        case true:
            discount = "10%";
            break;
        case false:
            discount = "30%"
    }
}

console.log(discount);

// 3

const username = prompt("Введите имя пользователя", "user");
const password = prompt("Введите пароль", 0);

const message = ((username === "user" || username === "admin") && password === "123456") ? "Доступ разрешён" : "Доступ запрещён";

alert(message);

// 4

let msg = "";
let price = 0;
const weight = +prompt("Введите вес посылки", 0);

if ((weight <= 0) || (isNaN(weight))){
    msg = "Некорректный вес";
} else {
    price = weight < 1 ? 5 : (weight <= 5 ? 10 : 15);
    const type = prompt("Введите тип доставки из списка: Стандарт, Экспресс, Премиум", "Стандарт");

    switch (type) {
        case 'Стандарт':
            msg = `Итоговая стоимость доставки: ${price}$`;
            break;
        case 'Экспресс':
            msg = `Итоговая стоимость доставки: ${price * 1.5}$`;
            break;
        case 'Премиум':
            msg = `Итоговая стоимость доставки: ${price * 2}$`;
            break;
        default:
            msg = "Неверный тип доставки";
    }
}

alert(msg);