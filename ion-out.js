function ionOut(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    var reg = /(?<=t)(\w*?)ion/
    var tab = []
    arrStr = str.split(' ')
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].match(reg)) {
            tab.push(arrStr[i].replace('ion', ''))
        }
    }
    return tab
}