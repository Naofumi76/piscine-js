function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime())
    }
    if (typeof date === 'number') {
        return !isNaN(new Date(date).getTime())
    }
    return false
}

console.log(isValid(new Date('')))
console.log(isValid(Date.now()))

function isAfter(date1, date2) {
    if (!isValid(date1) ||!isValid(date2)) {
        return false
    }
    return date1 > date2
}

console.log(isAfter(2))

function isBefore(date1, date2) {
    if (!isValid(date1) ||!isValid(date2)) {
        return false
    }
    return date1 < date2
}

function isFuture(date1) {
    if (!isValid(date1)) {
        return false
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
        return false
    }
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()

    currentDate = new Date(year, month, day)
    return date1 < currentDate
}