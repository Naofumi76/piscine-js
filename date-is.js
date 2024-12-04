// Date Is
console.log('---------- Date Is ----------')

function isValid(date) {
    if (!(date instanceof Date)) {
        return false
    }
    return true
}

function isAfter(date1, date2) {
    if (!isValid(date1) ||!isValid(date2)) {
        throw new Error('Invalid date')
    }
    return date1 > date2
}

function isBefore(date1, date2) {
    if (!isValid(date1) ||!isValid(date2)) {
        throw new Error('Invalid date')
    }
    return date1 < date2
}

function isFuture(date1) {
    if (!isValid(date1)) {
        throw new Error('Invalid date')
    }
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()

    currentDate = new Date(year, month, day)
    return date1 > currentDate
}

function isPast(date1) {
    if (!isValid(date1)) {
        throw new Error('Invalid date')
    }
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()

    currentDate = new Date(year, month, day)
    return date1 < currentDate
}

console.log(isValid(new Date('2022-01-01')))
console.log(isValid('2022-01-01'))
console.log(isAfter(new Date('2022-01-01'), new Date('2021-12-31')))
console.log(isBefore(new Date('2023-01-01'), new Date('2022-02-01')))
console.log(isFuture(new Date('2028-01-01')))
console.log(isPast(new Date('2022-01-01')))