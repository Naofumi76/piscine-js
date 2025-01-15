function ionOut(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    var reg = /(\w*?)tion/
    var tab = []
    var arrStr = str.split(' ')
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].match(reg)) {
            var wordOnly = arrStr[i].replace(/[^a-zA-Z]/g, '')
            tab.push(wordOnly.replace('ion', ''))
        }
    }
    return tab
}

console.log(ionOut('transfusion'))
console.log(ionOut('test reaction mange'))