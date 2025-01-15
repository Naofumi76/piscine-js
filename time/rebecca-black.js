function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    return date.getDay() >= 5 && date.getDay() <= 7
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate.getDate() === 1;
}