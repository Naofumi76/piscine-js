function format(date, formatStr) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    return formatStr.replace("YYYY", year)
       .replace("MM", month)
       .replace("DD", day)
       .replace("HH", hour)
       .replace("mm", minute)
       .replace("ss", second);
}

const d = new Date('7 January 1985, 3:08:19')
console.log(format(d, 'HH(mm)ss [dd] <MMM>')) // -> '03(08)19 [07] <Jan>'