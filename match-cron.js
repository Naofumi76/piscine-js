function matchCron(cron, date) {
    const cronParts = cron.split(' ');
    const schedule = {
        minute: parseInt(cronParts[0]),
        hour: parseInt(cronParts[1]),
        dayOfMonth: parseInt(cronParts[2]),
        month: parseInt(cronParts[3]),
        dayOfWeek: parseInt(cronParts[4]),
    }
    const scheduleDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), schedule.hour, schedule.minute);
    return scheduleDate.toString() === date.toString();
}