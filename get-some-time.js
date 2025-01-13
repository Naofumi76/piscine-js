function firstDayWeek(nbWeek, strYear) {
    if (typeof strYear !== 'string' || typeof nbWeek !== 'number') {
        return
    }
    if (nbWeek <= 0 || nbWeek > 53) {
        return
    }
    let date = new Date(strYear, 0, 1)
    let day = date.getDay()
    let dayUntilMonday = (day ===0) ? 1 : (7 - day + 1) % 7

    date.setDate(date.getDate() + dayUntilMonday)
    

    let firstDayWeek = new Date(date)
    if (nbWeek === 1 && firstDayWeek.getFullYear() !== parseInt(strYear)) {
        return `01-01-${strYear}`
    }
    firstDayWeek.setDate(firstDayWeek.getDate() + 7 * (nbWeek - 1))

    // using padStart allow to add '0' before the day/month string if the day/month's digit is only one character
    day = firstDayWeek.getDate().toString().padStart(2, '0')
    let month = (firstDayWeek.getMonth()+1).toString().padStart(2, '0')
    let year = firstDayWeek.getFullYear()

    return `${day}-${month}-${year}`
}

console.log(firstDayWeek(1, '1000'))
console.log(firstDayWeek(1, '2022'))
console.log(firstDayWeek(2, '2022'))
console.log(firstDayWeek(3, '2022'))