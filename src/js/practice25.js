// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    // let arr = [];
    // arr.push(num - 1);
    // arr.push(num);
    // arr.push(num + 1);
    // return arr;
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(base, repeatAmount) {
    let funcString = '';
    if (typeof repeatAmount != 'number' || repeatAmount <= 0) return base;

    for (let i = 1; i <= repeatAmount; i++) {
        if (i == 1) {
            funcString += base;
        }
        else {
            funcString += `---${base * i}`
        }
    }
    return funcString;
}

let a = "cat";
a[2] = 'd';
console.log(a);

console.log(getMathResult(4, 17));