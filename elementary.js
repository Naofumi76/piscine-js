// Elementary
console.log('---------- Elementary ----------')

function multiply(x1, x2) {
    if (typeof x1 !== 'number' || typeof x2 !== 'number') {
        throw new Error('Argument must be a number')
    }
    let vari = 1
    let result = x1
    while (vari < x2) {
        vari++
        result += x1
    }
    return result
}

function divide(x1, x2) {
    if (typeof x1!== 'number' || typeof x2!== 'number') {
        throw new Error('Argument must be a number')
    }
    if (x2 === 0) {
        throw new Error('Cannot divide by zero')
    }
    let quotient = 0
    while (x1 >= x2) {
        x1 -= x2
        quotient++
    }
    return quotient
}

function modulo(x1, y) {
    if (typeof x1!== 'number' || typeof y!== 'number') {
        throw new Error('Argument must be a number')
    }
    if (y === 0) {
        throw new Error('Cannot divide by zero')
    }
    let quotient = divide(x1, y)
    let remainder = x1 - multiply(quotient,y)
    return remainder
}

console.log(multiply(10, 5))
console.log(divide(10, 5))
// console.log(divide(10, 0))
console.log(modulo(10, 3))
// console.log(divide(10, 0))