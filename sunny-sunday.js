function sunnySunday(date) {
    const year = date.getFullYear();
    const sunrise = new Date(year, 0, 6, 6, 45);
    const sunset = new Date(year, 11, 21, 18, 15);

    return date.getTime() > sunrise.getTime() && date.getTime() < sunset.getTime();
}