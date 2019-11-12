// https://projecteuler.net/problem=16
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000 ?

function powerDigitSum(base, exp) {
    let value = BigInt(Math.pow(base, exp))
    let str = value.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    return sum;
}

console.log(powerDigitSum(2, 1000))