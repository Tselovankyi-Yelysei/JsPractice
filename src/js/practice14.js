const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [], b = [], c = [], rest = [];
    console.log(rest.length);

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(students[i]);
        }
        else if (i < 6) {
            b.push(students[i]);
        }
        else if (i < 9) {
            c.push(students[i]);
        }
        else {
            rest.push(students[i]);
        }
    }
    console.log(rest.length);
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));


// function sortStudentsByGroups(arr) {
//     arr = arr.sort();
//     let teamsArr = [];
//     for (let i = 0; i < 3; i++) {
//         let threeStudents = [];
//         for (let i = teamsArr.length * 3; i < (teamsArr.length + 1) * 3; i++) {
//             threeStudents.push(arr[i]);
//         }
//         teamsArr.push(threeStudents);
//     }
//     console.log(teamsArr);
//     if (arr.length == 9) {
//         teamsArr.push(`Оставшиеся студенты: -`);
//     }
//     else if (arr.length < 9) {
//         console.log('Вы ввели недостаточное число игроков! Введите хотя бы 9!')
//     }
//     else {
//         let remainsStudents = 'Оставшиеся студенты:'
//         for (let i = 9; i < arr.length; i++) {
//             remainsStudents += ` ${arr[i]},`
//         }
//         remainsStudents = remainsStudents.slice(0, -1);
//         teamsArr.push(remainsStudents);
//     }
//     console.log(teamsArr);
//     return teamsArr;
// }

// sortStudentsByGroups(students);