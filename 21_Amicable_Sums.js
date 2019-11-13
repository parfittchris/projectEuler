// https://projecteuler.net/problem=21

// Let d(n) be defined as the sum of proper divisors of n(numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.


// n is largest number
function sumAPairs(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let tempSum1 = factorSum(i);
        let tempSum2 = factorSum(tempSum1);

        if (tempSum2 === i && tempSum2 !== tempSum1) {
            sum += tempSum1
        };
    }

    return sum;
}

function factorSum(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }

    return sum;
}


console.log(sumAPairs(10000))