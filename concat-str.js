function concatStr(str1, str2) {
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        return str1 + str2
    } else {
        throw new Error('Input must be two strings')
    }
}