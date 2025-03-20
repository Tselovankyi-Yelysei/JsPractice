const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return `Семья пуста`;
    }
    return `Семья состоит из: ${arr.join(' ')}`
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    console.log(arr);

    arr.forEach(function (item) {
        console.log(item);
        // console.log(item.toLoverCase());
    })
}

standardizeStrings(favoriteCities);
