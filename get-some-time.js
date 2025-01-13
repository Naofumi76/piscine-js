function formatDate(date, year) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}-${month}-${year}`;
}

function firstDayWeek(weekNumber, year) {
    const janFirst = new Date(`${year}-01-01`);
    const janFirstDay = janFirst.getDay();
    const offsetToMonday = (janFirstDay === 0 ? 6 : janFirstDay - 1);
    const firstMonday = new Date(janFirst);
    firstMonday.setDate(janFirst.getDate() - offsetToMonday);
    const desiredWeekStart = new Date(firstMonday);
    desiredWeekStart.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);
    if (desiredWeekStart.getFullYear() < parseInt(year)) {
        return formatDate(janFirst, year);
    }
    return formatDate(desiredWeekStart,year);
}

console.log(firstDayWeek('2', '0001'))