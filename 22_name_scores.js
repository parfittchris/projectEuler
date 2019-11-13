// https://projecteuler.net/problem=22
// Using names.txt(right click and 'Save Link/Target As...'), a 46K text file containing over five - thousand first names, begin by sorting it into alphabetical order.Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file ?


const fs = require('fs')
fs.readFile('assets/names.txt', (err, data) => {
    if (err) throw err;
    let names = data.toString().replace(/['"]+/g, '').split(',');
    console.log(countNamePoints(names));
});


function countNamePoints(array) {
    let totalSum = 0;
    let sorted = array.sort();

    for (let idx = 0; idx < sorted.length; idx++) {
        totalSum += (nameScore(sorted[idx]) * (idx + 1))
    }

    return totalSum;
}


function nameScore(name) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    let score = 0;

    for (let i = 0; i < name.length; i++) {
        score += alpha.indexOf(name[i].toLowerCase()) + 1;
    }

    return score;
}

