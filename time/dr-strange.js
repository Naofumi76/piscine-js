function addWeek(date) {
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"]
    var baseDate = new Date('0001-01-01')
    var nbDays = Math.floor((new Date(date) - baseDate) / (1000 * 60 * 60 * 24))
    var dayOfWeek = nbDays%14
    return weekDays[dayOfWeek]
}

function timeTravel({date, hour, minute, second}) {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}

console.log(addWeek('0001-01-01'))
console.log(addWeek('0001-01-02'))
console.log(addWeek('0001-01-07'))
console.log(addWeek('0001-01-08'))
console.log(addWeek('0001-01-09'))

console.log(timeTravel({  date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString())