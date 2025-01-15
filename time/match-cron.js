function matchCron(cron, date) {
    date = new Date(date);
    if (isNaN(date.getTime())) {
      return false;
    }
  
    const cronParts = cron.split(" ");
    if (cronParts.length !== 5) {
        return false;
    }

    const schedule = {
        minute: cronParts[0] === "*" ? date.getMinutes() : parseInt(cronParts[0]),
        hour: cronParts[1] === "*" ? date.getHours() : parseInt(cronParts[1]),
        dayOfMonth: cronParts[2] === "*" ? date.getDate() : parseInt(cronParts[2]),
        month: cronParts[3] === "*" ? date.getMonth() : parseInt(cronParts[3]) - 1,
        dayOfWeek: cronParts[4] === "*" ? date.getDay() : parseInt(cronParts[4]),
    }
  
    const matches = (cronPart, datePart) => {
        return cronPart === "*" || parseInt(cronPart) === datePart;
    }
    return (
        matches(cronParts[0], date.getMinutes()) &&
        matches(cronParts[1], date.getHours()) &&
        matches(cronParts[2], date.getDate()) &&
        matches(cronParts[3], date.getMonth() + 1) &&
        matches(cronParts[4], date.getDay() === 0 ? 7 : date.getDay())
    )
}

function matches(cronPart, datePart){
    return cronPart === "*" || parseInt(cronPart) === datePart
}
  
console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));  // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')))  // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))  // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))  // false