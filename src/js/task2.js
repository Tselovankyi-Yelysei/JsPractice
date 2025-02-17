'use strict';


// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i <= (arr.length - 1); i++) {
        result.push(arr[i]);
        console.log(result);
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'string') {
            data[i] += [' - done'];
        }
        else if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        }
        else {
            console.error('uncorrect value type!');
        }

    }

    console.log(data);
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    // for (i = (data.length - 1); i => 0; i--) {
    //     result[data.length - i] = 
    // }
    for (let i = 0; i < data.length; i++) {
        result[i] = data[data.length - 1 - i];
    }
    console.log(result);
    // Не трогаем
    return result;
}