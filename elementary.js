// Elementary
console.log('---------- Elementary ----------')

function multiply(x1, x2) {
    if (typeof x1 !== 'number' || typeof x2 !== 'number') {
        throw new Error('Argument must be a number')
    }
    let oneNegative = (x1 < 0) || (x2 < 0) 
    if (x1 < 0 && x2 < 0) {
        oneNegative = false
    }
    let vari = 1
    x1 = Math.abs(x1)
    x2 = Math.abs(x2)
    let result = x1
    while (vari < x2) {
        vari++
        result += x1
    }
    if (oneNegative) {
        return -result
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
    let sign = (x1 < 0) || (x2 < 0) 
    x1 = Math.abs(x1)
    x2 = Math.abs(x2)
    let quotient = 0
    while (x1 >= x2) {
        x1 -= x2
        quotient++
    }
    if (x1 === 0 ) {
        return 0
    }
    if (sign) {
        return -quotient
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
    let product = multiply(quotient, y)
    let remainder = x1 - product

    if (y > 0 && remainder < 0) {
        remainder += Math.abs(y)
    }
    if (y < 0 && remainder > 0) {
        remainder -= Math.abs(y)
    }
    return remainder
}

console.log(multiply(10, 5))
console.log(multiply(-10, 5))
console.log(divide(10, 5))
console.log(divide(-10, 5))
console.log("Problem here :")
console.log('divide(10, -3) : ', divide(10, -3))
console.log('10%-3 : ', 10%-3)
console.log('divide(-10, -3) : ', divide(-10, -3))
console.log('-10%-3 : ', -10%-3)
// console.log(divide(10, 0))
console.log(modulo(10, 3))
console.log("Problem here :")
console.log('modulo(5-3) : ', modulo(5, -3))
console.log('5%-3 : ', 5%-3)
console.log(modulo(-3, -5))
console.log(-3%-5)