function letterSpaceNumber(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    var reg = /([a-zA-Z] [0-9])(?![0-9a-zA-Z])/g
    const tab = str.match(reg)
    if (!tab) {
        return []
    }
    return tab
}

console.log(letterSpaceNumber('example 1, example 20'))