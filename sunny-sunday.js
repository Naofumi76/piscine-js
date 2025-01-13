function sunnySunday(date) {
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var baseDate = new Date('0001-01-01')
    var nbDays = Math.floor((new Date(date) - baseDate) / (1000 * 60 * 60 * 24))
    var dayOfWeek = nbDays%6
    return weekDays[dayOfWeek]
}

console.log(sunnySunday(new Date('0001-12-01')))
console.log(sunnySunday(new Date('0001-01-01')))
console.log(sunnySunday(new Date('0001-01-06')))
console.log(sunnySunday(new Date('0001-01-07')))
console.log(sunnySunday(new Date('0001-01-08')))
console.log(sunnySunday(new Date('0001-01-09')))