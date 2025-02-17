/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели и хотите занести их в базу?', '');
    while (numberOfFilms <= 0 || !numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Всё таки ответьте, сколько фильмов вы уже посмотрели и хотите занести их в базу?', '');
    }

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {

        let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
        let recentFilmScore = prompt('На сколько оцените его?', '');

        if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
            --i;
            continue;
        }

        personalMovieDB.movies[recentFilmName] = recentFilmScore;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    console.log(personalMovieDB);
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30) {
        console.log("Вы киноман!");
    }
    else {
        console.log('error');
    }
}

detectPersonalLevel();

writeYourGenres();

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

function showMyDB(isPrivat) {
    if (!isPrivat) {
        console.log(personalMovieDB);
    }
}

