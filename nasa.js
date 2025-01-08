function nasa(N) {
    var str = ""
    for (var i = 1; i <= N; i++) {
        if (i%3 === 0 && i%5 ===0) {
            str += "NASA "
        } else if (i%3 === 0) {
            str += "NA "
        } else if (i%5 === 0) {
            str += "SA "
        } else {
            if (Number(i) != N) {
                str += String(i)+ " "
            } else {
                str+= String(i)
            }
        }
    }
    str = str.substring(0, str.length-1)
    return str
}


console.log(nasa(15))