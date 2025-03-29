'use strict';

function factorial(number) {
    if (number === 1) {
        return number;
    }
    else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(5));


function factorialIterator(number) {
    let finalResult = number;
    for (let i = 1; i < number; i++) {
        finalResult *= number - i;
    }
    return finalResult;
}
console.log(factorialIterator(5));