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