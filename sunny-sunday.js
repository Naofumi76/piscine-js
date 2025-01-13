function sunnySunday(date) {
    let day = date.getDay();
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (day === 0) {
        return "Monday"
    }
    return weekdays[day - 1]
}
console.log(sunnySunday(new Date('0001-01-01')))
console.log(sunnySunday(new Date('0001-01-06')))
console.log(sunnySunday(new Date('0001-01-07')))
console.log(sunnySunday(new Date('0001-01-08')))
console.log(sunnySunday(new Date('0001-01-09')))