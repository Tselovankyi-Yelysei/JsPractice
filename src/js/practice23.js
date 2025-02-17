/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели и хотите занести их в базу?', '');

while (numberOfFilms <= 0 || !numberOfFilms) {
    numberOfFilms = +prompt('Всё таки ответьте, сколько фильмов вы уже посмотрели и хотите занести их в базу?', '');
}


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

console.log(personalMovieDB);


// Цикл for
// for (let i = 0; i < numberOfFilms; i++) {

//     let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
//     let recentFilmScore = prompt('На сколько оцените его?', '');

//     if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
//         --i;
//         continue;
//     }

//     personalMovieDB.movies[recentFilmName] = recentFilmScore;
// }


//Цикл while

// while (numberOfFilms > 0) {

//     let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
//     let recentFilmScore = prompt('На сколько оцените его?', '');

//     if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
//         continue;
//     }

//     personalMovieDB.movies[recentFilmName] = recentFilmScore;
//     numberOfFilms -= 1;
// }

//Цикл Do-while
do {

    let recentFilmName = prompt('Один из последних просмотренных фильмов?', '');
    let recentFilmScore = prompt('На сколько оцените его?', '');

    if (!recentFilmName || !recentFilmScore || recentFilmName.length > 50) {
        continue;
    }

    personalMovieDB.movies[recentFilmName] = recentFilmScore;
    numberOfFilms -= 1;
}
while (numberOfFilms > 0);



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
