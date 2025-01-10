function sameAmount(str, reg1, reg2) {
    if (typeof str !== 'string' || !(reg2 instanceof RegExp) || !(reg1 instanceof RegExp)) {
        throw new Error('Input must contain a string and two RegExp');
    }
    let test1 = str.match(reg1)
    let count1 = 0
    let test2 = str.match(reg2)
    let count2 = 0
    if (test1) {
        count1 = test1.length
    }
    if (test2) {
        count2 = test2.length
    }
    return count1 === count2
}