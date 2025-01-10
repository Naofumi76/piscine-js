function groupPrice(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    // Regex to get the price name (3 letters) OR money symbol, all number before comma, and 2 number after comma (/u allow to use unicode characters like '$')
    var regexFullPrice = /([A-Z]{3}|([\p{Sc}]))(\d+)\.(\d{2})/gu
    var tab2d = []
    var matches = str.matchAll(regexFullPrice)
    if (!matches) {
        return []
    }
    for (var match of matches) {
        tab2d.push([match[0], match[3], match[4]])
    }
    return tab2d
}

console.log(groupPrice('The price of the cereals is $4.00.'))
console.log(groupPrice('USD4.20'))