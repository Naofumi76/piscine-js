// Abs
console.log('---------- Abs ----------')

function isPositive(x) {
    if (typeof x!== 'number') {
        throw new Error('Input must be a number')
    }
    return x > 0
}

function abs(x) {
    if (isPositive(x)) {
        return x
    } else {
        return -x
    }
}

//console.log(isPositive('test'))
console.log(isPositive(123))
console.log(isPositive(-456))
//console.log(abs('test'))
console.log(abs(123))
console.log(abs(-456))