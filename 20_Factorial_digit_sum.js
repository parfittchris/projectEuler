// https://projecteuler.net/problem=20
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//     and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!


//Where n is starting number

function findFactSum(n) {
    let sum = 0;
    let maxNum = BigInt(recurse(n)).toString()
    function recurse(n) {
        if (n === 1) return 1;
        return n * recurse(n - 1)
    }

    for (let i = 0; i < maxNum.length; i++) {
        sum += parseInt(maxNum[i]);
    }

    return sum;
}

console.log(findFactSum(100))