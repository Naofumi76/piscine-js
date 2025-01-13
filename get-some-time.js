function firstDayWeek(nbWeek, strYear) {
    if (typeof strYear !== 'string' || typeof nbWeek !== 'number') {
        return;
    }

    if (nbWeek <= 0 || nbWeek > 53) {
        return;
    }

    var year = parseInt(strYear, 10);
    var janFirst = new Date(`${year}-01-01`);
    var janFirstDay = janFirst.getDay();
    var offsetToMonday = (janFirstDay === 0 ? 6 : janFirstDay - 1);
  
    var firstMonday = new Date(janFirst);
    firstMonday.setDate(janFirst.getDate() - offsetToMonday);

    var desiredWeekStart = new Date(firstMonday);
    desiredWeekStart.setDate(firstMonday.getDate() + (nbWeek - 1) * 7);
  
    if (nbWeek === 1 && desiredWeekStart.getFullYear() < year) {
        var day = String(janFirst.getDate()).padStart(2, '0');
        var month = String(janFirst.getMonth() + 1).padStart(2, '0');
        return `${day}-${month}-${strYear}`;
    }
    var day = String(desiredWeekStart.getDate()).padStart(2, '0');
    var month = String(desiredWeekStart.getMonth() + 1).padStart(2, '0');
    year = desiredWeekStart.getFullYear();

    return `${day}-${month}-${year}`;
}

console.log(firstDayWeek(1, '1000'))
console.log(firstDayWeek(1, '2022'))
console.log(firstDayWeek(2, '2022'))
console.log(firstDayWeek(3, '2022'))