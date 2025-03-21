'use strict';

const someString = 'This is some strange string';

function reverse(str) {
    // if typeof (str) != "string"
    if (typeof (str) != "string") { return ("Ошибка!") };
    let arr = str.split('');
    arr = arr.reverse();
    return arr.join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    // if (arr.length === 0) {
    //     return "Нет доступных валют";
    // }
    // let str = `Доступные валюты:\n`;

    // if (missingCurr && arr.includes(missingCurr)) {
    //     arr.splice(arr.indexOf(missingCurr), 1);
    // }
    // arr.forEach(item => str += `${item}\n`);

    // return str;



    // let str = '';
    // if (arr.length === 0) {
    //     str = 'Нет доступных валют'
    // }
    // else {
    //     str = 'Доступные валюты:\n'
    // }
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(element => {
        if (element != missingCurr) {
            str += `${element}\n`;
        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));