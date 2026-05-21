// 1

// короткий вариант
// const calculateFinalPrice = (basePrice, discount, taxes) => (basePrice * (100 - discount) * (taxes + 1) / 100);

const calculateFinalPrice = (basePrice, discount, taxes) => {
    let price = basePrice;

    price *= (100 - discount) / 100;
    price *= taxes + 1;

    return price;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// 2

const checkAccess = (userName, password) => {
    if (userName === "admin" && password === "123456") {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}

console.log(checkAccess("admin", "123456"));
console.log(checkAccess("lesha", "111111"));
console.log(checkAccess("admin", "qwerty"));
console.log(checkAccess("user", "123456"));

// 3

const getTimeOfDay = hour => {
    switch (true) {
        case hour < 6:
            return "Ночь";
            break;
        case hour < 12:
            return "Утро";
            break;
        case hour < 18:
            return "День";
            break;
        case hour < 24:
            return "Вечер";
            break;
        default:
            return "Некорректное время";
    }
}

console.log(getTimeOfDay(18));
console.log(getTimeOfDay(5));
console.log(getTimeOfDay("вечер"));
console.log(getTimeOfDay(15));


// 4

const findEven = (start, end) => {
    let count = "Количество чётных чисел: ";
    let result = "\nЧётные числа:";
    let n = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            n += 1;
            result += ` ${String(i)}`;
        } 
    }

    if (n) {
        return count + String(n) + result;
    } else {
        return count + String(n);
    }
}

console.log(findEven(1, 10));
console.log(findEven(9, 9));
console.log(findEven(15, 19));