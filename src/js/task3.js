'use strict';

// const lines = 5;
// let result = '';
// Проверяется именно переменная result, формируйте строку в ней*

// Построчный вывод:

// for (let i = 1; i <= lines; i++) {
//     if (i == 1) {
//         for (let j = 0; j < lines - i; j++) {
//             result += ' ';
//         }
//         result += '*';
//     }
//     else {
//         result += '**';
//         result = result.slice(1);
//     }

//     console.log(result);
// }



// const lines = 5;
// let result = '';
// let bufferLine = '';

// // Вывод сразу всего массива текста:
// for (let i = 1; i <= lines; i++) {
//     if (i == 1) {
//         for (let j = 0; j < lines - i; j++) {
//             bufferLine += ' ';
//         }
//         bufferLine += '*';
//     }
//     else {
//         bufferLine += '**';
//         bufferLine = bufferLine.slice(1);
//     }
//     result += `${bufferLine}\n`

// }
// console.log(result);


const lines = 10;
let result = '';

// Вывод сразу всего массива текста:
for (let i = lines; i >= 0; i--) {
    for (let j = i; j > 0; j--) {
        result += ' ';
    }
    for (let k = (lines - i); k > 0; k--) {
        result += '**';
    }

    result += '*\n';

}
console.log(result);

// for (let i = 1; i < 7; i + 2) {

// }