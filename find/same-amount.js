function sameAmount(str, reg1, reg2) {
    if (typeof str !== 'string' || !(reg2 instanceof RegExp) || !(reg1 instanceof RegExp)) {
        throw new Error('Input must contain a string and two RegExp');
    }
    const newReg1 = new RegExp(reg1.source, 'g')
    const newReg2 = new RegExp(reg2.source, 'g')
    let test1 = str.match(newReg1)
    let count1, count2
    let test2 = str.match(newReg2)
    if (test1) {
        count1 = test1.length
    }
    if (test2) {
        count2 = test2.length
    }
    return count1 === count2
}