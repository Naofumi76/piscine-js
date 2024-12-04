// Get Some Time
console.log('---------- Get Some Time ----------')
console.log('Exercise not resolved, here is the problem : ')
console.log('!!! PROBLEM !!!: The function correctly returns a monday date. However, the function does not return the first day of the year if nbWeek = 1, and that the monday is not in the strYear year.')
function firstDayWeek(nbWeek, strYear) {
    if (typeof strYear !== 'string' || typeof nbWeek !== 'number') {
        throw new Error('The week must be a number and the year must be a string')
    }
    let date = new Date(strYear, 0, 1)
    let day = date.getDay()
    let dayUntilMonday = (day ===0) ? 1 : (7 - day + 1) % 7

    date.setDate(date.getDate() + dayUntilMonday)
    

    let firstDayWeek = new Date(date)
    firstDayWeek.setDate(firstDayWeek.getDate() + 7 * (nbWeek - 1))


    day = firstDayWeek.getDate().toString().padStart(2, '0')
    let month = (firstDayWeek.getMonth()+1).toString().padStart(2, '0')
    let year = firstDayWeek.getFullYear()

    return `${day}/${month}/${year}`
}

console.log(firstDayWeek(1, '2022'))
console.log(firstDayWeek(2, '2022'))
console.log(firstDayWeek(3, '2022'))