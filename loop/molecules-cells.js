function RNA(str) {
    var result = ""
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'G') {
            result += 'C'
        } else if (str.charAt(i) == 'C') {
            result += 'G'
        } else if (str.charAt(i) == 'T') {
            result += 'A'
        } else if (str.charAt(i) == 'A') {
            result += 'U'
        }
    }
    return result
}

function DNA(str) {
    var result = ""
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'C') {
            result += 'G'
        } else if (str.charAt(i) == 'G') {
            result += 'C'
        } else if (str.charAt(i) == 'A') {
            result += 'T'
        } else if (str.charAt(i) == 'U') {
            result += 'A'
        }
    }
    return result
}
/*
console.log(RNA('ATCG'))
console.log(DNA('UAGC'))
*/