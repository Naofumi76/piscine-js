function sign(x) {
    if (typeof x!== 'number') {
        throw new Error('Input must be a number')
    }
    if (x === 0) {
        return 0
    } else if (x > 0) {
        return 1
    } else {
        return -1
    }
}

function sameSign(x1, x2) {
    if (typeof x1!== 'number' || typeof x2!== 'number') {
        throw new Error('Inputs must be numbers')
    }
    return sign(x1) === sign(x2)
}