// https://projecteuler.net/problem=19
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

function getSundays() {
    let sundays = 0;
    let current = new Date('January 1 1901')
    let end = new Date('December 31 2000')
    while (current <= end) {
        if (current.getDate() === 1 && current.getDay() === 0) sundays++;
        current.setDate(current.getDate() + 1);
    }

    return sundays
}

console.log(getSundays());