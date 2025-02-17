'use strict';

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё
 поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение 
    false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели и хотите занести их в базу?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

console.log(personalMovieDB);

for (let i = 0; i < numberOfFilms; i++) {
    let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
    let recentFilmScore = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[recentFilmName] = recentFilmScore;


    // let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
    // let recentFilmScore = +prompt('На сколько оцените его?', '0');
    // personalMovieDB.movies[recentFilmName] = recentFilmScore;

}
console.log(personalMovieDB);

let piramideSize = 6;

for (let i = 1; i <= piramideSize; i++) {
    let stars = '';

    for (let j = 1; j <= i; j++) {
        if (piramideSize % 2 == 0 && (piramideSize - (j - 1) == (piramideSize / 2))) { // Наша пирамида чётная и (ШАГ - 1 = 3) (4)
            console.log('here')
            continue;
        }
        else if (j < ((piramideSize / 2) + 1)) { // Если наш шаг меньше или равен трём 
            stars += '*';
        }
        else {
            stars = stars.replace("*", "");
        }
    }

    console.log(stars);
}


main: for (let i = 0; i < 4; i++) {
    console.log("Главный цикл сработал в начале");
    for (let j = 0; i < 3; j++) {
        console.log("Вложенный цикл сработал")
        if (j == 2) break main;
    }
    console.log("Главный цикл сработал в конце");
}


main: for (let i = 0; i < 4; i++) {
    console.log("Главный цикл сработал в начале");
    for (let j = 0; i < 3; j++) {
        console.log("Вложенный цикл сработал");
        break main;
    }
    console.log("Главный цикл сработал в конце");
}

main: for (let i = 0; i < 2; i++) {
    console.log("Главный цикл сработал в начале");
    for (let j = 0; j < 10; j++) {
        console.log("Вложенный цикл сработал");
        if (j == 2) continue main;
    }
    console.log("Главный цикл сработал в конце");
}




// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i == 13) break;
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;

    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
        console.log(arrayOfNumbers);
    }

    // Не трогаем
    return arrayOfNumbers;
}





