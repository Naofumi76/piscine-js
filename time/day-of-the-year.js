function dayOfTheYear(date) {
    if (!(date instanceof Date)) {
        throw new Error('Input must be a Date object')
    }

    let currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    let firstOfYear = new Date(date.getFullYear(), 0, 1)

    let days = (currentDate - firstOfYear) / (1000 * 60 * 60 * 24)
    return Math.floor(days) + 1
}

console.log(dayOfTheYear(new Date('2022-02-01')))
console.log(dayOfTheYear(new Date('2022-12-31')))
console.log(dayOfTheYear(new Date('2022-01-05')))