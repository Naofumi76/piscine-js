function isPositive(x) {
    if (typeof x!== 'number') {
        throw new Error('Input must be a number')
    }
    return x > 0
}

function abs(x) {
    if ((x === 0) || (x === -0)) {
        return 0
    }
    if (isPositive(x)) {
        return x
    } else {
        return -x
    }
}