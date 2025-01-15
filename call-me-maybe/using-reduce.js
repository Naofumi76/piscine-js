function adder(arr, i=0) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.reduce((acc, val) => acc + val, i)
}
console.log(adder([1, 2, 3, 4, 5])) // -> 15

function sumOrMul(arr, i=0) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    const result = arr.reduce((acc, val) => val%2 == 0 ? acc * val : acc + val, i)
    return result
}

console.log(sumOrMul([1, 2, 3, 4, 5])) // -> 25


function funcExec(arr, i=0) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.reduce((acc, func) => func(acc), i)
}

const add5 = (x) => x + 5;
const divideBy2 = (x) => x / 2;
const square = (x) => x * x;
let funcArr = [add5, divideBy2, square]

console.log(funcExec(funcArr)) // 6.25
console.log(funcExec(funcArr, 3)) // 16