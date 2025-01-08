function multiply(x1, x2) {
    if (typeof x1 !== 'number' || typeof x2 !== 'number') {
        throw new Error('Argument must be a number');
    }
    if (x1 === 0 || x2 === 0) {
        return 0;
    }
    let oneNegative = (x1 < 0) !== (x2 < 0);
    x1 = Math.abs(x1);
    x2 = Math.abs(x2);
    let result = 0;
    for (let i = 0; i < x2; i++) {
        result += x1;
    }
    return oneNegative ? -result : result;
}

function divide(x1, x2) {
    if (typeof x1 !== 'number' || typeof x2 !== 'number') {
        throw new Error('Argument must be a number');
    }
    if (x2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    let negativeResult = (x1 < 0) !== (x2 < 0);
    x1 = Math.abs(x1);
    x2 = Math.abs(x2);
    let quotient = 0;
    while (x1 >= x2) {
        x1 -= x2;
        quotient++;
    }
    return negativeResult ? -quotient : quotient;
}

function modulo(x1, y) {
    if (typeof x1 !== 'number' || typeof y !== 'number') {
        throw new Error('Argument must be a number');
    }
    if (y === 0) {
        throw new Error('Cannot divide by zero');
    }
    let remainder = x1 - multiply(divide(x1, y), y);
    // Ensure the remainder matches the sign of the dividend
    if (x1 < 0 && remainder > 0) {
        remainder -= Math.abs(y);
    } else if (x1 > 0 && remainder < 0) {
        remainder += Math.abs(y);
    }
    return remainder;
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