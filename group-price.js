function groupPrice(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    // Regex to get the price name (3 letters), all number before comma, and 2 number after comma
    var regexFullPrice = /([A-Z]{3})(\d+)\.(\d{2})/g
    var tab2d = []
    var matches = str.matchAll(regexFullPrice)
    if (!matches) {
        return []
    }
    for (match of matches) {
        tab2d.push([match[0], match[2], match[3]])
    }
    return tab2d
}

console.log(groupPrice('USD123.45'))