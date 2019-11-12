// https://projecteuler.net/problem=1
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000(one thousand) inclusive were written out in words, how many letters would be used ?
//     NOTE : Do not count spaces or hyphens.For example, 342(three hundred and forty - two) contains 23 letters and 115(one hundred and fifteen) contains 20 letters.The use of "and" when writing out numbers is in compliance with British usage.

function numLetterCnts(num) {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        if (i < 10) {
            sum += findOnes(i);
        } else if (i < 100) {
            sum += findTens(i);
        } else if (i < 1000) {
            let string = i.toString();
            if (string[1] === '0' && string[2] === '0') {
                sum += findOnes(parseInt(string[0])) + 7;
            } else if (string[1] === '0') {
                sum += findOnes(parseInt(string[0])) + 10 + findOnes(parseInt(string[2]));
            } else {
                sum += findOnes(parseInt(string[0])) + 10 + findTens(parseInt(string[1] + string[2]));
            }
        } else {
            //else number is 1000
            sum += 10;
        }
    }

    return sum
}

function findOnes(num) {
    let ones = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    return ones[num].length;
}

function findTens(num) {
    let sum = 0;
    let string;

    let tens = {
        1: 'ten',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (num < 20) {
        sum = tens[num].length;
    } else if (num < 100) {
        string = num.toString();

        if (string[1] === '0') {
            sum = tens[num].length;
        } else {
            sum = tens[parseInt(string[0] + '0')].length + findOnes(parseInt(string[1]))
        }
    }

    return sum;
}

function findHundreds(num) {
    let sum = 0;
    let string = num.toString();

    if (string[1] === '0' && string[2] === '0') {
        sum = findOnes(parseInt(string[0])) + 7;
    } else if (num < 110 || num < 210 || num < 310 || num < 410 || num < 510 || num < 610 || num < 710 || num < 810 || num < 910) {
        sum = findOnes(parseInt(string[0])) + 10 + findOnes(parseInt(string[2]));
    } else {
        sum = findOnes(parseInt(string[0])) + 10 + findTens(parseInt(string[1] + string[2]));
    }

    return sum;
}

// console.log(findHundreds(101))
console.log(numLetterCnts(1000));