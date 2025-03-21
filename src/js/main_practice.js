/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

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
    privat: false,

    rememberMyFilms: function () {
        for (let i = 0; i < numberOfFilms; i++) {
            let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
            let recentFilmScore = prompt('На сколько оцените его?', '');
            if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
                --i;
                continue;
            }

            personalMovieDB.movies[recentFilmName] = recentFilmScore;
        }
    },

    detectPersonalLevel: function () {
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
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let actualGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (!actualGenre) {
                i--;
                continue;
            }
            personalMovieDB.genres.push(actualGenre);
        }
        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${genre}`);
        });
    },

    showMyDB: function (isPrivat) {
        if (!isPrivat) {
            console.log(personalMovieDB);
        }
        else {
            console.log("Приватная информация!");
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);


// function rememberMyFilms() {
//     for (let i = 0; i < numberOfFilms; i++) {

//         let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
//         let recentFilmScore = prompt('На сколько оцените его?', '');

//         if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
//             --i;
//             continue;
//         }

//         personalMovieDB.movies[recentFilmName] = recentFilmScore;
//     }
// }

// function detectPersonalLevel() {
//     console.log(personalMovieDB);
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     }
//     else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман!");
//     }
//     else {
//         console.log('error');
//     }
// }




// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }

// function showMyDB(isPrivat) {
//     if (!isPrivat) {
//         console.log(personalMovieDB);
//     }
// }

