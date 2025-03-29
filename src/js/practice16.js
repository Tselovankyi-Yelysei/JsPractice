'use strict';

function factorial(number) {
    if (typeof (number) != "number" || !Number.isInteger(number)) {
        return "Вы ввели недопустимое значение"
    }
    else if (number <= 0) {
        return 1;
    }
    else if (number === 1) {
        return number;
    }
    else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(4));


function factorialIterator(number) {

    let finalResult = number;
    for (let i = 1; i < number; i++) {
        finalResult *= number - i;
    }
    return finalResult;
}
console.log(factorialIterator(5));