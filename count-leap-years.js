function countLeapYears(date) {
    if (!(date instanceof Date)) {
        throw new Error('Input must be a Date object');
    }

    let currentYear = date.getFullYear()

    let leapYears = Math.floor(currentYear / 4) - Math.floor(currentYear / 100) + Math.floor(currentYear / 400)
    return leapYears
}

console.log(countLeapYears(new Date('2000-01-01')));
console.log(countLeapYears(new Date('2024-01-01')));
console.log(countLeapYears(new Date('0001-01-01')));